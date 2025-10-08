# OutstandingInvoice

## Properties

| Name             | Type        | Description | Notes                  |
| ---------------- | ----------- | ----------- | ---------------------- |
| **\_id**         | **string**  |             | [default to '']        |
| **invoiceNo**    | **string**  |             | [default to '']        |
| **invoiceDate**  | **string**  |             | [default to '']        |
| **invoiceTotal** | **number**  |             | [default to 0]         |
| **invoiceTitle** | **string**  |             | [default to '']        |
| **description**  | **string**  |             | [default to '']        |
| **balance**      | **number**  |             | [default to 0]         |
| **selected**     | **boolean** |             | [default to undefined] |
| **knockOffAmt**  | **number**  |             | [default to 0]         |
| **newBalance**   | **number**  |             | [default to 0]         |

## Example

```typescript
import { OutstandingInvoice } from "./api";

const instance: OutstandingInvoice = {
  _id,
  invoiceNo,
  invoiceDate,
  invoiceTotal,
  invoiceTitle,
  description,
  balance,
  selected,
  knockOffAmt,
  newBalance,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
