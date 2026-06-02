# RewardStudent

## Properties

| Name            | Type                                              | Description | Notes                             |
| --------------- | ------------------------------------------------- | ----------- | --------------------------------- |
| **\_id**        | **string**                                        |             | [default to undefined]            |
| **studentCode** | **string**                                        |             | [optional] [default to undefined] |
| **studentName** | **string**                                        |             | [optional] [default to undefined] |
| **agent**       | [**RewardStudentAgent**](RewardStudentAgent.md)   |             | [optional] [default to undefined] |
| **level**       | [**RewardStudentLevel**](RewardStudentLevel.md)   |             | [optional] [default to undefined] |
| **parent**      | [**RewardStudentParent**](RewardStudentParent.md) |             | [optional] [default to undefined] |

## Example

```typescript
import { RewardStudent } from "./api";

const instance: RewardStudent = {
  _id,
  studentCode,
  studentName,
  agent,
  level,
  parent,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
