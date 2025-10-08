# EnrollmentSchedules

## Properties

| Name                               | Type                                                                               | Description | Notes                             |
| ---------------------------------- | ---------------------------------------------------------------------------------- | ----------- | --------------------------------- |
| **\_id**                           | **string**                                                                         |             | [optional] [default to undefined] |
| **created**                        | **string**                                                                         |             | [optional] [default to undefined] |
| **updated**                        | **string**                                                                         |             | [optional] [default to undefined] |
| **createdBy**                      | **string**                                                                         |             | [optional] [default to undefined] |
| **updatedBy**                      | **string**                                                                         |             | [optional] [default to undefined] |
| **tenantId**                       | **number**                                                                         |             | [optional] [default to undefined] |
| **orgId**                          | **number**                                                                         |             | [optional] [default to undefined] |
| **branchId**                       | **number**                                                                         |             | [optional] [default to undefined] |
| **enrollmentNo**                   | **string**                                                                         |             | [optional] [default to undefined] |
| **enrollmentTitle**                | **string**                                                                         |             | [optional] [default to undefined] |
| **academySessionClassGeneratorId** | **string**                                                                         |             | [optional] [default to undefined] |
| **fee**                            | **number**                                                                         |             | [default to undefined]            |
| **billingMethod**                  | **string**                                                                         |             | [default to undefined]            |
| **categoryType**                   | **string**                                                                         |             | [default to undefined]            |
| **lessonsPerTerm**                 | **number**                                                                         |             | [optional] [default to undefined] |
| **startDate**                      | **string**                                                                         |             | [default to undefined]            |
| **status**                         | **string**                                                                         |             | [default to undefined]            |
| **endDate**                        | **string**                                                                         |             | [optional] [default to undefined] |
| **planReturnDate**                 | **string**                                                                         |             | [optional] [default to undefined] |
| **restartDate**                    | **string**                                                                         |             | [optional] [default to undefined] |
| **stopDescription**                | **string**                                                                         |             | [optional] [default to undefined] |
| **description**                    | **string**                                                                         |             | [optional] [default to undefined] |
| **product**                        | [**EnrollmentProduct**](EnrollmentProduct.md)                                      |             | [default to undefined]            |
| **\_package**                      | [**EnrollmentPackage**](EnrollmentPackage.md)                                      |             | [optional] [default to undefined] |
| **tuitionClass**                   | [**EnrollmentTuitionClass**](EnrollmentTuitionClass.md)                            |             | [optional] [default to undefined] |
| **student**                        | [**EnrollmentStudent**](EnrollmentStudent.md)                                      |             | [default to undefined]            |
| **level**                          | [**EnrollmentLevel**](EnrollmentLevel.md)                                          |             | [default to undefined]            |
| **stopReason**                     | [**EnrollmentStopReason**](EnrollmentStopReason.md)                                |             | [optional] [default to undefined] |
| **docNoFormat**                    | [**EnrollmentDocNoFormat**](EnrollmentDocNoFormat.md)                              |             | [optional] [default to undefined] |
| **billings**                       | [**Array&lt;BillingSchedule&gt;**](BillingSchedule.md)                             |             | [default to undefined]            |
| **schedules**                      | [**Array&lt;EnrollmentSchedulesAttendance&gt;**](EnrollmentSchedulesAttendance.md) |             | [default to undefined]            |

## Example

```typescript
import { EnrollmentSchedules } from "./api";

const instance: EnrollmentSchedules = {
  _id,
  created,
  updated,
  createdBy,
  updatedBy,
  tenantId,
  orgId,
  branchId,
  enrollmentNo,
  enrollmentTitle,
  academySessionClassGeneratorId,
  fee,
  billingMethod,
  categoryType,
  lessonsPerTerm,
  startDate,
  status,
  endDate,
  planReturnDate,
  restartDate,
  stopDescription,
  description,
  product,
  _package,
  tuitionClass,
  student,
  level,
  stopReason,
  docNoFormat,
  billings,
  schedules,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
