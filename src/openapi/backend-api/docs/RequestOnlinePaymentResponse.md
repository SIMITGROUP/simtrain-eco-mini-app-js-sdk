# RequestOnlinePaymentResponse

## Properties

| Name              | Type                                                                           | Description | Notes                  |
| ----------------- | ------------------------------------------------------------------------------ | ----------- | ---------------------- |
| **onlinePayment** | [**OnlinePaymentData**](OnlinePaymentData.md)                                  |             | [default to undefined] |
| **student**       | [**RequestOnlinePaymentStudent**](RequestOnlinePaymentStudent.md)              |             | [default to undefined] |
| **invoices**      | [**Array&lt;RequestOnlinePaymentInvoice&gt;**](RequestOnlinePaymentInvoice.md) |             | [default to undefined] |

## Example

```typescript
import { RequestOnlinePaymentResponse } from "./api";

const instance: RequestOnlinePaymentResponse = {
  onlinePayment,
  student,
  invoices,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
