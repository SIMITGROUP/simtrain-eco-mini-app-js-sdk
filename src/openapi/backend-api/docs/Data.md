# Data

## Properties

| Name               | Type                                    | Description | Notes                             |
| ------------------ | --------------------------------------- | ----------- | --------------------------------- |
| **documentNo**     | **string**                              |             | [optional] [default to undefined] |
| **documentType**   | **string**                              |             | [optional] [default to undefined] |
| **documentDate**   | **string**                              |             | [optional] [default to undefined] |
| **documentStatus** | **Array&lt;string&gt;**                 |             | [optional] [default to undefined] |
| **eInvoiceStatus** | [**EInvoiceStatus**](EInvoiceStatus.md) |             | [optional] [default to undefined] |

## Example

```typescript
import { Data } from "./api";

const instance: Data = {
  documentNo,
  documentType,
  documentDate,
  documentStatus,
  eInvoiceStatus,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
