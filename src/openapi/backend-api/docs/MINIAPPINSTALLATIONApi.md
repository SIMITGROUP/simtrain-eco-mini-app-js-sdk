# MINIAPPINSTALLATIONApi

All URIs are relative to _http://localhost_

| Method                            | HTTP request                               | Description |
| --------------------------------- | ------------------------------------------ | ----------- |
| [**autoComplete**](#autocomplete) | **POST** /miniappinstallation/autocomplete |             |
| [**runCreate**](#runcreate)       | **POST** /miniappinstallation              |             |
| [**runDefault**](#rundefault)     | **GET** /miniappinstallation               |             |
| [**runDelete**](#rundelete)       | **DELETE** /miniappinstallation/{id}       |             |
| [**runFindOne**](#runfindone)     | **GET** /miniappinstallation/{id}          |             |
| [**runPatch**](#runpatch)         | **PATCH** /miniappinstallation/{id}        |             |
| [**runPatchMany**](#runpatchmany) | **PATCH** /miniappinstallation/bulk-patch  |             |
| [**runSearch**](#runsearch)       | **POST** /miniappinstallation/search       |             |
| [**runUpdate**](#runupdate)       | **PUT** /miniappinstallation/{id}          |             |

# **autoComplete**

> Array<MiniAppInstallationAutoComplete> autoComplete(body)

retrieve array of {\_id, code, name}

### Example

```typescript
import { MINIAPPINSTALLATIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new MINIAPPINSTALLATIONApi(configuration);

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

**Array<MiniAppInstallationAutoComplete>**

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

> MiniAppInstallation runCreate(miniAppInstallation)

### Example

```typescript
import {
  MINIAPPINSTALLATIONApi,
  Configuration,
  MiniAppInstallation,
} from "./api";

const configuration = new Configuration();
const apiInstance = new MINIAPPINSTALLATIONApi(configuration);

let miniAppInstallation: MiniAppInstallation; //Data

const { status, data } = await apiInstance.runCreate(miniAppInstallation);
```

### Parameters

| Name                    | Type                    | Description | Notes |
| ----------------------- | ----------------------- | ----------- | ----- |
| **miniAppInstallation** | **MiniAppInstallation** | Data        |       |

### Return type

**MiniAppInstallation**

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
import { MINIAPPINSTALLATIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new MINIAPPINSTALLATIONApi(configuration);

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

> MiniAppInstallation runDelete()

### Example

```typescript
import { MINIAPPINSTALLATIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new MINIAPPINSTALLATIONApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runDelete(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**MiniAppInstallation**

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

> MiniAppInstallation runFindOne()

### Example

```typescript
import { MINIAPPINSTALLATIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new MINIAPPINSTALLATIONApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runFindOne(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**MiniAppInstallation**

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

> runPatch(miniAppInstallation)

### Example

```typescript
import {
  MINIAPPINSTALLATIONApi,
  Configuration,
  MiniAppInstallation,
} from "./api";

const configuration = new Configuration();
const apiInstance = new MINIAPPINSTALLATIONApi(configuration);

let id: string; // (default to undefined)
let miniAppInstallation: MiniAppInstallation; //Data

const { status, data } = await apiInstance.runPatch(id, miniAppInstallation);
```

### Parameters

| Name                    | Type                    | Description | Notes                 |
| ----------------------- | ----------------------- | ----------- | --------------------- |
| **miniAppInstallation** | **MiniAppInstallation** | Data        |                       |
| **id**                  | [**string**]            |             | defaults to undefined |

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
import { MINIAPPINSTALLATIONApi, Configuration, PatchManyRequest } from "./api";

const configuration = new Configuration();
const apiInstance = new MINIAPPINSTALLATIONApi(configuration);

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

> Array<MiniAppInstallation> runSearch(body)

### Example

```typescript
import { MINIAPPINSTALLATIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new MINIAPPINSTALLATIONApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<MiniAppInstallation>**

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

> runUpdate(miniAppInstallation)

### Example

```typescript
import {
  MINIAPPINSTALLATIONApi,
  Configuration,
  MiniAppInstallation,
} from "./api";

const configuration = new Configuration();
const apiInstance = new MINIAPPINSTALLATIONApi(configuration);

let id: string; // (default to undefined)
let miniAppInstallation: MiniAppInstallation; //Data

const { status, data } = await apiInstance.runUpdate(id, miniAppInstallation);
```

### Parameters

| Name                    | Type                    | Description | Notes                 |
| ----------------------- | ----------------------- | ----------- | --------------------- |
| **miniAppInstallation** | **MiniAppInstallation** | Data        |                       |
| **id**                  | [**string**]            |             | defaults to undefined |

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
