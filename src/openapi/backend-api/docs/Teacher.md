# Teacher

## Properties

| Name                  | Type                                                        | Description | Notes                             |
| --------------------- | ----------------------------------------------------------- | ----------- | --------------------------------- |
| **\_id**              | **string**                                                  |             | [optional] [default to undefined] |
| **created**           | **string**                                                  |             | [optional] [default to undefined] |
| **updated**           | **string**                                                  |             | [optional] [default to undefined] |
| **createdBy**         | **string**                                                  |             | [optional] [default to undefined] |
| **updatedBy**         | **string**                                                  |             | [optional] [default to undefined] |
| **tenantId**          | **number**                                                  |             | [optional] [default to undefined] |
| **orgId**             | **number**                                                  |             | [optional] [default to undefined] |
| **branchId**          | **number**                                                  |             | [optional] [default to undefined] |
| **teacherCode**       | **string**                                                  |             | [default to undefined]            |
| **teacherName**       | **string**                                                  |             | [default to undefined]            |
| **alternateName**     | **string**                                                  |             | [optional] [default to undefined] |
| **mobileNo**          | **string**                                                  |             | [default to undefined]            |
| **email**             | **string**                                                  |             | [default to undefined]            |
| **active**            | **boolean**                                                 |             | [optional] [default to undefined] |
| **description**       | **string**                                                  |             | [optional] [default to undefined] |
| **imageUrl**          | **string**                                                  |             | [optional] [default to undefined] |
| **teacherGroup**      | [**TeacherTeacherGroup**](TeacherTeacherGroup.md)           |             | [default to undefined]            |
| **branches**          | [**Array&lt;TeacherBranches&gt;**](TeacherBranches.md)      |             | [default to undefined]            |
| **commissionSetting** | [**TeacherCommissionSetting**](TeacherCommissionSetting.md) |             | [optional] [default to undefined] |
| **docNoFormat**       | [**TeacherDocNoFormat**](TeacherDocNoFormat.md)             |             | [optional] [default to undefined] |
| **more**              | **object**                                                  |             | [optional] [default to undefined] |

## Example

```typescript
import { Teacher } from "./api";

const instance: Teacher = {
  _id,
  created,
  updated,
  createdBy,
  updatedBy,
  tenantId,
  orgId,
  branchId,
  teacherCode,
  teacherName,
  alternateName,
  mobileNo,
  email,
  active,
  description,
  imageUrl,
  teacherGroup,
  branches,
  commissionSetting,
  docNoFormat,
  more,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
