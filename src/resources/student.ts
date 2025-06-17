import { SdkResourceCoreService } from "../core";

export class StudentService {
  private core: SdkResourceCoreService;

  private resourceName = "student";

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

  async delete(id: string) {
    return this.core.callApi(this.resourceName, "delete", { id });
  }

  async autocomplete(query: string, data: any) {
    return this.core.callApi(this.resourceName, "autocomplete", {
      query,
      body: data,
    });
  }

  async getStudentSummary(id: string, data: any) {
    // a2278689-7812-425d-a604-de27322cc2c1
    return this.core.callApi(this.resourceName, "getStudentSummary", {
      id: "a2278689-7812-425d-a604-de27322cc2c1",
      body: data,
    });
  }

  openOnScreenForm(id?: string) {
    this.core.openOnScreenForm(this.resourceName, {
      id,
    });
  }
}
