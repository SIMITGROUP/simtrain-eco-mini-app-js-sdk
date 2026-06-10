# Announcement

## Properties

| Name                     | Type                                                                                     | Description | Notes                             |
| ------------------------ | ---------------------------------------------------------------------------------------- | ----------- | --------------------------------- |
| **\_id**                 | **string**                                                                               |             | [optional] [default to undefined] |
| **created**              | **string**                                                                               |             | [optional] [default to undefined] |
| **updated**              | **string**                                                                               |             | [optional] [default to undefined] |
| **createdBy**            | **string**                                                                               |             | [optional] [default to undefined] |
| **updatedBy**            | **string**                                                                               |             | [optional] [default to undefined] |
| **tenantId**             | **number**                                                                               |             | [optional] [default to undefined] |
| **orgId**                | **number**                                                                               |             | [optional] [default to undefined] |
| **branchId**             | **number**                                                                               |             | [optional] [default to undefined] |
| **announcementNo**       | **string**                                                                               |             | [optional] [default to undefined] |
| **title**                | **string**                                                                               |             | [default to undefined]            |
| **body**                 | **string**                                                                               |             | [default to undefined]            |
| **targets**              | **string**                                                                               |             | [optional] [default to undefined] |
| **announcementDate**     | **string**                                                                               |             | [default to undefined]            |
| **closeDate**            | **string**                                                                               |             | [default to undefined]            |
| **internalNote**         | **string**                                                                               |             | [optional] [default to undefined] |
| **documentStatus**       | **string**                                                                               |             | [optional] [default to undefined] |
| **announcementtype**     | [**AnnouncementAnnouncementtype**](AnnouncementAnnouncementtype.md)                      |             | [optional] [default to undefined] |
| **notified**             | [**AnnouncementNotified**](AnnouncementNotified.md)                                      |             | [optional] [default to undefined] |
| **targetsTeachers**      | [**Array&lt;AnnouncementTargetsTeachers&gt;**](AnnouncementTargetsTeachers.md)           |             | [optional] [default to undefined] |
| **targetsTeacherGroups** | [**Array&lt;AnnouncementTargetsTeacherGroups&gt;**](AnnouncementTargetsTeacherGroups.md) |             | [optional] [default to undefined] |
| **targetsLevels**        | [**Array&lt;AnnouncementTargetsLevels&gt;**](AnnouncementTargetsLevels.md)               |             | [optional] [default to undefined] |
| **targetsStudents**      | [**Array&lt;AnnouncementTargetsStudents&gt;**](AnnouncementTargetsStudents.md)           |             | [optional] [default to undefined] |
| **targetsClasses**       | [**Array&lt;AnnouncementTargetsClasses&gt;**](AnnouncementTargetsClasses.md)             |             | [optional] [default to undefined] |
| **preparedBy**           | [**AnnouncementPreparedBy**](AnnouncementPreparedBy.md)                                  |             | [optional] [default to undefined] |
| **docNoFormat**          | [**AnnouncementDocNoFormat**](AnnouncementDocNoFormat.md)                                |             | [optional] [default to undefined] |
| **more**                 | **object**                                                                               |             | [optional] [default to undefined] |

## Example

```typescript
import { Announcement } from "./api";

const instance: Announcement = {
  _id,
  created,
  updated,
  createdBy,
  updatedBy,
  tenantId,
  orgId,
  branchId,
  announcementNo,
  title,
  body,
  targets,
  announcementDate,
  closeDate,
  internalNote,
  documentStatus,
  announcementtype,
  notified,
  targetsTeachers,
  targetsTeacherGroups,
  targetsLevels,
  targetsStudents,
  targetsClasses,
  preparedBy,
  docNoFormat,
  more,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
