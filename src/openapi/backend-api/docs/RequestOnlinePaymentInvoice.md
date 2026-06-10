# RequestOnlinePaymentInvoice

## Properties

| Name            | Type       | Description                      | Notes                  |
| --------------- | ---------- | -------------------------------- | ---------------------- |
| **\_id**        | **string** |                                  | [default to undefined] |
| **invoiceNo**   | **string** |                                  | [default to undefined] |
| **invoiceDate** | **string** |                                  | [default to undefined] |
| **amount**      | **number** | Invoice\&#39;s original amount   | [default to undefined] |
| **knockOffAmt** | **number** | Invoice\&#39;s amount to be paid | [default to undefined] |

## Example

```typescript
import { RequestOnlinePaymentInvoice } from "./api";

const instance: RequestOnlinePaymentInvoice = {
  _id,
  invoiceNo,
  invoiceDate,
  amount,
  knockOffAmt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
