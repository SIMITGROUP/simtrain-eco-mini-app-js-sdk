# ImportProduct

## Properties

| Name                | Type       | Description                                                        | Notes                             |
| ------------------- | ---------- | ------------------------------------------------------------------ | --------------------------------- |
| **productCode**     | **string** |                                                                    | [default to undefined]            |
| **productName**     | **string** |                                                                    | [default to undefined]            |
| **defaultPrice**    | **number** |                                                                    | [default to undefined]            |
| **billingMethod**   | **string** |                                                                    | [default to undefined]            |
| **defaultDuration** | **number** |                                                                    | [optional] [default to undefined] |
| **lessonsPerTerm**  | **number** |                                                                    | [optional] [default to undefined] |
| **active**          | **number** |                                                                    | [optional] [default to undefined] |
| **description**     | **string** |                                                                    | [optional] [default to undefined] |
| **categoryCode**    | **string** |                                                                    | [default to undefined]            |
| **categoryName**    | **string** | if code not exist, will using code, label and type create new data | [optional] [default to undefined] |
| **categoryType**    | **string** | if code not exist, will using code, label and type create new data | [default to undefined]            |
| **levelCode**       | **string** |                                                                    | [optional] [default to undefined] |
| **levelName**       | **string** |                                                                    | [optional] [default to undefined] |

## Example

```typescript
import { ImportProduct } from "./api";

const instance: ImportProduct = {
  productCode,
  productName,
  defaultPrice,
  billingMethod,
  defaultDuration,
  lessonsPerTerm,
  active,
  description,
  categoryCode,
  categoryName,
  categoryType,
  levelCode,
  levelName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
