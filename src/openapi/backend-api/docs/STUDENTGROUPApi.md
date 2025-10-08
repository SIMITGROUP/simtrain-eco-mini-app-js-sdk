# STUDENTGROUPApi

All URIs are relative to _http://localhost_

| Method                                                | HTTP request                           | Description |
| ----------------------------------------------------- | -------------------------------------- | ----------- |
| [**autoComplete**](#autocomplete)                     | **POST** /studentgroup/autocomplete    |             |
| [**runCheckUniqueKeyExist**](#runcheckuniquekeyexist) | **POST** /studentgroup-api/union-exist |             |
| [**runCreate**](#runcreate)                           | **POST** /studentgroup                 |             |
| [**runDefault**](#rundefault)                         | **GET** /studentgroup                  |             |
| [**runDelete**](#rundelete)                           | **DELETE** /studentgroup/{id}          |             |
| [**runFindOne**](#runfindone)                         | **GET** /studentgroup/{id}             |             |
| [**runPatch**](#runpatch)                             | **PATCH** /studentgroup/{id}           |             |
| [**runPatchMany**](#runpatchmany)                     | **PATCH** /studentgroup/bulk-patch     |             |
| [**runSearch**](#runsearch)                           | **POST** /studentgroup/search          |             |
| [**runUpdate**](#runupdate)                           | **PUT** /studentgroup/{id}             |             |

# **autoComplete**

> Array<StudentGroupAutoComplete> autoComplete(body)

retrieve array of {\_id, code, name}

### Example

```typescript
import { STUDENTGROUPApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTGROUPApi(configuration);

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

**Array<StudentGroupAutoComplete>**

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
import { STUDENTGROUPApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTGROUPApi(configuration);

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

| Status code | Description                       | Response headers |
| ----------- | --------------------------------- | ---------------- |
| **200**     | Check multiple code exist or not. | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runCreate**

> StudentGroup runCreate(studentGroup)

### Example

```typescript
import { STUDENTGROUPApi, Configuration, StudentGroup } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTGROUPApi(configuration);

let studentGroup: StudentGroup; //Data

const { status, data } = await apiInstance.runCreate(studentGroup);
```

### Parameters

| Name             | Type             | Description | Notes |
| ---------------- | ---------------- | ----------- | ----- |
| **studentGroup** | **StudentGroup** | Data        |       |

### Return type

**StudentGroup**

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
import { STUDENTGROUPApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTGROUPApi(configuration);

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

> StudentGroup runDelete()

### Example

```typescript
import { STUDENTGROUPApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTGROUPApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runDelete(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**StudentGroup**

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

> StudentGroup runFindOne()

### Example

```typescript
import { STUDENTGROUPApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTGROUPApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runFindOne(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**StudentGroup**

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

> runPatch(studentGroup)

### Example

```typescript
import { STUDENTGROUPApi, Configuration, StudentGroup } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTGROUPApi(configuration);

let id: string; // (default to undefined)
let studentGroup: StudentGroup; //Data

const { status, data } = await apiInstance.runPatch(id, studentGroup);
```

### Parameters

| Name             | Type             | Description | Notes                 |
| ---------------- | ---------------- | ----------- | --------------------- |
| **studentGroup** | **StudentGroup** | Data        |                       |
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
import { STUDENTGROUPApi, Configuration, PatchManyRequest } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTGROUPApi(configuration);

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

> Array<StudentGroup> runSearch(body)

### Example

```typescript
import { STUDENTGROUPApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTGROUPApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<StudentGroup>**

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

> runUpdate(studentGroup)

### Example

```typescript
import { STUDENTGROUPApi, Configuration, StudentGroup } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTGROUPApi(configuration);

let id: string; // (default to undefined)
let studentGroup: StudentGroup; //Data

const { status, data } = await apiInstance.runUpdate(id, studentGroup);
```

### Parameters

| Name             | Type             | Description | Notes                 |
| ---------------- | ---------------- | ----------- | --------------------- |
| **studentGroup** | **StudentGroup** | Data        |                       |
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
