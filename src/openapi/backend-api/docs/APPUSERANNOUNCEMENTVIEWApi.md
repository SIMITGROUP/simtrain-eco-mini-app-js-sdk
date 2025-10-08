# APPUSERANNOUNCEMENTVIEWApi

All URIs are relative to _http://localhost_

| Method                            | HTTP request                                   | Description |
| --------------------------------- | ---------------------------------------------- | ----------- |
| [**autoComplete**](#autocomplete) | **POST** /appuserannouncementview/autocomplete |             |
| [**runCreate**](#runcreate)       | **POST** /appuserannouncementview              |             |
| [**runDefault**](#rundefault)     | **GET** /appuserannouncementview               |             |
| [**runDelete**](#rundelete)       | **DELETE** /appuserannouncementview/{id}       |             |
| [**runFindOne**](#runfindone)     | **GET** /appuserannouncementview/{id}          |             |
| [**runPatch**](#runpatch)         | **PATCH** /appuserannouncementview/{id}        |             |
| [**runPatchMany**](#runpatchmany) | **PATCH** /appuserannouncementview/bulk-patch  |             |
| [**runSearch**](#runsearch)       | **POST** /appuserannouncementview/search       |             |
| [**runUpdate**](#runupdate)       | **PUT** /appuserannouncementview/{id}          |             |

# **autoComplete**

> Array<AppUserAnnouncementViewAutoComplete> autoComplete(body)

retrieve array of {\_id, code, name}

### Example

```typescript
import { APPUSERANNOUNCEMENTVIEWApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new APPUSERANNOUNCEMENTVIEWApi(configuration);

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

**Array<AppUserAnnouncementViewAutoComplete>**

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

> AppUserAnnouncementView runCreate(appUserAnnouncementView)

### Example

```typescript
import {
  APPUSERANNOUNCEMENTVIEWApi,
  Configuration,
  AppUserAnnouncementView,
} from "./api";

const configuration = new Configuration();
const apiInstance = new APPUSERANNOUNCEMENTVIEWApi(configuration);

let appUserAnnouncementView: AppUserAnnouncementView; //Data

const { status, data } = await apiInstance.runCreate(appUserAnnouncementView);
```

### Parameters

| Name                        | Type                        | Description | Notes |
| --------------------------- | --------------------------- | ----------- | ----- |
| **appUserAnnouncementView** | **AppUserAnnouncementView** | Data        |       |

### Return type

**AppUserAnnouncementView**

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
import { APPUSERANNOUNCEMENTVIEWApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new APPUSERANNOUNCEMENTVIEWApi(configuration);

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

> AppUserAnnouncementView runDelete()

### Example

```typescript
import { APPUSERANNOUNCEMENTVIEWApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new APPUSERANNOUNCEMENTVIEWApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runDelete(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**AppUserAnnouncementView**

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

> AppUserAnnouncementView runFindOne()

### Example

```typescript
import { APPUSERANNOUNCEMENTVIEWApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new APPUSERANNOUNCEMENTVIEWApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runFindOne(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**AppUserAnnouncementView**

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

> runPatch(appUserAnnouncementView)

### Example

```typescript
import {
  APPUSERANNOUNCEMENTVIEWApi,
  Configuration,
  AppUserAnnouncementView,
} from "./api";

const configuration = new Configuration();
const apiInstance = new APPUSERANNOUNCEMENTVIEWApi(configuration);

let id: string; // (default to undefined)
let appUserAnnouncementView: AppUserAnnouncementView; //Data

const { status, data } = await apiInstance.runPatch(
  id,
  appUserAnnouncementView
);
```

### Parameters

| Name                        | Type                        | Description | Notes                 |
| --------------------------- | --------------------------- | ----------- | --------------------- |
| **appUserAnnouncementView** | **AppUserAnnouncementView** | Data        |                       |
| **id**                      | [**string**]                |             | defaults to undefined |

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
import {
  APPUSERANNOUNCEMENTVIEWApi,
  Configuration,
  PatchManyRequest,
} from "./api";

const configuration = new Configuration();
const apiInstance = new APPUSERANNOUNCEMENTVIEWApi(configuration);

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

> Array<AppUserAnnouncementView> runSearch(body)

### Example

```typescript
import { APPUSERANNOUNCEMENTVIEWApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new APPUSERANNOUNCEMENTVIEWApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<AppUserAnnouncementView>**

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

> runUpdate(appUserAnnouncementView)

### Example

```typescript
import {
  APPUSERANNOUNCEMENTVIEWApi,
  Configuration,
  AppUserAnnouncementView,
} from "./api";

const configuration = new Configuration();
const apiInstance = new APPUSERANNOUNCEMENTVIEWApi(configuration);

let id: string; // (default to undefined)
let appUserAnnouncementView: AppUserAnnouncementView; //Data

const { status, data } = await apiInstance.runUpdate(
  id,
  appUserAnnouncementView
);
```

### Parameters

| Name                        | Type                        | Description | Notes                 |
| --------------------------- | --------------------------- | ----------- | --------------------- |
| **appUserAnnouncementView** | **AppUserAnnouncementView** | Data        |                       |
| **id**                      | [**string**]                |             | defaults to undefined |

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
