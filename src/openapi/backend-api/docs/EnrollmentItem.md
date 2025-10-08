# EnrollmentItem

## Properties

| Name                    | Type                                                   | Description | Notes                             |
| ----------------------- | ------------------------------------------------------ | ----------- | --------------------------------- |
| **\_id**                | **string**                                             |             | [default to undefined]            |
| **enrollmentBillingId** | **string**                                             |             | [optional] [default to undefined] |
| **product**             | [**ForeignKey**](ForeignKey.md)                        |             | [default to undefined]            |
| **tuitionClass**        | [**ForeignKey**](ForeignKey.md)                        |             | [default to undefined]            |
| **\_package**           | [**ForeignKey**](ForeignKey.md)                        |             | [default to undefined]            |
| **level**               | [**ForeignKey**](ForeignKey.md)                        |             | [default to undefined]            |
| **category**            | [**ForeignKey**](ForeignKey.md)                        |             | [default to undefined]            |
| **fee**                 | **number**                                             |             | [default to 0]                    |
| **categoryType**        | **string**                                             |             | [default to '']                   |
| **startDate**           | **string**                                             |             | [default to '']                   |
| **endDate**             | **string**                                             |             | [default to '']                   |
| **billings**            | [**Array&lt;BillingSchedule&gt;**](BillingSchedule.md) |             | [default to undefined]            |
| **billingMethod**       | **string**                                             |             | [default to '']                   |
| **lessonsPerTerm**      | **number**                                             |             | [default to 0]                    |
| **status**              | **string**                                             |             | [default to '']                   |
| **description**         | **string**                                             |             | [default to '']                   |
| **teacher**             | [**ForeignKey**](ForeignKey.md)                        |             | [default to undefined]            |
| **selected**            | **boolean**                                            |             | [default to undefined]            |

## Example

```typescript
import { EnrollmentItem } from "./api";

const instance: EnrollmentItem = {
  _id,
  enrollmentBillingId,
  product,
  tuitionClass,
  _package,
  level,
  category,
  fee,
  categoryType,
  startDate,
  endDate,
  billings,
  billingMethod,
  lessonsPerTerm,
  status,
  description,
  teacher,
  selected,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
