# PackageModified

## Properties

| Name              | Type                                             | Description | Notes                             |
| ----------------- | ------------------------------------------------ | ----------- | --------------------------------- |
| **studentId**     | **string**                                       |             | [default to undefined]            |
| **packageId**     | **string**                                       |             | [default to undefined]            |
| **modificaction** | [**Array&lt;Modification&gt;**](Modification.md) |             | [default to undefined]            |
| **stopReason**    | [**ForeignKey**](ForeignKey.md)                  |             | [optional] [default to undefined] |
| **effectiveDate** | **string**                                       |             | [optional] [default to undefined] |

## Example

```typescript
import { PackageModified } from "./api";

const instance: PackageModified = {
  studentId,
  packageId,
  modificaction,
  stopReason,
  effectiveDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
