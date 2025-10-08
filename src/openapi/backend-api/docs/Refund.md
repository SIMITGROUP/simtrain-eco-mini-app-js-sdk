# Refund

## Properties

| Name                | Type                                                               | Description | Notes                             |
| ------------------- | ------------------------------------------------------------------ | ----------- | --------------------------------- |
| **\_id**            | **string**                                                         |             | [optional] [default to undefined] |
| **created**         | **string**                                                         |             | [optional] [default to undefined] |
| **updated**         | **string**                                                         |             | [optional] [default to undefined] |
| **createdBy**       | **string**                                                         |             | [optional] [default to undefined] |
| **updatedBy**       | **string**                                                         |             | [optional] [default to undefined] |
| **tenantId**        | **number**                                                         |             | [optional] [default to undefined] |
| **orgId**           | **number**                                                         |             | [optional] [default to undefined] |
| **branchId**        | **number**                                                         |             | [optional] [default to undefined] |
| **refundNo**        | **string**                                                         |             | [optional] [default to undefined] |
| **refundDate**      | **string**                                                         |             | [default to undefined]            |
| **refundTitle**     | **string**                                                         |             | [optional] [default to undefined] |
| **refundTotal**     | **number**                                                         |             | [default to undefined]            |
| **description**     | **string**                                                         |             | [default to undefined]            |
| **documentStatus**  | **string**                                                         |             | [optional] [default to undefined] |
| **student**         | [**RefundStudent**](RefundStudent.md)                              |             | [default to undefined]            |
| **refundType**      | [**RefundRefundType**](RefundRefundType.md)                        |             | [default to undefined]            |
| **preparedBy**      | [**RefundPreparedBy**](RefundPreparedBy.md)                        |             | [default to undefined]            |
| **notified**        | [**RefundNotified**](RefundNotified.md)                            |             | [optional] [default to undefined] |
| **agent**           | [**RefundAgent**](RefundAgent.md)                                  |             | [optional] [default to undefined] |
| **parent**          | [**RefundParent**](RefundParent.md)                                |             | [optional] [default to undefined] |
| **payment**         | [**RefundPayment**](RefundPayment.md)                              |             | [default to undefined]            |
| **integrateSystem** | [**Array&lt;RefundIntegrateSystem&gt;**](RefundIntegrateSystem.md) |             | [optional] [default to undefined] |
| **docNoFormat**     | [**RefundDocNoFormat**](RefundDocNoFormat.md)                      |             | [optional] [default to undefined] |
| **more**            | **object**                                                         |             | [optional] [default to undefined] |

## Example

```typescript
import { Refund } from "./api";

const instance: Refund = {
  _id,
  created,
  updated,
  createdBy,
  updatedBy,
  tenantId,
  orgId,
  branchId,
  refundNo,
  refundDate,
  refundTitle,
  refundTotal,
  description,
  documentStatus,
  student,
  refundType,
  preparedBy,
  notified,
  agent,
  parent,
  payment,
  integrateSystem,
  docNoFormat,
  more,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
