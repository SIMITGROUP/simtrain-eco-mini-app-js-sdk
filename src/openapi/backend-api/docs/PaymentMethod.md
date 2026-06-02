# PaymentMethod

## Properties

| Name                  | Type        | Description | Notes                             |
| --------------------- | ----------- | ----------- | --------------------------------- |
| **\_id**              | **string**  |             | [optional] [default to undefined] |
| **created**           | **string**  |             | [optional] [default to undefined] |
| **updated**           | **string**  |             | [optional] [default to undefined] |
| **createdBy**         | **string**  |             | [optional] [default to undefined] |
| **updatedBy**         | **string**  |             | [optional] [default to undefined] |
| **tenantId**          | **number**  |             | [optional] [default to undefined] |
| **orgId**             | **number**  |             | [optional] [default to undefined] |
| **branchId**          | **number**  |             | [optional] [default to undefined] |
| **paymentMethodCode** | **string**  |             | [default to undefined]            |
| **paymentMethodName** | **string**  |             | [default to undefined]            |
| **onlinePayment**     | **boolean** |             | [optional] [default to undefined] |
| **active**            | **boolean** |             | [optional] [default to undefined] |
| **description**       | **string**  |             | [optional] [default to undefined] |
| **more**              | **object**  |             | [optional] [default to undefined] |

## Example

```typescript
import { PaymentMethod } from "./api";

const instance: PaymentMethod = {
  _id,
  created,
  updated,
  createdBy,
  updatedBy,
  tenantId,
  orgId,
  branchId,
  paymentMethodCode,
  paymentMethodName,
  onlinePayment,
  active,
  description,
  more,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
