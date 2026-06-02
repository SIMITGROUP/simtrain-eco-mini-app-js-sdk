# StudentListItemWithSummary

## Properties

| Name                      | Type                            | Description | Notes                     |
| ------------------------- | ------------------------------- | ----------- | ------------------------- |
| **\_id**                  | **string**                      |             | [default to undefined]    |
| **studentCode**           | **string**                      |             | [default to undefined]    |
| **studentName**           | **string**                      |             | [default to undefined]    |
| **alternateName**         | **string**                      |             | [default to undefined]    |
| **imageUrl**              | **string**                      |             | [default to undefined]    |
| **status**                | **string**                      |             | [default to undefined]    |
| **level**                 | [**ForeignKey**](ForeignKey.md) |             | [default to undefined]    |
| **studentGroup**          | [**ForeignKey**](ForeignKey.md) |             | [default to undefined]    |
| **email**                 | **string**                      |             | [default to undefined]    |
| **gender**                | **string**                      |             | [default to undefined]    |
| **documentQty**           | **number**                      |             | [default to 0]            |
| **ledgerAmt**             | **number**                      |             | [default to 0]            |
| **outstandingAmount**     | **number**                      |             | [optional] [default to 0] |
| **totalInvoiceAmount**    | **number**                      |             | [optional] [default to 0] |
| **totalInvoiceQuantity**  | **number**                      |             | [optional] [default to 0] |
| **totalEnrollment**       | **number**                      |             | [optional] [default to 0] |
| **totalActiveEnrollment** | **number**                      |             | [optional] [default to 0] |

## Example

```typescript
import { StudentListItemWithSummary } from "./api";

const instance: StudentListItemWithSummary = {
  _id,
  studentCode,
  studentName,
  alternateName,
  imageUrl,
  status,
  level,
  studentGroup,
  email,
  gender,
  documentQty,
  ledgerAmt,
  outstandingAmount,
  totalInvoiceAmount,
  totalInvoiceQuantity,
  totalEnrollment,
  totalActiveEnrollment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
