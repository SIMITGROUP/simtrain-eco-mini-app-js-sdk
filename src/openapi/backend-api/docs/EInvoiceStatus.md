# EInvoiceStatus

## Properties

| Name               | Type                   | Description | Notes                             |
| ------------------ | ---------------------- | ----------- | --------------------------------- |
| **status**         | **string**             |             | [optional] [default to undefined] |
| **uuid**           | **string**             |             | [optional] [default to undefined] |
| **longId**         | **string**             |             | [optional] [default to undefined] |
| **sessionId**      | **string**             |             | [optional] [default to undefined] |
| **submissionType** | **string**             |             | [optional] [default to undefined] |
| **error**          | **Array&lt;Error&gt;** |             | [optional] [default to undefined] |
| **issueTime**      | **string**             |             | [optional] [default to undefined] |
| **excludeReason**  | **string**             |             | [optional] [default to undefined] |

## Example

```typescript
import { EInvoiceStatus } from "./api";

const instance: EInvoiceStatus = {
  status,
  uuid,
  longId,
  sessionId,
  submissionType,
  error,
  issueTime,
  excludeReason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
