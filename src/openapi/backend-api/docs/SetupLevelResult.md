# SetupLevelResult

## Properties

| Name        | Type                                                           | Description | Notes                  |
| ----------- | -------------------------------------------------------------- | ----------- | ---------------------- |
| **total**   | **number**                                                     |             | [default to undefined] |
| **created** | **number**                                                     |             | [default to undefined] |
| **skipped** | [**Array&lt;SetupLevelSkipGroup&gt;**](SetupLevelSkipGroup.md) |             | [default to undefined] |

## Example

```typescript
import { SetupLevelResult } from "./api";

const instance: SetupLevelResult = {
  total,
  created,
  skipped,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
