# ScheduleWithStatistic

## Properties

| Name             | Type                                                | Description | Notes                  |
| ---------------- | --------------------------------------------------- | ----------- | ---------------------- |
| **\_id**         | **string**                                          |             | [default to undefined] |
| **active**       | **boolean**                                         |             | [default to undefined] |
| **day**          | **string**                                          |             | [default to undefined] |
| **teacher**      | [**ForeignKey**](ForeignKey.md)                     |             | [default to undefined] |
| **room**         | [**ForeignKey**](ForeignKey.md)                     |             | [default to undefined] |
| **termNo**       | **number**                                          |             | [default to undefined] |
| **scheduleNo**   | **number**                                          |             | [default to undefined] |
| **startTime**    | **string**                                          |             | [default to undefined] |
| **endTime**      | **string**                                          |             | [default to undefined] |
| **lessonPlan**   | **number**                                          |             | [default to undefined] |
| **tuitionClass** | [**ScheduleTuitionClass**](ScheduleTuitionClass.md) |             | [default to undefined] |
| **duration**     | **number**                                          |             | [default to undefined] |
| **description**  | **string**                                          |             | [default to undefined] |
| **attendQty**    | **number**                                          |             | [default to undefined] |
| **studentQty**   | **number**                                          |             | [default to undefined] |

## Example

```typescript
import { ScheduleWithStatistic } from "./api";

const instance: ScheduleWithStatistic = {
  _id,
  active,
  day,
  teacher,
  room,
  termNo,
  scheduleNo,
  startTime,
  endTime,
  lessonPlan,
  tuitionClass,
  duration,
  description,
  attendQty,
  studentQty,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
