# InvoiceStudent

## Properties

| Name             | Type                                                            | Description | Notes                             |
| ---------------- | --------------------------------------------------------------- | ----------- | --------------------------------- |
| **\_id**         | **string**                                                      |             | [default to undefined]            |
| **label**        | **string**                                                      |             | [optional] [default to undefined] |
| **code**         | **string**                                                      |             | [optional] [default to undefined] |
| **agent**        | [**InvoiceStudentAgent**](InvoiceStudentAgent.md)               |             | [optional] [default to undefined] |
| **level**        | [**InvoiceStudentLevel**](InvoiceStudentLevel.md)               |             | [optional] [default to undefined] |
| **studentGroup** | [**InvoiceStudentStudentGroup**](InvoiceStudentStudentGroup.md) |             | [optional] [default to undefined] |

## Example

```typescript
import { InvoiceStudent } from "./api";

const instance: InvoiceStudent = {
  _id,
  label,
  code,
  agent,
  level,
  studentGroup,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
