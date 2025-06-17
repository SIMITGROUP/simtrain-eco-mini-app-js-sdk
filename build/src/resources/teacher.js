export class TeacherService {
    core;
    resourceName = "teacher";
    constructor(core) {
        this.core = core;
    }
    async list() {
        return this.core.callApi(this.resourceName, "list");
    }
    async detail(id) {
        return this.core.callApi(this.resourceName, "detail", { id });
    }
    async create(data) {
        return this.core.callApi(this.resourceName, "create", { body: data });
    }
    async update(id, data) {
        return this.core.callApi(this.resourceName, "update", { id, body: data });
    }
    async patch(id, data) {
        return this.core.callApi(this.resourceName, "patch", { id, body: data });
    }
}
