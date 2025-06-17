export class SdkResourceCoreService {
  private pendingRequests: Record<
    string,
    { resolve: (data: any) => void; reject: (err: any) => void }
  > = {};

  constructor() {
    if (typeof window !== "undefined") {
      window.addEventListener("message", (event) => {
        const message = event.data as any;
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

  openOnScreenForm(resource: string, params: { id?: string; body?: any } = {}) {
    window.parent.postMessage(
      {
        type: "ON_SCREEN_FORM",
        resource: { name: resource, id: params.id },
        body: params.body,
      },
      "*"
    );
  }
}
