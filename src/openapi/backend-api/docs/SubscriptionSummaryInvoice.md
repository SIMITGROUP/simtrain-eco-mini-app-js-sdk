# SubscriptionSummaryInvoice

## Properties

| Name                | Type                                                                   | Description | Notes                  |
| ------------------- | ---------------------------------------------------------------------- | ----------- | ---------------------- |
| **subTotal**        | **number**                                                             |             | [default to undefined] |
| **amountBeforeTax** | **number**                                                             |             | [default to undefined] |
| **grandTotal**      | **number**                                                             |             | [default to undefined] |
| **tax**             | [**SubscriptionTax**](SubscriptionTax.md)                              |             | [default to undefined] |
| **items**           | [**Array&lt;SubscriptionInvoiceItem&gt;**](SubscriptionInvoiceItem.md) |             | [default to undefined] |

## Example

```typescript
import { SubscriptionSummaryInvoice } from "./api";

const instance: SubscriptionSummaryInvoice = {
  subTotal,
  amountBeforeTax,
  grandTotal,
  tax,
  items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
