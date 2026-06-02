# SubscriptionCheckoutResponse

## Properties

| Name              | Type                                                                    | Description | Notes                             |
| ----------------- | ----------------------------------------------------------------------- | ----------- | --------------------------------- |
| **action**        | **string**                                                              |             | [default to undefined]            |
| **status**        | **string**                                                              |             | [default to undefined]            |
| **message**       | **string**                                                              |             | [default to undefined]            |
| **transition**    | [**SubscriptionCheckoutTransition**](SubscriptionCheckoutTransition.md) |             | [default to undefined]            |
| **onlinePayment** | [**SubscriptionOnlinePayment**](SubscriptionOnlinePayment.md)           |             | [optional] [default to undefined] |

## Example

```typescript
import { SubscriptionCheckoutResponse } from "./api";

const instance: SubscriptionCheckoutResponse = {
  action,
  status,
  message,
  transition,
  onlinePayment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
