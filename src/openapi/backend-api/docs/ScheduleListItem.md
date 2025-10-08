# ScheduleListItem

## Properties

| Name                | Type                            | Description | Notes                  |
| ------------------- | ------------------------------- | ----------- | ---------------------- |
| **\_id**            | **string**                      |             | [default to undefined] |
| **startTime**       | **string**                      |             | [default to undefined] |
| **endTime**         | **string**                      |             | [default to undefined] |
| **day**             | **string**                      |             | [default to undefined] |
| **duration**        | **number**                      |             | [default to 0]         |
| **studentQuantity** | **number**                      |             | [default to 0]         |
| **maxStudents**     | **number**                      |             | [default to 0]         |
| **tuitionClass**    | [**ForeignKey**](ForeignKey.md) |             | [default to undefined] |
| **teacher**         | [**ForeignKey**](ForeignKey.md) |             | [default to undefined] |
| **room**            | [**ForeignKey**](ForeignKey.md) |             | [default to undefined] |
| **active**          | **boolean**                     |             | [default to undefined] |
| **description**     | **string**                      |             | [default to undefined] |

## Example

```typescript
import { ScheduleListItem } from "./api";

const instance: ScheduleListItem = {
  _id,
  startTime,
  endTime,
  day,
  duration,
  studentQuantity,
  maxStudents,
  tuitionClass,
  teacher,
  room,
  active,
  description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
