# RefundStudent

## Properties

| Name             | Type                                                          | Description | Notes                             |
| ---------------- | ------------------------------------------------------------- | ----------- | --------------------------------- |
| **\_id**         | **string**                                                    |             | [default to undefined]            |
| **label**        | **string**                                                    |             | [optional] [default to undefined] |
| **code**         | **string**                                                    |             | [optional] [default to undefined] |
| **agent**        | [**RefundStudentAgent**](RefundStudentAgent.md)               |             | [optional] [default to undefined] |
| **level**        | [**RefundStudentLevel**](RefundStudentLevel.md)               |             | [optional] [default to undefined] |
| **studentGroup** | [**RefundStudentStudentGroup**](RefundStudentStudentGroup.md) |             | [optional] [default to undefined] |

## Example

```typescript
import { RefundStudent } from "./api";

const instance: RefundStudent = {
  _id,
  label,
  code,
  agent,
  level,
  studentGroup,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
