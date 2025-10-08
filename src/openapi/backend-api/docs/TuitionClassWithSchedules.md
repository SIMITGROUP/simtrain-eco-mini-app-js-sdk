# TuitionClassWithSchedules

## Properties

| Name                               | Type                                                                           | Description | Notes                             |
| ---------------------------------- | ------------------------------------------------------------------------------ | ----------- | --------------------------------- |
| **\_id**                           | **string**                                                                     |             | [optional] [default to undefined] |
| **created**                        | **string**                                                                     |             | [optional] [default to undefined] |
| **updated**                        | **string**                                                                     |             | [optional] [default to undefined] |
| **createdBy**                      | **string**                                                                     |             | [optional] [default to undefined] |
| **updatedBy**                      | **string**                                                                     |             | [optional] [default to undefined] |
| **tenantId**                       | **number**                                                                     |             | [optional] [default to undefined] |
| **orgId**                          | **number**                                                                     |             | [optional] [default to undefined] |
| **branchId**                       | **number**                                                                     |             | [optional] [default to undefined] |
| **classCode**                      | **string**                                                                     |             | [default to undefined]            |
| **className**                      | **string**                                                                     |             | [optional] [default to undefined] |
| **classType**                      | **string**                                                                     |             | [default to undefined]            |
| **startDate**                      | **string**                                                                     |             | [default to undefined]            |
| **endDate**                        | **string**                                                                     |             | [default to undefined]            |
| **maxLessons**                     | **number**                                                                     |             | [optional] [default to undefined] |
| **originalTuitionClassId**         | **string**                                                                     |             | [optional] [default to undefined] |
| **totalSchedule**                  | **number**                                                                     |             | [optional] [default to undefined] |
| **lessonPlanCount**                | **number**                                                                     |             | [optional] [default to undefined] |
| **academySessionClassGeneratorId** | **string**                                                                     |             | [optional] [default to undefined] |
| **defaultDuration**                | **number**                                                                     |             | [default to undefined]            |
| **billingMethod**                  | **string**                                                                     |             | [optional] [default to undefined] |
| **lessonsPerTerm**                 | **number**                                                                     |             | [optional] [default to undefined] |
| **defaultStart**                   | **string**                                                                     |             | [default to undefined]            |
| **defaultEnd**                     | **string**                                                                     |             | [default to undefined]            |
| **active**                         | **boolean**                                                                    |             | [optional] [default to undefined] |
| **description**                    | **string**                                                                     |             | [optional] [default to undefined] |
| **maxStudents**                    | **number**                                                                     |             | [optional] [default to undefined] |
| **academySession**                 | [**TuitionClassAcademySession**](TuitionClassAcademySession.md)                |             | [default to undefined]            |
| **product**                        | [**TuitionClassProduct**](TuitionClassProduct.md)                              |             | [default to undefined]            |
| **level**                          | [**TuitionClassLevel**](TuitionClassLevel.md)                                  |             | [optional] [default to undefined] |
| **studentGroup**                   | [**TuitionClassStudentGroup**](TuitionClassStudentGroup.md)                    |             | [optional] [default to undefined] |
| **defaultTeacher**                 | [**TuitionClassDefaultTeacher**](TuitionClassDefaultTeacher.md)                |             | [default to undefined]            |
| **defaultRoom**                    | [**TuitionClassDefaultRoom**](TuitionClassDefaultRoom.md)                      |             | [default to undefined]            |
| **scheduleSetting**                | [**Array&lt;TuitionClassScheduleSetting&gt;**](TuitionClassScheduleSetting.md) |             | [optional] [default to undefined] |
| **docNoFormat**                    | [**TuitionClassDocNoFormat**](TuitionClassDocNoFormat.md)                      |             | [optional] [default to undefined] |
| **more**                           | **object**                                                                     |             | [optional] [default to undefined] |
| **schedules**                      | [**Array&lt;ScheduleWithStatistic&gt;**](ScheduleWithStatistic.md)             |             | [default to undefined]            |

## Example

```typescript
import { TuitionClassWithSchedules } from "./api";

const instance: TuitionClassWithSchedules = {
  _id,
  created,
  updated,
  createdBy,
  updatedBy,
  tenantId,
  orgId,
  branchId,
  classCode,
  className,
  classType,
  startDate,
  endDate,
  maxLessons,
  originalTuitionClassId,
  totalSchedule,
  lessonPlanCount,
  academySessionClassGeneratorId,
  defaultDuration,
  billingMethod,
  lessonsPerTerm,
  defaultStart,
  defaultEnd,
  active,
  description,
  maxStudents,
  academySession,
  product,
  level,
  studentGroup,
  defaultTeacher,
  defaultRoom,
  scheduleSetting,
  docNoFormat,
  more,
  schedules,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
