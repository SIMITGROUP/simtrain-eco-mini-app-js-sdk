# Payment

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
| **paymentNo**       | **string**                                                           |             | [optional] [default to undefined] |
| **paymentDate**     | **string**                                                           |             | [default to undefined]            |
| **paymentDuedate**  | **string**                                                           |             | [optional] [default to undefined] |
| **paymentTitle**    | **string**                                                           |             | [optional] [default to undefined] |
| **paymentTotal**    | **number**                                                           |             | [default to undefined]            |
| **invoiceTotal**    | **number**                                                           |             | [optional] [default to undefined] |
| **onlinePayment**   | **boolean**                                                          |             | [optional] [default to undefined] |
| **description**     | **string**                                                           |             | [optional] [default to undefined] |
| **documentStatus**  | **string**                                                           |             | [optional] [default to undefined] |
| **student**         | [**PaymentStudent**](PaymentStudent.md)                              |             | [default to undefined]            |
| **preparedBy**      | [**PaymentPreparedBy**](PaymentPreparedBy.md)                        |             | [optional] [default to undefined] |
| **notified**        | [**PaymentNotified**](PaymentNotified.md)                            |             | [optional] [default to undefined] |
| **agent**           | [**PaymentAgent**](PaymentAgent.md)                                  |             | [optional] [default to undefined] |
| **parent**          | [**PaymentParent**](PaymentParent.md)                                |             | [optional] [default to undefined] |
| **invoices**        | [**Array&lt;PaymentInvoices&gt;**](PaymentInvoices.md)               |             | [default to undefined]            |
| **paymentMethods**  | [**Array&lt;PaymentPaymentMethods&gt;**](PaymentPaymentMethods.md)   |             | [default to undefined]            |
| **integrateSystem** | [**Array&lt;PaymentIntegrateSystem&gt;**](PaymentIntegrateSystem.md) |             | [optional] [default to undefined] |
| **docNoFormat**     | [**PaymentDocNoFormat**](PaymentDocNoFormat.md)                      |             | [optional] [default to undefined] |
| **more**            | **object**                                                           |             | [optional] [default to undefined] |

## Example

```typescript
import { Payment } from "./api";

const instance: Payment = {
  _id,
  created,
  updated,
  createdBy,
  updatedBy,
  tenantId,
  orgId,
  branchId,
  paymentNo,
  paymentDate,
  paymentDuedate,
  paymentTitle,
  paymentTotal,
  invoiceTotal,
  onlinePayment,
  description,
  documentStatus,
  student,
  preparedBy,
  notified,
  agent,
  parent,
  invoices,
  paymentMethods,
  integrateSystem,
  docNoFormat,
  more,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
