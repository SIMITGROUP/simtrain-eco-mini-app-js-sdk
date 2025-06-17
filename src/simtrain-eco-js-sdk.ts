// ==================== Base SDK ====================

import { StudentService } from "./resources/student";
import { SdkResourceCoreService } from "./core";
import { TeacherService } from "./resources/teacher";

export class SimtrainEcoJsSdk {
  private coreService: SdkResourceCoreService;
  private instances: Partial<ResourceMap> = {};

  shared = {
    navigateTo: (document: string, id?: string, query?: string) => {
      window.parent.postMessage(
        {
          type: "NAVIGATE",
          params: {
            document,
            id,
            query,
          },
        },
        "*"
      );
    },
  };

  constructor() {
    this.coreService = new SdkResourceCoreService();
    console.log("Hello from SimtrainEcoJsSdk !!!");
  }

  get student(): StudentService {
    if (!this.instances.student) {
      this.instances.student = new StudentService(this.coreService);
    }
    return this.instances.student;
  }

  get teacher(): TeacherService {
    if (!this.instances.teacher) {
      this.instances.teacher = new TeacherService(this.coreService);
    }
    return this.instances.teacher;
  }
}

// ==================== Shared core ====================

class SimtrainEcoCore {
  private pendingRequests: Record<
    string,
    { resolve: (data: any) => void; reject: (err: any) => void }
  > = {};

  constructor() {
    if (typeof window !== "undefined") {
      window.addEventListener("message", (event) => {
        const message = event.data as PluginAppResponseMessage;
        if (message.type === "API_RESPONSE" && message.requestId) {
          const handler = this.pendingRequests[message.requestId];
          if (!handler) return;

          if (message.success) {
            handler.resolve(message.data);
          } else {
            handler.reject(message.error);
          }

          delete this.pendingRequests[message.requestId];
        }
      });
    }
  }

  navigateTo(resource: PluginAppMessageResource, query?: string) {
    window.parent.postMessage(
      {
        type: "NAVIGATE",
        resource,
        query,
      },
      "*"
    );
  }

  async callApi(
    resource: string,
    action: string,
    params: { id?: string; query?: string; body?: any } = {}
  ): Promise<any> {
    const requestId = crypto.randomUUID();
    const requestMessage = {
      type: "API",
      requestId,
      resource: { name: resource, id: params.id },
      action,
      query: params.query,
      body: params.body,
    };

    const promise = new Promise<any>((resolve, reject) => {
      this.pendingRequests[requestId] = { resolve, reject };
    });

    window.parent.postMessage(requestMessage, "*");
    return promise;
  }
}

// ==================== Resource APIs ====================

class TeacherApi {
  private core: SimtrainEcoCore;
  constructor(core: SimtrainEcoCore) {
    this.core = core;
  }

  async getList() {
    return this.core.callApi("teacher", "list");
  }

  async getDetail(id: string) {
    return this.core.callApi("teacher", "detail", { id });
  }

  async create(data: any) {
    return this.core.callApi("teacher", "create", { body: data });
  }

  navigateToList() {
    this.core.navigateTo({ name: "teacher" });
  }
}

// ==================== Type helper ====================

type ResourceMap = {
  student: StudentService;
  teacher: TeacherService;
};

type PluginAppMessageResource = {
  name: string;
  id?: string;
};

type PluginAppMessageNavigateParam = {
  resource: PluginAppMessageResource;
  query?: string;
};

type PluginAppMessageNavigate = {
  type: "NAVIGATE";
} & PluginAppMessageNavigateParam;

type PluginAppMessageAPIParam = {
  resource: PluginAppMessageResource;
  action: "list" | "detail" | "create" | "update" | string;
  query?: string;
  body?: Record<string, any>;
};

type PluginAppMessageAPI = {
  type: "API";
} & PluginAppMessageAPIParam;

type PluginAppMessage = PluginAppMessageNavigate | PluginAppMessageAPI;

// Response message structure from parent
type PluginAppResponseMessage = {
  requestId: string;
  type: "API_RESPONSE";
  success: boolean;
  data?: any;
  error?: string;
};
