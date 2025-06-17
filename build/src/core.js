export class SdkResourceCoreService {
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
    openOnScreenForm(resource, params = {}) {
        window.parent.postMessage({
            type: "ON_SCREEN_FORM",
            resource: { name: resource, id: params.id },
            body: params.body,
        }, "*");
    }
}
