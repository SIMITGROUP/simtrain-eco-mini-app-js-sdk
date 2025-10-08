# BillSummaryByStudent

## Properties

| Name              | Type                                                                   | Description | Notes                  |
| ----------------- | ---------------------------------------------------------------------- | ----------- | ---------------------- |
| **studentId**     | **string**                                                             |             | [default to '']        |
| **studentCode**   | **string**                                                             |             | [default to '']        |
| **studentName**   | **string**                                                             |             | [default to '']        |
| **alternateName** | **string**                                                             |             | [default to '']        |
| **schedules**     | [**Array&lt;StudentBillingSchedules&gt;**](StudentBillingSchedules.md) |             | [default to undefined] |
| **totalUnBill**   | **number**                                                             |             | [default to undefined] |
| **totalFee**      | **number**                                                             |             | [default to undefined] |
| **invoices**      | [**Array&lt;BillingScheduleInvoice&gt;**](BillingScheduleInvoice.md)   |             | [default to undefined] |

## Example

```typescript
import { BillSummaryByStudent } from "./api";

const instance: BillSummaryByStudent = {
  studentId,
  studentCode,
  studentName,
  alternateName,
  schedules,
  totalUnBill,
  totalFee,
  invoices,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
