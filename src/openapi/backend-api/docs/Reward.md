# Reward

## Properties

| Name               | Type                                              | Description | Notes                             |
| ------------------ | ------------------------------------------------- | ----------- | --------------------------------- |
| **\_id**           | **string**                                        |             | [optional] [default to undefined] |
| **created**        | **string**                                        |             | [optional] [default to undefined] |
| **updated**        | **string**                                        |             | [optional] [default to undefined] |
| **createdBy**      | **string**                                        |             | [optional] [default to undefined] |
| **updatedBy**      | **string**                                        |             | [optional] [default to undefined] |
| **tenantId**       | **number**                                        |             | [optional] [default to undefined] |
| **orgId**          | **number**                                        |             | [optional] [default to undefined] |
| **branchId**       | **number**                                        |             | [optional] [default to undefined] |
| **rewardNo**       | **string**                                        |             | [optional] [default to undefined] |
| **rewardDate**     | **string**                                        |             | [default to undefined]            |
| **rewardTitle**    | **string**                                        |             | [optional] [default to undefined] |
| **rewardAmount**   | **number**                                        |             | [optional] [default to undefined] |
| **description**    | **string**                                        |             | [optional] [default to undefined] |
| **documentStatus** | **string**                                        |             | [optional] [default to undefined] |
| **student**        | [**RewardStudent**](RewardStudent.md)             |             | [default to undefined]            |
| **preparedBy**     | [**RewardPreparedBy**](RewardPreparedBy.md)       |             | [optional] [default to undefined] |
| **rewardDetails**  | [**RewardRewardDetails**](RewardRewardDetails.md) |             | [optional] [default to undefined] |
| **docNoFormat**    | [**RewardDocNoFormat**](RewardDocNoFormat.md)     |             | [optional] [default to undefined] |

## Example

```typescript
import { Reward } from "./api";

const instance: Reward = {
  _id,
  created,
  updated,
  createdBy,
  updatedBy,
  tenantId,
  orgId,
  branchId,
  rewardNo,
  rewardDate,
  rewardTitle,
  rewardAmount,
  description,
  documentStatus,
  student,
  preparedBy,
  rewardDetails,
  docNoFormat,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
