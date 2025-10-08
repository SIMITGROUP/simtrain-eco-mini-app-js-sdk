# UserContextInfo

## Properties

| Name               | Type                                                         | Description                                                  | Notes                  |
| ------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ---------------------- |
| **\_id**           | **string**                                                   |                                                              | [default to undefined] |
| **uid**            | **string**                                                   |                                                              | [default to undefined] |
| **sessionId**      | **string**                                                   |                                                              | [default to undefined] |
| **xOrg**           | **string**                                                   |                                                              | [default to undefined] |
| **tenantId**       | **number**                                                   |                                                              | [default to undefined] |
| **orgId**          | **number**                                                   |                                                              | [default to undefined] |
| **orgRecordId**    | **string**                                                   |                                                              | [default to undefined] |
| **branchId**       | **number**                                                   |                                                              | [default to undefined] |
| **branchRecordId** | **string**                                                   |                                                              | [default to undefined] |
| **branchCode**     | **string**                                                   |                                                              | [default to undefined] |
| **branchName**     | **string**                                                   |                                                              | [default to undefined] |
| **orgCode**        | **string**                                                   |                                                              | [default to undefined] |
| **orgName**        | **string**                                                   |                                                              | [default to undefined] |
| **timeZone**       | **string**                                                   |                                                              | [default to undefined] |
| **currency**       | **string**                                                   |                                                              | [default to undefined] |
| **country**        | **string**                                                   |                                                              | [default to undefined] |
| **offsetMinute**   | **number**                                                   |                                                              | [default to undefined] |
| **email**          | **string**                                                   |                                                              | [default to undefined] |
| **uName**          | **string**                                                   |                                                              | [default to undefined] |
| **fullName**       | **string**                                                   |                                                              | [default to undefined] |
| **groups**         | **Array&lt;string&gt;**                                      | List of user\&#39;s group in product                         | [default to undefined] |
| **roles**          | **Array&lt;string&gt;**                                      | List of task, or authority of the user can do                | [default to undefined] |
| **invites**        | [**Array&lt;ProfileUserInvites&gt;**](ProfileUserInvites.md) | Provide invitation id to user, to authorize join the tenant  | [default to undefined] |
| **branches**       | [**Array&lt;ProfileUserBranch&gt;**](ProfileUserBranch.md)   | List of branch the user can access in current tenant         | [default to undefined] |
| **tenantInfo**     | [**Tenant**](Tenant.md)                                      | List of task, or authority of the user can do                | [default to undefined] |
| **orgInfo**        | [**Organization**](Organization.md)                          | List of task, or authority of the user can do                | [default to undefined] |
| **branchInfo**     | [**Branch**](Branch.md)                                      | List of task, or authority of the user can do                | [default to undefined] |
| **moreProps**      | **object**                                                   | Store all the rest of useful fields regarding user or branch | [default to undefined] |

## Example

```typescript
import { UserContextInfo } from "./api";

const instance: UserContextInfo = {
  _id,
  uid,
  sessionId,
  xOrg,
  tenantId,
  orgId,
  orgRecordId,
  branchId,
  branchRecordId,
  branchCode,
  branchName,
  orgCode,
  orgName,
  timeZone,
  currency,
  country,
  offsetMinute,
  email,
  uName,
  fullName,
  groups,
  roles,
  invites,
  branches,
  tenantInfo,
  orgInfo,
  branchInfo,
  moreProps,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
