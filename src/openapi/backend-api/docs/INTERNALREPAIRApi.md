# INTERNALREPAIRApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteBillingscheduleOutsideEnrollment**](#deletebillingscheduleoutsideenrollment) | **POST** /internal/repair/billingschedule-outside-enrollment/delete | |
|[**previewAccTransactionPaymentKnockOff**](#previewacctransactionpaymentknockoff) | **GET** /internal/repair/acc-transaction-payment-knockoff/preview | |
|[**previewBillingScheduleMissingInvoice**](#previewbillingschedulemissinginvoice) | **GET** /internal/repair/billing-schedule-missing-invoice | |
|[**previewBillingscheduleOutsideEnrollment**](#previewbillingscheduleoutsideenrollment) | **GET** /internal/repair/billingschedule-outside-enrollment/preview | |
|[**previewScheduleAttendanceBillingMismatch**](#previewscheduleattendancebillingmismatch) | **GET** /internal/repair/schedule-attendance-billing-mismatch/preview | |
|[**previewSimbizDuplicateIntegrate**](#previewsimbizduplicateintegrate) | **GET** /internal/repair/simbiz-duplicate-integrate | |
|[**previewSimbizPendingIntegrate**](#previewsimbizpendingintegrate) | **GET** /internal/repair/simbiz-pending-integrate | |
|[**repairAccTransactionPaymentKnockOff**](#repairacctransactionpaymentknockoff) | **POST** /internal/repair/acc-transaction-payment-knockoff/repair | |
|[**repairBillingScheduleMissingInvoice**](#repairbillingschedulemissinginvoice) | **POST** /internal/repair/billing-schedule-missing-invoice | |
|[**repairScheduleAttendanceBillingMismatch**](#repairscheduleattendancebillingmismatch) | **POST** /internal/repair/schedule-attendance-billing-mismatch/repair | |
|[**repairSimbizDuplicateIntegrate**](#repairsimbizduplicateintegrate) | **POST** /internal/repair/simbiz-duplicate-integrate | |
|[**repairSimbizPendingIntegrate**](#repairsimbizpendingintegrate) | **POST** /internal/repair/simbiz-pending-integrate | |

# **deleteBillingscheduleOutsideEnrollment**
> deleteBillingscheduleOutsideEnrollment()

Delete billingschedule rows that preview marks deleteAllowed.

### Example

```typescript
import {
    INTERNALREPAIRApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new INTERNALREPAIRApi(configuration);

let tenantId: number; // (optional) (default to undefined)
let orgId: number; // (optional) (default to undefined)
let branchId: number; // (optional) (default to undefined)
let enrollmentId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.deleteBillingscheduleOutsideEnrollment(
    tenantId,
    orgId,
    branchId,
    enrollmentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**number**] |  | (optional) defaults to undefined|
| **orgId** | [**number**] |  | (optional) defaults to undefined|
| **branchId** | [**number**] |  | (optional) defaults to undefined|
| **enrollmentId** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **previewAccTransactionPaymentKnockOff**
> previewAccTransactionPaymentKnockOff()

Preview invoice AR rows to upsert payment knock-off from confirmed payment lines.

### Example

```typescript
import {
    INTERNALREPAIRApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new INTERNALREPAIRApi(configuration);

let tenantId: number; // (optional) (default to undefined)
let orgId: number; // (optional) (default to undefined)
let branchId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.previewAccTransactionPaymentKnockOff(
    tenantId,
    orgId,
    branchId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**number**] |  | (optional) defaults to undefined|
| **orgId** | [**number**] |  | (optional) defaults to undefined|
| **branchId** | [**number**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **previewBillingScheduleMissingInvoice**
> previewBillingScheduleMissingInvoice()

Preview confirm invoices whose enrollmentBillingId to a billingschedule row with missing embedded invoice.

### Example

```typescript
import {
    INTERNALREPAIRApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new INTERNALREPAIRApi(configuration);

let tenantId: number; //If set, only this tenant (optional) (default to undefined)

const { status, data } = await apiInstance.previewBillingScheduleMissingInvoice(
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**number**] | If set, only this tenant | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **previewBillingscheduleOutsideEnrollment**
> previewBillingscheduleOutsideEnrollment()

List billingschedule rows with no embedded invoice, no scheduleattendance refs, no invoice.details.enrollmentBillingId.

### Example

```typescript
import {
    INTERNALREPAIRApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new INTERNALREPAIRApi(configuration);

let tenantId: number; // (optional) (default to undefined)
let orgId: number; // (optional) (default to undefined)
let branchId: number; // (optional) (default to undefined)
let enrollmentId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.previewBillingscheduleOutsideEnrollment(
    tenantId,
    orgId,
    branchId,
    enrollmentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**number**] |  | (optional) defaults to undefined|
| **orgId** | [**number**] |  | (optional) defaults to undefined|
| **branchId** | [**number**] |  | (optional) defaults to undefined|
| **enrollmentId** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **previewScheduleAttendanceBillingMismatch**
> previewScheduleAttendanceBillingMismatch()

Repairable attendance rows for month billing only (enrollment.billingMethod = month).

### Example

```typescript
import {
    INTERNALREPAIRApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new INTERNALREPAIRApi(configuration);

let tenantId: number; // (optional) (default to undefined)
let orgId: number; // (optional) (default to undefined)
let branchId: number; // (optional) (default to undefined)
let enrollmentId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.previewScheduleAttendanceBillingMismatch(
    tenantId,
    orgId,
    branchId,
    enrollmentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**number**] |  | (optional) defaults to undefined|
| **orgId** | [**number**] |  | (optional) defaults to undefined|
| **branchId** | [**number**] |  | (optional) defaults to undefined|
| **enrollmentId** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **previewSimbizDuplicateIntegrate**
> previewSimbizDuplicateIntegrate()

Preview duplicate integrateSystem confirms for all centres (org/branch) under tenantId.

### Example

```typescript
import {
    INTERNALREPAIRApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new INTERNALREPAIRApi(configuration);

let tenantId: number; // (default to undefined)
let appId: any; // (optional) (default to undefined)

const { status, data } = await apiInstance.previewSimbizDuplicateIntegrate(
    tenantId,
    appId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**number**] |  | defaults to undefined|
| **appId** | **any** |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **previewSimbizPendingIntegrate**
> previewSimbizPendingIntegrate()

List every document where integrateSystem has pending for an appId that already has confirm.

### Example

```typescript
import {
    INTERNALREPAIRApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new INTERNALREPAIRApi(configuration);

const { status, data } = await apiInstance.previewSimbizPendingIntegrate();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **repairAccTransactionPaymentKnockOff**
> repairAccTransactionPaymentKnockOff()

Upsert payment knock-off on invoice account transactions.

### Example

```typescript
import {
    INTERNALREPAIRApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new INTERNALREPAIRApi(configuration);

let tenantId: number; // (optional) (default to undefined)
let orgId: number; // (optional) (default to undefined)
let branchId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.repairAccTransactionPaymentKnockOff(
    tenantId,
    orgId,
    branchId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**number**] |  | (optional) defaults to undefined|
| **orgId** | [**number**] |  | (optional) defaults to undefined|
| **branchId** | [**number**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **repairBillingScheduleMissingInvoice**
> repairBillingScheduleMissingInvoice()

Repair backfill billingschedule.invoice from confirm invoice lines. Optional tenantId.

### Example

```typescript
import {
    INTERNALREPAIRApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new INTERNALREPAIRApi(configuration);

let tenantId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.repairBillingScheduleMissingInvoice(
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**number**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **repairScheduleAttendanceBillingMismatch**
> repairScheduleAttendanceBillingMismatch()

Same scope as mismatch preview: updates repairable month-billing rows only.

### Example

```typescript
import {
    INTERNALREPAIRApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new INTERNALREPAIRApi(configuration);

let tenantId: number; // (optional) (default to undefined)
let orgId: number; // (optional) (default to undefined)
let branchId: number; // (optional) (default to undefined)
let enrollmentId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.repairScheduleAttendanceBillingMismatch(
    tenantId,
    orgId,
    branchId,
    enrollmentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**number**] |  | (optional) defaults to undefined|
| **orgId** | [**number**] |  | (optional) defaults to undefined|
| **branchId** | [**number**] |  | (optional) defaults to undefined|
| **enrollmentId** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **repairSimbizDuplicateIntegrate**
> repairSimbizDuplicateIntegrate(repairSimbizDuplicateIntegrateRequest)

Void duplicate integrateSystem confirms per centre under tenantId, then optionally void duplicate JEs in the accounting system.

### Example

```typescript
import {
    INTERNALREPAIRApi,
    Configuration,
    RepairSimbizDuplicateIntegrateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new INTERNALREPAIRApi(configuration);

let repairSimbizDuplicateIntegrateRequest: RepairSimbizDuplicateIntegrateRequest; //

const { status, data } = await apiInstance.repairSimbizDuplicateIntegrate(
    repairSimbizDuplicateIntegrateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **repairSimbizDuplicateIntegrateRequest** | **RepairSimbizDuplicateIntegrateRequest**|  | |


### Return type

void (empty response body)

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **repairSimbizPendingIntegrate**
> repairSimbizPendingIntegrate()

Remove all single integrateSystem pending rows for all tenants.

### Example

```typescript
import {
    INTERNALREPAIRApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new INTERNALREPAIRApi(configuration);

const { status, data } = await apiInstance.repairSimbizPendingIntegrate();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

