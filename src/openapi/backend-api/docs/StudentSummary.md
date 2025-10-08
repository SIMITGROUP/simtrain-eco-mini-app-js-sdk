# StudentSummary

## Properties

| Name                  | Type                                                                                   | Description | Notes                             |
| --------------------- | -------------------------------------------------------------------------------------- | ----------- | --------------------------------- |
| **\_id**              | **string**                                                                             |             | [optional] [default to undefined] |
| **created**           | **string**                                                                             |             | [optional] [default to undefined] |
| **updated**           | **string**                                                                             |             | [optional] [default to undefined] |
| **createdBy**         | **string**                                                                             |             | [optional] [default to undefined] |
| **updatedBy**         | **string**                                                                             |             | [optional] [default to undefined] |
| **tenantId**          | **number**                                                                             |             | [optional] [default to undefined] |
| **orgId**             | **number**                                                                             |             | [optional] [default to undefined] |
| **branchId**          | **number**                                                                             |             | [optional] [default to undefined] |
| **ledgerAmt**         | **number**                                                                             |             | [optional] [default to undefined] |
| **salesAmt**          | **number**                                                                             |             | [optional] [default to undefined] |
| **documentQty**       | **number**                                                                             |             | [optional] [default to undefined] |
| **enrollmentQty**     | **number**                                                                             |             | [optional] [default to undefined] |
| **activeEnrollments** | [**Array&lt;StudentSummaryActiveEnrollments&gt;**](StudentSummaryActiveEnrollments.md) |             | [optional] [default to undefined] |

## Example

```typescript
import { StudentSummary } from "./api";

const instance: StudentSummary = {
  _id,
  created,
  updated,
  createdBy,
  updatedBy,
  tenantId,
  orgId,
  branchId,
  ledgerAmt,
  salesAmt,
  documentQty,
  enrollmentQty,
  activeEnrollments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
