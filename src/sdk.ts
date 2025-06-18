import { MINI_APP_BRIDGE_MESSAGES } from "./constants/common.constant";
import { MiniAppBridgeService } from "./services/bridge.service";
import { MiniAppStudentBridgeService } from "./services/resources/student-bridge.service";
import { MiniAppTeacherBridgeService } from "./services/resources/teacher-bridge.service";
import { MiniAppBridgeMessageNavigate } from "./types/bridge.type";
import { MiniAppResourceMap } from "./types/resource-mapper.type";

export class SimtrainEcoMiniAppJsSdk {
  //
  private bridge: MiniAppBridgeService;

  private instances: Partial<MiniAppResourceMap> = {};

  public ui = {
    navigateTo: (target: string, id?: string, query?: string) => {
      const message: MiniAppBridgeMessageNavigate = {
        type: MINI_APP_BRIDGE_MESSAGES.NAVIGATE,
        params: { target, id, query },
      };

      window.parent.postMessage(message, "*");
    },
  };

  constructor() {
    this.bridge = new MiniAppBridgeService();
    console.log("Hello from SimtrainEcoMiniAppJsSdk !!!");
  }

  get student(): MiniAppStudentBridgeService {
    if (!this.instances.student) {
      this.instances.student = new MiniAppStudentBridgeService(this.bridge);
    }
    return this.instances.student;
  }

  get teacher(): MiniAppTeacherBridgeService {
    if (!this.instances.teacher) {
      this.instances.teacher = new MiniAppTeacherBridgeService(this.bridge);
    }
    return this.instances.teacher;
  }
}
