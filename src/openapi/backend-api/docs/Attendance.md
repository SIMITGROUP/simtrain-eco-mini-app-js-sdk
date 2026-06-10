# Attendance

## Properties

| Name               | Type                                                       | Description | Notes                  |
| ------------------ | ---------------------------------------------------------- | ----------- | ---------------------- |
| **\_id**           | **string**                                                 |             | [default to undefined] |
| **termNo**         | **number**                                                 |             | [default to undefined] |
| **scheduleNo**     | **number**                                                 |             | [default to undefined] |
| **tenantId**       | **number**                                                 |             | [default to undefined] |
| **orgId**          | **number**                                                 |             | [default to undefined] |
| **branchId**       | **number**                                                 |             | [default to undefined] |
| **startTime**      | **string**                                                 |             | [default to undefined] |
| **endTime**        | **string**                                                 |             | [default to undefined] |
| **day**            | **string**                                                 |             | [default to undefined] |
| **onlineClassUrl** | **string**                                                 |             | [default to undefined] |
| **duration**       | **number**                                                 |             | [default to undefined] |
| **teacher**        | [**ScheduleTeacher**](ScheduleTeacher.md)                  |             | [default to undefined] |
| **room**           | [**ScheduleRoom**](ScheduleRoom.md)                        |             | [default to undefined] |
| **studentQty**     | **number**                                                 |             | [default to undefined] |
| **presentQty**     | **number**                                                 |             | [default to undefined] |
| **presentPercent** | **number**                                                 |             | [default to undefined] |
| **maxStudents**    | **number**                                                 |             | [default to undefined] |
| **lessonPlan**     | **string**                                                 |             | [default to undefined] |
| **active**         | **boolean**                                                |             | [default to undefined] |
| **attDescription** | **string**                                                 |             | [default to undefined] |
| **description**    | **string**                                                 |             | [default to undefined] |
| **tuitionClass**   | [**ScheduleTuitionClass**](ScheduleTuitionClass.md)        |             | [default to undefined] |
| **students**       | [**Array&lt;AttendanceStudent&gt;**](AttendanceStudent.md) |             | [default to undefined] |

## Example

```typescript
import { Attendance } from "./api";

const instance: Attendance = {
  _id,
  termNo,
  scheduleNo,
  tenantId,
  orgId,
  branchId,
  startTime,
  endTime,
  day,
  onlineClassUrl,
  duration,
  teacher,
  room,
  studentQty,
  presentQty,
  presentPercent,
  maxStudents,
  lessonPlan,
  active,
  attDescription,
  description,
  tuitionClass,
  students,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
