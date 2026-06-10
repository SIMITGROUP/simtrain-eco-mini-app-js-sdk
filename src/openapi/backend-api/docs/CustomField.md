# CustomField

## Properties

| Name               | Type                                      | Description | Notes                             |
| ------------------ | ----------------------------------------- | ----------- | --------------------------------- |
| **\_id**           | **string**                                |             | [optional] [default to undefined] |
| **created**        | **string**                                |             | [optional] [default to undefined] |
| **updated**        | **string**                                |             | [optional] [default to undefined] |
| **createdBy**      | **string**                                |             | [optional] [default to undefined] |
| **updatedBy**      | **string**                                |             | [optional] [default to undefined] |
| **tenantId**       | **number**                                |             | [optional] [default to undefined] |
| **orgId**          | **number**                                |             | [optional] [default to undefined] |
| **branchId**       | **number**                                |             | [optional] [default to undefined] |
| **collectionName** | **string**                                |             | [optional] [default to undefined] |
| **form**           | [**CustomFieldForm**](CustomFieldForm.md) |             | [optional] [default to undefined] |
| **list**           | [**CustomFieldList**](CustomFieldList.md) |             | [optional] [default to undefined] |

## Example

```typescript
import { CustomField } from "./api";

const instance: CustomField = {
  _id,
  created,
  updated,
  createdBy,
  updatedBy,
  tenantId,
  orgId,
  branchId,
  collectionName,
  form,
  list,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
