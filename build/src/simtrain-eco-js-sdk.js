// ==================== Base SDK ====================
import { StudentService } from "./resources/student";
import { SdkResourceCoreService } from "./core";
import { TeacherService } from "./resources/teacher";
export class SimtrainEcoJsSdk {
    coreService;
    instances = {};
    shared = {
        navigateTo: (document, id, query) => {
            window.parent.postMessage({
                type: "NAVIGATE",
                params: {
                    document,
                    id,
                    query,
                },
            }, "*");
        },
    };
    constructor() {
        this.coreService = new SdkResourceCoreService();
        console.log("Hello from SimtrainEcoJsSdk !!!");
    }
    get student() {
        if (!this.instances.student) {
            this.instances.student = new StudentService(this.coreService);
        }
        return this.instances.student;
    }
    get teacher() {
        if (!this.instances.teacher) {
            this.instances.teacher = new TeacherService(this.coreService);
        }
        return this.instances.teacher;
    }
}
// ==================== Shared core ====================
class SimtrainEcoCore {
    pendingRequests = {};
    constructor() {
        if (typeof window !== "undefined") {
            window.addEventListener("message", (event) => {
                const message = event.data;
                if (message.type === "API_RESPONSE" && message.requestId) {
                    const handler = this.pendingRequests[message.requestId];
                    if (!handler)
                        return;
                    if (message.success) {
                        handler.resolve(message.data);
                    }
                    else {
                        handler.reject(message.error);
                    }
                    delete this.pendingRequests[message.requestId];
                }
            });
        }
    }
    navigateTo(resource, query) {
        window.parent.postMessage({
            type: "NAVIGATE",
            resource,
            query,
        }, "*");
    }
    async callApi(resource, action, params = {}) {
        const requestId = crypto.randomUUID();
        const requestMessage = {
            type: "API",
            requestId,
            resource: { name: resource, id: params.id },
            action,
            query: params.query,
            body: params.body,
        };
        const promise = new Promise((resolve, reject) => {
            this.pendingRequests[requestId] = { resolve, reject };
        });
        window.parent.postMessage(requestMessage, "*");
        return promise;
    }
}
// ==================== Resource APIs ====================
class TeacherApi {
    core;
    constructor(core) {
        this.core = core;
    }
    async getList() {
        return this.core.callApi("teacher", "list");
    }
    async getDetail(id) {
        return this.core.callApi("teacher", "detail", { id });
    }
    async create(data) {
        return this.core.callApi("teacher", "create", { body: data });
    }
    navigateToList() {
        this.core.navigateTo({ name: "teacher" });
    }
}
