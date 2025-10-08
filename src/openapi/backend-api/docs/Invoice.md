# Invoice

## Properties

| Name                | Type                                                                 | Description | Notes                             |
| ------------------- | -------------------------------------------------------------------- | ----------- | --------------------------------- |
| **\_id**            | **string**                                                           |             | [optional] [default to undefined] |
| **created**         | **string**                                                           |             | [optional] [default to undefined] |
| **updated**         | **string**                                                           |             | [optional] [default to undefined] |
| **createdBy**       | **string**                                                           |             | [optional] [default to undefined] |
| **updatedBy**       | **string**                                                           |             | [optional] [default to undefined] |
| **tenantId**        | **number**                                                           |             | [optional] [default to undefined] |
| **orgId**           | **number**                                                           |             | [optional] [default to undefined] |
| **branchId**        | **number**                                                           |             | [optional] [default to undefined] |
| **generateId**      | **string**                                                           |             | [optional] [default to undefined] |
| **invoiceNo**       | **string**                                                           |             | [optional] [default to undefined] |
| **invoiceDate**     | **string**                                                           |             | [default to undefined]            |
| **invoiceTitle**    | **string**                                                           |             | [optional] [default to undefined] |
| **invoiceTotal**    | **number**                                                           |             | [default to undefined]            |
| **description**     | **string**                                                           |             | [optional] [default to undefined] |
| **summary**         | **string**                                                           |             | [optional] [default to undefined] |
| **documentStatus**  | **string**                                                           |             | [optional] [default to undefined] |
| **preparedBy**      | [**InvoicePreparedBy**](InvoicePreparedBy.md)                        |             | [optional] [default to undefined] |
| **student**         | [**InvoiceStudent**](InvoiceStudent.md)                              |             | [default to undefined]            |
| **notified**        | [**InvoiceNotified**](InvoiceNotified.md)                            |             | [optional] [default to undefined] |
| **agent**           | [**InvoiceAgent**](InvoiceAgent.md)                                  |             | [optional] [default to undefined] |
| **parent**          | [**InvoiceParent**](InvoiceParent.md)                                |             | [optional] [default to undefined] |
| **details**         | [**Array&lt;InvoiceDetails&gt;**](InvoiceDetails.md)                 |             | [default to undefined]            |
| **integrateSystem** | [**Array&lt;InvoiceIntegrateSystem&gt;**](InvoiceIntegrateSystem.md) |             | [optional] [default to undefined] |
| **docNoFormat**     | [**InvoiceDocNoFormat**](InvoiceDocNoFormat.md)                      |             | [optional] [default to undefined] |
| **more**            | **object**                                                           |             | [optional] [default to undefined] |

## Example

```typescript
import { Invoice } from "./api";

const instance: Invoice = {
  _id,
  created,
  updated,
  createdBy,
  updatedBy,
  tenantId,
  orgId,
  branchId,
  generateId,
  invoiceNo,
  invoiceDate,
  invoiceTitle,
  invoiceTotal,
  description,
  summary,
  documentStatus,
  preparedBy,
  student,
  notified,
  agent,
  parent,
  details,
  integrateSystem,
  docNoFormat,
  more,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
