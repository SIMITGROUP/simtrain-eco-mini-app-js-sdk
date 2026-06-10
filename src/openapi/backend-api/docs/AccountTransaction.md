# AccountTransaction

## Properties

| Name             | Type                                                                         | Description | Notes                             |
| ---------------- | ---------------------------------------------------------------------------- | ----------- | --------------------------------- |
| **\_id**         | **string**                                                                   |             | [optional] [default to undefined] |
| **created**      | **string**                                                                   |             | [optional] [default to undefined] |
| **updated**      | **string**                                                                   |             | [optional] [default to undefined] |
| **createdBy**    | **string**                                                                   |             | [optional] [default to undefined] |
| **updatedBy**    | **string**                                                                   |             | [optional] [default to undefined] |
| **tenantId**     | **number**                                                                   |             | [optional] [default to undefined] |
| **orgId**        | **number**                                                                   |             | [optional] [default to undefined] |
| **branchId**     | **number**                                                                   |             | [optional] [default to undefined] |
| **documentNo**   | **string**                                                                   |             | [default to undefined]            |
| **documentName** | **string**                                                                   |             | [default to undefined]            |
| **date**         | **string**                                                                   |             | [default to undefined]            |
| **amount**       | **number**                                                                   |             | [default to undefined]            |
| **ledgerAmt**    | **number**                                                                   |             | [optional] [default to undefined] |
| **salesAmt**     | **number**                                                                   |             | [optional] [default to undefined] |
| **knockOffAmt**  | **number**                                                                   |             | [default to undefined]            |
| **balance**      | **number**                                                                   |             | [default to undefined]            |
| **refundAmount** | **number**                                                                   |             | [optional] [default to undefined] |
| **description**  | **string**                                                                   |             | [optional] [default to undefined] |
| **student**      | [**AccountTransactionStudent**](AccountTransactionStudent.md)                |             | [default to undefined]            |
| **agent**        | [**AccountTransactionAgent**](AccountTransactionAgent.md)                    |             | [optional] [default to undefined] |
| **document**     | [**AccountTransactionDocument**](AccountTransactionDocument.md)              |             | [default to undefined]            |
| **knockOff**     | [**Array&lt;AccountTransactionKnockOff&gt;**](AccountTransactionKnockOff.md) |             | [optional] [default to undefined] |
| **refunds**      | [**Array&lt;AccountTransactionRefunds&gt;**](AccountTransactionRefunds.md)   |             | [optional] [default to undefined] |

## Example

```typescript
import { AccountTransaction } from "./api";

const instance: AccountTransaction = {
  _id,
  created,
  updated,
  createdBy,
  updatedBy,
  tenantId,
  orgId,
  branchId,
  documentNo,
  documentName,
  date,
  amount,
  ledgerAmt,
  salesAmt,
  knockOffAmt,
  balance,
  refundAmount,
  description,
  student,
  agent,
  document,
  knockOff,
  refunds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
