# TuitionClassScheduleSetting

## Properties

| Name            | Type                                                                            | Description | Notes                             |
| --------------- | ------------------------------------------------------------------------------- | ----------- | --------------------------------- |
| **day**         | **string**                                                                      |             | [default to undefined]            |
| **start**       | **string**                                                                      |             | [default to undefined]            |
| **end**         | **string**                                                                      |             | [default to undefined]            |
| **description** | **string**                                                                      |             | [optional] [default to undefined] |
| **created**     | **string**                                                                      |             | [optional] [default to undefined] |
| **updated**     | **string**                                                                      |             | [optional] [default to undefined] |
| **createdBy**   | **string**                                                                      |             | [optional] [default to undefined] |
| **updatedBy**   | **string**                                                                      |             | [optional] [default to undefined] |
| **\_id**        | **string**                                                                      |             | [optional] [default to undefined] |
| **room**        | [**TuitionClassScheduleSettingRoom**](TuitionClassScheduleSettingRoom.md)       |             | [optional] [default to undefined] |
| **teacher**     | [**TuitionClassScheduleSettingTeacher**](TuitionClassScheduleSettingTeacher.md) |             | [optional] [default to undefined] |

## Example

```typescript
import { TuitionClassScheduleSetting } from "./api";

const instance: TuitionClassScheduleSetting = {
  day,
  start,
  end,
  description,
  created,
  updated,
  createdBy,
  updatedBy,
  _id,
  room,
  teacher,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
