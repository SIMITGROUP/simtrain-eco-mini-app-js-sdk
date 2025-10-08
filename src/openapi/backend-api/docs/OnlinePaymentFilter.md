# OnlinePaymentFilter

## Properties

| Name             | Type                    | Description          | Notes                             |
| ---------------- | ----------------------- | -------------------- | --------------------------------- |
| **dateFrom**     | **string**              |                      | [default to undefined]            |
| **dateTo**       | **string**              |                      | [default to undefined]            |
| **status**       | **string**              |                      | [optional] [default to 'new']     |
| **studentIdArr** | **Array&lt;string&gt;** | Array of student IDs | [optional] [default to undefined] |

## Example

```typescript
import { OnlinePaymentFilter } from "./api";

const instance: OnlinePaymentFilter = {
  dateFrom,
  dateTo,
  status,
  studentIdArr,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
