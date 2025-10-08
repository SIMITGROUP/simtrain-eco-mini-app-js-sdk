# Webhook

## Properties

| Name               | Type                                                 | Description | Notes                             |
| ------------------ | ---------------------------------------------------- | ----------- | --------------------------------- |
| **\_id**           | **string**                                           |             | [optional] [default to undefined] |
| **created**        | **string**                                           |             | [optional] [default to undefined] |
| **updated**        | **string**                                           |             | [optional] [default to undefined] |
| **createdBy**      | **string**                                           |             | [optional] [default to undefined] |
| **updatedBy**      | **string**                                           |             | [optional] [default to undefined] |
| **tenantId**       | **number**                                           |             | [optional] [default to undefined] |
| **orgId**          | **number**                                           |             | [optional] [default to undefined] |
| **branchId**       | **number**                                           |             | [optional] [default to undefined] |
| **title**          | **string**                                           |             | [default to undefined]            |
| **url**            | **string**                                           |             | [default to undefined]            |
| **requestMethod**  | **string**                                           |             | [optional] [default to undefined] |
| **authentication** | **string**                                           |             | [optional] [default to undefined] |
| **description**    | **string**                                           |             | [optional] [default to undefined] |
| **body**           | **string**                                           |             | [optional] [default to undefined] |
| **active**         | **boolean**                                          |             | [optional] [default to undefined] |
| **resourceName**   | **string**                                           |             | [optional] [default to undefined] |
| **eventType**      | **string**                                           |             | [optional] [default to undefined] |
| **jobType**        | **string**                                           |             | [optional] [default to undefined] |
| **retryAttemps**   | **number**                                           |             | [optional] [default to undefined] |
| **basicAuth**      | [**WebhookBasicAuth**](WebhookBasicAuth.md)          |             | [optional] [default to undefined] |
| **headers**        | [**Array&lt;WebhookHeaders&gt;**](WebhookHeaders.md) |             | [optional] [default to undefined] |

## Example

```typescript
import { Webhook } from "./api";

const instance: Webhook = {
  _id,
  created,
  updated,
  createdBy,
  updatedBy,
  tenantId,
  orgId,
  branchId,
  title,
  url,
  requestMethod,
  authentication,
  description,
  body,
  active,
  resourceName,
  eventType,
  jobType,
  retryAttemps,
  basicAuth,
  headers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
