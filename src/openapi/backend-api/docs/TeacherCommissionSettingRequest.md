# TeacherCommissionSettingRequest

## Properties

| Name                  | Type                                                   | Description | Notes                             |
| --------------------- | ------------------------------------------------------ | ----------- | --------------------------------- |
| **salaryMode**        | **string**                                             |             | [optional] [default to undefined] |
| **defaultRate**       | **number**                                             |             | [optional] [default to undefined] |
| **commissionPercent** | **number**                                             |             | [optional] [default to undefined] |
| **commissionLevel**   | [**Array&lt;CommissionLevel&gt;**](CommissionLevel.md) |             | [optional] [default to undefined] |

## Example

```typescript
import { TeacherCommissionSettingRequest } from "./api";

const instance: TeacherCommissionSettingRequest = {
  salaryMode,
  defaultRate,
  commissionPercent,
  commissionLevel,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
