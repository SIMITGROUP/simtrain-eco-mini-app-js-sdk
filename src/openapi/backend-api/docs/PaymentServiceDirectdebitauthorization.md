# PaymentServiceDirectdebitauthorization

## Properties

| Name                | Type                                                                                                                   | Description | Notes                             |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- | ----------- | --------------------------------- |
| **\_id**            | **string**                                                                                                             |             | [optional] [default to undefined] |
| **ddaId**           | **string**                                                                                                             |             | [default to undefined]            |
| **ddaRefNo**        | **string**                                                                                                             |             | [default to undefined]            |
| **status**          | **string**                                                                                                             |             | [default to undefined]            |
| **statusMessage**   | **string**                                                                                                             |             | [optional] [default to undefined] |
| **provider**        | **string**                                                                                                             |             | [default to undefined]            |
| **enrolmentLink**   | **string**                                                                                                             |             | [default to undefined]            |
| **requestDateTime** | **string**                                                                                                             |             | [optional] [default to undefined] |
| **source**          | **string**                                                                                                             |             | [optional] [default to undefined] |
| **additionalData**  | **object**                                                                                                             |             | [optional] [default to undefined] |
| **created**         | **string**                                                                                                             |             | [optional] [default to undefined] |
| **updated**         | **string**                                                                                                             |             | [optional] [default to undefined] |
| **createdBy**       | **string**                                                                                                             |             | [optional] [default to undefined] |
| **updatedBy**       | **string**                                                                                                             |             | [optional] [default to undefined] |
| **tenantId**        | **number**                                                                                                             |             | [optional] [default to undefined] |
| **orgId**           | **number**                                                                                                             |             | [optional] [default to undefined] |
| **branchId**        | **number**                                                                                                             |             | [optional] [default to undefined] |
| **requestData**     | [**PaymentServiceDirectdebitauthorizationRequestData**](PaymentServiceDirectdebitauthorizationRequestData.md)          |             | [default to undefined]            |
| **responses**       | [**Array&lt;PaymentServiceDirectdebitauthorizationResponses&gt;**](PaymentServiceDirectdebitauthorizationResponses.md) |             | [default to undefined]            |

## Example

```typescript
import { PaymentServiceDirectdebitauthorization } from "./api";

const instance: PaymentServiceDirectdebitauthorization = {
  _id,
  ddaId,
  ddaRefNo,
  status,
  statusMessage,
  provider,
  enrolmentLink,
  requestDateTime,
  source,
  additionalData,
  created,
  updated,
  createdBy,
  updatedBy,
  tenantId,
  orgId,
  branchId,
  requestData,
  responses,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
