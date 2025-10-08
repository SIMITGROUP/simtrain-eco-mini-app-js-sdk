# LEVELApi

All URIs are relative to _http://localhost_

| Method                                                | HTTP request                             | Description |
| ----------------------------------------------------- | ---------------------------------------- | ----------- |
| [**autoComplete**](#autocomplete)                     | **POST** /level/autocomplete             |             |
| [**runCheckUniqueKeyExist**](#runcheckuniquekeyexist) | **POST** /level-api/union-exist          |             |
| [**runCreate**](#runcreate)                           | **POST** /level                          |             |
| [**runDefault**](#rundefault)                         | **GET** /level                           |             |
| [**runDelete**](#rundelete)                           | **DELETE** /level/{id}                   |             |
| [**runFindOne**](#runfindone)                         | **GET** /level/{id}                      |             |
| [**runFullTextSearch**](#runfulltextsearch)           | **POST** /level/fulltextsearch           |             |
| [**runPatch**](#runpatch)                             | **PATCH** /level/{id}                    |             |
| [**runPatchMany**](#runpatchmany)                     | **PATCH** /level/bulk-patch              |             |
| [**runSearch**](#runsearch)                           | **POST** /level/search                   |             |
| [**runSearchWithRelation**](#runsearchwithrelation)   | **POST** /level-api/search-with-relation |             |
| [**runUpdate**](#runupdate)                           | **PUT** /level/{id}                      |             |

# **autoComplete**

> Array<LevelAutoComplete> autoComplete(body)

retrieve array of {\_id, code, name}

### Example

```typescript
import { LEVELApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new LEVELApi(configuration);

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

**Array<LevelAutoComplete>**

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

# **runCheckUniqueKeyExist**

> Array<object> runCheckUniqueKeyExist(requestBody)

### Example

```typescript
import { LEVELApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new LEVELApi(configuration);

let requestBody: Array<string>; //Request Body

const { status, data } = await apiInstance.runCheckUniqueKeyExist(requestBody);
```

### Parameters

| Name            | Type              | Description  | Notes |
| --------------- | ----------------- | ------------ | ----- |
| **requestBody** | **Array<string>** | Request Body |       |

### Return type

**Array<object>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                             | Response headers |
| ----------- | --------------------------------------- | ---------------- |
| **200**     | Check multiple level code exist or not. | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runCreate**

> Level runCreate(level)

### Example

```typescript
import { LEVELApi, Configuration, Level } from "./api";

const configuration = new Configuration();
const apiInstance = new LEVELApi(configuration);

let level: Level; //Data

const { status, data } = await apiInstance.runCreate(level);
```

### Parameters

| Name      | Type      | Description | Notes |
| --------- | --------- | ----------- | ----- |
| **level** | **Level** | Data        |       |

### Return type

**Level**

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
import { LEVELApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new LEVELApi(configuration);

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

> Level runDelete()

### Example

```typescript
import { LEVELApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new LEVELApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runDelete(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**Level**

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

> Level runFindOne()

### Example

```typescript
import { LEVELApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new LEVELApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runFindOne(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**Level**

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

> Array<Level> runFullTextSearch(body)

### Example

```typescript
import { LEVELApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new LEVELApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runFullTextSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<Level>**

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

> runPatch(level)

### Example

```typescript
import { LEVELApi, Configuration, Level } from "./api";

const configuration = new Configuration();
const apiInstance = new LEVELApi(configuration);

let id: string; // (default to undefined)
let level: Level; //Data

const { status, data } = await apiInstance.runPatch(id, level);
```

### Parameters

| Name      | Type         | Description | Notes                 |
| --------- | ------------ | ----------- | --------------------- |
| **level** | **Level**    | Data        |                       |
| **id**    | [**string**] |             | defaults to undefined |

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
import { LEVELApi, Configuration, PatchManyRequest } from "./api";

const configuration = new Configuration();
const apiInstance = new LEVELApi(configuration);

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

> Array<Level> runSearch(body)

### Example

```typescript
import { LEVELApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new LEVELApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<Level>**

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

# **runSearchWithRelation**

> Array<LevelWithRelation> runSearchWithRelation(searchLevelWithRelations)

### Example

```typescript
import { LEVELApi, Configuration, SearchLevelWithRelations } from "./api";

const configuration = new Configuration();
const apiInstance = new LEVELApi(configuration);

let searchLevelWithRelations: SearchLevelWithRelations; //Request Body

const { status, data } = await apiInstance.runSearchWithRelation(
  searchLevelWithRelations
);
```

### Parameters

| Name                         | Type                         | Description  | Notes |
| ---------------------------- | ---------------------------- | ------------ | ----- |
| **searchLevelWithRelations** | **SearchLevelWithRelations** | Request Body |       |

### Return type

**Array<LevelWithRelation>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                     | Response headers |
| ----------- | ------------------------------- | ---------------- |
| **200**     | Search level with product info. | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runUpdate**

> runUpdate(level)

### Example

```typescript
import { LEVELApi, Configuration, Level } from "./api";

const configuration = new Configuration();
const apiInstance = new LEVELApi(configuration);

let id: string; // (default to undefined)
let level: Level; //Data

const { status, data } = await apiInstance.runUpdate(id, level);
```

### Parameters

| Name      | Type         | Description | Notes                 |
| --------- | ------------ | ----------- | --------------------- |
| **level** | **Level**    | Data        |                       |
| **id**    | [**string**] |             | defaults to undefined |

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
