# OnlinePaymentMerchantConfigResponse

## Properties

| Name               | Type                                                                                  | Description                                                                          | Notes                             |
| ------------------ | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | --------------------------------- |
| **paymentMethod**  | [**PaymentMethod**](PaymentMethod.md)                                                 | The PaymentMethod record that was affected. Null if no active payment method exists. | [optional] [default to undefined] |
| **merchantConfig** | [**PaymentServiceMerchantConfigStatusDto**](PaymentServiceMerchantConfigStatusDto.md) |                                                                                      | [default to undefined]            |

## Example

```typescript
import { OnlinePaymentMerchantConfigResponse } from "./api";

const instance: OnlinePaymentMerchantConfigResponse = {
  paymentMethod,
  merchantConfig,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
