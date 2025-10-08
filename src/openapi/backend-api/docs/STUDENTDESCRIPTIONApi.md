# STUDENTDESCRIPTIONApi

All URIs are relative to _http://localhost_

| Method                            | HTTP request                              | Description |
| --------------------------------- | ----------------------------------------- | ----------- |
| [**autoComplete**](#autocomplete) | **POST** /studentdescription/autocomplete |             |
| [**runCreate**](#runcreate)       | **POST** /studentdescription              |             |
| [**runDefault**](#rundefault)     | **GET** /studentdescription               |             |
| [**runDelete**](#rundelete)       | **DELETE** /studentdescription/{id}       |             |
| [**runFindOne**](#runfindone)     | **GET** /studentdescription/{id}          |             |
| [**runPatch**](#runpatch)         | **PATCH** /studentdescription/{id}        |             |
| [**runPatchMany**](#runpatchmany) | **PATCH** /studentdescription/bulk-patch  |             |
| [**runSearch**](#runsearch)       | **POST** /studentdescription/search       |             |
| [**runUpdate**](#runupdate)       | **PUT** /studentdescription/{id}          |             |

# **autoComplete**

> Array<StudentDescriptionAutoComplete> autoComplete(body)

retrieve array of {\_id, code, name}

### Example

```typescript
import { STUDENTDESCRIPTIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTDESCRIPTIONApi(configuration);

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

**Array<StudentDescriptionAutoComplete>**

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

> StudentDescription runCreate(studentDescription)

### Example

```typescript
import {
  STUDENTDESCRIPTIONApi,
  Configuration,
  StudentDescription,
} from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTDESCRIPTIONApi(configuration);

let studentDescription: StudentDescription; //Data

const { status, data } = await apiInstance.runCreate(studentDescription);
```

### Parameters

| Name                   | Type                   | Description | Notes |
| ---------------------- | ---------------------- | ----------- | ----- |
| **studentDescription** | **StudentDescription** | Data        |       |

### Return type

**StudentDescription**

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
import { STUDENTDESCRIPTIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTDESCRIPTIONApi(configuration);

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

> StudentDescription runDelete()

### Example

```typescript
import { STUDENTDESCRIPTIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTDESCRIPTIONApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runDelete(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**StudentDescription**

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

> StudentDescription runFindOne()

### Example

```typescript
import { STUDENTDESCRIPTIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTDESCRIPTIONApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runFindOne(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**StudentDescription**

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

> runPatch(studentDescription)

### Example

```typescript
import {
  STUDENTDESCRIPTIONApi,
  Configuration,
  StudentDescription,
} from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTDESCRIPTIONApi(configuration);

let id: string; // (default to undefined)
let studentDescription: StudentDescription; //Data

const { status, data } = await apiInstance.runPatch(id, studentDescription);
```

### Parameters

| Name                   | Type                   | Description | Notes                 |
| ---------------------- | ---------------------- | ----------- | --------------------- |
| **studentDescription** | **StudentDescription** | Data        |                       |
| **id**                 | [**string**]           |             | defaults to undefined |

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
import { STUDENTDESCRIPTIONApi, Configuration, PatchManyRequest } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTDESCRIPTIONApi(configuration);

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

> Array<StudentDescription> runSearch(body)

### Example

```typescript
import { STUDENTDESCRIPTIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTDESCRIPTIONApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<StudentDescription>**

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

> runUpdate(studentDescription)

### Example

```typescript
import {
  STUDENTDESCRIPTIONApi,
  Configuration,
  StudentDescription,
} from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTDESCRIPTIONApi(configuration);

let id: string; // (default to undefined)
let studentDescription: StudentDescription; //Data

const { status, data } = await apiInstance.runUpdate(id, studentDescription);
```

### Parameters

| Name                   | Type                   | Description | Notes                 |
| ---------------------- | ---------------------- | ----------- | --------------------- |
| **studentDescription** | **StudentDescription** | Data        |                       |
| **id**                 | [**string**]           |             | defaults to undefined |

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
