# APPINTEGRATIONApi

All URIs are relative to _http://localhost_

| Method                                                          | HTTP request                                 | Description |
| --------------------------------------------------------------- | -------------------------------------------- | ----------- |
| [**autoComplete**](#autocomplete)                               | **POST** /appintegration/autocomplete        |             |
| [**runCreate**](#runcreate)                                     | **POST** /appintegration                     |             |
| [**runDefault**](#rundefault)                                   | **GET** /appintegration                      |             |
| [**runDelete**](#rundelete)                                     | **DELETE** /appintegration/{id}              |             |
| [**runFindOne**](#runfindone)                                   | **GET** /appintegration/{id}                 |             |
| [**runPatch**](#runpatch)                                       | **PATCH** /appintegration/{id}               |             |
| [**runPatchMany**](#runpatchmany)                               | **PATCH** /appintegration/bulk-patch         |             |
| [**runRunGetOrgIntegrationData**](#runrungetorgintegrationdata) | **GET** /appintegration-api/branch/{appId}   |             |
| [**runSearch**](#runsearch)                                     | **POST** /appintegration/search              |             |
| [**runUpdate**](#runupdate)                                     | **PUT** /appintegration/{id}                 |             |
| [**runUpdateIntegrationStatus**](#runupdateintegrationstatus)   | **GET** /appintegration-api/{appId}/{action} |             |

# **autoComplete**

> Array<AppIntegrationAutoComplete> autoComplete(body)

retrieve array of {\_id, code, name}

### Example

```typescript
import { APPINTEGRATIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new APPINTEGRATIONApi(configuration);

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

**Array<AppIntegrationAutoComplete>**

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

> AppIntegration runCreate(appIntegration)

### Example

```typescript
import { APPINTEGRATIONApi, Configuration, AppIntegration } from "./api";

const configuration = new Configuration();
const apiInstance = new APPINTEGRATIONApi(configuration);

let appIntegration: AppIntegration; //Data

const { status, data } = await apiInstance.runCreate(appIntegration);
```

### Parameters

| Name               | Type               | Description | Notes |
| ------------------ | ------------------ | ----------- | ----- |
| **appIntegration** | **AppIntegration** | Data        |       |

### Return type

**AppIntegration**

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
import { APPINTEGRATIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new APPINTEGRATIONApi(configuration);

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

> AppIntegration runDelete()

### Example

```typescript
import { APPINTEGRATIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new APPINTEGRATIONApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runDelete(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**AppIntegration**

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

> AppIntegration runFindOne()

### Example

```typescript
import { APPINTEGRATIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new APPINTEGRATIONApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runFindOne(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**AppIntegration**

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

> runPatch(appIntegration)

### Example

```typescript
import { APPINTEGRATIONApi, Configuration, AppIntegration } from "./api";

const configuration = new Configuration();
const apiInstance = new APPINTEGRATIONApi(configuration);

let id: string; // (default to undefined)
let appIntegration: AppIntegration; //Data

const { status, data } = await apiInstance.runPatch(id, appIntegration);
```

### Parameters

| Name               | Type               | Description | Notes                 |
| ------------------ | ------------------ | ----------- | --------------------- |
| **appIntegration** | **AppIntegration** | Data        |                       |
| **id**             | [**string**]       |             | defaults to undefined |

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
import { APPINTEGRATIONApi, Configuration, PatchManyRequest } from "./api";

const configuration = new Configuration();
const apiInstance = new APPINTEGRATIONApi(configuration);

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

# **runRunGetOrgIntegrationData**

> AppIntegration runRunGetOrgIntegrationData()

### Example

```typescript
import { APPINTEGRATIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new APPINTEGRATIONApi(configuration);

let appId: string; // (default to undefined)

const { status, data } = await apiInstance.runRunGetOrgIntegrationData(appId);
```

### Parameters

| Name      | Type         | Description | Notes                 |
| --------- | ------------ | ----------- | --------------------- |
| **appId** | [**string**] |             | defaults to undefined |

### Return type

**AppIntegration**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                     | Response headers |
| ----------- | ------------------------------- | ---------------- |
| **200**     | get integration data for branch | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runSearch**

> Array<AppIntegration> runSearch(body)

### Example

```typescript
import { APPINTEGRATIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new APPINTEGRATIONApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<AppIntegration>**

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

> runUpdate(appIntegration)

### Example

```typescript
import { APPINTEGRATIONApi, Configuration, AppIntegration } from "./api";

const configuration = new Configuration();
const apiInstance = new APPINTEGRATIONApi(configuration);

let id: string; // (default to undefined)
let appIntegration: AppIntegration; //Data

const { status, data } = await apiInstance.runUpdate(id, appIntegration);
```

### Parameters

| Name               | Type               | Description | Notes                 |
| ------------------ | ------------------ | ----------- | --------------------- |
| **appIntegration** | **AppIntegration** | Data        |                       |
| **id**             | [**string**]       |             | defaults to undefined |

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

# **runUpdateIntegrationStatus**

> AppIntegration runUpdateIntegrationStatus()

### Example

```typescript
import { APPINTEGRATIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new APPINTEGRATIONApi(configuration);

let appId: string; // (default to undefined)
let action: string; // (default to undefined)

const { status, data } = await apiInstance.runUpdateIntegrationStatus(
  appId,
  action
);
```

### Parameters

| Name       | Type         | Description | Notes                 |
| ---------- | ------------ | ----------- | --------------------- |
| **appId**  | [**string**] |             | defaults to undefined |
| **action** | [**string**] |             | defaults to undefined |

### Return type

**AppIntegration**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                   | Response headers |
| ----------- | ----------------------------- | ---------------- |
| **200**     | update app integration status | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
