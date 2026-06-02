import { MiniAppBridgeResourceAccessorBase } from "./bridge-resource-accessor-base.service";
import { MiniAppOnlinePaymentMerchantConfigBridgeService } from "./customs/online-payment-merchant-config-bridge.service";

export class MiniAppBridgeResourceAccessor extends MiniAppBridgeResourceAccessorBase {
  protected customInstances: Partial<{
    onlinePaymentMerchantConfig: MiniAppOnlinePaymentMerchantConfigBridgeService;
  }> = {};

  constructor() {
    super();
  }

  get onlinePaymentMerchantConfig() {
    if (!this.customInstances.onlinePaymentMerchantConfig) {
      this.customInstances.onlinePaymentMerchantConfig =
        new MiniAppOnlinePaymentMerchantConfigBridgeService(this.bridge);
    }
    return this.customInstances.onlinePaymentMerchantConfig;
  }
}
