# InvoiceDetails

## Properties

| Name                    | Type                                                  | Description | Notes                             |
| ----------------------- | ----------------------------------------------------- | ----------- | --------------------------------- |
| **enrollmentId**        | **string**                                            |             | [optional] [default to undefined] |
| **enrollmentBillingId** | **string**                                            |             | [optional] [default to undefined] |
| **quantity**            | **number**                                            |             | [default to undefined]            |
| **billingMethod**       | **string**                                            |             | [optional] [default to undefined] |
| **unitPrice**           | **number**                                            |             | [default to undefined]            |
| **subTotal**            | **number**                                            |             | [default to undefined]            |
| **description**         | **string**                                            |             | [optional] [default to undefined] |
| **created**             | **string**                                            |             | [optional] [default to undefined] |
| **updated**             | **string**                                            |             | [optional] [default to undefined] |
| **createdBy**           | **string**                                            |             | [optional] [default to undefined] |
| **updatedBy**           | **string**                                            |             | [optional] [default to undefined] |
| **\_id**                | **string**                                            |             | [optional] [default to undefined] |
| **product**             | [**InvoiceDetailsProduct**](InvoiceDetailsProduct.md) |             | [default to undefined]            |
| **\_package**           | [**InvoiceDetailsPackage**](InvoiceDetailsPackage.md) |             | [optional] [default to undefined] |

## Example

```typescript
import { InvoiceDetails } from "./api";

const instance: InvoiceDetails = {
  enrollmentId,
  enrollmentBillingId,
  quantity,
  billingMethod,
  unitPrice,
  subTotal,
  description,
  created,
  updated,
  createdBy,
  updatedBy,
  _id,
  product,
  _package,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
