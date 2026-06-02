# MiniAppInstallation

## Properties

| Name            | Type                                                                    | Description | Notes                             |
| --------------- | ----------------------------------------------------------------------- | ----------- | --------------------------------- |
| **\_id**        | **string**                                                              |             | [optional] [default to undefined] |
| **created**     | **string**                                                              |             | [optional] [default to undefined] |
| **updated**     | **string**                                                              |             | [optional] [default to undefined] |
| **createdBy**   | **string**                                                              |             | [optional] [default to undefined] |
| **updatedBy**   | **string**                                                              |             | [optional] [default to undefined] |
| **tenantId**    | **number**                                                              |             | [optional] [default to undefined] |
| **orgId**       | **number**                                                              |             | [optional] [default to undefined] |
| **branchId**    | **number**                                                              |             | [optional] [default to undefined] |
| **apiKey**      | **string**                                                              |             | [default to undefined]            |
| **isActive**    | **boolean**                                                             |             | [default to undefined]            |
| **seqNo**       | **number**                                                              |             | [optional] [default to undefined] |
| **miniApp**     | [**MiniAppInstallationMiniApp**](MiniAppInstallationMiniApp.md)         |             | [default to undefined]            |
| **miniApiUser** | [**MiniAppInstallationMiniApiUser**](MiniAppInstallationMiniApiUser.md) |             | [optional] [default to undefined] |
| **settings**    | **object**                                                              |             | [default to undefined]            |

## Example

```typescript
import { MiniAppInstallation } from "./api";

const instance: MiniAppInstallation = {
  _id,
  created,
  updated,
  createdBy,
  updatedBy,
  tenantId,
  orgId,
  branchId,
  apiKey,
  isActive,
  seqNo,
  miniApp,
  miniApiUser,
  settings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
