# TeacherPerformance

## Properties

| Name                     | Type                                               | Description | Notes                  |
| ------------------------ | -------------------------------------------------- | ----------- | ---------------------- |
| **datetime**             | **string**                                         |             | [default to '']        |
| **totalTeacher**         | **number**                                         |             | [default to 0]         |
| **totalTeacherGroup**    | **number**                                         |             | [default to 0]         |
| **totalLessons**         | **number**                                         |             | [default to 0]         |
| **totalDuration**        | **number**                                         |             | [default to 0]         |
| **totalStudentsByClass** | **number**                                         |             | [default to 0]         |
| **lessons**              | [**Array&lt;AssignSummary&gt;**](AssignSummary.md) |             | [default to undefined] |
| **assign**               | [**Array&lt;AssignSummary&gt;**](AssignSummary.md) |             | [default to undefined] |
| **classDetails**         | [**Array&lt;ClassDetails&gt;**](ClassDetails.md)   |             | [default to undefined] |

## Example

```typescript
import { TeacherPerformance } from "./api";

const instance: TeacherPerformance = {
  datetime,
  totalTeacher,
  totalTeacherGroup,
  totalLessons,
  totalDuration,
  totalStudentsByClass,
  lessons,
  assign,
  classDetails,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
