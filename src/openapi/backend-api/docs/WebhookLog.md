# WebhookLog

## Properties

| Name           | Type       | Description | Notes                             |
| -------------- | ---------- | ----------- | --------------------------------- |
| **\_id**       | **string** |             | [optional] [default to undefined] |
| **webHookId**  | **string** |             | [default to '']                   |
| **dataId**     | **string** |             | [default to '']                   |
| **created**    | **string** |             | [optional] [default to '']        |
| **updated**    | **string** |             | [optional] [default to '']        |
| **createdBy**  | **string** |             | [optional] [default to '']        |
| **updatedBy**  | **string** |             | [optional] [default to '']        |
| **tenantId**   | **number** |             | [optional] [default to 1]         |
| **orgId**      | **number** |             | [optional] [default to 1]         |
| **branchId**   | **number** |             | [optional] [default to 1]         |
| **title**      | **string** |             | [default to '']                   |
| **resource**   | **string** |             | [optional] [default to '']        |
| **actionName** | **string** |             | [optional] [default to '']        |
| **statusCode** | **number** |             | [optional] [default to 0]         |
| **status**     | **string** |             | [optional] [default to '']        |
| **body**       | **string** |             | [default to '']                   |
| **msg**        | **string** |             | [default to '']                   |

## Example

```typescript
import { WebhookLog } from "./api";

const instance: WebhookLog = {
  _id,
  webHookId,
  dataId,
  created,
  updated,
  createdBy,
  updatedBy,
  tenantId,
  orgId,
  branchId,
  title,
  resource,
  actionName,
  statusCode,
  status,
  body,
  msg,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
