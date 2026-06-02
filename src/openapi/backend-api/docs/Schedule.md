# Schedule

## Properties

| Name               | Type                                                | Description | Notes                             |
| ------------------ | --------------------------------------------------- | ----------- | --------------------------------- |
| **\_id**           | **string**                                          |             | [optional] [default to undefined] |
| **created**        | **string**                                          |             | [optional] [default to undefined] |
| **updated**        | **string**                                          |             | [optional] [default to undefined] |
| **createdBy**      | **string**                                          |             | [optional] [default to undefined] |
| **updatedBy**      | **string**                                          |             | [optional] [default to undefined] |
| **tenantId**       | **number**                                          |             | [optional] [default to undefined] |
| **orgId**          | **number**                                          |             | [optional] [default to undefined] |
| **branchId**       | **number**                                          |             | [optional] [default to undefined] |
| **active**         | **boolean**                                         |             | [optional] [default to undefined] |
| **scheduleNo**     | **number**                                          |             | [optional] [default to undefined] |
| **termNo**         | **number**                                          |             | [optional] [default to undefined] |
| **lessonPlan**     | **string**                                          |             | [optional] [default to undefined] |
| **onlineClassUrl** | **string**                                          |             | [optional] [default to undefined] |
| **description**    | **string**                                          |             | [optional] [default to undefined] |
| **startTime**      | **string**                                          |             | [optional] [default to undefined] |
| **endTime**        | **string**                                          |             | [optional] [default to undefined] |
| **duration**       | **number**                                          |             | [optional] [default to undefined] |
| **day**            | **string**                                          |             | [optional] [default to undefined] |
| **tuitionClass**   | [**ScheduleTuitionClass**](ScheduleTuitionClass.md) |             | [optional] [default to undefined] |
| **room**           | [**ScheduleRoom**](ScheduleRoom.md)                 |             | [optional] [default to undefined] |
| **teacher**        | [**ScheduleTeacher**](ScheduleTeacher.md)           |             | [optional] [default to undefined] |
| **more**           | **object**                                          |             | [optional] [default to undefined] |

## Example

```typescript
import { Schedule } from "./api";

const instance: Schedule = {
  _id,
  created,
  updated,
  createdBy,
  updatedBy,
  tenantId,
  orgId,
  branchId,
  active,
  scheduleNo,
  termNo,
  lessonPlan,
  onlineClassUrl,
  description,
  startTime,
  endTime,
  duration,
  day,
  tuitionClass,
  room,
  teacher,
  more,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
