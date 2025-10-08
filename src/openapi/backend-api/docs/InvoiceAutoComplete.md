# InvoiceAutoComplete

## Properties

| Name             | Type                                    | Description | Notes                             |
| ---------------- | --------------------------------------- | ----------- | --------------------------------- |
| **\_id**         | **string**                              |             | [default to '']                   |
| **code**         | **string**                              |             | [default to '']                   |
| **label**        | **string**                              |             | [default to '']                   |
| **invoiceDate**  | **string**                              |             | [optional] [default to undefined] |
| **student**      | [**InvoiceStudent**](InvoiceStudent.md) |             | [optional] [default to undefined] |
| **agent**        | [**InvoiceAgent**](InvoiceAgent.md)     |             | [optional] [default to undefined] |
| **invoiceTotal** | **number**                              |             | [optional] [default to undefined] |

## Example

```typescript
import { InvoiceAutoComplete } from "./api";

const instance: InvoiceAutoComplete = {
  _id,
  code,
  label,
  invoiceDate,
  student,
  agent,
  invoiceTotal,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
