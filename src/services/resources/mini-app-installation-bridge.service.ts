/**
 * This file was automatically generated by simpleapp generator. Every
 * MODIFICATION OVERRIDE BY GENERATEOR
 * last change 2025-06-18
 * Author: --
 */

import { MiniAppApiListParam } from "../../types/bridge.type";
import { MiniAppBridgeService } from "../bridge.service";

export class MiniAppMiniAppInstallationBridgeService {
  private bridge: MiniAppBridgeService;

  private resourceName = "miniAppInstallation";

  constructor(bridge: MiniAppBridgeService) {
    this.bridge = bridge;
  }

  async detail(id: string) {
    return this.bridge.callApi(this.resourceName, "detail", { id });
  }

  openOnScreenForm(id?: string) {
    this.bridge.openOnScreenResourceForm(this.resourceName, {
      id,
    });
  }
}
