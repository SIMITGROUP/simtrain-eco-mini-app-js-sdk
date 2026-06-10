# EnrollmentSchedulesAttendance

## Properties

| Name            | Type                                                                  | Description | Notes                  |
| --------------- | --------------------------------------------------------------------- | ----------- | ---------------------- |
| **\_id**        | **string**                                                            |             | [default to undefined] |
| **scheduleId**  | **string**                                                            |             | [default to undefined] |
| **attend**      | **boolean**                                                           |             | [default to undefined] |
| **billingId**   | **string**                                                            |             | [default to undefined] |
| **status**      | **string**                                                            |             | [default to undefined] |
| **replacement** | [**ScheduleAttendanceReplacement**](ScheduleAttendanceReplacement.md) |             | [default to undefined] |
| **startTime**   | **string**                                                            |             | [default to undefined] |
| **endTime**     | **string**                                                            |             | [default to undefined] |
| **termNo**      | **number**                                                            |             | [default to undefined] |
| **scheduleNo**  | **number**                                                            |             | [default to undefined] |
| **active**      | **boolean**                                                           |             | [default to undefined] |
| **teacher**     | [**ForeignKey**](ForeignKey.md)                                       |             | [default to undefined] |
| **room**        | [**ForeignKey**](ForeignKey.md)                                       |             | [default to undefined] |
| **description** | **string**                                                            |             | [default to undefined] |

## Example

```typescript
import { EnrollmentSchedulesAttendance } from "./api";

const instance: EnrollmentSchedulesAttendance = {
  _id,
  scheduleId,
  attend,
  billingId,
  status,
  replacement,
  startTime,
  endTime,
  termNo,
  scheduleNo,
  active,
  teacher,
  room,
  description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
