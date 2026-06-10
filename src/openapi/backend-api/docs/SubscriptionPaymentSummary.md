# SubscriptionPaymentSummary

## Properties

| Name              | Type                                                                      | Description | Notes                  |
| ----------------- | ------------------------------------------------------------------------- | ----------- | ---------------------- |
| **action**        | **string**                                                                |             | [default to undefined] |
| **currency**      | **string**                                                                |             | [default to undefined] |
| **billingCycle**  | **string**                                                                |             | [default to undefined] |
| **period**        | [**SubscriptionSummaryPeriod**](SubscriptionSummaryPeriod.md)             |             | [default to undefined] |
| **modifications** | [**SubscriptionSummaryModification**](SubscriptionSummaryModification.md) |             | [default to undefined] |
| **invoice**       | [**SubscriptionSummaryInvoice**](SubscriptionSummaryInvoice.md)           |             | [default to undefined] |
| **xOrg**          | **string**                                                                |             | [default to undefined] |

## Example

```typescript
import { SubscriptionPaymentSummary } from "./api";

const instance: SubscriptionPaymentSummary = {
  action,
  currency,
  billingCycle,
  period,
  modifications,
  invoice,
  xOrg,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
