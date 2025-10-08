# StudentBillingSchedules

## Properties

| Name              | Type                                                    | Description | Notes                  |
| ----------------- | ------------------------------------------------------- | ----------- | ---------------------- |
| **\_id**          | **string**                                              |             | [default to '']        |
| **billingMethod** | **string**                                              |             | [default to '']        |
| **billingId**     | **string**                                              |             | [default to '']        |
| **startDate**     | **string**                                              |             | [default to '']        |
| **endDate**       | **string**                                              |             | [default to '']        |
| **enrollmentId**  | **string**                                              |             | [default to '']        |
| **fee**           | **number**                                              |             | [default to undefined] |
| **invoice**       | [**BillingScheduleInvoice**](BillingScheduleInvoice.md) |             | [default to undefined] |
| **product**       | [**EnrollmentProduct**](EnrollmentProduct.md)           |             | [default to undefined] |

## Example

```typescript
import { StudentBillingSchedules } from "./api";

const instance: StudentBillingSchedules = {
  _id,
  billingMethod,
  billingId,
  startDate,
  endDate,
  enrollmentId,
  fee,
  invoice,
  product,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
