import { SdkResourceCoreService } from "../core";

export class TeacherService {
  private core: SdkResourceCoreService;

  private resourceName = "teacher";

  constructor(core: SdkResourceCoreService) {
    this.core = core;
  }

  async list() {
    return this.core.callApi(this.resourceName, "list");
  }

  async detail(id: string) {
    return this.core.callApi(this.resourceName, "detail", { id });
  }

  async create(data: any) {
    return this.core.callApi(this.resourceName, "create", { body: data });
  }

  async update(id: string, data: any) {
    return this.core.callApi(this.resourceName, "update", { id, body: data });
  }

  async patch(id: string, data: any) {
    return this.core.callApi(this.resourceName, "patch", { id, body: data });
  }
}
