# SubscriptionProration

## Properties

| Name                          | Type       | Description                                             | Notes                  |
| ----------------------------- | ---------- | ------------------------------------------------------- | ---------------------- |
| **currentPrice**              | **number** |                                                         | [default to undefined] |
| **targetPrice**               | **number** |                                                         | [default to undefined] |
| **currentRemainingDayCredit** | **number** | currentPrice \* remainingPeriodDays / billingPeriodDays | [default to undefined] |
| **targetRemainingDayCharge**  | **number** | targetPrice \* remainingPeriodDays / billingPeriodDays  | [default to undefined] |
| **prorationAmount**           | **number** | targetRemainingDayCharge - currentRemainingDayCredit    | [default to undefined] |
| **finalAmount**               | **number** | max(0, prorationAmount)                                 | [default to undefined] |
| **targetProrationDiscount**   | **number** | targetPrice - finalAmount                               | [default to undefined] |
| **billingPeriodDays**         | **number** |                                                         | [default to undefined] |
| **remainingPeriodDays**       | **number** |                                                         | [default to undefined] |

## Example

```typescript
import { SubscriptionProration } from "./api";

const instance: SubscriptionProration = {
  currentPrice,
  targetPrice,
  currentRemainingDayCredit,
  targetRemainingDayCharge,
  prorationAmount,
  finalAmount,
  targetProrationDiscount,
  billingPeriodDays,
  remainingPeriodDays,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
