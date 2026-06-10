# TuitionClassWithSummary

## Properties

| Name                | Type                                                                           | Description | Notes                  |
| ------------------- | ------------------------------------------------------------------------------ | ----------- | ---------------------- |
| **\_id**            | **string**                                                                     |             | [default to undefined] |
| **classCode**       | **string**                                                                     |             | [default to undefined] |
| **className**       | **string**                                                                     |             | [default to undefined] |
| **classType**       | **string**                                                                     |             | [default to undefined] |
| **product**         | [**TuitionClassProduct**](TuitionClassProduct.md)                              |             | [default to undefined] |
| **startDate**       | **string**                                                                     |             | [default to undefined] |
| **endDate**         | **string**                                                                     |             | [default to undefined] |
| **level**           | [**TuitionClassLevel**](TuitionClassLevel.md)                                  |             | [default to undefined] |
| **studentGroup**    | [**TuitionClassStudentGroup**](TuitionClassStudentGroup.md)                    |             | [default to undefined] |
| **defaultTeacher**  | [**TuitionClassDefaultTeacher**](TuitionClassDefaultTeacher.md)                |             | [default to undefined] |
| **defaultRoom**     | [**TuitionClassDefaultRoom**](TuitionClassDefaultRoom.md)                      |             | [default to undefined] |
| **scheduleSetting** | [**Array&lt;TuitionClassScheduleSetting&gt;**](TuitionClassScheduleSetting.md) |             | [default to undefined] |
| **active**          | **boolean**                                                                    |             | [default to undefined] |
| **totalStudents**   | **number**                                                                     |             | [default to undefined] |
| **totalSchedules**  | **number**                                                                     |             | [default to undefined] |

## Example

```typescript
import { TuitionClassWithSummary } from "./api";

const instance: TuitionClassWithSummary = {
  _id,
  classCode,
  className,
  classType,
  product,
  startDate,
  endDate,
  level,
  studentGroup,
  defaultTeacher,
  defaultRoom,
  scheduleSetting,
  active,
  totalStudents,
  totalSchedules,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
