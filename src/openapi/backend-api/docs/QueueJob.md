# QueueJob

## Properties

| Name          | Type                                  | Description | Notes                             |
| ------------- | ------------------------------------- | ----------- | --------------------------------- |
| **\_id**      | **string**                            |             | [optional] [default to undefined] |
| **created**   | **string**                            |             | [optional] [default to undefined] |
| **updated**   | **string**                            |             | [optional] [default to undefined] |
| **createdBy** | **string**                            |             | [optional] [default to undefined] |
| **updatedBy** | **string**                            |             | [optional] [default to undefined] |
| **tenantId**  | **number**                            |             | [optional] [default to undefined] |
| **orgId**     | **number**                            |             | [optional] [default to undefined] |
| **branchId**  | **number**                            |             | [optional] [default to undefined] |
| **job**       | [**QueueJobJob**](QueueJobJob.md)     |             | [default to undefined]            |
| **payload**   | **object**                            |             | [optional] [default to undefined] |
| **result**    | **object**                            |             | [optional] [default to undefined] |
| **error**     | [**QueueJobError**](QueueJobError.md) |             | [optional] [default to undefined] |

## Example

```typescript
import { QueueJob } from "./api";

const instance: QueueJob = {
  _id,
  created,
  updated,
  createdBy,
  updatedBy,
  tenantId,
  orgId,
  branchId,
  job,
  payload,
  result,
  error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
