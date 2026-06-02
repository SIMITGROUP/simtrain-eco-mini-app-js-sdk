# SubscriptionOnlinePayment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** |  | [default to undefined]
**onlinePaymentNo** | **string** | Online Payment No. | [default to undefined]
**datetime** | **string** | Online Payment Date Time | [default to undefined]
**email** | **string** | Payer\&#39;s email | [default to undefined]
**currency** | **string** |  | [default to undefined]
**amount** | **string** |  | [default to undefined]
**redirectURL** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [default to StatusEnum_New]
**failReason** | **string** |  | [optional] [default to undefined]
**subscription** | [**SubscriptionPaymentSummary**](SubscriptionPaymentSummary.md) |  | [default to undefined]
**paymentGateway** | [**SubscriptionPaymentCreateCheckoutSessionPaymentGateway**](SubscriptionPaymentCreateCheckoutSessionPaymentGateway.md) |  | [default to undefined]
**invoice** | [**SubscriptionOnlinePaymentInvoice**](SubscriptionOnlinePaymentInvoice.md) |  | [default to undefined]

## Example

```typescript
import { SubscriptionOnlinePayment } from './api';

const instance: SubscriptionOnlinePayment = {
    _id,
    onlinePaymentNo,
    datetime,
    email,
    currency,
    amount,
    redirectURL,
    status,
    failReason,
    subscription,
    paymentGateway,
    invoice,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
