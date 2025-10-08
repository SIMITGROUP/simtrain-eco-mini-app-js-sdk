# Level

## Properties

| Name            | Type                                    | Description | Notes                             |
| --------------- | --------------------------------------- | ----------- | --------------------------------- |
| **\_id**        | **string**                              |             | [optional] [default to undefined] |
| **created**     | **string**                              |             | [optional] [default to undefined] |
| **updated**     | **string**                              |             | [optional] [default to undefined] |
| **createdBy**   | **string**                              |             | [optional] [default to undefined] |
| **updatedBy**   | **string**                              |             | [optional] [default to undefined] |
| **tenantId**    | **number**                              |             | [optional] [default to undefined] |
| **orgId**       | **number**                              |             | [optional] [default to undefined] |
| **branchId**    | **number**                              |             | [optional] [default to undefined] |
| **levelCode**   | **string**                              |             | [optional] [default to undefined] |
| **levelName**   | **string**                              |             | [optional] [default to undefined] |
| **active**      | **boolean**                             |             | [optional] [default to undefined] |
| **description** | **string**                              |             | [optional] [default to undefined] |
| **nextLevel**   | [**LevelNextLevel**](LevelNextLevel.md) |             | [optional] [default to undefined] |
| **more**        | **object**                              |             | [optional] [default to undefined] |

## Example

```typescript
import { Level } from "./api";

const instance: Level = {
  _id,
  created,
  updated,
  createdBy,
  updatedBy,
  tenantId,
  orgId,
  branchId,
  levelCode,
  levelName,
  active,
  description,
  nextLevel,
  more,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
