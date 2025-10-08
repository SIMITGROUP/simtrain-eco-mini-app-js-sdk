# PaymentAutoComplete

## Properties

| Name             | Type                                    | Description | Notes                             |
| ---------------- | --------------------------------------- | ----------- | --------------------------------- |
| **\_id**         | **string**                              |             | [default to '']                   |
| **code**         | **string**                              |             | [default to '']                   |
| **label**        | **string**                              |             | [default to '']                   |
| **paymentDate**  | **string**                              |             | [optional] [default to undefined] |
| **student**      | [**PaymentStudent**](PaymentStudent.md) |             | [optional] [default to undefined] |
| **agent**        | [**PaymentAgent**](PaymentAgent.md)     |             | [optional] [default to undefined] |
| **paymentTotal** | **number**                              |             | [optional] [default to undefined] |

## Example

```typescript
import { PaymentAutoComplete } from "./api";

const instance: PaymentAutoComplete = {
  _id,
  code,
  label,
  paymentDate,
  student,
  agent,
  paymentTotal,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
