# StopEnrollment

## Properties

| Name               | Type                                                        | Description | Notes                             |
| ------------------ | ----------------------------------------------------------- | ----------- | --------------------------------- |
| **\_id**           | **string**                                                  |             | [optional] [default to undefined] |
| **created**        | **string**                                                  |             | [optional] [default to undefined] |
| **updated**        | **string**                                                  |             | [optional] [default to undefined] |
| **createdBy**      | **string**                                                  |             | [optional] [default to undefined] |
| **updatedBy**      | **string**                                                  |             | [optional] [default to undefined] |
| **tenantId**       | **number**                                                  |             | [optional] [default to undefined] |
| **orgId**          | **number**                                                  |             | [optional] [default to undefined] |
| **branchId**       | **number**                                                  |             | [optional] [default to undefined] |
| **status**         | **string**                                                  |             | [default to undefined]            |
| **personIncharge** | **string**                                                  |             | [default to undefined]            |
| **enrollmentId**   | **string**                                                  |             | [default to undefined]            |
| **date**           | **string**                                                  |             | [default to undefined]            |
| **planReturnDate** | **string**                                                  |             | [optional] [default to undefined] |
| **description**    | **string**                                                  |             | [optional] [default to undefined] |
| **student**        | [**StopEnrollmentStudent**](StopEnrollmentStudent.md)       |             | [default to undefined]            |
| **stopReason**     | [**StopEnrollmentStopReason**](StopEnrollmentStopReason.md) |             | [optional] [default to undefined] |

## Example

```typescript
import { StopEnrollment } from "./api";

const instance: StopEnrollment = {
  _id,
  created,
  updated,
  createdBy,
  updatedBy,
  tenantId,
  orgId,
  branchId,
  status,
  personIncharge,
  enrollmentId,
  date,
  planReturnDate,
  description,
  student,
  stopReason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
