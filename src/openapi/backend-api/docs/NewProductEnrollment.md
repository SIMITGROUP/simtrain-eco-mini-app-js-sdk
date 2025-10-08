# NewProductEnrollment

## Properties

| Name               | Type                                                    | Description | Notes                             |
| ------------------ | ------------------------------------------------------- | ----------- | --------------------------------- |
| **product**        | [**EnrollmentProduct**](EnrollmentProduct.md)           |             | [default to undefined]            |
| **\_package**      | [**ForeignKey**](ForeignKey.md)                         |             | [optional] [default to undefined] |
| **tuitionClass**   | [**EnrollmentTuitionClass**](EnrollmentTuitionClass.md) |             | [optional] [default to undefined] |
| **fee**            | **number**                                              |             | [default to 0]                    |
| **lessonsPerTerm** | **number**                                              |             | [default to 0]                    |
| **categoryType**   | **string**                                              |             | [default to undefined]            |
| **startDate**      | **string**                                              |             | [default to undefined]            |
| **endDate**        | **string**                                              |             | [default to undefined]            |
| **description**    | **string**                                              |             | [default to undefined]            |

## Example

```typescript
import { NewProductEnrollment } from "./api";

const instance: NewProductEnrollment = {
  product,
  _package,
  tuitionClass,
  fee,
  lessonsPerTerm,
  categoryType,
  startDate,
  endDate,
  description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
