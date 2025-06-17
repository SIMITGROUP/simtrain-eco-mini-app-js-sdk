export class StudentService {
    core;
    resourceName = "student";
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
    async delete(id) {
        return this.core.callApi(this.resourceName, "delete", { id });
    }
    async autocomplete(query, data) {
        return this.core.callApi(this.resourceName, "autocomplete", {
            query,
            body: data,
        });
    }
    async getStudentSummary(id, data) {
        // a2278689-7812-425d-a604-de27322cc2c1
        return this.core.callApi(this.resourceName, "getStudentSummary", {
            id: "a2278689-7812-425d-a604-de27322cc2c1",
            body: data,
        });
    }
    openOnScreenForm(id) {
        this.core.openOnScreenForm(this.resourceName, {
            id,
        });
    }
}
