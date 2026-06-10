# CommissionResponseData

## Properties

| Name                      | Type                                                           | Description | Notes                             |
| ------------------------- | -------------------------------------------------------------- | ----------- | --------------------------------- |
| **inChargeCommission**    | [**Array&lt;InChargeCommissions&gt;**](InChargeCommissions.md) |             | [optional] [default to undefined] |
| **inChargeSummary**       | [**ClassSubTotalSummaries**](ClassSubTotalSummaries.md)        |             | [optional] [default to undefined] |
| **replacementCommission** | [**Array&lt;InChargeCommissions&gt;**](InChargeCommissions.md) |             | [optional] [default to undefined] |
| **replaceSummary**        | [**ClassSubTotalSummaries**](ClassSubTotalSummaries.md)        |             | [optional] [default to undefined] |
| **summary**               | [**CommissionSummaries**](CommissionSummaries.md)              |             | [optional] [default to undefined] |
| **errorMessage**          | **string**                                                     |             | [optional] [default to undefined] |

## Example

```typescript
import { CommissionResponseData } from "./api";

const instance: CommissionResponseData = {
  inChargeCommission,
  inChargeSummary,
  replacementCommission,
  replaceSummary,
  summary,
  errorMessage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
