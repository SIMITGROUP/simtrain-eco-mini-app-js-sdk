# RefundAutoComplete


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** |  | [default to '']
**code** | **string** |  | [default to '']
**label** | **string** |  | [default to '']
**refundDate** | **string** |  | [default to undefined]
**student** | [**RefundStudent**](RefundStudent.md) |  | [default to undefined]
**agent** | [**RefundAgent**](RefundAgent.md) |  | [optional] [default to undefined]
**refundTotal** | **number** |  | [default to undefined]

## Example

```typescript
import { RefundAutoComplete } from './api';

const instance: RefundAutoComplete = {
    _id,
    code,
    label,
    refundDate,
    student,
    agent,
    refundTotal,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
