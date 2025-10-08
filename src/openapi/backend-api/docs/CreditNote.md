# CreditNote

## Properties

| Name                | Type                                                                       | Description | Notes                             |
| ------------------- | -------------------------------------------------------------------------- | ----------- | --------------------------------- |
| **\_id**            | **string**                                                                 |             | [optional] [default to undefined] |
| **created**         | **string**                                                                 |             | [optional] [default to undefined] |
| **updated**         | **string**                                                                 |             | [optional] [default to undefined] |
| **createdBy**       | **string**                                                                 |             | [optional] [default to undefined] |
| **updatedBy**       | **string**                                                                 |             | [optional] [default to undefined] |
| **tenantId**        | **number**                                                                 |             | [optional] [default to undefined] |
| **orgId**           | **number**                                                                 |             | [optional] [default to undefined] |
| **branchId**        | **number**                                                                 |             | [optional] [default to undefined] |
| **cnNo**            | **string**                                                                 |             | [optional] [default to undefined] |
| **cnDate**          | **string**                                                                 |             | [default to undefined]            |
| **cnTitle**         | **string**                                                                 |             | [optional] [default to undefined] |
| **cnTotal**         | **number**                                                                 |             | [default to undefined]            |
| **description**     | **string**                                                                 |             | [optional] [default to undefined] |
| **documentStatus**  | **string**                                                                 |             | [optional] [default to undefined] |
| **student**         | [**CreditNoteStudent**](CreditNoteStudent.md)                              |             | [default to undefined]            |
| **preparedBy**      | [**CreditNotePreparedBy**](CreditNotePreparedBy.md)                        |             | [optional] [default to undefined] |
| **notified**        | [**CreditNoteNotified**](CreditNoteNotified.md)                            |             | [optional] [default to undefined] |
| **agent**           | [**CreditNoteAgent**](CreditNoteAgent.md)                                  |             | [optional] [default to undefined] |
| **parent**          | [**CreditNoteParent**](CreditNoteParent.md)                                |             | [optional] [default to undefined] |
| **invoices**        | [**Array&lt;CreditNoteInvoices&gt;**](CreditNoteInvoices.md)               |             | [default to undefined]            |
| **integrateSystem** | [**Array&lt;CreditNoteIntegrateSystem&gt;**](CreditNoteIntegrateSystem.md) |             | [optional] [default to undefined] |
| **docNoFormat**     | [**CreditNoteDocNoFormat**](CreditNoteDocNoFormat.md)                      |             | [optional] [default to undefined] |
| **more**            | **object**                                                                 |             | [optional] [default to undefined] |

## Example

```typescript
import { CreditNote } from "./api";

const instance: CreditNote = {
  _id,
  created,
  updated,
  createdBy,
  updatedBy,
  tenantId,
  orgId,
  branchId,
  cnNo,
  cnDate,
  cnTitle,
  cnTotal,
  description,
  documentStatus,
  student,
  preparedBy,
  notified,
  agent,
  parent,
  invoices,
  integrateSystem,
  docNoFormat,
  more,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
