# TuitionClassWithLastSchedule

## Properties

| Name               | Type       | Description                                            | Notes                             |
| ------------------ | ---------- | ------------------------------------------------------ | --------------------------------- |
| **\_id**           | **string** |                                                        | [default to undefined]            |
| **tutorId**        | **string** |                                                        | [default to undefined]            |
| **productId**      | **string** |                                                        | [default to undefined]            |
| **studentGroupId** | **string** |                                                        | [default to undefined]            |
| **lastSchedule**   | **string** | Last schedule before cutoffDate, or null if none found | [optional] [default to undefined] |

## Example

```typescript
import { TuitionClassWithLastSchedule } from "./api";

const instance: TuitionClassWithLastSchedule = {
  _id,
  tutorId,
  productId,
  studentGroupId,
  lastSchedule,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
