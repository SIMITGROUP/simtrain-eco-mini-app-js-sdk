# Branch

## Properties

| Name               | Type                                                         | Description | Notes                             |
| ------------------ | ------------------------------------------------------------ | ----------- | --------------------------------- |
| **\_id**           | **string**                                                   |             | [optional] [default to undefined] |
| **created**        | **string**                                                   |             | [optional] [default to undefined] |
| **updated**        | **string**                                                   |             | [optional] [default to undefined] |
| **createdBy**      | **string**                                                   |             | [optional] [default to undefined] |
| **updatedBy**      | **string**                                                   |             | [optional] [default to undefined] |
| **tenantId**       | **number**                                                   |             | [optional] [default to undefined] |
| **orgId**          | **number**                                                   |             | [optional] [default to undefined] |
| **branchId**       | **number**                                                   |             | [optional] [default to undefined] |
| **branchCode**     | **string**                                                   |             | [default to undefined]            |
| **branchName**     | **string**                                                   |             | [default to undefined]            |
| **registrationNo** | **string**                                                   |             | [default to undefined]            |
| **companyName**    | **string**                                                   |             | [default to undefined]            |
| **street1**        | **string**                                                   |             | [optional] [default to undefined] |
| **street2**        | **string**                                                   |             | [optional] [default to undefined] |
| **city**           | **string**                                                   |             | [optional] [default to undefined] |
| **region**         | **string**                                                   |             | [optional] [default to undefined] |
| **postcode**       | **string**                                                   |             | [optional] [default to undefined] |
| **country**        | **string**                                                   |             | [optional] [default to undefined] |
| **tel**            | **string**                                                   |             | [optional] [default to undefined] |
| **email**          | **string**                                                   |             | [optional] [default to undefined] |
| **active**         | **boolean**                                                  |             | [optional] [default to undefined] |
| **offdays**        | **Array&lt;string&gt;**                                      |             | [optional] [default to undefined] |
| **workStart**      | **string**                                                   |             | [default to undefined]            |
| **workEnd**        | **string**                                                   |             | [default to undefined]            |
| **description**    | **string**                                                   |             | [optional] [default to undefined] |
| **invoiceRemark**  | **string**                                                   |             | [optional] [default to undefined] |
| **refundRemark**   | **string**                                                   |             | [optional] [default to undefined] |
| **paymentRemark**  | **string**                                                   |             | [optional] [default to undefined] |
| **cnRemark**       | **string**                                                   |             | [optional] [default to undefined] |
| **imageUrl**       | **string**                                                   |             | [optional] [default to undefined] |
| **organization**   | [**BranchOrganization**](BranchOrganization.md)              |             | [default to undefined]            |
| **workingHours**   | [**Array&lt;BranchWorkingHours&gt;**](BranchWorkingHours.md) |             | [optional] [default to undefined] |
| **more**           | **object**                                                   |             | [optional] [default to undefined] |

## Example

```typescript
import { Branch } from "./api";

const instance: Branch = {
  _id,
  created,
  updated,
  createdBy,
  updatedBy,
  tenantId,
  orgId,
  branchId,
  branchCode,
  branchName,
  registrationNo,
  companyName,
  street1,
  street2,
  city,
  region,
  postcode,
  country,
  tel,
  email,
  active,
  offdays,
  workStart,
  workEnd,
  description,
  invoiceRemark,
  refundRemark,
  paymentRemark,
  cnRemark,
  imageUrl,
  organization,
  workingHours,
  more,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
