# AvailablePackageResponse

## Properties

| Name                        | Type                                                                                  | Description                                               | Notes                             |
| --------------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------- | --------------------------------- |
| **\_id**                    | **string**                                                                            |                                                           | [optional] [default to undefined] |
| **created**                 | **string**                                                                            |                                                           | [optional] [default to undefined] |
| **updated**                 | **string**                                                                            |                                                           | [optional] [default to undefined] |
| **createdBy**               | **string**                                                                            |                                                           | [optional] [default to undefined] |
| **updatedBy**               | **string**                                                                            |                                                           | [optional] [default to undefined] |
| **tenantId**                | **number**                                                                            |                                                           | [optional] [default to undefined] |
| **orgId**                   | **number**                                                                            |                                                           | [optional] [default to undefined] |
| **branchId**                | **number**                                                                            |                                                           | [optional] [default to undefined] |
| **packageCode**             | **string**                                                                            |                                                           | [default to undefined]            |
| **packageName**             | **string**                                                                            |                                                           | [default to undefined]            |
| **packageType**             | **string**                                                                            |                                                           | [default to undefined]            |
| **packageMethod**           | **string**                                                                            |                                                           | [optional] [default to undefined] |
| **active**                  | **boolean**                                                                           |                                                           | [optional] [default to undefined] |
| **description**             | **string**                                                                            |                                                           | [optional] [default to undefined] |
| **amount**                  | **number**                                                                            |                                                           | [default to undefined]            |
| **level**                   | [**ProductPackageLevel**](ProductPackageLevel.md)                                     |                                                           | [default to undefined]            |
| **subjectQuantitySettings** | [**ProductPackageSubjectQuantitySettings**](ProductPackageSubjectQuantitySettings.md) |                                                           | [optional] [default to undefined] |
| **products**                | [**Array&lt;ProductPackageProducts&gt;**](ProductPackageProducts.md)                  |                                                           | [optional] [default to undefined] |
| **more**                    | **object**                                                                            |                                                           | [optional] [default to undefined] |
| **preferProduct**           | **Array&lt;string&gt;**                                                               | Ordered product IDs matching the package slot arrangement | [default to undefined]            |

## Example

```typescript
import { AvailablePackageResponse } from "./api";

const instance: AvailablePackageResponse = {
  _id,
  created,
  updated,
  createdBy,
  updatedBy,
  tenantId,
  orgId,
  branchId,
  packageCode,
  packageName,
  packageType,
  packageMethod,
  active,
  description,
  amount,
  level,
  subjectQuantitySettings,
  products,
  more,
  preferProduct,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
