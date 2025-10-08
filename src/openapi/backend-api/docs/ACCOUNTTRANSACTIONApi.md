# ACCOUNTTRANSACTIONApi

All URIs are relative to _http://localhost_

| Method                                                    | HTTP request                                            | Description |
| --------------------------------------------------------- | ------------------------------------------------------- | ----------- |
| [**autoComplete**](#autocomplete)                         | **POST** /accounttransaction/autocomplete               |             |
| [**runCreate**](#runcreate)                               | **POST** /accounttransaction                            |             |
| [**runDefault**](#rundefault)                             | **GET** /accounttransaction                             |             |
| [**runDelete**](#rundelete)                               | **DELETE** /accounttransaction/{id}                     |             |
| [**runFindOne**](#runfindone)                             | **GET** /accounttransaction/{id}                        |             |
| [**runFullTextSearch**](#runfulltextsearch)               | **POST** /accounttransaction/fulltextsearch             |             |
| [**runOutstandingByStudents**](#runoutstandingbystudents) | **GET** /accounttransaction-api/outstanding-by-students |             |
| [**runPatch**](#runpatch)                                 | **PATCH** /accounttransaction/{id}                      |             |
| [**runPatchMany**](#runpatchmany)                         | **PATCH** /accounttransaction/bulk-patch                |             |
| [**runSearch**](#runsearch)                               | **POST** /accounttransaction/search                     |             |
| [**runUpdate**](#runupdate)                               | **PUT** /accounttransaction/{id}                        |             |

# **autoComplete**

> Array<AccountTransactionAutoComplete> autoComplete(body)

retrieve array of {\_id, code, name}

### Example

```typescript
import { ACCOUNTTRANSACTIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ACCOUNTTRANSACTIONApi(configuration);

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

**Array<AccountTransactionAutoComplete>**

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

> AccountTransaction runCreate(accountTransaction)

### Example

```typescript
import {
  ACCOUNTTRANSACTIONApi,
  Configuration,
  AccountTransaction,
} from "./api";

const configuration = new Configuration();
const apiInstance = new ACCOUNTTRANSACTIONApi(configuration);

let accountTransaction: AccountTransaction; //Data

const { status, data } = await apiInstance.runCreate(accountTransaction);
```

### Parameters

| Name                   | Type                   | Description | Notes |
| ---------------------- | ---------------------- | ----------- | ----- |
| **accountTransaction** | **AccountTransaction** | Data        |       |

### Return type

**AccountTransaction**

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
import { ACCOUNTTRANSACTIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ACCOUNTTRANSACTIONApi(configuration);

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

> AccountTransaction runDelete()

### Example

```typescript
import { ACCOUNTTRANSACTIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ACCOUNTTRANSACTIONApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runDelete(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**AccountTransaction**

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

> AccountTransaction runFindOne()

### Example

```typescript
import { ACCOUNTTRANSACTIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ACCOUNTTRANSACTIONApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runFindOne(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**AccountTransaction**

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

> Array<AccountTransaction> runFullTextSearch(body)

### Example

```typescript
import { ACCOUNTTRANSACTIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ACCOUNTTRANSACTIONApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runFullTextSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<AccountTransaction>**

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

# **runOutstandingByStudents**

> Array<OutstandingByStudent> runOutstandingByStudents()

### Example

```typescript
import { ACCOUNTTRANSACTIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ACCOUNTTRANSACTIONApi(configuration);

const { status, data } = await apiInstance.runOutstandingByStudents();
```

### Parameters

This endpoint does not have any parameters.

### Return type

**Array<OutstandingByStudent>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                        | Response headers |
| ----------- | ---------------------------------- | ---------------- |
| **200**     | get Outstanding amount by students | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runPatch**

> runPatch(accountTransaction)

### Example

```typescript
import {
  ACCOUNTTRANSACTIONApi,
  Configuration,
  AccountTransaction,
} from "./api";

const configuration = new Configuration();
const apiInstance = new ACCOUNTTRANSACTIONApi(configuration);

let id: string; // (default to undefined)
let accountTransaction: AccountTransaction; //Data

const { status, data } = await apiInstance.runPatch(id, accountTransaction);
```

### Parameters

| Name                   | Type                   | Description | Notes                 |
| ---------------------- | ---------------------- | ----------- | --------------------- |
| **accountTransaction** | **AccountTransaction** | Data        |                       |
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
import { ACCOUNTTRANSACTIONApi, Configuration, PatchManyRequest } from "./api";

const configuration = new Configuration();
const apiInstance = new ACCOUNTTRANSACTIONApi(configuration);

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

> Array<AccountTransaction> runSearch(body)

### Example

```typescript
import { ACCOUNTTRANSACTIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ACCOUNTTRANSACTIONApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<AccountTransaction>**

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

> runUpdate(accountTransaction)

### Example

```typescript
import {
  ACCOUNTTRANSACTIONApi,
  Configuration,
  AccountTransaction,
} from "./api";

const configuration = new Configuration();
const apiInstance = new ACCOUNTTRANSACTIONApi(configuration);

let id: string; // (default to undefined)
let accountTransaction: AccountTransaction; //Data

const { status, data } = await apiInstance.runUpdate(id, accountTransaction);
```

### Parameters

| Name                   | Type                   | Description | Notes                 |
| ---------------------- | ---------------------- | ----------- | --------------------- |
| **accountTransaction** | **AccountTransaction** | Data        |                       |
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
