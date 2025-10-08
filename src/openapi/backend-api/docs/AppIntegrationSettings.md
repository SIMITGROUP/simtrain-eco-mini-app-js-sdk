# AppIntegrationSettings

## Properties

| Name                       | Type                                                                                                       | Description | Notes                             |
| -------------------------- | ---------------------------------------------------------------------------------------------------------- | ----------- | --------------------------------- |
| **systemLink**             | **string**                                                                                                 |             | [optional] [default to undefined] |
| **orgCode**                | **string**                                                                                                 |             | [optional] [default to undefined] |
| **appSystemBranch**        | **string**                                                                                                 |             | [optional] [default to undefined] |
| **username**               | **string**                                                                                                 |             | [optional] [default to undefined] |
| **password**               | **string**                                                                                                 |             | [optional] [default to undefined] |
| **defaultDebtorAccount**   | **string**                                                                                                 |             | [optional] [default to undefined] |
| **defaultSalesAccount**    | **string**                                                                                                 |             | [optional] [default to undefined] |
| **defaultRoundingAccount** | **string**                                                                                                 |             | [optional] [default to undefined] |
| **defaultRefundAccount**   | **string**                                                                                                 |             | [optional] [default to undefined] |
| **isAutoSubmitEinvoice**   | **boolean**                                                                                                |             | [optional] [default to undefined] |
| **implementationDate**     | **string**                                                                                                 |             | [optional] [default to undefined] |
| **debtorAccountConfig**    | [**Array&lt;AppIntegrationSettingsDebtorAccountConfig&gt;**](AppIntegrationSettingsDebtorAccountConfig.md) |             | [optional] [default to undefined] |
| **salesAccountConfig**     | [**Array&lt;AppIntegrationSettingsSalesAccountConfig&gt;**](AppIntegrationSettingsSalesAccountConfig.md)   |             | [optional] [default to undefined] |
| **bankAccountConfig**      | [**Array&lt;AppIntegrationSettingsBankAccountConfig&gt;**](AppIntegrationSettingsBankAccountConfig.md)     |             | [optional] [default to undefined] |

## Example

```typescript
import { AppIntegrationSettings } from "./api";

const instance: AppIntegrationSettings = {
  systemLink,
  orgCode,
  appSystemBranch,
  username,
  password,
  defaultDebtorAccount,
  defaultSalesAccount,
  defaultRoundingAccount,
  defaultRefundAccount,
  isAutoSubmitEinvoice,
  implementationDate,
  debtorAccountConfig,
  salesAccountConfig,
  bankAccountConfig,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
