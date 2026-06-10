# OutstandingByStudent

## Properties

| Name         | Type                                                                           | Description | Notes                  |
| ------------ | ------------------------------------------------------------------------------ | ----------- | ---------------------- |
| **\_id**     | **string**                                                                     |             | [default to '']        |
| **student**  | [**InvoiceStudent**](InvoiceStudent.md)                                        |             | [default to undefined] |
| **level**    | [**ForeignKey**](ForeignKey.md)                                                |             | [default to undefined] |
| **totalAmt** | **number**                                                                     |             | [default to 0]         |
| **invoices** | [**Array&lt;OutstandingByStudentInvoice&gt;**](OutstandingByStudentInvoice.md) |             | [default to undefined] |

## Example

```typescript
import { OutstandingByStudent } from "./api";

const instance: OutstandingByStudent = {
  _id,
  student,
  level,
  totalAmt,
  invoices,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
