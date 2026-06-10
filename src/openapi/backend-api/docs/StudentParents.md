# StudentParents

## Properties

| Name             | Type                                                | Description | Notes                             |
| ---------------- | --------------------------------------------------- | ----------- | --------------------------------- |
| **parentType**   | **string**                                          |             | [default to undefined]            |
| **relationship** | **string**                                          |             | [optional] [default to undefined] |
| **description**  | **string**                                          |             | [optional] [default to undefined] |
| **isDefault**    | **boolean**                                         |             | [optional] [default to undefined] |
| **created**      | **string**                                          |             | [optional] [default to undefined] |
| **updated**      | **string**                                          |             | [optional] [default to undefined] |
| **createdBy**    | **string**                                          |             | [optional] [default to undefined] |
| **updatedBy**    | **string**                                          |             | [optional] [default to undefined] |
| **\_id**         | **string**                                          |             | [optional] [default to undefined] |
| **parent**       | [**StudentParentsParent**](StudentParentsParent.md) |             | [default to undefined]            |

## Example

```typescript
import { StudentParents } from "./api";

const instance: StudentParents = {
  parentType,
  relationship,
  description,
  isDefault,
  created,
  updated,
  createdBy,
  updatedBy,
  _id,
  parent,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
