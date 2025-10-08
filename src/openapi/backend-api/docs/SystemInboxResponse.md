# SystemInboxResponse

## Properties

| Name                 | Type                            | Description | Notes                             |
| -------------------- | ------------------------------- | ----------- | --------------------------------- |
| **\_id**             | **string**                      |             | [default to '']                   |
| **title**            | **string**                      |             | [default to '']                   |
| **body**             | **string**                      |             | [default to '']                   |
| **type**             | **string**                      |             | [default to '']                   |
| **announcementNo**   | **string**                      |             | [default to '']                   |
| **preparedBy**       | [**ForeignKey**](ForeignKey.md) |             | [optional] [default to undefined] |
| **announcementtype** | [**ForeignKey**](ForeignKey.md) |             | [optional] [default to undefined] |
| **announcementDate** | **string**                      |             | [default to '']                   |
| **closeDate**        | **string**                      |             | [default to '']                   |
| **created**          | **string**                      |             | [default to '']                   |
| **createdBy**        | **string**                      |             | [default to '']                   |
| **read**             | **boolean**                     |             | [optional] [default to false]     |

## Example

```typescript
import { SystemInboxResponse } from "./api";

const instance: SystemInboxResponse = {
  _id,
  title,
  body,
  type,
  announcementNo,
  preparedBy,
  announcementtype,
  announcementDate,
  closeDate,
  created,
  createdBy,
  read,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
