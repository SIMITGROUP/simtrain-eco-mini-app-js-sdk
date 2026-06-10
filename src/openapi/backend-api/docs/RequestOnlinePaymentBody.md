# RequestOnlinePaymentBody

## Properties

| Name            | Type                                                                           | Description                            | Notes                                              |
| --------------- | ------------------------------------------------------------------------------ | -------------------------------------- | -------------------------------------------------- |
| **datetime**    | **string**                                                                     | Online Payment Date Time (Default now) | [optional] [default to '2000-01-01T00:00:00.000Z'] |
| **email**       | **string**                                                                     | Payer\&#39;s email                     | [default to undefined]                             |
| **amount**      | **number**                                                                     | Total amount to be paid                | [default to undefined]                             |
| **redirectURL** | **string**                                                                     | Frontend\&#39;s redirectURL            | [optional] [default to undefined]                  |
| **parent**      | [**RequestOnlinePaymentParent**](RequestOnlinePaymentParent.md)                |                                        | [default to undefined]                             |
| **student**     | [**RequestOnlinePaymentStudent**](RequestOnlinePaymentStudent.md)              |                                        | [default to undefined]                             |
| **invoices**    | [**Array&lt;RequestOnlinePaymentInvoice&gt;**](RequestOnlinePaymentInvoice.md) |                                        | [default to undefined]                             |
| **source**      | **string**                                                                     | From which system                      | [optional] [default to undefined]                  |

## Example

```typescript
import { RequestOnlinePaymentBody } from "./api";

const instance: RequestOnlinePaymentBody = {
  datetime,
  email,
  amount,
  redirectURL,
  parent,
  student,
  invoices,
  source,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
