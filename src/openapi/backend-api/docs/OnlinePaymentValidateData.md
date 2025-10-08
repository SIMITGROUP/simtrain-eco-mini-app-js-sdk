# OnlinePaymentValidateData

## Properties

| Name                | Type       | Description                                  | Notes                             |
| ------------------- | ---------- | -------------------------------------------- | --------------------------------- |
| **\_id**            | **string** |                                              | [default to undefined]            |
| **onlinePaymentNo** | **string** | Online Payment No. (Auto generate if empty.) | [default to undefined]            |
| **status**          | **string** |                                              | [default to StatusEnum_New]       |
| **failReason**      | **string** |                                              | [optional] [default to undefined] |
| **receiptId**       | **string** |                                              | [optional] [default to undefined] |
| **receiptNo**       | **string** |                                              | [optional] [default to undefined] |
| **receiptDate**     | **string** |                                              | [optional] [default to undefined] |

## Example

```typescript
import { OnlinePaymentValidateData } from "./api";

const instance: OnlinePaymentValidateData = {
  _id,
  onlinePaymentNo,
  status,
  failReason,
  receiptId,
  receiptNo,
  receiptDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
