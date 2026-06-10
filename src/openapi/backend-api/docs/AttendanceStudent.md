# AttendanceStudent

## Properties

| Name             | Type                                                                  | Description | Notes                  |
| ---------------- | --------------------------------------------------------------------- | ----------- | ---------------------- |
| **enrollmentId** | **string**                                                            |             | [default to undefined] |
| **attend**       | **boolean**                                                           |             | [default to undefined] |
| **status**       | **string**                                                            |             | [default to undefined] |
| **description**  | **string**                                                            |             | [default to undefined] |
| **\_id**         | **string**                                                            |             | [default to undefined] |
| **student**      | [**ForeignKey**](ForeignKey.md)                                       |             | [default to undefined] |
| **replacement**  | [**AttendanceStudentsReplacement**](AttendanceStudentsReplacement.md) |             | [default to undefined] |

## Example

```typescript
import { AttendanceStudent } from "./api";

const instance: AttendanceStudent = {
  enrollmentId,
  attend,
  status,
  description,
  _id,
  student,
  replacement,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
