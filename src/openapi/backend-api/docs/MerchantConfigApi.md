# MerchantConfigApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteMerchantConfig**](#deletemerchantconfig) | **DELETE** /onlinepayment/merchant-config | |
|[**getMerchantConfigStatus**](#getmerchantconfigstatus) | **GET** /onlinepayment/merchant-config | |
|[**upsertMerchantConfig**](#upsertmerchantconfig) | **PUT** /onlinepayment/merchant-config | |

# **deleteMerchantConfig**
> OnlinePaymentMerchantConfigResponse deleteMerchantConfig()

Remove payment gateway config and clear the active PaymentMethod online payment flag

### Example

```typescript
import {
    MerchantConfigApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MerchantConfigApi(configuration);

const { status, data } = await apiInstance.deleteMerchantConfig();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**OnlinePaymentMerchantConfigResponse**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMerchantConfigStatus**
> OnlinePaymentMerchantConfigResponse getMerchantConfigStatus()

Get current payment gateway config status and the active PaymentMethod

### Example

```typescript
import {
    MerchantConfigApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MerchantConfigApi(configuration);

const { status, data } = await apiInstance.getMerchantConfigStatus();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**OnlinePaymentMerchantConfigResponse**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upsertMerchantConfig**
> OnlinePaymentMerchantConfigResponse upsertMerchantConfig(onlinePaymentSetMerchantConfigBody)

Set payment gateway provider and credentials, and mark the given PaymentMethod as the active online payment method

### Example

```typescript
import {
    MerchantConfigApi,
    Configuration,
    OnlinePaymentSetMerchantConfigBody
} from './api';

const configuration = new Configuration();
const apiInstance = new MerchantConfigApi(configuration);

let onlinePaymentSetMerchantConfigBody: OnlinePaymentSetMerchantConfigBody; //

const { status, data } = await apiInstance.upsertMerchantConfig(
    onlinePaymentSetMerchantConfigBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **onlinePaymentSetMerchantConfigBody** | **OnlinePaymentSetMerchantConfigBody**|  | |


### Return type

**OnlinePaymentMerchantConfigResponse**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

