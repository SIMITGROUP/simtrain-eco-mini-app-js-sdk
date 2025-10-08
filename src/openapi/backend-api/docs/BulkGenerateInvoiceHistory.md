# BulkGenerateInvoiceHistory

## Properties

| Name                | Type                                                                                     | Description | Notes                             |
| ------------------- | ---------------------------------------------------------------------------------------- | ----------- | --------------------------------- |
| **\_id**            | **string**                                                                               |             | [optional] [default to undefined] |
| **created**         | **string**                                                                               |             | [optional] [default to undefined] |
| **updated**         | **string**                                                                               |             | [optional] [default to undefined] |
| **createdBy**       | **string**                                                                               |             | [optional] [default to undefined] |
| **updatedBy**       | **string**                                                                               |             | [optional] [default to undefined] |
| **tenantId**        | **number**                                                                               |             | [optional] [default to undefined] |
| **orgId**           | **number**                                                                               |             | [optional] [default to undefined] |
| **branchId**        | **number**                                                                               |             | [optional] [default to undefined] |
| **actionType**      | **string**                                                                               |             | [default to undefined]            |
| **status**          | **string**                                                                               |             | [default to undefined]            |
| **startActionTime** | **string**                                                                               |             | [optional] [default to undefined] |
| **endActionTime**   | **string**                                                                               |             | [optional] [default to undefined] |
| **requestBody**     | **string**                                                                               |             | [optional] [default to undefined] |
| **data**            | **object**                                                                               |             | [optional] [default to undefined] |
| **invoices**        | [**Array&lt;BulkGenerateInvoiceHistoryDetail&gt;**](BulkGenerateInvoiceHistoryDetail.md) |             | [default to undefined]            |

## Example

```typescript
import { BulkGenerateInvoiceHistory } from "./api";

const instance: BulkGenerateInvoiceHistory = {
  _id,
  created,
  updated,
  createdBy,
  updatedBy,
  tenantId,
  orgId,
  branchId,
  actionType,
  status,
  startActionTime,
  endActionTime,
  requestBody,
  data,
  invoices,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
