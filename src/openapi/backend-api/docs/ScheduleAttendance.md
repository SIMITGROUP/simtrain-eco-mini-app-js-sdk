# ScheduleAttendance

## Properties

| Name             | Type                                                                  | Description | Notes                             |
| ---------------- | --------------------------------------------------------------------- | ----------- | --------------------------------- |
| **\_id**         | **string**                                                            |             | [optional] [default to undefined] |
| **created**      | **string**                                                            |             | [optional] [default to undefined] |
| **updated**      | **string**                                                            |             | [optional] [default to undefined] |
| **createdBy**    | **string**                                                            |             | [optional] [default to undefined] |
| **updatedBy**    | **string**                                                            |             | [optional] [default to undefined] |
| **tenantId**     | **number**                                                            |             | [optional] [default to undefined] |
| **orgId**        | **number**                                                            |             | [optional] [default to undefined] |
| **branchId**     | **number**                                                            |             | [optional] [default to undefined] |
| **scheduleId**   | **string**                                                            |             | [default to undefined]            |
| **billingId**    | **string**                                                            |             | [default to undefined]            |
| **enrollmentId** | **string**                                                            |             | [default to undefined]            |
| **attend**       | **boolean**                                                           |             | [optional] [default to undefined] |
| **status**       | **string**                                                            |             | [default to undefined]            |
| **description**  | **string**                                                            |             | [optional] [default to undefined] |
| **student**      | [**ScheduleAttendanceStudent**](ScheduleAttendanceStudent.md)         |             | [default to undefined]            |
| **replacement**  | [**ScheduleAttendanceReplacement**](ScheduleAttendanceReplacement.md) |             | [optional] [default to undefined] |
| **more**         | **object**                                                            |             | [optional] [default to undefined] |

## Example

```typescript
import { ScheduleAttendance } from "./api";

const instance: ScheduleAttendance = {
  _id,
  created,
  updated,
  createdBy,
  updatedBy,
  tenantId,
  orgId,
  branchId,
  scheduleId,
  billingId,
  enrollmentId,
  attend,
  status,
  description,
  student,
  replacement,
  more,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
