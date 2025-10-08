# StudentWithSummary

## Properties

| Name                    | Type                                                                                   | Description | Notes                             |
| ----------------------- | -------------------------------------------------------------------------------------- | ----------- | --------------------------------- |
| **\_id**                | **string**                                                                             |             | [optional] [default to undefined] |
| **created**             | **string**                                                                             |             | [optional] [default to undefined] |
| **updated**             | **string**                                                                             |             | [optional] [default to undefined] |
| **createdBy**           | **string**                                                                             |             | [optional] [default to undefined] |
| **updatedBy**           | **string**                                                                             |             | [optional] [default to undefined] |
| **tenantId**            | **number**                                                                             |             | [optional] [default to undefined] |
| **orgId**               | **number**                                                                             |             | [optional] [default to undefined] |
| **branchId**            | **number**                                                                             |             | [optional] [default to undefined] |
| **studentCode**         | **string**                                                                             |             | [optional] [default to undefined] |
| **studentName**         | **string**                                                                             |             | [default to undefined]            |
| **alternateName**       | **string**                                                                             |             | [optional] [default to undefined] |
| **gender**              | **string**                                                                             |             | [default to undefined]            |
| **email**               | **string**                                                                             |             | [optional] [default to undefined] |
| **mobileNo**            | **string**                                                                             |             | [optional] [default to undefined] |
| **icNumber**            | **string**                                                                             |             | [optional] [default to undefined] |
| **barcode**             | **string**                                                                             |             | [optional] [default to undefined] |
| **dob**                 | **string**                                                                             |             | [default to undefined]            |
| **joinDate**            | **string**                                                                             |             | [optional] [default to undefined] |
| **leaveDate**           | **string**                                                                             |             | [optional] [default to undefined] |
| **status**              | **string**                                                                             |             | [optional] [default to undefined] |
| **stopDescription**     | **string**                                                                             |             | [optional] [default to undefined] |
| **planReturnDate**      | **string**                                                                             |             | [optional] [default to undefined] |
| **recurringFeeEndDate** | **string**                                                                             |             | [optional] [default to undefined] |
| **imageUrl**            | **string**                                                                             |             | [optional] [default to undefined] |
| **studentGroup**        | [**StudentStudentGroup**](StudentStudentGroup.md)                                      |             | [optional] [default to undefined] |
| **level**               | [**StudentLevel**](StudentLevel.md)                                                    |             | [default to undefined]            |
| **race**                | [**StudentRace**](StudentRace.md)                                                      |             | [optional] [default to undefined] |
| **religion**            | [**StudentReligion**](StudentReligion.md)                                              |             | [optional] [default to undefined] |
| **school**              | [**StudentSchool**](StudentSchool.md)                                                  |             | [optional] [default to undefined] |
| **agent**               | [**StudentAgent**](StudentAgent.md)                                                    |             | [optional] [default to undefined] |
| **studentSource**       | [**StudentStudentSource**](StudentStudentSource.md)                                    |             | [optional] [default to undefined] |
| **address**             | [**StudentAddress**](StudentAddress.md)                                                |             | [optional] [default to undefined] |
| **area**                | [**StudentArea**](StudentArea.md)                                                      |             | [optional] [default to undefined] |
| **parents**             | [**Array&lt;StudentParents&gt;**](StudentParents.md)                                   |             | [optional] [default to undefined] |
| **stopReason**          | [**StudentStopReason**](StudentStopReason.md)                                          |             | [optional] [default to undefined] |
| **docNoFormat**         | [**StudentDocNoFormat**](StudentDocNoFormat.md)                                        |             | [optional] [default to undefined] |
| **more**                | **object**                                                                             |             | [optional] [default to undefined] |
| **parentsInfo**         | [**Array&lt;Parent&gt;**](Parent.md)                                                   |             | [default to undefined]            |
| **ledgerAmt**           | **number**                                                                             |             | [default to 0]                    |
| **documentQty**         | **number**                                                                             |             | [default to 0]                    |
| **salesAmt**            | **number**                                                                             |             | [default to 0]                    |
| **enrollmentQty**       | **number**                                                                             |             | [default to 0]                    |
| **activeEnrollments**   | [**Array&lt;StudentSummaryActiveEnrollments&gt;**](StudentSummaryActiveEnrollments.md) |             | [default to undefined]            |

## Example

```typescript
import { StudentWithSummary } from "./api";

const instance: StudentWithSummary = {
  _id,
  created,
  updated,
  createdBy,
  updatedBy,
  tenantId,
  orgId,
  branchId,
  studentCode,
  studentName,
  alternateName,
  gender,
  email,
  mobileNo,
  icNumber,
  barcode,
  dob,
  joinDate,
  leaveDate,
  status,
  stopDescription,
  planReturnDate,
  recurringFeeEndDate,
  imageUrl,
  studentGroup,
  level,
  race,
  religion,
  school,
  agent,
  studentSource,
  address,
  area,
  parents,
  stopReason,
  docNoFormat,
  more,
  parentsInfo,
  ledgerAmt,
  documentQty,
  salesAmt,
  enrollmentQty,
  activeEnrollments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
