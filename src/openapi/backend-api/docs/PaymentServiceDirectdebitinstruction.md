# PaymentServiceDirectdebitinstruction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** |  | [optional] [default to undefined]
**ddiId** | **string** |  | [default to undefined]
**ddiOrderNo** | **string** |  | [optional] [default to undefined]
**ddaRefNo** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**statusMessage** | **string** |  | [optional] [default to undefined]
**provider** | **string** |  | [default to undefined]
**requestDateTime** | **string** |  | [optional] [default to undefined]
**debitDate** | **string** |  | [optional] [default to undefined]
**debitAmount** | **string** |  | [optional] [default to undefined]
**confirmationDate** | **string** |  | [optional] [default to undefined]
**source** | **string** |  | [optional] [default to undefined]
**additionalData** | **object** |  | [optional] [default to undefined]
**created** | **string** |  | [optional] [default to undefined]
**updated** | **string** |  | [optional] [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**updatedBy** | **string** |  | [optional] [default to undefined]
**tenantId** | **number** |  | [optional] [default to undefined]
**orgId** | **number** |  | [optional] [default to undefined]
**branchId** | **number** |  | [optional] [default to undefined]
**requestData** | [**PaymentServiceDirectdebitinstructionRequestData**](PaymentServiceDirectdebitinstructionRequestData.md) |  | [default to undefined]
**responses** | [**Array&lt;PaymentServiceDirectdebitinstructionResponses&gt;**](PaymentServiceDirectdebitinstructionResponses.md) |  | [default to undefined]

## Example

```typescript
import { PaymentServiceDirectdebitinstruction } from './api';

const instance: PaymentServiceDirectdebitinstruction = {
    _id,
    ddiId,
    ddiOrderNo,
    ddaRefNo,
    status,
    statusMessage,
    provider,
    requestDateTime,
    debitDate,
    debitAmount,
    confirmationDate,
    source,
    additionalData,
    created,
    updated,
    createdBy,
    updatedBy,
    tenantId,
    orgId,
    branchId,
    requestData,
    responses,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
