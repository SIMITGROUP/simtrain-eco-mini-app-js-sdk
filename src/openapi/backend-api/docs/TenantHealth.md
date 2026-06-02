# TenantHealth

## Properties

| Name                          | Type        | Description                                                                        | Notes                             |
| ----------------------------- | ----------- | ---------------------------------------------------------------------------------- | --------------------------------- |
| **status**                    | **string**  |                                                                                    | [default to undefined]            |
| **message**                   | **string**  |                                                                                    | [default to undefined]            |
| **isLicenseRenewable**        | **boolean** |                                                                                    | [default to undefined]            |
| **isLicenseDowngradable**     | **boolean** | Decide subscription portal allowed downgrade or not. Downgrade effect next renewal | [default to undefined]            |
| **isLicenseCancellable**      | **boolean** | Cancel effect immediatly                                                           | [default to undefined]            |
| **isLicenseUpgradable**       | **boolean** |                                                                                    | [default to undefined]            |
| **isLicenseAddOnAllowed**     | **boolean** |                                                                                    | [default to undefined]            |
| **localGracePeriodStartDate** | **string**  |                                                                                    | [optional] [default to undefined] |
| **localGracePeriodEndDate**   | **string**  |                                                                                    | [optional] [default to undefined] |

## Example

```typescript
import { TenantHealth } from "./api";

const instance: TenantHealth = {
  status,
  message,
  isLicenseRenewable,
  isLicenseDowngradable,
  isLicenseCancellable,
  isLicenseUpgradable,
  isLicenseAddOnAllowed,
  localGracePeriodStartDate,
  localGracePeriodEndDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
