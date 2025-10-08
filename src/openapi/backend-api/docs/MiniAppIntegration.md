# MiniAppIntegration

## Properties

| Name            | Type                                                                  | Description | Notes                             |
| --------------- | --------------------------------------------------------------------- | ----------- | --------------------------------- |
| **scopes**      | **Array&lt;string&gt;**                                               |             | [optional] [default to undefined] |
| **enabled**     | [**MiniAppIntegrationEnabled**](MiniAppIntegrationEnabled.md)         |             | [default to undefined]            |
| **customField** | [**MiniAppIntegrationCustomField**](MiniAppIntegrationCustomField.md) |             | [optional] [default to undefined] |
| **customPage**  | [**MiniAppIntegrationCustomPage**](MiniAppIntegrationCustomPage.md)   |             | [optional] [default to undefined] |

## Example

```typescript
import { MiniAppIntegration } from "./api";

const instance: MiniAppIntegration = {
  scopes,
  enabled,
  customField,
  customPage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
