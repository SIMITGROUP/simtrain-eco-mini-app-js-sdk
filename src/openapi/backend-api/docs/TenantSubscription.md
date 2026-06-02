# TenantSubscription


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuousCycleCount** | **number** |  | [optional] [default to undefined]
**timeZoneOffset** | **number** |  | [optional] [default to undefined]
**utcAnchorTime** | **string** |  | [optional] [default to undefined]
**utcStartTime** | **string** |  | [optional] [default to undefined]
**utcEndTime** | **string** |  | [optional] [default to undefined]
**localAnchorTime** | **string** |  | [optional] [default to undefined]
**localStartTime** | **string** |  | [optional] [default to undefined]
**localEndTime** | **string** |  | [optional] [default to undefined]
**currency** | **string** |  | [default to undefined]
**billingCycle** | **string** |  | [optional] [default to undefined]
**renewReminderSent** | **boolean** |  | [optional] [default to undefined]
**addOns** | [**TenantSubscriptionAddOns**](TenantSubscriptionAddOns.md) |  | [optional] [default to undefined]
**renewalSpecification** | [**TenantSubscriptionRenewalSpecification**](TenantSubscriptionRenewalSpecification.md) |  | [optional] [default to undefined]

## Example

```typescript
import { TenantSubscription } from './api';

const instance: TenantSubscription = {
    continuousCycleCount,
    timeZoneOffset,
    utcAnchorTime,
    utcStartTime,
    utcEndTime,
    localAnchorTime,
    localStartTime,
    localEndTime,
    currency,
    billingCycle,
    renewReminderSent,
    addOns,
    renewalSpecification,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
