# ProfileUserBranch

## Properties

| Name             | Type                                  | Description               | Notes                  |
| ---------------- | ------------------------------------- | ------------------------- | ---------------------- |
| **permissionId** | **string**                            |                           | [default to undefined] |
| **tenantId**     | **number**                            |                           | [default to undefined] |
| **orgId**        | **number**                            |                           | [default to undefined] |
| **branchId**     | **number**                            |                           | [default to undefined] |
| **groups**       | **Array&lt;string&gt;**               | List of user\&#39;s group | [default to undefined] |
| **branch**       | [**BranchMinInfo**](BranchMinInfo.md) |                           | [default to undefined] |
| **orgRecordId**  | **string**                            |                           | [default to undefined] |
| **xOrg**         | **string**                            |                           | [default to undefined] |

## Example

```typescript
import { ProfileUserBranch } from "./api";

const instance: ProfileUserBranch = {
  permissionId,
  tenantId,
  orgId,
  branchId,
  groups,
  branch,
  orgRecordId,
  xOrg,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
