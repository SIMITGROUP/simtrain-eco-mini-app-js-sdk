# MobileAppUser

## Properties

| Name          | Type                                                           | Description | Notes                             |
| ------------- | -------------------------------------------------------------- | ----------- | --------------------------------- |
| **\_id**      | **string**                                                     |             | [optional] [default to undefined] |
| **email**     | **string**                                                     |             | [default to undefined]            |
| **created**   | **string**                                                     |             | [optional] [default to undefined] |
| **updated**   | **string**                                                     |             | [optional] [default to undefined] |
| **createdBy** | **string**                                                     |             | [optional] [default to undefined] |
| **updatedBy** | **string**                                                     |             | [optional] [default to undefined] |
| **tenantId**  | **number**                                                     |             | [optional] [default to undefined] |
| **orgId**     | **number**                                                     |             | [optional] [default to undefined] |
| **branchId**  | **number**                                                     |             | [optional] [default to undefined] |
| **tokens**    | [**Array&lt;MobileAppUserTokens&gt;**](MobileAppUserTokens.md) |             | [optional] [default to undefined] |

## Example

```typescript
import { MobileAppUser } from "./api";

const instance: MobileAppUser = {
  _id,
  email,
  created,
  updated,
  createdBy,
  updatedBy,
  tenantId,
  orgId,
  branchId,
  tokens,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
