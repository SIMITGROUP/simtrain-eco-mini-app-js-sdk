# CUSTOMIZEPRINTFORMATApi

All URIs are relative to _http://localhost_

| Method                                      | HTTP request                                  | Description |
| ------------------------------------------- | --------------------------------------------- | ----------- |
| [**autoComplete**](#autocomplete)           | **POST** /customizeprintformat/autocomplete   |             |
| [**runCreate**](#runcreate)                 | **POST** /customizeprintformat                |             |
| [**runDefault**](#rundefault)               | **GET** /customizeprintformat                 |             |
| [**runDelete**](#rundelete)                 | **DELETE** /customizeprintformat/{id}         |             |
| [**runFindOne**](#runfindone)               | **GET** /customizeprintformat/{id}            |             |
| [**runFullTextSearch**](#runfulltextsearch) | **POST** /customizeprintformat/fulltextsearch |             |
| [**runPatch**](#runpatch)                   | **PATCH** /customizeprintformat/{id}          |             |
| [**runPatchMany**](#runpatchmany)           | **PATCH** /customizeprintformat/bulk-patch    |             |
| [**runSearch**](#runsearch)                 | **POST** /customizeprintformat/search         |             |
| [**runUpdate**](#runupdate)                 | **PUT** /customizeprintformat/{id}            |             |

# **autoComplete**

> Array<CustomizePrintFormatAutoComplete> autoComplete(body)

retrieve array of {\_id, code, name}

### Example

```typescript
import { CUSTOMIZEPRINTFORMATApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new CUSTOMIZEPRINTFORMATApi(configuration);

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

**Array<CustomizePrintFormatAutoComplete>**

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

> CustomizePrintFormat runCreate(customizePrintFormat)

### Example

```typescript
import {
  CUSTOMIZEPRINTFORMATApi,
  Configuration,
  CustomizePrintFormat,
} from "./api";

const configuration = new Configuration();
const apiInstance = new CUSTOMIZEPRINTFORMATApi(configuration);

let customizePrintFormat: CustomizePrintFormat; //Data

const { status, data } = await apiInstance.runCreate(customizePrintFormat);
```

### Parameters

| Name                     | Type                     | Description | Notes |
| ------------------------ | ------------------------ | ----------- | ----- |
| **customizePrintFormat** | **CustomizePrintFormat** | Data        |       |

### Return type

**CustomizePrintFormat**

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
import { CUSTOMIZEPRINTFORMATApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new CUSTOMIZEPRINTFORMATApi(configuration);

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

> CustomizePrintFormat runDelete()

### Example

```typescript
import { CUSTOMIZEPRINTFORMATApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new CUSTOMIZEPRINTFORMATApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runDelete(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**CustomizePrintFormat**

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

> CustomizePrintFormat runFindOne()

### Example

```typescript
import { CUSTOMIZEPRINTFORMATApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new CUSTOMIZEPRINTFORMATApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runFindOne(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**CustomizePrintFormat**

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

# **runFullTextSearch**

> Array<CustomizePrintFormat> runFullTextSearch(body)

### Example

```typescript
import { CUSTOMIZEPRINTFORMATApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new CUSTOMIZEPRINTFORMATApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runFullTextSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<CustomizePrintFormat>**

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

# **runPatch**

> runPatch(customizePrintFormat)

### Example

```typescript
import {
  CUSTOMIZEPRINTFORMATApi,
  Configuration,
  CustomizePrintFormat,
} from "./api";

const configuration = new Configuration();
const apiInstance = new CUSTOMIZEPRINTFORMATApi(configuration);

let id: string; // (default to undefined)
let customizePrintFormat: CustomizePrintFormat; //Data

const { status, data } = await apiInstance.runPatch(id, customizePrintFormat);
```

### Parameters

| Name                     | Type                     | Description | Notes                 |
| ------------------------ | ------------------------ | ----------- | --------------------- |
| **customizePrintFormat** | **CustomizePrintFormat** | Data        |                       |
| **id**                   | [**string**]             |             | defaults to undefined |

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
  CUSTOMIZEPRINTFORMATApi,
  Configuration,
  PatchManyRequest,
} from "./api";

const configuration = new Configuration();
const apiInstance = new CUSTOMIZEPRINTFORMATApi(configuration);

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

> Array<CustomizePrintFormat> runSearch(body)

### Example

```typescript
import { CUSTOMIZEPRINTFORMATApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new CUSTOMIZEPRINTFORMATApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<CustomizePrintFormat>**

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

> runUpdate(customizePrintFormat)

### Example

```typescript
import {
  CUSTOMIZEPRINTFORMATApi,
  Configuration,
  CustomizePrintFormat,
} from "./api";

const configuration = new Configuration();
const apiInstance = new CUSTOMIZEPRINTFORMATApi(configuration);

let id: string; // (default to undefined)
let customizePrintFormat: CustomizePrintFormat; //Data

const { status, data } = await apiInstance.runUpdate(id, customizePrintFormat);
```

### Parameters

| Name                     | Type                     | Description | Notes                 |
| ------------------------ | ------------------------ | ----------- | --------------------- |
| **customizePrintFormat** | **CustomizePrintFormat** | Data        |                       |
| **id**                   | [**string**]             |             | defaults to undefined |

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
