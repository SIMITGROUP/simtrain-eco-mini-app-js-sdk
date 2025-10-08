# StudentAutoComplete

## Properties

| Name             | Type                                              | Description | Notes                             |
| ---------------- | ------------------------------------------------- | ----------- | --------------------------------- |
| **\_id**         | **string**                                        |             | [default to '']                   |
| **code**         | **string**                                        |             | [default to '']                   |
| **label**        | **string**                                        |             | [default to '']                   |
| **studentGroup** | [**StudentStudentGroup**](StudentStudentGroup.md) |             | [optional] [default to undefined] |
| **level**        | [**StudentLevel**](StudentLevel.md)               |             | [optional] [default to undefined] |
| **agent**        | [**StudentAgent**](StudentAgent.md)               |             | [optional] [default to undefined] |

## Example

```typescript
import { StudentAutoComplete } from "./api";

const instance: StudentAutoComplete = {
  _id,
  code,
  label,
  studentGroup,
  level,
  agent,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
