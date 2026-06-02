# OnlineMonitoringData

## Properties

| Name                           | Type                                                                           | Description                                  | Notes                                              |
| ------------------------------ | ------------------------------------------------------------------------------ | -------------------------------------------- | -------------------------------------------------- |
| **\_id**                       | **string**                                                                     | Online Payment id                            | [default to undefined]                             |
| **created**                    | **string**                                                                     |                                              | [default to undefined]                             |
| **paymentGatewayName**         | **string**                                                                     |                                              | [default to undefined]                             |
| **onlinePaymentNo**            | **string**                                                                     | Online Payment No. (Auto generate if empty.) | [default to undefined]                             |
| **paymentGatewayDate**         | **string**                                                                     | Gateway date                                 | [optional] [default to '2000-01-01T00:00:00.000Z'] |
| **paymentGatewayResponseDate** | **string**                                                                     | Gateway response date                        | [optional] [default to '2000-01-01T00:00:00.000Z'] |
| **paymentGatewayTransNo**      | **string**                                                                     |                                              | [default to undefined]                             |
| **status**                     | **string**                                                                     |                                              | [default to StatusEnum_New]                        |
| **receiptNo**                  | **string**                                                                     |                                              | [default to '']                                    |
| **receiptDate**                | **string**                                                                     |                                              | [default to undefined]                             |
| **receiptStatus**              | **string**                                                                     |                                              | [default to '']                                    |
| **studentCode**                | **string**                                                                     |                                              | [default to '']                                    |
| **studentName**                | **string**                                                                     |                                              | [default to '']                                    |
| **amount**                     | **number**                                                                     | online payment amount                        | [default to undefined]                             |
| **studentId**                  | **string**                                                                     |                                              | [default to '']                                    |
| **parent**                     | [**RequestOnlinePaymentParent**](RequestOnlinePaymentParent.md)                |                                              | [default to undefined]                             |
| **invoices**                   | [**Array&lt;RequestOnlinePaymentInvoice&gt;**](RequestOnlinePaymentInvoice.md) |                                              | [default to undefined]                             |

## Example

```typescript
import { OnlineMonitoringData } from "./api";

const instance: OnlineMonitoringData = {
  _id,
  created,
  paymentGatewayName,
  onlinePaymentNo,
  paymentGatewayDate,
  paymentGatewayResponseDate,
  paymentGatewayTransNo,
  status,
  receiptNo,
  receiptDate,
  receiptStatus,
  studentCode,
  studentName,
  amount,
  studentId,
  parent,
  invoices,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
