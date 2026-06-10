# TuitionClassWithNearbyScheduleParam

## Properties

| Name              | Type                                                                                          | Description                                                                                | Notes                             |
| ----------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | --------------------------------- |
| **referenceDate** | **string**                                                                                    | Reference date (ISO 8601). The query will search for schedules within ±day from this date. | [default to undefined]            |
| **rangeInDays**   | **number**                                                                                    | Number of days before and after the reference date to include (±N days).                   | [default to undefined]            |
| **filters**       | [**TuitionClassNearbyScheduleEntityQuerySpec**](TuitionClassNearbyScheduleEntityQuerySpec.md) | Optional MongoDB filter                                                                    | [optional] [default to undefined] |
| **fields**        | [**TuitionClassNearbyScheduleEntityQuerySpec**](TuitionClassNearbyScheduleEntityQuerySpec.md) | Optional MongoDB projection                                                                | [optional] [default to undefined] |

## Example

```typescript
import { TuitionClassWithNearbyScheduleParam } from "./api";

const instance: TuitionClassWithNearbyScheduleParam = {
  referenceDate,
  rangeInDays,
  filters,
  fields,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
