# OnlinePaymentData

## Properties

| Name                | Type                                                              | Description              | Notes                             |
| ------------------- | ----------------------------------------------------------------- | ------------------------ | --------------------------------- |
| **\_id**            | **string**                                                        |                          | [default to undefined]            |
| **onlinePaymentNo** | **string**                                                        | Online Payment No.       | [default to undefined]            |
| **datetime**        | **string**                                                        | Online Payment Date Time | [default to undefined]            |
| **email**           | **string**                                                        | Payer\&#39;s email       | [default to undefined]            |
| **currency**        | **string**                                                        |                          | [default to undefined]            |
| **amount**          | **string**                                                        |                          | [default to undefined]            |
| **redirectURL**     | **string**                                                        |                          | [optional] [default to undefined] |
| **status**          | **string**                                                        |                          | [default to StatusEnum_New]       |
| **failReason**      | **string**                                                        |                          | [optional] [default to undefined] |
| **paymentGateway**  | [**OnlinePaymentPaymentGateway**](OnlinePaymentPaymentGateway.md) |                          | [default to undefined]            |

## Example

```typescript
import { OnlinePaymentData } from "./api";

const instance: OnlinePaymentData = {
  _id,
  onlinePaymentNo,
  datetime,
  email,
  currency,
  amount,
  redirectURL,
  status,
  failReason,
  paymentGateway,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
