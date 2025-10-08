# REFUNDApi

All URIs are relative to _http://localhost_

| Method                                                                    | HTTP request                              | Description |
| ------------------------------------------------------------------------- | ----------------------------------------- | ----------- |
| [**autoComplete**](#autocomplete)                                         | **POST** /refund/autocomplete             |             |
| [**refundControllerSetStatusConfirm**](#refundcontrollersetstatusconfirm) | **POST** /refund/{id}/set-confirm         |             |
| [**refundControllerSetStatusDraft**](#refundcontrollersetstatusdraft)     | **POST** /refund/{id}/set-draft           |             |
| [**refundControllerSetStatusVoid**](#refundcontrollersetstatusvoid)       | **POST** /refund/{id}/set-void            |             |
| [**runCreate**](#runcreate)                                               | **POST** /refund                          |             |
| [**runDefault**](#rundefault)                                             | **GET** /refund                           |             |
| [**runDelete**](#rundelete)                                               | **DELETE** /refund/{id}                   |             |
| [**runFindOne**](#runfindone)                                             | **GET** /refund/{id}                      |             |
| [**runPatch**](#runpatch)                                                 | **PATCH** /refund/{id}                    |             |
| [**runPatchMany**](#runpatchmany)                                         | **PATCH** /refund/bulk-patch              |             |
| [**runPrint**](#runprint)                                                 | **GET** /refund-api/{id}/print/{formatId} |             |
| [**runSearch**](#runsearch)                                               | **POST** /refund/search                   |             |
| [**runUpdate**](#runupdate)                                               | **PUT** /refund/{id}                      |             |

# **autoComplete**

> Array<RefundAutoComplete> autoComplete(body)

retrieve array of {\_id, code, name}

### Example

```typescript
import { REFUNDApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new REFUNDApi(configuration);

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

**Array<RefundAutoComplete>**

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

# **refundControllerSetStatusConfirm**

> refundControllerSetStatusConfirm(body)

### Example

```typescript
import { REFUNDApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new REFUNDApi(configuration);

let id: string; // (default to undefined)
let body: object; //Document data

const { status, data } = await apiInstance.refundControllerSetStatusConfirm(
  id,
  body
);
```

### Parameters

| Name     | Type         | Description   | Notes                 |
| -------- | ------------ | ------------- | --------------------- |
| **body** | **object**   | Document data |                       |
| **id**   | [**string**] |               | defaults to undefined |

### Return type

void (empty response body)

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **201**     |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **refundControllerSetStatusDraft**

> refundControllerSetStatusDraft(body)

### Example

```typescript
import { REFUNDApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new REFUNDApi(configuration);

let id: string; // (default to undefined)
let body: object; //Document data

const { status, data } = await apiInstance.refundControllerSetStatusDraft(
  id,
  body
);
```

### Parameters

| Name     | Type         | Description   | Notes                 |
| -------- | ------------ | ------------- | --------------------- |
| **body** | **object**   | Document data |                       |
| **id**   | [**string**] |               | defaults to undefined |

### Return type

void (empty response body)

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **201**     |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **refundControllerSetStatusVoid**

> refundControllerSetStatusVoid(body)

### Example

```typescript
import { REFUNDApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new REFUNDApi(configuration);

let id: string; // (default to undefined)
let body: object; //Document data

const { status, data } = await apiInstance.refundControllerSetStatusVoid(
  id,
  body
);
```

### Parameters

| Name     | Type         | Description   | Notes                 |
| -------- | ------------ | ------------- | --------------------- |
| **body** | **object**   | Document data |                       |
| **id**   | [**string**] |               | defaults to undefined |

### Return type

void (empty response body)

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **201**     |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runCreate**

> Refund runCreate(refund)

### Example

```typescript
import { REFUNDApi, Configuration, Refund } from "./api";

const configuration = new Configuration();
const apiInstance = new REFUNDApi(configuration);

let refund: Refund; //Data

const { status, data } = await apiInstance.runCreate(refund);
```

### Parameters

| Name       | Type       | Description | Notes |
| ---------- | ---------- | ----------- | ----- |
| **refund** | **Refund** | Data        |       |

### Return type

**Refund**

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
import { REFUNDApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new REFUNDApi(configuration);

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

> Refund runDelete()

### Example

```typescript
import { REFUNDApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new REFUNDApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runDelete(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**Refund**

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

> Refund runFindOne()

### Example

```typescript
import { REFUNDApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new REFUNDApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runFindOne(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**Refund**

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

> runPatch(refund)

### Example

```typescript
import { REFUNDApi, Configuration, Refund } from "./api";

const configuration = new Configuration();
const apiInstance = new REFUNDApi(configuration);

let id: string; // (default to undefined)
let refund: Refund; //Data

const { status, data } = await apiInstance.runPatch(id, refund);
```

### Parameters

| Name       | Type         | Description | Notes                 |
| ---------- | ------------ | ----------- | --------------------- |
| **refund** | **Refund**   | Data        |                       |
| **id**     | [**string**] |             | defaults to undefined |

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
import { REFUNDApi, Configuration, PatchManyRequest } from "./api";

const configuration = new Configuration();
const apiInstance = new REFUNDApi(configuration);

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

# **runPrint**

> string runPrint()

### Example

```typescript
import { REFUNDApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new REFUNDApi(configuration);

let id: string; // (default to undefined)
let formatId: string; // (default to undefined)

const { status, data } = await apiInstance.runPrint(id, formatId);
```

### Parameters

| Name         | Type         | Description | Notes                 |
| ------------ | ------------ | ----------- | --------------------- |
| **id**       | [**string**] |             | defaults to undefined |
| **formatId** | [**string**] |             | defaults to undefined |

### Return type

**string**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **200**     | obtain base64 pdf | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runSearch**

> Array<Refund> runSearch(body)

### Example

```typescript
import { REFUNDApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new REFUNDApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<Refund>**

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

> runUpdate(refund)

### Example

```typescript
import { REFUNDApi, Configuration, Refund } from "./api";

const configuration = new Configuration();
const apiInstance = new REFUNDApi(configuration);

let id: string; // (default to undefined)
let refund: Refund; //Data

const { status, data } = await apiInstance.runUpdate(id, refund);
```

### Parameters

| Name       | Type         | Description | Notes                 |
| ---------- | ------------ | ----------- | --------------------- |
| **refund** | **Refund**   | Data        |                       |
| **id**     | [**string**] |             | defaults to undefined |

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
