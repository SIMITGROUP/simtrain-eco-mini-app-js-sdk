# ParentBranch

## Properties

| Name              | Type                                           | Description                             | Notes                             |
| ----------------- | ---------------------------------------------- | --------------------------------------- | --------------------------------- |
| **branchId**      | **number**                                     |                                         | [default to 1]                    |
| **orgId**         | **number**                                     |                                         | [default to 1]                    |
| **tenantId**      | **number**                                     |                                         | [default to 1]                    |
| **onlinePayment** | **boolean**                                    |                                         | [default to undefined]            |
| **branchCode**    | **string**                                     |                                         | [default to undefined]            |
| **branchName**    | **string**                                     |                                         | [default to undefined]            |
| **orgRecordId**   | **string**                                     |                                         | [default to undefined]            |
| **orgName**       | **string**                                     |                                         | [default to undefined]            |
| **street1**       | **string**                                     |                                         | [default to undefined]            |
| **street2**       | **string**                                     |                                         | [default to undefined]            |
| **postcode**      | **string**                                     |                                         | [default to undefined]            |
| **city**          | **string**                                     |                                         | [default to undefined]            |
| **tel**           | **string**                                     |                                         | [default to undefined]            |
| **email**         | **string**                                     |                                         | [default to undefined]            |
| **parentId**      | **string**                                     |                                         | [default to undefined]            |
| **parentName**    | **string**                                     |                                         | [default to undefined]            |
| **xOrg**          | **string**                                     |                                         | [default to undefined]            |
| **totalChild**    | **number**                                     |                                         | [default to 0]                    |
| **totalAmount**   | **number**                                     |                                         | [default to 0]                    |
| **image**         | **string**                                     |                                         | [default to undefined]            |
| **region**        | **string**                                     |                                         | [default to undefined]            |
| **offdays**       | **Array&lt;string&gt;**                        | Array of offdays                        | [default to undefined]            |
| **workingHours**  | [**Array&lt;WorkingHour&gt;**](WorkingHour.md) | Array of working hours                  | [optional] [default to undefined] |
| **workStart**     | **string**                                     | The start time of work                  | [default to undefined]            |
| **workEnd**       | **string**                                     | The end time of work                    | [default to undefined]            |
| **\_package**     | **string**                                     |                                         | [default to '']                   |
| **students**      | [**Array&lt;ParentChild&gt;**](ParentChild.md) | List of students involved in the branch | [optional] [default to undefined] |

## Example

```typescript
import { ParentBranch } from "./api";

const instance: ParentBranch = {
  branchId,
  orgId,
  tenantId,
  onlinePayment,
  branchCode,
  branchName,
  orgRecordId,
  orgName,
  street1,
  street2,
  postcode,
  city,
  tel,
  email,
  parentId,
  parentName,
  xOrg,
  totalChild,
  totalAmount,
  image,
  region,
  offdays,
  workingHours,
  workStart,
  workEnd,
  _package,
  students,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
