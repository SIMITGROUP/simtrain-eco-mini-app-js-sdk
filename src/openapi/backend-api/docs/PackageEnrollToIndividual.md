# PackageEnrollToIndividual

## Properties

| Name              | Type                            | Description | Notes                  |
| ----------------- | ------------------------------- | ----------- | ---------------------- |
| **studentId**     | **string**                      |             | [default to undefined] |
| **packageId**     | **string**                      |             | [default to undefined] |
| **stopReason**    | [**ForeignKey**](ForeignKey.md) |             | [default to undefined] |
| **effectiveDate** | **string**                      |             | [default to undefined] |

## Example

```typescript
import { PackageEnrollToIndividual } from "./api";

const instance: PackageEnrollToIndividual = {
  studentId,
  packageId,
  stopReason,
  effectiveDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
