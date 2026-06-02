# StudentDescription

## Properties

| Name           | Type                                                                | Description | Notes                             |
| -------------- | ------------------------------------------------------------------- | ----------- | --------------------------------- |
| **\_id**       | **string**                                                          |             | [optional] [default to undefined] |
| **created**    | **string**                                                          |             | [optional] [default to undefined] |
| **updated**    | **string**                                                          |             | [optional] [default to undefined] |
| **createdBy**  | **string**                                                          |             | [optional] [default to undefined] |
| **updatedBy**  | **string**                                                          |             | [optional] [default to undefined] |
| **tenantId**   | **number**                                                          |             | [optional] [default to undefined] |
| **orgId**      | **number**                                                          |             | [optional] [default to undefined] |
| **branchId**   | **number**                                                          |             | [optional] [default to undefined] |
| **body**       | **string**                                                          |             | [optional] [default to undefined] |
| **student**    | [**StudentDescriptionStudent**](StudentDescriptionStudent.md)       |             | [optional] [default to undefined] |
| **preparedBy** | [**StudentDescriptionPreparedBy**](StudentDescriptionPreparedBy.md) |             | [optional] [default to undefined] |

## Example

```typescript
import { StudentDescription } from "./api";

const instance: StudentDescription = {
  _id,
  created,
  updated,
  createdBy,
  updatedBy,
  tenantId,
  orgId,
  branchId,
  body,
  student,
  preparedBy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
