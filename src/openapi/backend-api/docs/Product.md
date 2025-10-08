# Product

## Properties

| Name                | Type                                      | Description | Notes                             |
| ------------------- | ----------------------------------------- | ----------- | --------------------------------- |
| **\_id**            | **string**                                |             | [optional] [default to undefined] |
| **created**         | **string**                                |             | [optional] [default to undefined] |
| **updated**         | **string**                                |             | [optional] [default to undefined] |
| **createdBy**       | **string**                                |             | [optional] [default to undefined] |
| **updatedBy**       | **string**                                |             | [optional] [default to undefined] |
| **tenantId**        | **number**                                |             | [optional] [default to undefined] |
| **orgId**           | **number**                                |             | [optional] [default to undefined] |
| **branchId**        | **number**                                |             | [optional] [default to undefined] |
| **productCode**     | **string**                                |             | [default to undefined]            |
| **productName**     | **string**                                |             | [default to undefined]            |
| **categoryType**    | **string**                                |             | [optional] [default to undefined] |
| **defaultPrice**    | **number**                                |             | [default to undefined]            |
| **billingMethod**   | **string**                                |             | [default to undefined]            |
| **defaultDuration** | **number**                                |             | [optional] [default to undefined] |
| **lessonsPerTerm**  | **number**                                |             | [optional] [default to undefined] |
| **active**          | **boolean**                               |             | [optional] [default to undefined] |
| **description**     | **string**                                |             | [optional] [default to undefined] |
| **tags**            | **Array&lt;string&gt;**                   |             | [optional] [default to undefined] |
| **category**        | [**ProductCategory**](ProductCategory.md) |             | [default to undefined]            |
| **level**           | [**ProductLevel**](ProductLevel.md)       |             | [optional] [default to undefined] |
| **more**            | **object**                                |             | [optional] [default to undefined] |

## Example

```typescript
import { Product } from "./api";

const instance: Product = {
  _id,
  created,
  updated,
  createdBy,
  updatedBy,
  tenantId,
  orgId,
  branchId,
  productCode,
  productName,
  categoryType,
  defaultPrice,
  billingMethod,
  defaultDuration,
  lessonsPerTerm,
  active,
  description,
  tags,
  category,
  level,
  more,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
