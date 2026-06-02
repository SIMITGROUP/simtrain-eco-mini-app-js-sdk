import { MiniAppBridgeService } from "../bridge.service";
import * as Schema from "../../openapi/backend-api";

export class MiniAppOnlinePaymentMerchantConfigBridgeService {
  private bridge: MiniAppBridgeService;

  private resourceName = "onlinePaymentMerchantConfig";

  constructor(bridge: MiniAppBridgeService) {
    this.bridge = bridge;
  }

  async configure(data: Schema.OnlinePaymentSetMerchantConfigBody) {
    return this.bridge.callApi<Schema.OnlinePaymentMerchantConfigResponse>(
      this.resourceName,
      "configure",
      {
        body: data,
      }
    );
  }

  async getStatus() {
    return this.bridge.callApi<Schema.OnlinePaymentMerchantConfigResponse>(
      this.resourceName,
      "getStatus",
      {}
    );
  }

  async remove() {
    return this.bridge.callApi<Schema.OnlinePaymentMerchantConfigResponse>(
      this.resourceName,
      "remove",
      {}
    );
  }
}
