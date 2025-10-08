# BillingHistoryItem

## Properties

| Name                | Type        | Description | Notes                  |
| ------------------- | ----------- | ----------- | ---------------------- |
| **\_id**            | **string**  |             | [default to '']        |
| **docType**         | **string**  |             | [default to '']        |
| **docNo**           | **string**  |             | [default to '']        |
| **docDate**         | **string**  |             | [default to '']        |
| **description**     | **string**  |             | [default to '']        |
| **docTotal**        | **number**  |             | [default to undefined] |
| **docStatus**       | **string**  |             | [default to '']        |
| **isOnlinePayment** | **boolean** |             | [default to false]     |

## Example

```typescript
import { BillingHistoryItem } from "./api";

const instance: BillingHistoryItem = {
  _id,
  docType,
  docNo,
  docDate,
  description,
  docTotal,
  docStatus,
  isOnlinePayment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
