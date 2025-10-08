# PAYMENTMETHODApi

All URIs are relative to _http://localhost_

| Method                                                        | HTTP request                                 | Description |
| ------------------------------------------------------------- | -------------------------------------------- | ----------- |
| [**autoComplete**](#autocomplete)                             | **POST** /paymentmethod/autocomplete         |             |
| [**runAccountingPaymentMethod**](#runaccountingpaymentmethod) | **GET** /paymentmethod-api/noIsolationSearch |             |
| [**runCreate**](#runcreate)                                   | **POST** /paymentmethod                      |             |
| [**runDefault**](#rundefault)                                 | **GET** /paymentmethod                       |             |
| [**runDelete**](#rundelete)                                   | **DELETE** /paymentmethod/{id}               |             |
| [**runFindOne**](#runfindone)                                 | **GET** /paymentmethod/{id}                  |             |
| [**runPatch**](#runpatch)                                     | **PATCH** /paymentmethod/{id}                |             |
| [**runPatchMany**](#runpatchmany)                             | **PATCH** /paymentmethod/bulk-patch          |             |
| [**runSearch**](#runsearch)                                   | **POST** /paymentmethod/search               |             |
| [**runUpdate**](#runupdate)                                   | **PUT** /paymentmethod/{id}                  |             |

# **autoComplete**

> Array<PaymentMethodAutoComplete> autoComplete(body)

retrieve array of {\_id, code, name}

### Example

```typescript
import { PAYMENTMETHODApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new PAYMENTMETHODApi(configuration);

let keyword: string; // (default to undefined)
let body: object; //Data

const { status, data } = await apiInstance.autoComplete(keyword, body);
```

### Parameters

| Name        | Type         | Description | Notes                 |
| ----------- | ------------ | ----------- | --------------------- |
| **body**    | **object**   | Data        |                       |
| **keyword** | [**string**] |             | defaults to undefined |

### Return type

**Array<PaymentMethodAutoComplete>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description    | Response headers |
| ----------- | -------------- | ---------------- |
| **200**     | Found          | -                |
| **500**     | Internal error | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runAccountingPaymentMethod**

> Array<PaymentMethod> runAccountingPaymentMethod()

### Example

```typescript
import { PAYMENTMETHODApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new PAYMENTMETHODApi(configuration);

const { status, data } = await apiInstance.runAccountingPaymentMethod();
```

### Parameters

This endpoint does not have any parameters.

### Return type

**Array<PaymentMethod>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                      | Response headers |
| ----------- | -------------------------------- | ---------------- |
| **200**     | get all payment method in branch | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runCreate**

> PaymentMethod runCreate(paymentMethod)

### Example

```typescript
import { PAYMENTMETHODApi, Configuration, PaymentMethod } from "./api";

const configuration = new Configuration();
const apiInstance = new PAYMENTMETHODApi(configuration);

let paymentMethod: PaymentMethod; //Data

const { status, data } = await apiInstance.runCreate(paymentMethod);
```

### Parameters

| Name              | Type              | Description | Notes |
| ----------------- | ----------------- | ----------- | ----- |
| **paymentMethod** | **PaymentMethod** | Data        |       |

### Return type

**PaymentMethod**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description    | Response headers |
| ----------- | -------------- | ---------------- |
| **201**     | success        | -                |
| **400**     | bad request    | -                |
| **500**     | internal error | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runDefault**

> object runDefault()

Run default behavior like say hello

### Example

```typescript
import { PAYMENTMETHODApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new PAYMENTMETHODApi(configuration);

const { status, data } = await apiInstance.runDefault();
```

### Parameters

This endpoint does not have any parameters.

### Return type

**object**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description         | Response headers |
| ----------- | ------------------- | ---------------- |
| **200**     | Sample 200 response | -                |
| **500**     | Internal error      | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runDelete**

> PaymentMethod runDelete()

### Example

```typescript
import { PAYMENTMETHODApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new PAYMENTMETHODApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runDelete(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**PaymentMethod**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description        | Response headers |
| ----------- | ------------------ | ---------------- |
| **200**     | success            | -                |
| **404**     | Document not found | -                |
| **500**     | Internal error     | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runFindOne**

> PaymentMethod runFindOne()

### Example

```typescript
import { PAYMENTMETHODApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new PAYMENTMETHODApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runFindOne(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**PaymentMethod**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description        | Response headers |
| ----------- | ------------------ | ---------------- |
| **200**     | Founds             | -                |
| **404**     | Document not found | -                |
| **500**     | Internal error     | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runPatch**

> runPatch(paymentMethod)

### Example

```typescript
import { PAYMENTMETHODApi, Configuration, PaymentMethod } from "./api";

const configuration = new Configuration();
const apiInstance = new PAYMENTMETHODApi(configuration);

let id: string; // (default to undefined)
let paymentMethod: PaymentMethod; //Data

const { status, data } = await apiInstance.runPatch(id, paymentMethod);
```

### Parameters

| Name              | Type              | Description | Notes                 |
| ----------------- | ----------------- | ----------- | --------------------- |
| **paymentMethod** | **PaymentMethod** | Data        |                       |
| **id**            | [**string**]      |             | defaults to undefined |

### Return type

void (empty response body)

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

### HTTP response details

| Status code | Description        | Response headers |
| ----------- | ------------------ | ---------------- |
| **200**     | success            | -                |
| **404**     | Document not found | -                |
| **500**     | Internal error     | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runPatchMany**

> UpdateManyResponse runPatchMany(patchManyRequest)

### Example

```typescript
import { PAYMENTMETHODApi, Configuration, PatchManyRequest } from "./api";

const configuration = new Configuration();
const apiInstance = new PAYMENTMETHODApi(configuration);

let patchManyRequest: PatchManyRequest; //Data

const { status, data } = await apiInstance.runPatchMany(patchManyRequest);
```

### Parameters

| Name                 | Type                 | Description | Notes |
| -------------------- | -------------------- | ----------- | ----- |
| **patchManyRequest** | **PatchManyRequest** | Data        |       |

### Return type

**UpdateManyResponse**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description        | Response headers |
| ----------- | ------------------ | ---------------- |
| **200**     | success            | -                |
| **404**     | Document not found | -                |
| **500**     | Internal error     | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runSearch**

> Array<PaymentMethod> runSearch(body)

### Example

```typescript
import { PAYMENTMETHODApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new PAYMENTMETHODApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<PaymentMethod>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description    | Response headers |
| ----------- | -------------- | ---------------- |
| **200**     | success        | -                |
| **400**     | bad request    | -                |
| **500**     | internal error | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runUpdate**

> runUpdate(paymentMethod)

### Example

```typescript
import { PAYMENTMETHODApi, Configuration, PaymentMethod } from "./api";

const configuration = new Configuration();
const apiInstance = new PAYMENTMETHODApi(configuration);

let id: string; // (default to undefined)
let paymentMethod: PaymentMethod; //Data

const { status, data } = await apiInstance.runUpdate(id, paymentMethod);
```

### Parameters

| Name              | Type              | Description | Notes                 |
| ----------------- | ----------------- | ----------- | --------------------- |
| **paymentMethod** | **PaymentMethod** | Data        |                       |
| **id**            | [**string**]      |             | defaults to undefined |

### Return type

void (empty response body)

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

### HTTP response details

| Status code | Description        | Response headers |
| ----------- | ------------------ | ---------------- |
| **200**     | success            | -                |
| **404**     | Document not found | -                |
| **500**     | Internal error     | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
