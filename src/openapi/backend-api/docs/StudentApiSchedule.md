# StudentApiSchedule

## Properties

| Name                 | Type        | Description | Notes                             |
| -------------------- | ----------- | ----------- | --------------------------------- |
| **\_id**             | **string**  |             | [default to undefined]            |
| **studentId**        | **string**  |             | [default to undefined]            |
| **startTime**        | **string**  |             | [default to undefined]            |
| **endTime**          | **string**  |             | [default to undefined]            |
| **duration**         | **number**  |             | [optional] [default to 0]         |
| **day**              | **string**  |             | [optional] [default to undefined] |
| **tuitionClassId**   | **string**  |             | [default to undefined]            |
| **tuitionClassCode** | **string**  |             | [default to undefined]            |
| **tuitionClassName** | **string**  |             | [default to undefined]            |
| **teacherId**        | **string**  |             | [default to undefined]            |
| **teacherCode**      | **string**  |             | [default to undefined]            |
| **teacherName**      | **string**  |             | [default to undefined]            |
| **teacherGroup**     | **string**  |             | [default to undefined]            |
| **roomId**           | **string**  |             | [default to undefined]            |
| **roomNo**           | **string**  |             | [default to undefined]            |
| **roomName**         | **string**  |             | [default to undefined]            |
| **termNo**           | **number**  |             | [default to 0]                    |
| **scheduleId**       | **string**  |             | [default to undefined]            |
| **scheduleNo**       | **number**  |             | [default to 0]                    |
| **scheduleCount**    | **number**  |             | [default to 0]                    |
| **attend**           | **boolean** |             | [default to undefined]            |
| **totalStudent**     | **number**  |             | [default to 0]                    |
| **totalAttend**      | **number**  |             | [default to 0]                    |
| **totalJoin**        | **number**  |             | [default to 0]                    |
| **totalJoinAttend**  | **number**  |             | [default to 0]                    |

## Example

```typescript
import { StudentApiSchedule } from "./api";

const instance: StudentApiSchedule = {
  _id,
  studentId,
  startTime,
  endTime,
  duration,
  day,
  tuitionClassId,
  tuitionClassCode,
  tuitionClassName,
  teacherId,
  teacherCode,
  teacherName,
  teacherGroup,
  roomId,
  roomNo,
  roomName,
  termNo,
  scheduleId,
  scheduleNo,
  scheduleCount,
  attend,
  totalStudent,
  totalAttend,
  totalJoin,
  totalJoinAttend,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
