# PackageChanged

## Properties

| Name                  | Type                                         | Description | Notes                             |
| --------------------- | -------------------------------------------- | ----------- | --------------------------------- |
| **studentId**         | **string**                                   |             | [default to undefined]            |
| **previouspackageId** | **string**                                   |             | [default to undefined]            |
| **newpackageId**      | **string**                                   |             | [default to undefined]            |
| **changePlan**        | [**Array&lt;ChangePlan&gt;**](ChangePlan.md) |             | [default to undefined]            |
| **stopReason**        | [**ForeignKey**](ForeignKey.md)              |             | [optional] [default to undefined] |
| **effectiveDate**     | **string**                                   |             | [optional] [default to undefined] |

## Example

```typescript
import { PackageChanged } from "./api";

const instance: PackageChanged = {
  studentId,
  previouspackageId,
  newpackageId,
  changePlan,
  stopReason,
  effectiveDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
