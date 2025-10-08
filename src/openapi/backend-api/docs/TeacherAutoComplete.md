# TeacherAutoComplete

## Properties

| Name              | Type                                                   | Description | Notes                             |
| ----------------- | ------------------------------------------------------ | ----------- | --------------------------------- |
| **\_id**          | **string**                                             |             | [default to '']                   |
| **code**          | **string**                                             |             | [default to '']                   |
| **label**         | **string**                                             |             | [default to '']                   |
| **branches**      | [**Array&lt;TeacherBranches&gt;**](TeacherBranches.md) |             | [optional] [default to undefined] |
| **alternateName** | **string**                                             |             | [optional] [default to undefined] |

## Example

```typescript
import { TeacherAutoComplete } from "./api";

const instance: TeacherAutoComplete = {
  _id,
  code,
  label,
  branches,
  alternateName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
