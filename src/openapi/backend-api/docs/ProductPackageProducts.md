# ProductPackageProducts

## Properties

| Name               | Type                                                                                             | Description | Notes                             |
| ------------------ | ------------------------------------------------------------------------------------------------ | ----------- | --------------------------------- |
| **quantity**       | **number**                                                                                       |             | [optional] [default to undefined] |
| **unitPrice**      | **number**                                                                                       |             | [optional] [default to undefined] |
| **billingMethod**  | **string**                                                                                       |             | [optional] [default to undefined] |
| **subTotal**       | **number**                                                                                       |             | [optional] [default to undefined] |
| **description**    | **string**                                                                                       |             | [optional] [default to undefined] |
| **created**        | **string**                                                                                       |             | [optional] [default to undefined] |
| **updated**        | **string**                                                                                       |             | [optional] [default to undefined] |
| **createdBy**      | **string**                                                                                       |             | [optional] [default to undefined] |
| **updatedBy**      | **string**                                                                                       |             | [optional] [default to undefined] |
| **\_id**           | **string**                                                                                       |             | [optional] [default to undefined] |
| **product**        | [**ProductPackageProductsProduct**](ProductPackageProductsProduct.md)                            |             | [optional] [default to undefined] |
| **availableItems** | [**Array&lt;ProductPackageProductsAvailableItems&gt;**](ProductPackageProductsAvailableItems.md) |             | [optional] [default to undefined] |

## Example

```typescript
import { ProductPackageProducts } from "./api";

const instance: ProductPackageProducts = {
  quantity,
  unitPrice,
  billingMethod,
  subTotal,
  description,
  created,
  updated,
  createdBy,
  updatedBy,
  _id,
  product,
  availableItems,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
