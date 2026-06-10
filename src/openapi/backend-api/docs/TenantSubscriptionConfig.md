# TenantSubscriptionConfig

## Properties

| Name                             | Type                                                                                          | Description | Notes                             |
| -------------------------------- | --------------------------------------------------------------------------------------------- | ----------- | --------------------------------- |
| **isLifetimeFreePremiumLicense** | **boolean**                                                                                   |             | [optional] [default to undefined] |
| **recurringDiscount**            | [**TenantSubscriptionConfigRecurringDiscount**](TenantSubscriptionConfigRecurringDiscount.md) |             | [optional] [default to undefined] |
| **oneTimeDiscount**              | [**TenantSubscriptionConfigOneTimeDiscount**](TenantSubscriptionConfigOneTimeDiscount.md)     |             | [optional] [default to undefined] |
| **customPricing**                | [**TenantSubscriptionConfigCustomPricing**](TenantSubscriptionConfigCustomPricing.md)         |             | [optional] [default to undefined] |

## Example

```typescript
import { TenantSubscriptionConfig } from "./api";

const instance: TenantSubscriptionConfig = {
  isLifetimeFreePremiumLicense,
  recurringDiscount,
  oneTimeDiscount,
  customPricing,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
