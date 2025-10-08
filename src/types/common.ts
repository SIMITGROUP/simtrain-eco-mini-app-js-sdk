export type AuditFields = {
  created: string;
  updated: string;
  createdBy: string;
  updatedBy: string;
  tenantId: string;
  orgId: string;
  branchId: string;
};

export type WithoutAudit<T> = Omit<T, keyof AuditFields>;

export type CreateResource<T> = Omit<WithoutAudit<T>, "_id">;

export type UpdateResource<T> = Omit<WithoutAudit<T>, "_id">;

export type PatchResource<T> = Partial<UpdateResource<T>>;
