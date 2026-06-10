# PaymentStudent

## Properties

| Name             | Type                                                            | Description | Notes                             |
| ---------------- | --------------------------------------------------------------- | ----------- | --------------------------------- |
| **\_id**         | **string**                                                      |             | [default to undefined]            |
| **label**        | **string**                                                      |             | [optional] [default to undefined] |
| **code**         | **string**                                                      |             | [optional] [default to undefined] |
| **agent**        | [**PaymentStudentAgent**](PaymentStudentAgent.md)               |             | [optional] [default to undefined] |
| **level**        | [**PaymentStudentLevel**](PaymentStudentLevel.md)               |             | [optional] [default to undefined] |
| **studentGroup** | [**PaymentStudentStudentGroup**](PaymentStudentStudentGroup.md) |             | [optional] [default to undefined] |

## Example

```typescript
import { PaymentStudent } from "./api";

const instance: PaymentStudent = {
  _id,
  label,
  code,
  agent,
  level,
  studentGroup,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
