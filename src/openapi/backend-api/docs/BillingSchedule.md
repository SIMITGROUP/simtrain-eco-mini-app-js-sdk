# BillingSchedule

## Properties

| Name             | Type                                                    | Description | Notes                             |
| ---------------- | ------------------------------------------------------- | ----------- | --------------------------------- |
| **\_id**         | **string**                                              |             | [optional] [default to undefined] |
| **created**      | **string**                                              |             | [optional] [default to undefined] |
| **updated**      | **string**                                              |             | [optional] [default to undefined] |
| **createdBy**    | **string**                                              |             | [optional] [default to undefined] |
| **updatedBy**    | **string**                                              |             | [optional] [default to undefined] |
| **tenantId**     | **number**                                              |             | [optional] [default to undefined] |
| **orgId**        | **number**                                              |             | [optional] [default to undefined] |
| **branchId**     | **number**                                              |             | [optional] [default to undefined] |
| **enrollmentId** | **string**                                              |             | [default to undefined]            |
| **studentId**    | **string**                                              |             | [default to undefined]            |
| **billingCount** | **number**                                              |             | [default to undefined]            |
| **startDate**    | **string**                                              |             | [default to undefined]            |
| **endDate**      | **string**                                              |             | [default to undefined]            |
| **fee**          | **number**                                              |             | [default to undefined]            |
| **invoice**      | [**BillingScheduleInvoice**](BillingScheduleInvoice.md) |             | [optional] [default to undefined] |

## Example

```typescript
import { BillingSchedule } from "./api";

const instance: BillingSchedule = {
  _id,
  created,
  updated,
  createdBy,
  updatedBy,
  tenantId,
  orgId,
  branchId,
  enrollmentId,
  studentId,
  billingCount,
  startDate,
  endDate,
  fee,
  invoice,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
