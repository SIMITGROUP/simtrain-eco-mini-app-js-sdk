# ProductPackageAutoComplete

## Properties

| Name            | Type                                                                 | Description | Notes                             |
| --------------- | -------------------------------------------------------------------- | ----------- | --------------------------------- |
| **\_id**        | **string**                                                           |             | [default to '']                   |
| **code**        | **string**                                                           |             | [default to '']                   |
| **label**       | **string**                                                           |             | [default to '']                   |
| **packageType** | **string**                                                           |             | [optional] [default to undefined] |
| **level**       | [**ProductPackageLevel**](ProductPackageLevel.md)                    |             | [optional] [default to undefined] |
| **amount**      | **number**                                                           |             | [optional] [default to undefined] |
| **products**    | [**Array&lt;ProductPackageProducts&gt;**](ProductPackageProducts.md) |             | [optional] [default to undefined] |

## Example

```typescript
import { ProductPackageAutoComplete } from "./api";

const instance: ProductPackageAutoComplete = {
  _id,
  code,
  label,
  packageType,
  level,
  amount,
  products,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
