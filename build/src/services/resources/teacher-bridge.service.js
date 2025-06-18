export class MiniAppTeacherBridgeService {
    bridge;
    resourceName = "teacher";
    constructor(bridge) {
        this.bridge = bridge;
    }
    async list() {
        return this.bridge.callApi(this.resourceName, "list");
    }
    async detail(id) {
        return this.bridge.callApi(this.resourceName, "detail", { id });
    }
    async create(data) {
        return this.bridge.callApi(this.resourceName, "create", { body: data });
    }
    async update(id, data) {
        return this.bridge.callApi(this.resourceName, "update", { id, body: data });
    }
    async patch(id, data) {
        return this.bridge.callApi(this.resourceName, "patch", { id, body: data });
    }
    async delete(id) {
        return this.bridge.callApi(this.resourceName, "delete", { id });
    }
    async autocomplete(query, data) {
        return this.bridge.callApi(this.resourceName, "autoComplete", {
            query,
            body: data,
        });
    }
    openOnScreenForm(id) {
        this.bridge.openOnScreenResourceForm(this.resourceName, {
            id,
        });
    }
}
