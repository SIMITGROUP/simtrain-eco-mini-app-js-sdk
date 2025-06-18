import { MINI_APP_BRIDGE_MESSAGES } from "../constants/common.constant";
import {
  MiniAppBridgeMessageApi,
  MiniAppBridgeMessageApiResponse,
  MiniAppBridgeMessageOpenOnScreenResourceForm,
} from "../types/bridge.type";
import {
  MiniAppResourceServiceApiParam,
  MiniAppResourceServiceOpenOnScreenResourceFormParam,
} from "../types/service.type";

export class MiniAppBridgeService {
  private pendingRequests: Record<
    string,
    { resolve: (data: any) => void; reject: (err: any) => void }
  > = {};

  constructor() {
    if (typeof window !== "undefined") {
      window.addEventListener("message", (event) => {
        const message: MiniAppBridgeMessageApiResponse<any> = event.data;

        if (
          message.type === MINI_APP_BRIDGE_MESSAGES.API_RESPONSE &&
          message.requestId
        ) {
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
    params: MiniAppResourceServiceApiParam = {}
  ) {
    const requestId = crypto.randomUUID();

    // TODO: Type
    const requestMessage: MiniAppBridgeMessageApi<any> = {
      type: MINI_APP_BRIDGE_MESSAGES.API,
      requestId,
      params: {
        resource: { name: resource, id: params.id },
        action,
        query: params.query,
        body: params.body,
      },
    };

    const promise = new Promise<any>((resolve, reject) => {
      this.pendingRequests[requestId] = { resolve, reject };
    });

    window.parent.postMessage(requestMessage, "*");
    return promise;
  }

  openOnScreenResourceForm(
    resource: string,
    params: MiniAppResourceServiceOpenOnScreenResourceFormParam = {}
  ) {
    const message: MiniAppBridgeMessageOpenOnScreenResourceForm = {
      type: MINI_APP_BRIDGE_MESSAGES.OPEN_ON_SCREEN_RESOURCE_FORM,
      params: {
        resource: { name: resource, id: params.id },
        data: params.data,
      },
    };

    window.parent.postMessage(message, "*");
  }
}
