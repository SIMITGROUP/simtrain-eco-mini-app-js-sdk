# Tenant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** |  | [optional] [default to undefined]
**created** | **string** |  | [optional] [default to undefined]
**updated** | **string** |  | [optional] [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**updatedBy** | **string** |  | [optional] [default to undefined]
**tenantId** | **number** |  | [default to undefined]
**orgId** | **number** |  | [optional] [default to undefined]
**branchId** | **number** |  | [optional] [default to undefined]
**tenantName** | **string** |  | [default to undefined]
**active** | **boolean** |  | [optional] [default to undefined]
**businessType** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**license** | **string** |  | [optional] [default to undefined]
**onboardSetupStatus** | **string** |  | [optional] [default to undefined]
**clientSetting** | [**TenantClientSetting**](TenantClientSetting.md) |  | [optional] [default to undefined]
**owner** | [**TenantOwner**](TenantOwner.md) |  | [default to undefined]
**subscription** | [**TenantSubscription**](TenantSubscription.md) |  | [optional] [default to undefined]
**subscriptionConfig** | [**TenantSubscriptionConfig**](TenantSubscriptionConfig.md) |  | [optional] [default to undefined]
**company** | [**TenantCompany**](TenantCompany.md) |  | [optional] [default to undefined]
**outstandingReminder** | [**TenantOutstandingReminder**](TenantOutstandingReminder.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Tenant } from './api';

const instance: Tenant = {
    _id,
    created,
    updated,
    createdBy,
    updatedBy,
    tenantId,
    orgId,
    branchId,
    tenantName,
    active,
    businessType,
    description,
    license,
    onboardSetupStatus,
    clientSetting,
    owner,
    subscription,
    subscriptionConfig,
    company,
    outstandingReminder,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
