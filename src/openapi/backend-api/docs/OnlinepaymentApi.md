# OnlinepaymentApi

All URIs are relative to _http://localhost_

| Method                                                    | HTTP request                                                      | Description |
| --------------------------------------------------------- | ----------------------------------------------------------------- | ----------- |
| [**checkOnlinePaymentStatus**](#checkonlinepaymentstatus) | **POST** /onlinepayment/check-online-payment-status/{id}          |             |
| [**getOnlinePayment**](#getonlinepayment)                 | **POST** /onlinepayment/get-online-payment                        |             |
| [**requestOnlinePayment**](#requestonlinepayment)         | **POST** /onlinepayment/request-online-payment                    |             |
| [**validateOnlinePayment**](#validateonlinepayment)       | **POST** /onlinepayment/validate-online-payment/{onlinePaymentId} |             |

# **checkOnlinePaymentStatus**

> OnlinePaymentData checkOnlinePaymentStatus()

Check online payment status

### Example

```typescript
import { OnlinepaymentApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new OnlinepaymentApi(configuration);

let id: string; //The online payment ID (default to undefined)

const { status, data } = await apiInstance.checkOnlinePaymentStatus(id);
```

### Parameters

| Name   | Type         | Description           | Notes                 |
| ------ | ------------ | --------------------- | --------------------- |
| **id** | [**string**] | The online payment ID | defaults to undefined |

### Return type

**OnlinePaymentData**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                   | Response headers |
| ----------- | --------------------------------------------- | ---------------- |
| **200**     | Online payment status retrieved successfully. | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOnlinePayment**

> Array<OnlineMonitoringData> getOnlinePayment()

Get online payment data for monitoring

### Example

```typescript
import { OnlinepaymentApi, Configuration, OnlinePaymentFilter } from "./api";

const configuration = new Configuration();
const apiInstance = new OnlinepaymentApi(configuration);

let onlinePaymentFilter: OnlinePaymentFilter; // (optional)

const { status, data } =
  await apiInstance.getOnlinePayment(onlinePaymentFilter);
```

### Parameters

| Name                    | Type                    | Description | Notes |
| ----------------------- | ----------------------- | ----------- | ----- |
| **onlinePaymentFilter** | **OnlinePaymentFilter** |             |       |

### Return type

**Array<OnlineMonitoringData>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                             | Response headers |
| ----------- | --------------------------------------- | ---------------- |
| **201**     | Validate online payment with valid data | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **requestOnlinePayment**

> RequestOnlinePaymentResponse requestOnlinePayment(requestOnlinePaymentBody)

Request online payment for a student

### Example

```typescript
import {
  OnlinepaymentApi,
  Configuration,
  RequestOnlinePaymentBody,
} from "./api";

const configuration = new Configuration();
const apiInstance = new OnlinepaymentApi(configuration);

let requestOnlinePaymentBody: RequestOnlinePaymentBody; //

const { status, data } = await apiInstance.requestOnlinePayment(
  requestOnlinePaymentBody
);
```

### Parameters

| Name                         | Type                         | Description | Notes |
| ---------------------------- | ---------------------------- | ----------- | ----- |
| **requestOnlinePaymentBody** | **RequestOnlinePaymentBody** |             |       |

### Return type

**RequestOnlinePaymentResponse**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                    | Response headers |
| ----------- | ------------------------------ | ---------------- |
| **201**     | Success request online payment | -                |
| **400**     | Invalid request online payment | -                |
| **500**     | Fail to request online payment | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validateOnlinePayment**

> ValidateOnlinePaymentResponse validateOnlinePayment()

Validate online payment for a student

### Example

```typescript
import { OnlinepaymentApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new OnlinepaymentApi(configuration);

let onlinePaymentId: string; // (default to undefined)

const { status, data } =
  await apiInstance.validateOnlinePayment(onlinePaymentId);
```

### Parameters

| Name                | Type         | Description | Notes                 |
| ------------------- | ------------ | ----------- | --------------------- |
| **onlinePaymentId** | [**string**] |             | defaults to undefined |

### Return type

**ValidateOnlinePaymentResponse**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                             | Response headers |
| ----------- | --------------------------------------- | ---------------- |
| **201**     | Validate online payment with valid data | -                |
| **404**     | Online payment not found                | -                |
| **500**     | Fail to validate online payment         | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
