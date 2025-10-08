# ParentChild

## Properties

| Name             | Type       | Description                            | Notes                      |
| ---------------- | ---------- | -------------------------------------- | -------------------------- |
| **studentId**    | **string** | ID of the student                      | [default to undefined]     |
| **studentName**  | **string** | Full name of the student               | [default to undefined]     |
| **studentImage** | **string** | Student profile image in base64 format | [default to undefined]     |
| **amount**       | **number** |                                        | [default to 0]             |
| **levelId**      | **string** |                                        | [optional] [default to ''] |
| **levelCode**    | **string** |                                        | [optional] [default to ''] |
| **levelName**    | **string** |                                        | [optional] [default to ''] |

## Example

```typescript
import { ParentChild } from "./api";

const instance: ParentChild = {
  studentId,
  studentName,
  studentImage,
  amount,
  levelId,
  levelCode,
  levelName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
