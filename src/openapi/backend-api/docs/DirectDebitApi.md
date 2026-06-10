# DirectDebitApi

All URIs are relative to _http://localhost_

| Method                                                | HTTP request                                                             | Description |
| ----------------------------------------------------- | ------------------------------------------------------------------------ | ----------- |
| [**cancelDda**](#canceldda)                           | **POST** /online-payment/direct-debit/{provider}/dda/{ddaRefNo}/cancel   |             |
| [**cancelDdi**](#cancelddi)                           | **POST** /online-payment/direct-debit/{provider}/ddi/{ddiOrderNo}/cancel |             |
| [**createDda**](#createdda)                           | **POST** /online-payment/direct-debit/{provider}/dda                     |             |
| [**createDdi**](#createddi)                           | **POST** /online-payment/direct-debit/{provider}/ddi                     |             |
| [**enquiryDdaByDdaRefNo**](#enquiryddabyddarefno)     | **GET** /online-payment/direct-debit/{provider}/dda/{ddaRefNo}           |             |
| [**enquiryDdiByDdiOrderNo**](#enquiryddibyddiorderno) | **GET** /online-payment/direct-debit/{provider}/ddi/{ddiOrderNo}         |             |

# **cancelDda**

> PaymentServiceDirectdebitauthorization cancelDda()

### Example

```typescript
import { DirectDebitApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new DirectDebitApi(configuration);

let provider: "ringgitpay" | "stripe" | "unknown"; // (default to undefined)
let ddaRefNo: string; // (default to undefined)

const { status, data } = await apiInstance.cancelDda(provider, ddaRefNo);
```

### Parameters

| Name         | Type                      | Description      | Notes                                                                                                  |
| ------------ | ------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------ | --- | --------------------- |
| **provider** | [\*\*&#39;ringgitpay&#39; | &#39;stripe&#39; | &#39;unknown&#39;**]**Array<&#39;ringgitpay&#39; &#124; &#39;stripe&#39; &#124; &#39;unknown&#39;>\*\* |     | defaults to undefined |
| **ddaRefNo** | [**string**]              |                  | defaults to undefined                                                                                  |

### Return type

**PaymentServiceDirectdebitauthorization**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **201**     |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cancelDdi**

> PaymentServiceDirectdebitinstruction cancelDdi()

### Example

```typescript
import { DirectDebitApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new DirectDebitApi(configuration);

let provider: "ringgitpay" | "stripe" | "unknown"; // (default to undefined)
let ddiOrderNo: string; // (default to undefined)

const { status, data } = await apiInstance.cancelDdi(provider, ddiOrderNo);
```

### Parameters

| Name           | Type                      | Description      | Notes                                                                                                  |
| -------------- | ------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------ | --- | --------------------- |
| **provider**   | [\*\*&#39;ringgitpay&#39; | &#39;stripe&#39; | &#39;unknown&#39;**]**Array<&#39;ringgitpay&#39; &#124; &#39;stripe&#39; &#124; &#39;unknown&#39;>\*\* |     | defaults to undefined |
| **ddiOrderNo** | [**string**]              |                  | defaults to undefined                                                                                  |

### Return type

**PaymentServiceDirectdebitinstruction**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **201**     |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createDda**

> PaymentServiceDirectdebitauthorization createDda(paymentServiceCreateDdaDto)

### Example

```typescript
import {
  DirectDebitApi,
  Configuration,
  PaymentServiceCreateDdaDto,
} from "./api";

const configuration = new Configuration();
const apiInstance = new DirectDebitApi(configuration);

let provider: "ringgitpay" | "stripe" | "unknown"; // (default to undefined)
let paymentServiceCreateDdaDto: PaymentServiceCreateDdaDto; //

const { status, data } = await apiInstance.createDda(
  provider,
  paymentServiceCreateDdaDto
);
```

### Parameters

| Name                           | Type                           | Description      | Notes                                                                                                  |
| ------------------------------ | ------------------------------ | ---------------- | ------------------------------------------------------------------------------------------------------ | --- | --------------------- |
| **paymentServiceCreateDdaDto** | **PaymentServiceCreateDdaDto** |                  |                                                                                                        |
| **provider**                   | [\*\*&#39;ringgitpay&#39;      | &#39;stripe&#39; | &#39;unknown&#39;**]**Array<&#39;ringgitpay&#39; &#124; &#39;stripe&#39; &#124; &#39;unknown&#39;>\*\* |     | defaults to undefined |

### Return type

**PaymentServiceDirectdebitauthorization**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **201**     |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createDdi**

> PaymentServiceDirectdebitinstruction createDdi(paymentServiceCreateDdiDto)

### Example

```typescript
import {
  DirectDebitApi,
  Configuration,
  PaymentServiceCreateDdiDto,
} from "./api";

const configuration = new Configuration();
const apiInstance = new DirectDebitApi(configuration);

let provider: "ringgitpay" | "stripe" | "unknown"; // (default to undefined)
let paymentServiceCreateDdiDto: PaymentServiceCreateDdiDto; //

const { status, data } = await apiInstance.createDdi(
  provider,
  paymentServiceCreateDdiDto
);
```

### Parameters

| Name                           | Type                           | Description      | Notes                                                                                                  |
| ------------------------------ | ------------------------------ | ---------------- | ------------------------------------------------------------------------------------------------------ | --- | --------------------- |
| **paymentServiceCreateDdiDto** | **PaymentServiceCreateDdiDto** |                  |                                                                                                        |
| **provider**                   | [\*\*&#39;ringgitpay&#39;      | &#39;stripe&#39; | &#39;unknown&#39;**]**Array<&#39;ringgitpay&#39; &#124; &#39;stripe&#39; &#124; &#39;unknown&#39;>\*\* |     | defaults to undefined |

### Return type

**PaymentServiceDirectdebitinstruction**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **201**     |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enquiryDdaByDdaRefNo**

> PaymentServiceDirectdebitauthorization enquiryDdaByDdaRefNo()

### Example

```typescript
import { DirectDebitApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new DirectDebitApi(configuration);

let provider: "ringgitpay" | "stripe" | "unknown"; // (default to undefined)
let ddaRefNo: string; // (default to undefined)

const { status, data } = await apiInstance.enquiryDdaByDdaRefNo(
  provider,
  ddaRefNo
);
```

### Parameters

| Name         | Type                      | Description      | Notes                                                                                                  |
| ------------ | ------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------ | --- | --------------------- |
| **provider** | [\*\*&#39;ringgitpay&#39; | &#39;stripe&#39; | &#39;unknown&#39;**]**Array<&#39;ringgitpay&#39; &#124; &#39;stripe&#39; &#124; &#39;unknown&#39;>\*\* |     | defaults to undefined |
| **ddaRefNo** | [**string**]              |                  | defaults to undefined                                                                                  |

### Return type

**PaymentServiceDirectdebitauthorization**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enquiryDdiByDdiOrderNo**

> PaymentServiceDirectdebitinstruction enquiryDdiByDdiOrderNo()

### Example

```typescript
import { DirectDebitApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new DirectDebitApi(configuration);

let provider: "ringgitpay" | "stripe" | "unknown"; // (default to undefined)
let ddiOrderNo: string; // (default to undefined)

const { status, data } = await apiInstance.enquiryDdiByDdiOrderNo(
  provider,
  ddiOrderNo
);
```

### Parameters

| Name           | Type                      | Description      | Notes                                                                                                  |
| -------------- | ------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------ | --- | --------------------- |
| **provider**   | [\*\*&#39;ringgitpay&#39; | &#39;stripe&#39; | &#39;unknown&#39;**]**Array<&#39;ringgitpay&#39; &#124; &#39;stripe&#39; &#124; &#39;unknown&#39;>\*\* |     | defaults to undefined |
| **ddiOrderNo** | [**string**]              |                  | defaults to undefined                                                                                  |

### Return type

**PaymentServiceDirectdebitinstruction**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
