# SubscriptionCheckoutAddOnDto

## Properties

| Name                | Type                                                                                              | Description | Notes                             |
| ------------------- | ------------------------------------------------------------------------------------------------- | ----------- | --------------------------------- |
| **addOnStudentQty** | **number**                                                                                        |             | [optional] [default to undefined] |
| **addOnBranchQty**  | **number**                                                                                        |             | [optional] [default to undefined] |
| **payment**         | [**SubscriptionPaymentCreateCheckoutSessionDto**](SubscriptionPaymentCreateCheckoutSessionDto.md) |             | [default to undefined]            |

## Example

```typescript
import { SubscriptionCheckoutAddOnDto } from "./api";

const instance: SubscriptionCheckoutAddOnDto = {
  addOnStudentQty,
  addOnBranchQty,
  payment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
