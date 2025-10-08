# TuitionClassAutoComplete

## Properties

| Name               | Type                                                            | Description | Notes                             |
| ------------------ | --------------------------------------------------------------- | ----------- | --------------------------------- |
| **\_id**           | **string**                                                      |             | [default to '']                   |
| **code**           | **string**                                                      |             | [default to '']                   |
| **label**          | **string**                                                      |             | [default to '']                   |
| **startDate**      | **string**                                                      |             | [optional] [default to undefined] |
| **endDate**        | **string**                                                      |             | [optional] [default to undefined] |
| **level**          | [**TuitionClassLevel**](TuitionClassLevel.md)                   |             | [optional] [default to undefined] |
| **defaultTeacher** | [**TuitionClassDefaultTeacher**](TuitionClassDefaultTeacher.md) |             | [optional] [default to undefined] |
| **studentGroup**   | [**TuitionClassStudentGroup**](TuitionClassStudentGroup.md)     |             | [optional] [default to undefined] |

## Example

```typescript
import { TuitionClassAutoComplete } from "./api";

const instance: TuitionClassAutoComplete = {
  _id,
  code,
  label,
  startDate,
  endDate,
  level,
  defaultTeacher,
  studentGroup,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
