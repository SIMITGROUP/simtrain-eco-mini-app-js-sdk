# TenantInvoice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **string** |  | [optional] [default to undefined]
**created** | **string** |  | [optional] [default to undefined]
**updated** | **string** |  | [optional] [default to undefined]
**createdBy** | **string** |  | [optional] [default to undefined]
**updatedBy** | **string** |  | [optional] [default to undefined]
**tenantId** | **number** |  | [optional] [default to undefined]
**orgId** | **number** |  | [optional] [default to undefined]
**branchId** | **number** |  | [optional] [default to undefined]
**invoiceNo** | **string** |  | [default to undefined]
**referenceNo** | **string** |  | [optional] [default to undefined]
**paymentId** | **string** |  | [optional] [default to undefined]
**currency** | **string** |  | [default to undefined]
**invoiceDate** | **string** |  | [default to undefined]
**invoiceSubTotal** | **number** |  | [optional] [default to undefined]
**invoiceAmountBeforeTax** | **number** |  | [optional] [default to undefined]
**invoiceRemark** | **string** |  | [optional] [default to undefined]
**taxName** | **string** |  | [optional] [default to undefined]
**taxRate** | **number** |  | [optional] [default to undefined]
**taxAmount** | **number** |  | [optional] [default to undefined]
**invoiceGrantTotal** | **number** |  | [default to undefined]
**applied** | **boolean** |  | [optional] [default to undefined]
**documentStatus** | **string** |  | [optional] [default to undefined]
**tenant** | [**TenantInvoiceTenant**](TenantInvoiceTenant.md) |  | [default to undefined]
**details** | [**Array&lt;TenantInvoiceDetails&gt;**](TenantInvoiceDetails.md) |  | [default to undefined]
**subscription** | [**TenantInvoiceSubscription**](TenantInvoiceSubscription.md) |  | [optional] [default to undefined]
**company** | [**TenantInvoiceCompany**](TenantInvoiceCompany.md) |  | [optional] [default to undefined]
**integrateSystem** | [**Array&lt;TenantInvoiceIntegrateSystem&gt;**](TenantInvoiceIntegrateSystem.md) |  | [optional] [default to undefined]
**docNoFormat** | [**TenantInvoiceDocNoFormat**](TenantInvoiceDocNoFormat.md) |  | [optional] [default to undefined]

## Example

```typescript
import { TenantInvoice } from './api';

const instance: TenantInvoice = {
    _id,
    created,
    updated,
    createdBy,
    updatedBy,
    tenantId,
    orgId,
    branchId,
    invoiceNo,
    referenceNo,
    paymentId,
    currency,
    invoiceDate,
    invoiceSubTotal,
    invoiceAmountBeforeTax,
    invoiceRemark,
    taxName,
    taxRate,
    taxAmount,
    invoiceGrantTotal,
    applied,
    documentStatus,
    tenant,
    details,
    subscription,
    company,
    integrateSystem,
    docNoFormat,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
