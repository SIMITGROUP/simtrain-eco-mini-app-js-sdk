# AnnouncementResponse

## Properties

| Name                 | Type                            | Description | Notes                             |
| -------------------- | ------------------------------- | ----------- | --------------------------------- |
| **\_id**             | **string**                      |             | [default to '']                   |
| **announcementNo**   | **string**                      |             | [default to '']                   |
| **title**            | **string**                      |             | [default to '']                   |
| **body**             | **string**                      |             | [default to '']                   |
| **preparedBy**       | [**ForeignKey**](ForeignKey.md) |             | [optional] [default to undefined] |
| **announcementtype** | [**ForeignKey**](ForeignKey.md) |             | [optional] [default to undefined] |
| **announcementDate** | **string**                      |             | [default to '']                   |
| **closeDate**        | **string**                      |             | [default to '']                   |
| **read**             | **boolean**                     |             | [optional] [default to false]     |
| **target**           | [**ForeignKey**](ForeignKey.md) |             | [optional] [default to undefined] |

## Example

```typescript
import { AnnouncementResponse } from "./api";

const instance: AnnouncementResponse = {
  _id,
  announcementNo,
  title,
  body,
  preparedBy,
  announcementtype,
  announcementDate,
  closeDate,
  read,
  target,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
