# PaymentInvoices

## Properties

| Name            | Type                                                    | Description | Notes                             |
| --------------- | ------------------------------------------------------- | ----------- | --------------------------------- |
| **balance**     | **number**                                              |             | [default to undefined]            |
| **knockOffAmt** | **number**                                              |             | [default to undefined]            |
| **newBalance**  | **number**                                              |             | [default to undefined]            |
| **description** | **string**                                              |             | [optional] [default to undefined] |
| **created**     | **string**                                              |             | [optional] [default to undefined] |
| **updated**     | **string**                                              |             | [optional] [default to undefined] |
| **createdBy**   | **string**                                              |             | [optional] [default to undefined] |
| **updatedBy**   | **string**                                              |             | [optional] [default to undefined] |
| **\_id**        | **string**                                              |             | [optional] [default to undefined] |
| **invoice**     | [**PaymentInvoicesInvoice**](PaymentInvoicesInvoice.md) |             | [default to undefined]            |

## Example

```typescript
import { PaymentInvoices } from "./api";

const instance: PaymentInvoices = {
  balance,
  knockOffAmt,
  newBalance,
  description,
  created,
  updated,
  createdBy,
  updatedBy,
  _id,
  invoice,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
