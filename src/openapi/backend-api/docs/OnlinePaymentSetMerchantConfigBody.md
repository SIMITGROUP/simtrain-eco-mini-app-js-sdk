# OnlinePaymentSetMerchantConfigBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentMethodId** | **string** | ID of the PaymentMethod to mark as the active online payment method | [default to undefined]
**merchantConfig** | **object** | Payment gateway config. RinggitPay: { provider: \&quot;ringgitpay\&quot;, credential: { appId, requestKey } }. Stripe: { provider: \&quot;stripe\&quot;, credential: { secretKey, webhookEndpointSecret } } | [default to undefined]

## Example

```typescript
import { OnlinePaymentSetMerchantConfigBody } from './api';

const instance: OnlinePaymentSetMerchantConfigBody = {
    paymentMethodId,
    merchantConfig,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
