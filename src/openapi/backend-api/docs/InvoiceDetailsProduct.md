# InvoiceDetailsProduct

## Properties

| Name              | Type                                                                  | Description | Notes                             |
| ----------------- | --------------------------------------------------------------------- | ----------- | --------------------------------- |
| **\_id**          | **string**                                                            |             | [optional] [default to undefined] |
| **code**          | **string**                                                            |             | [optional] [default to undefined] |
| **label**         | **string**                                                            |             | [optional] [default to undefined] |
| **billingMethod** | **string**                                                            |             | [optional] [default to undefined] |
| **defaultPrice**  | **number**                                                            |             | [optional] [default to undefined] |
| **category**      | [**InvoiceDetailsProductCategory**](InvoiceDetailsProductCategory.md) |             | [optional] [default to undefined] |

## Example

```typescript
import { InvoiceDetailsProduct } from "./api";

const instance: InvoiceDetailsProduct = {
  _id,
  code,
  label,
  billingMethod,
  defaultPrice,
  category,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
