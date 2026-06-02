# SetupClass

## Properties

| Name                | Type                                            | Description | Notes                             |
| ------------------- | ----------------------------------------------- | ----------- | --------------------------------- |
| **\_id**            | **string**                                      |             | [optional] [default to undefined] |
| **name**            | **string**                                      |             | [optional] [default to undefined] |
| **teacherId**       | **string**                                      |             | [optional] [default to undefined] |
| **subjectId**       | **string**                                      |             | [optional] [default to undefined] |
| **levelId**         | **string**                                      |             | [optional] [default to undefined] |
| **roomId**          | **string**                                      |             | [optional] [default to undefined] |
| **sessionStart**    | **string**                                      |             | [optional] [default to undefined] |
| **sessionEnd**      | **string**                                      |             | [optional] [default to undefined] |
| **classType**       | **string**                                      |             | [optional] [default to undefined] |
| **defaultDuration** | **number**                                      |             | [optional] [default to undefined] |
| **schedule**        | [**SetupClassSchedule**](SetupClassSchedule.md) |             | [optional] [default to undefined] |

## Example

```typescript
import { SetupClass } from "./api";

const instance: SetupClass = {
  _id,
  name,
  teacherId,
  subjectId,
  levelId,
  roomId,
  sessionStart,
  sessionEnd,
  classType,
  defaultDuration,
  schedule,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
