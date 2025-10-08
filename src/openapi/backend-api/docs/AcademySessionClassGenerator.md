# AcademySessionClassGenerator

## Properties

| Name                     | Type                                                                                           | Description | Notes                             |
| ------------------------ | ---------------------------------------------------------------------------------------------- | ----------- | --------------------------------- |
| **\_id**                 | **string**                                                                                     |             | [optional] [default to undefined] |
| **created**              | **string**                                                                                     |             | [optional] [default to undefined] |
| **updated**              | **string**                                                                                     |             | [optional] [default to undefined] |
| **createdBy**            | **string**                                                                                     |             | [optional] [default to undefined] |
| **updatedBy**            | **string**                                                                                     |             | [optional] [default to undefined] |
| **tenantId**             | **number**                                                                                     |             | [optional] [default to undefined] |
| **orgId**                | **number**                                                                                     |             | [optional] [default to undefined] |
| **branchId**             | **number**                                                                                     |             | [optional] [default to undefined] |
| **generateNo**           | **string**                                                                                     |             | [optional] [default to undefined] |
| **fromAcademySessionId** | **string**                                                                                     |             | [optional] [default to undefined] |
| **toAcademySessionId**   | **string**                                                                                     |             | [optional] [default to undefined] |
| **migrateEnrollment**    | **boolean**                                                                                    |             | [optional] [default to undefined] |
| **classQuantity**        | **number**                                                                                     |             | [optional] [default to undefined] |
| **enrollmentQuantity**   | **number**                                                                                     |             | [optional] [default to undefined] |
| **status**               | **string**                                                                                     |             | [default to undefined]            |
| **histories**            | **string**                                                                                     |             | [optional] [default to undefined] |
| **details**              | [**Array&lt;AcademySessionClassGeneratorDetails&gt;**](AcademySessionClassGeneratorDetails.md) |             | [optional] [default to undefined] |

## Example

```typescript
import { AcademySessionClassGenerator } from "./api";

const instance: AcademySessionClassGenerator = {
  _id,
  created,
  updated,
  createdBy,
  updatedBy,
  tenantId,
  orgId,
  branchId,
  generateNo,
  fromAcademySessionId,
  toAcademySessionId,
  migrateEnrollment,
  classQuantity,
  enrollmentQuantity,
  status,
  histories,
  details,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
