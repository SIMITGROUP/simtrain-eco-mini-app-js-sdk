# ORGANIZATIONApi

All URIs are relative to _http://localhost_

| Method                                | HTTP request                          | Description |
| ------------------------------------- | ------------------------------------- | ----------- |
| [**autoComplete**](#autocomplete)     | **POST** /organization/autocomplete   |             |
| [**runCreate**](#runcreate)           | **POST** /organization                |             |
| [**runDefault**](#rundefault)         | **GET** /organization                 |             |
| [**runDelete**](#rundelete)           | **DELETE** /organization/{id}         |             |
| [**runFindOne**](#runfindone)         | **GET** /organization/{id}            |             |
| [**runGetPhoto**](#rungetphoto)       | **GET** /organization-api/{id}/photo  |             |
| [**runPatch**](#runpatch)             | **PATCH** /organization/{id}          |             |
| [**runPatchMany**](#runpatchmany)     | **PATCH** /organization/bulk-patch    |             |
| [**runSearch**](#runsearch)           | **POST** /organization/search         |             |
| [**runUpdate**](#runupdate)           | **PUT** /organization/{id}            |             |
| [**runUploadPhoto**](#runuploadphoto) | **POST** /organization-api/{id}/photo |             |

# **autoComplete**

> Array<OrganizationAutoComplete> autoComplete(body)

retrieve array of {\_id, code, name}

### Example

```typescript
import { ORGANIZATIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ORGANIZATIONApi(configuration);

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

**Array<OrganizationAutoComplete>**

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

> Organization runCreate(organization)

### Example

```typescript
import { ORGANIZATIONApi, Configuration, Organization } from "./api";

const configuration = new Configuration();
const apiInstance = new ORGANIZATIONApi(configuration);

let organization: Organization; //Data

const { status, data } = await apiInstance.runCreate(organization);
```

### Parameters

| Name             | Type             | Description | Notes |
| ---------------- | ---------------- | ----------- | ----- |
| **organization** | **Organization** | Data        |       |

### Return type

**Organization**

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
import { ORGANIZATIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ORGANIZATIONApi(configuration);

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

> Organization runDelete()

### Example

```typescript
import { ORGANIZATIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ORGANIZATIONApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runDelete(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**Organization**

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

> Organization runFindOne()

### Example

```typescript
import { ORGANIZATIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ORGANIZATIONApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runFindOne(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**Organization**

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

# **runGetPhoto**

> File runGetPhoto()

### Example

```typescript
import { ORGANIZATIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ORGANIZATIONApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runGetPhoto(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**File**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/png

### HTTP response details

| Status code | Description            | Response headers |
| ----------- | ---------------------- | ---------------- |
| **200**     | Get Organization photo | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runPatch**

> runPatch(organization)

### Example

```typescript
import { ORGANIZATIONApi, Configuration, Organization } from "./api";

const configuration = new Configuration();
const apiInstance = new ORGANIZATIONApi(configuration);

let id: string; // (default to undefined)
let organization: Organization; //Data

const { status, data } = await apiInstance.runPatch(id, organization);
```

### Parameters

| Name             | Type             | Description | Notes                 |
| ---------------- | ---------------- | ----------- | --------------------- |
| **organization** | **Organization** | Data        |                       |
| **id**           | [**string**]     |             | defaults to undefined |

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
import { ORGANIZATIONApi, Configuration, PatchManyRequest } from "./api";

const configuration = new Configuration();
const apiInstance = new ORGANIZATIONApi(configuration);

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

> Array<Organization> runSearch(body)

### Example

```typescript
import { ORGANIZATIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ORGANIZATIONApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<Organization>**

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

> runUpdate(organization)

### Example

```typescript
import { ORGANIZATIONApi, Configuration, Organization } from "./api";

const configuration = new Configuration();
const apiInstance = new ORGANIZATIONApi(configuration);

let id: string; // (default to undefined)
let organization: Organization; //Data

const { status, data } = await apiInstance.runUpdate(id, organization);
```

### Parameters

| Name             | Type             | Description | Notes                 |
| ---------------- | ---------------- | ----------- | --------------------- |
| **organization** | **Organization** | Data        |                       |
| **id**           | [**string**]     |             | defaults to undefined |

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

# **runUploadPhoto**

> string runUploadPhoto(uploadPhoto)

### Example

```typescript
import { ORGANIZATIONApi, Configuration, UploadPhoto } from "./api";

const configuration = new Configuration();
const apiInstance = new ORGANIZATIONApi(configuration);

let id: string; // (default to undefined)
let uploadPhoto: UploadPhoto; //Request Body

const { status, data } = await apiInstance.runUploadPhoto(id, uploadPhoto);
```

### Parameters

| Name            | Type            | Description  | Notes                 |
| --------------- | --------------- | ------------ | --------------------- |
| **uploadPhoto** | **UploadPhoto** | Request Body |                       |
| **id**          | [**string**]    |              | defaults to undefined |

### Return type

**string**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description               | Response headers |
| ----------- | ------------------------- | ---------------- |
| **200**     | Upload Organization photo | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
