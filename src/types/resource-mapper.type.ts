import { MiniAppStudentBridgeService } from "../services/resources/student-bridge.service";
import { MiniAppTeacherBridgeService } from "../services/resources/teacher-bridge.service";

export type MiniAppResourceMap = {
  student: MiniAppStudentBridgeService;
  teacher: MiniAppTeacherBridgeService;
};