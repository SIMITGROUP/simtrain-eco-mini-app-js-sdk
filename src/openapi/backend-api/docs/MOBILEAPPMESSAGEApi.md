# MOBILEAPPMESSAGEApi

All URIs are relative to _http://localhost_

| Method                            | HTTP request                            | Description |
| --------------------------------- | --------------------------------------- | ----------- |
| [**autoComplete**](#autocomplete) | **POST** /mobileappmessage/autocomplete |             |
| [**runCreate**](#runcreate)       | **POST** /mobileappmessage              |             |
| [**runDefault**](#rundefault)     | **GET** /mobileappmessage               |             |
| [**runDelete**](#rundelete)       | **DELETE** /mobileappmessage/{id}       |             |
| [**runFindOne**](#runfindone)     | **GET** /mobileappmessage/{id}          |             |
| [**runMsglist**](#runmsglist)     | **GET** /mobileappmessage-api/msglist   |             |
| [**runPatch**](#runpatch)         | **PATCH** /mobileappmessage/{id}        |             |
| [**runPatchMany**](#runpatchmany) | **PATCH** /mobileappmessage/bulk-patch  |             |
| [**runReadmsg**](#runreadmsg)     | **GET** /mobileappmessage-api/{id}/read |             |
| [**runSearch**](#runsearch)       | **POST** /mobileappmessage/search       |             |
| [**runUpdate**](#runupdate)       | **PUT** /mobileappmessage/{id}          |             |

# **autoComplete**

> Array<MobileAppMessageAutoComplete> autoComplete(body)

retrieve array of {\_id, code, name}

### Example

```typescript
import { MOBILEAPPMESSAGEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new MOBILEAPPMESSAGEApi(configuration);

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

**Array<MobileAppMessageAutoComplete>**

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

> MobileAppMessage runCreate(mobileAppMessage)

### Example

```typescript
import { MOBILEAPPMESSAGEApi, Configuration, MobileAppMessage } from "./api";

const configuration = new Configuration();
const apiInstance = new MOBILEAPPMESSAGEApi(configuration);

let mobileAppMessage: MobileAppMessage; //Data

const { status, data } = await apiInstance.runCreate(mobileAppMessage);
```

### Parameters

| Name                 | Type                 | Description | Notes |
| -------------------- | -------------------- | ----------- | ----- |
| **mobileAppMessage** | **MobileAppMessage** | Data        |       |

### Return type

**MobileAppMessage**

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
import { MOBILEAPPMESSAGEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new MOBILEAPPMESSAGEApi(configuration);

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

> MobileAppMessage runDelete()

### Example

```typescript
import { MOBILEAPPMESSAGEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new MOBILEAPPMESSAGEApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runDelete(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**MobileAppMessage**

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

> MobileAppMessage runFindOne()

### Example

```typescript
import { MOBILEAPPMESSAGEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new MOBILEAPPMESSAGEApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runFindOne(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**MobileAppMessage**

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

# **runMsglist**

> Array<SystemMessage> runMsglist()

### Example

```typescript
import { MOBILEAPPMESSAGEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new MOBILEAPPMESSAGEApi(configuration);

const { status, data } = await apiInstance.runMsglist();
```

### Parameters

This endpoint does not have any parameters.

### Return type

**Array<SystemMessage>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                       | Response headers |
| ----------- | --------------------------------- | ---------------- |
| **200**     | get message content and mark read | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runPatch**

> runPatch(mobileAppMessage)

### Example

```typescript
import { MOBILEAPPMESSAGEApi, Configuration, MobileAppMessage } from "./api";

const configuration = new Configuration();
const apiInstance = new MOBILEAPPMESSAGEApi(configuration);

let id: string; // (default to undefined)
let mobileAppMessage: MobileAppMessage; //Data

const { status, data } = await apiInstance.runPatch(id, mobileAppMessage);
```

### Parameters

| Name                 | Type                 | Description | Notes                 |
| -------------------- | -------------------- | ----------- | --------------------- |
| **mobileAppMessage** | **MobileAppMessage** | Data        |                       |
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
import { MOBILEAPPMESSAGEApi, Configuration, PatchManyRequest } from "./api";

const configuration = new Configuration();
const apiInstance = new MOBILEAPPMESSAGEApi(configuration);

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

# **runReadmsg**

> SystemMessage runReadmsg()

### Example

```typescript
import { MOBILEAPPMESSAGEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new MOBILEAPPMESSAGEApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runReadmsg(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**SystemMessage**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                       | Response headers |
| ----------- | --------------------------------- | ---------------- |
| **200**     | get message content and mark read | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runSearch**

> Array<MobileAppMessage> runSearch(body)

### Example

```typescript
import { MOBILEAPPMESSAGEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new MOBILEAPPMESSAGEApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<MobileAppMessage>**

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

> runUpdate(mobileAppMessage)

### Example

```typescript
import { MOBILEAPPMESSAGEApi, Configuration, MobileAppMessage } from "./api";

const configuration = new Configuration();
const apiInstance = new MOBILEAPPMESSAGEApi(configuration);

let id: string; // (default to undefined)
let mobileAppMessage: MobileAppMessage; //Data

const { status, data } = await apiInstance.runUpdate(id, mobileAppMessage);
```

### Parameters

| Name                 | Type                 | Description | Notes                 |
| -------------------- | -------------------- | ----------- | --------------------- |
| **mobileAppMessage** | **MobileAppMessage** | Data        |                       |
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
