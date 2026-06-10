# TuitionClassProduct

## Properties

| Name                | Type                                                        | Description | Notes                             |
| ------------------- | ----------------------------------------------------------- | ----------- | --------------------------------- |
| **\_id**            | **string**                                                  |             | [optional] [default to undefined] |
| **code**            | **string**                                                  |             | [optional] [default to undefined] |
| **label**           | **string**                                                  |             | [optional] [default to undefined] |
| **defaultDuration** | **number**                                                  |             | [optional] [default to undefined] |
| **lessonsPerTerm**  | **number**                                                  |             | [optional] [default to undefined] |
| **billingMethod**   | **string**                                                  |             | [optional] [default to undefined] |
| **defaultPrice**    | **number**                                                  |             | [optional] [default to undefined] |
| **level**           | [**TuitionClassProductLevel**](TuitionClassProductLevel.md) |             | [optional] [default to undefined] |

## Example

```typescript
import { TuitionClassProduct } from "./api";

const instance: TuitionClassProduct = {
  _id,
  code,
  label,
  defaultDuration,
  lessonsPerTerm,
  billingMethod,
  defaultPrice,
  level,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
