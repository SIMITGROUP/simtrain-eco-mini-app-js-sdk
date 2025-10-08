# TeacherCommissionSetting

## Properties

| Name                     | Type                                                                                               | Description | Notes                             |
| ------------------------ | -------------------------------------------------------------------------------------------------- | ----------- | --------------------------------- |
| **defaultHourlyAmount**  | **number**                                                                                         |             | [optional] [default to undefined] |
| **commissionPercentage** | **number**                                                                                         |             | [optional] [default to undefined] |
| **salaryMode**           | **string**                                                                                         |             | [optional] [default to undefined] |
| **salaryByLevel**        | [**Array&lt;TeacherCommissionSettingSalaryByLevel&gt;**](TeacherCommissionSettingSalaryByLevel.md) |             | [optional] [default to undefined] |

## Example

```typescript
import { TeacherCommissionSetting } from "./api";

const instance: TeacherCommissionSetting = {
  defaultHourlyAmount,
  commissionPercentage,
  salaryMode,
  salaryByLevel,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
