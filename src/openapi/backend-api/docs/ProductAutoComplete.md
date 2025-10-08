# ProductAutoComplete

## Properties

| Name                | Type                                      | Description | Notes                             |
| ------------------- | ----------------------------------------- | ----------- | --------------------------------- |
| **\_id**            | **string**                                |             | [default to '']                   |
| **code**            | **string**                                |             | [default to '']                   |
| **label**           | **string**                                |             | [default to '']                   |
| **defaultPrice**    | **number**                                |             | [optional] [default to undefined] |
| **categoryType**    | **string**                                |             | [optional] [default to undefined] |
| **level**           | [**ProductLevel**](ProductLevel.md)       |             | [optional] [default to undefined] |
| **defaultDuration** | **number**                                |             | [optional] [default to undefined] |
| **lessonsPerTerm**  | **number**                                |             | [optional] [default to undefined] |
| **billingMethod**   | **string**                                |             | [optional] [default to undefined] |
| **category**        | [**ProductCategory**](ProductCategory.md) |             | [optional] [default to undefined] |

## Example

```typescript
import { ProductAutoComplete } from "./api";

const instance: ProductAutoComplete = {
  _id,
  code,
  label,
  defaultPrice,
  categoryType,
  level,
  defaultDuration,
  lessonsPerTerm,
  billingMethod,
  category,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
