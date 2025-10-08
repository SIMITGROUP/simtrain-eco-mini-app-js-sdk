# CreditNoteStudent

## Properties

| Name             | Type                                                                  | Description | Notes                             |
| ---------------- | --------------------------------------------------------------------- | ----------- | --------------------------------- |
| **\_id**         | **string**                                                            |             | [default to undefined]            |
| **label**        | **string**                                                            |             | [optional] [default to undefined] |
| **code**         | **string**                                                            |             | [optional] [default to undefined] |
| **agent**        | [**CreditNoteStudentAgent**](CreditNoteStudentAgent.md)               |             | [optional] [default to undefined] |
| **level**        | [**CreditNoteStudentLevel**](CreditNoteStudentLevel.md)               |             | [optional] [default to undefined] |
| **studentGroup** | [**CreditNoteStudentStudentGroup**](CreditNoteStudentStudentGroup.md) |             | [optional] [default to undefined] |

## Example

```typescript
import { CreditNoteStudent } from "./api";

const instance: CreditNoteStudent = {
  _id,
  label,
  code,
  agent,
  level,
  studentGroup,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
