# DOCUMENTNOFORMATApi

All URIs are relative to _http://localhost_

| Method                                      | HTTP request                                           | Description |
| ------------------------------------------- | ------------------------------------------------------ | ----------- |
| [**autoComplete**](#autocomplete)           | **POST** /documentnoformat/autocomplete                |             |
| [**runCreate**](#runcreate)                 | **POST** /documentnoformat                             |             |
| [**runDefault**](#rundefault)               | **GET** /documentnoformat                              |             |
| [**runDelete**](#rundelete)                 | **DELETE** /documentnoformat/{id}                      |             |
| [**runFindOne**](#runfindone)               | **GET** /documentnoformat/{id}                         |             |
| [**runListDocFormats**](#runlistdocformats) | **GET** /documentnoformat-api/listdocformats/{doctype} |             |
| [**runPatch**](#runpatch)                   | **PATCH** /documentnoformat/{id}                       |             |
| [**runPatchMany**](#runpatchmany)           | **PATCH** /documentnoformat/bulk-patch                 |             |
| [**runSearch**](#runsearch)                 | **POST** /documentnoformat/search                      |             |
| [**runUpdate**](#runupdate)                 | **PUT** /documentnoformat/{id}                         |             |

# **autoComplete**

> Array<DocumentNoFormatAutoComplete> autoComplete(body)

retrieve array of {\_id, code, name}

### Example

```typescript
import { DOCUMENTNOFORMATApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new DOCUMENTNOFORMATApi(configuration);

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

**Array<DocumentNoFormatAutoComplete>**

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

> DocumentNoFormat runCreate(documentNoFormat)

### Example

```typescript
import { DOCUMENTNOFORMATApi, Configuration, DocumentNoFormat } from "./api";

const configuration = new Configuration();
const apiInstance = new DOCUMENTNOFORMATApi(configuration);

let documentNoFormat: DocumentNoFormat; //Data

const { status, data } = await apiInstance.runCreate(documentNoFormat);
```

### Parameters

| Name                 | Type                 | Description | Notes |
| -------------------- | -------------------- | ----------- | ----- |
| **documentNoFormat** | **DocumentNoFormat** | Data        |       |

### Return type

**DocumentNoFormat**

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
import { DOCUMENTNOFORMATApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new DOCUMENTNOFORMATApi(configuration);

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

> DocumentNoFormat runDelete()

### Example

```typescript
import { DOCUMENTNOFORMATApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new DOCUMENTNOFORMATApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runDelete(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**DocumentNoFormat**

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

> DocumentNoFormat runFindOne()

### Example

```typescript
import { DOCUMENTNOFORMATApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new DOCUMENTNOFORMATApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runFindOne(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**DocumentNoFormat**

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

# **runListDocFormats**

> Array<DocumentNoFormat> runListDocFormats()

### Example

```typescript
import { DOCUMENTNOFORMATApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new DOCUMENTNOFORMATApi(configuration);

let doctype: string; // (default to undefined)

const { status, data } = await apiInstance.runListDocFormats(doctype);
```

### Parameters

| Name        | Type         | Description | Notes                 |
| ----------- | ------------ | ----------- | --------------------- |
| **doctype** | [**string**] |             | defaults to undefined |

### Return type

**Array<DocumentNoFormat>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                               | Response headers |
| ----------- | ----------------------------------------- | ---------------- |
| **200**     | get list of document format for 1 doctype | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runPatch**

> runPatch(documentNoFormat)

### Example

```typescript
import { DOCUMENTNOFORMATApi, Configuration, DocumentNoFormat } from "./api";

const configuration = new Configuration();
const apiInstance = new DOCUMENTNOFORMATApi(configuration);

let id: string; // (default to undefined)
let documentNoFormat: DocumentNoFormat; //Data

const { status, data } = await apiInstance.runPatch(id, documentNoFormat);
```

### Parameters

| Name                 | Type                 | Description | Notes                 |
| -------------------- | -------------------- | ----------- | --------------------- |
| **documentNoFormat** | **DocumentNoFormat** | Data        |                       |
| **id**               | [**string**]         |             | defaults to undefined |

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
import { DOCUMENTNOFORMATApi, Configuration, PatchManyRequest } from "./api";

const configuration = new Configuration();
const apiInstance = new DOCUMENTNOFORMATApi(configuration);

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

> Array<DocumentNoFormat> runSearch(body)

### Example

```typescript
import { DOCUMENTNOFORMATApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new DOCUMENTNOFORMATApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<DocumentNoFormat>**

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

> runUpdate(documentNoFormat)

### Example

```typescript
import { DOCUMENTNOFORMATApi, Configuration, DocumentNoFormat } from "./api";

const configuration = new Configuration();
const apiInstance = new DOCUMENTNOFORMATApi(configuration);

let id: string; // (default to undefined)
let documentNoFormat: DocumentNoFormat; //Data

const { status, data } = await apiInstance.runUpdate(id, documentNoFormat);
```

### Parameters

| Name                 | Type                 | Description | Notes                 |
| -------------------- | -------------------- | ----------- | --------------------- |
| **documentNoFormat** | **DocumentNoFormat** | Data        |                       |
| **id**               | [**string**]         |             | defaults to undefined |

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
