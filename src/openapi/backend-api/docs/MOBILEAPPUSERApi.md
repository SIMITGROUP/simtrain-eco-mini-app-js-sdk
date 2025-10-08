# MOBILEAPPUSERApi

All URIs are relative to _http://localhost_

| Method                                              | HTTP request                                   | Description |
| --------------------------------------------------- | ---------------------------------------------- | ----------- |
| [**autoComplete**](#autocomplete)                   | **POST** /mobileappuser/autocomplete           |             |
| [**runCreate**](#runcreate)                         | **POST** /mobileappuser                        |             |
| [**runDefault**](#rundefault)                       | **GET** /mobileappuser                         |             |
| [**runDelete**](#rundelete)                         | **DELETE** /mobileappuser/{id}                 |             |
| [**runFindOne**](#runfindone)                       | **GET** /mobileappuser/{id}                    |             |
| [**runPatch**](#runpatch)                           | **PATCH** /mobileappuser/{id}                  |             |
| [**runPatchMany**](#runpatchmany)                   | **PATCH** /mobileappuser/bulk-patch            |             |
| [**runRemoveMessageToken**](#runremovemessagetoken) | **POST** /mobileappuser-api/removeMessageToken |             |
| [**runSaveMessageToken**](#runsavemessagetoken)     | **POST** /mobileappuser-api/saveMessageToken   |             |
| [**runSearch**](#runsearch)                         | **POST** /mobileappuser/search                 |             |
| [**runUpdate**](#runupdate)                         | **PUT** /mobileappuser/{id}                    |             |

# **autoComplete**

> Array<MobileAppUserAutoComplete> autoComplete(body)

retrieve array of {\_id, code, name}

### Example

```typescript
import { MOBILEAPPUSERApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new MOBILEAPPUSERApi(configuration);

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

**Array<MobileAppUserAutoComplete>**

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

> MobileAppUser runCreate(mobileAppUser)

### Example

```typescript
import { MOBILEAPPUSERApi, Configuration, MobileAppUser } from "./api";

const configuration = new Configuration();
const apiInstance = new MOBILEAPPUSERApi(configuration);

let mobileAppUser: MobileAppUser; //Data

const { status, data } = await apiInstance.runCreate(mobileAppUser);
```

### Parameters

| Name              | Type              | Description | Notes |
| ----------------- | ----------------- | ----------- | ----- |
| **mobileAppUser** | **MobileAppUser** | Data        |       |

### Return type

**MobileAppUser**

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
import { MOBILEAPPUSERApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new MOBILEAPPUSERApi(configuration);

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

> MobileAppUser runDelete()

### Example

```typescript
import { MOBILEAPPUSERApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new MOBILEAPPUSERApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runDelete(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**MobileAppUser**

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

> MobileAppUser runFindOne()

### Example

```typescript
import { MOBILEAPPUSERApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new MOBILEAPPUSERApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runFindOne(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**MobileAppUser**

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

> runPatch(mobileAppUser)

### Example

```typescript
import { MOBILEAPPUSERApi, Configuration, MobileAppUser } from "./api";

const configuration = new Configuration();
const apiInstance = new MOBILEAPPUSERApi(configuration);

let id: string; // (default to undefined)
let mobileAppUser: MobileAppUser; //Data

const { status, data } = await apiInstance.runPatch(id, mobileAppUser);
```

### Parameters

| Name              | Type              | Description | Notes                 |
| ----------------- | ----------------- | ----------- | --------------------- |
| **mobileAppUser** | **MobileAppUser** | Data        |                       |
| **id**            | [**string**]      |             | defaults to undefined |

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
import { MOBILEAPPUSERApi, Configuration, PatchManyRequest } from "./api";

const configuration = new Configuration();
const apiInstance = new MOBILEAPPUSERApi(configuration);

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

# **runRemoveMessageToken**

> string runRemoveMessageToken(tokenCredential)

### Example

```typescript
import { MOBILEAPPUSERApi, Configuration, TokenCredential } from "./api";

const configuration = new Configuration();
const apiInstance = new MOBILEAPPUSERApi(configuration);

let tokenCredential: TokenCredential; //Request Body

const { status, data } =
  await apiInstance.runRemoveMessageToken(tokenCredential);
```

### Parameters

| Name                | Type                | Description  | Notes |
| ------------------- | ------------------- | ------------ | ----- |
| **tokenCredential** | **TokenCredential** | Request Body |       |

### Return type

**string**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | remove message token | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runSaveMessageToken**

> string runSaveMessageToken(tokenCredential)

### Example

```typescript
import { MOBILEAPPUSERApi, Configuration, TokenCredential } from "./api";

const configuration = new Configuration();
const apiInstance = new MOBILEAPPUSERApi(configuration);

let tokenCredential: TokenCredential; //Request Body

const { status, data } = await apiInstance.runSaveMessageToken(tokenCredential);
```

### Parameters

| Name                | Type                | Description  | Notes |
| ------------------- | ------------------- | ------------ | ----- |
| **tokenCredential** | **TokenCredential** | Request Body |       |

### Return type

**string**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description        | Response headers |
| ----------- | ------------------ | ---------------- |
| **200**     | Save message token | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runSearch**

> Array<MobileAppUser> runSearch(body)

### Example

```typescript
import { MOBILEAPPUSERApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new MOBILEAPPUSERApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<MobileAppUser>**

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

> runUpdate(mobileAppUser)

### Example

```typescript
import { MOBILEAPPUSERApi, Configuration, MobileAppUser } from "./api";

const configuration = new Configuration();
const apiInstance = new MOBILEAPPUSERApi(configuration);

let id: string; // (default to undefined)
let mobileAppUser: MobileAppUser; //Data

const { status, data } = await apiInstance.runUpdate(id, mobileAppUser);
```

### Parameters

| Name              | Type              | Description | Notes                 |
| ----------------- | ----------------- | ----------- | --------------------- |
| **mobileAppUser** | **MobileAppUser** | Data        |                       |
| **id**            | [**string**]      |             | defaults to undefined |

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
