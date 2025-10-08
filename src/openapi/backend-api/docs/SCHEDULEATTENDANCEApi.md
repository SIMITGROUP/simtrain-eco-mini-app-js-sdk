# SCHEDULEATTENDANCEApi

All URIs are relative to _http://localhost_

| Method                            | HTTP request                              | Description |
| --------------------------------- | ----------------------------------------- | ----------- |
| [**autoComplete**](#autocomplete) | **POST** /scheduleattendance/autocomplete |             |
| [**runCreate**](#runcreate)       | **POST** /scheduleattendance              |             |
| [**runDefault**](#rundefault)     | **GET** /scheduleattendance               |             |
| [**runDelete**](#rundelete)       | **DELETE** /scheduleattendance/{id}       |             |
| [**runFindOne**](#runfindone)     | **GET** /scheduleattendance/{id}          |             |
| [**runPatch**](#runpatch)         | **PATCH** /scheduleattendance/{id}        |             |
| [**runPatchMany**](#runpatchmany) | **PATCH** /scheduleattendance/bulk-patch  |             |
| [**runSearch**](#runsearch)       | **POST** /scheduleattendance/search       |             |
| [**runUpdate**](#runupdate)       | **PUT** /scheduleattendance/{id}          |             |

# **autoComplete**

> Array<ScheduleAttendanceAutoComplete> autoComplete(body)

retrieve array of {\_id, code, name}

### Example

```typescript
import { SCHEDULEATTENDANCEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new SCHEDULEATTENDANCEApi(configuration);

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

**Array<ScheduleAttendanceAutoComplete>**

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

> ScheduleAttendance runCreate(scheduleAttendance)

### Example

```typescript
import {
  SCHEDULEATTENDANCEApi,
  Configuration,
  ScheduleAttendance,
} from "./api";

const configuration = new Configuration();
const apiInstance = new SCHEDULEATTENDANCEApi(configuration);

let scheduleAttendance: ScheduleAttendance; //Data

const { status, data } = await apiInstance.runCreate(scheduleAttendance);
```

### Parameters

| Name                   | Type                   | Description | Notes |
| ---------------------- | ---------------------- | ----------- | ----- |
| **scheduleAttendance** | **ScheduleAttendance** | Data        |       |

### Return type

**ScheduleAttendance**

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
import { SCHEDULEATTENDANCEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new SCHEDULEATTENDANCEApi(configuration);

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

> ScheduleAttendance runDelete()

### Example

```typescript
import { SCHEDULEATTENDANCEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new SCHEDULEATTENDANCEApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runDelete(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**ScheduleAttendance**

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

> ScheduleAttendance runFindOne()

### Example

```typescript
import { SCHEDULEATTENDANCEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new SCHEDULEATTENDANCEApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runFindOne(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**ScheduleAttendance**

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

> runPatch(scheduleAttendance)

### Example

```typescript
import {
  SCHEDULEATTENDANCEApi,
  Configuration,
  ScheduleAttendance,
} from "./api";

const configuration = new Configuration();
const apiInstance = new SCHEDULEATTENDANCEApi(configuration);

let id: string; // (default to undefined)
let scheduleAttendance: ScheduleAttendance; //Data

const { status, data } = await apiInstance.runPatch(id, scheduleAttendance);
```

### Parameters

| Name                   | Type                   | Description | Notes                 |
| ---------------------- | ---------------------- | ----------- | --------------------- |
| **scheduleAttendance** | **ScheduleAttendance** | Data        |                       |
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
import { SCHEDULEATTENDANCEApi, Configuration, PatchManyRequest } from "./api";

const configuration = new Configuration();
const apiInstance = new SCHEDULEATTENDANCEApi(configuration);

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

> Array<ScheduleAttendance> runSearch(body)

### Example

```typescript
import { SCHEDULEATTENDANCEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new SCHEDULEATTENDANCEApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<ScheduleAttendance>**

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

> runUpdate(scheduleAttendance)

### Example

```typescript
import {
  SCHEDULEATTENDANCEApi,
  Configuration,
  ScheduleAttendance,
} from "./api";

const configuration = new Configuration();
const apiInstance = new SCHEDULEATTENDANCEApi(configuration);

let id: string; // (default to undefined)
let scheduleAttendance: ScheduleAttendance; //Data

const { status, data } = await apiInstance.runUpdate(id, scheduleAttendance);
```

### Parameters

| Name                   | Type                   | Description | Notes                 |
| ---------------------- | ---------------------- | ----------- | --------------------- |
| **scheduleAttendance** | **ScheduleAttendance** | Data        |                       |
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
