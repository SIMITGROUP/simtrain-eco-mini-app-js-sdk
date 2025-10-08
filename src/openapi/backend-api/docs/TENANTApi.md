# TENANTApi

All URIs are relative to _http://localhost_

| Method                                                      | HTTP request                                     | Description |
| ----------------------------------------------------------- | ------------------------------------------------ | ----------- |
| [**autoComplete**](#autocomplete)                           | **POST** /tenant/autocomplete                    |             |
| [**runCreate**](#runcreate)                                 | **POST** /tenant                                 |             |
| [**runDefault**](#rundefault)                               | **GET** /tenant                                  |             |
| [**runDelete**](#rundelete)                                 | **DELETE** /tenant/{id}                          |             |
| [**runFindOne**](#runfindone)                               | **GET** /tenant/{id}                             |             |
| [**runGetOutstandingSetting**](#rungetoutstandingsetting)   | **GET** /tenant-api/{id}/getOutstandingSetting   |             |
| [**runPatch**](#runpatch)                                   | **PATCH** /tenant/{id}                           |             |
| [**runPatchMany**](#runpatchmany)                           | **PATCH** /tenant/bulk-patch                     |             |
| [**runSaveOutstandingSetting**](#runsaveoutstandingsetting) | **POST** /tenant-api/{id}/saveOutstandingSetting |             |
| [**runSearch**](#runsearch)                                 | **POST** /tenant/search                          |             |
| [**runUpdate**](#runupdate)                                 | **PUT** /tenant/{id}                             |             |

# **autoComplete**

> Array<TenantAutoComplete> autoComplete(body)

retrieve array of {\_id, code, name}

### Example

```typescript
import { TENANTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TENANTApi(configuration);

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

**Array<TenantAutoComplete>**

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

# **runCreate**

> Tenant runCreate(tenant)

### Example

```typescript
import { TENANTApi, Configuration, Tenant } from "./api";

const configuration = new Configuration();
const apiInstance = new TENANTApi(configuration);

let tenant: Tenant; //Data

const { status, data } = await apiInstance.runCreate(tenant);
```

### Parameters

| Name       | Type       | Description | Notes |
| ---------- | ---------- | ----------- | ----- |
| **tenant** | **Tenant** | Data        |       |

### Return type

**Tenant**

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
import { TENANTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TENANTApi(configuration);

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

> Tenant runDelete()

### Example

```typescript
import { TENANTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TENANTApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runDelete(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**Tenant**

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

> Tenant runFindOne()

### Example

```typescript
import { TENANTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TENANTApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runFindOne(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**Tenant**

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

# **runGetOutstandingSetting**

> OutstandingSetting runGetOutstandingSetting()

### Example

```typescript
import { TENANTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TENANTApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runGetOutstandingSetting(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**OutstandingSetting**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description             | Response headers |
| ----------- | ----------------------- | ---------------- |
| **200**     | Get outstanding invoice | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runPatch**

> runPatch(tenant)

### Example

```typescript
import { TENANTApi, Configuration, Tenant } from "./api";

const configuration = new Configuration();
const apiInstance = new TENANTApi(configuration);

let id: string; // (default to undefined)
let tenant: Tenant; //Data

const { status, data } = await apiInstance.runPatch(id, tenant);
```

### Parameters

| Name       | Type         | Description | Notes                 |
| ---------- | ------------ | ----------- | --------------------- |
| **tenant** | **Tenant**   | Data        |                       |
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
import { TENANTApi, Configuration, PatchManyRequest } from "./api";

const configuration = new Configuration();
const apiInstance = new TENANTApi(configuration);

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

# **runSaveOutstandingSetting**

> string runSaveOutstandingSetting(outstandingSettingResponse)

### Example

```typescript
import { TENANTApi, Configuration, OutstandingSettingResponse } from "./api";

const configuration = new Configuration();
const apiInstance = new TENANTApi(configuration);

let id: string; // (default to undefined)
let outstandingSettingResponse: OutstandingSettingResponse; //Request Body

const { status, data } = await apiInstance.runSaveOutstandingSetting(
  id,
  outstandingSettingResponse
);
```

### Parameters

| Name                           | Type                           | Description  | Notes                 |
| ------------------------------ | ------------------------------ | ------------ | --------------------- |
| **outstandingSettingResponse** | **OutstandingSettingResponse** | Request Body |                       |
| **id**                         | [**string**]                   |              | defaults to undefined |

### Return type

**string**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description              | Response headers |
| ----------- | ------------------------ | ---------------- |
| **200**     | Save outstanding setting | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runSearch**

> Array<Tenant> runSearch(body)

### Example

```typescript
import { TENANTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TENANTApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<Tenant>**

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

> runUpdate(tenant)

### Example

```typescript
import { TENANTApi, Configuration, Tenant } from "./api";

const configuration = new Configuration();
const apiInstance = new TENANTApi(configuration);

let id: string; // (default to undefined)
let tenant: Tenant; //Data

const { status, data } = await apiInstance.runUpdate(id, tenant);
```

### Parameters

| Name       | Type         | Description | Notes                 |
| ---------- | ------------ | ----------- | --------------------- |
| **tenant** | **Tenant**   | Data        |                       |
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
