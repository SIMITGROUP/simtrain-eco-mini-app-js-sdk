# ENROLLMENTApi

All URIs are relative to _http://localhost_

| Method                                                      | HTTP request                                                   | Description |
| ----------------------------------------------------------- | -------------------------------------------------------------- | ----------- |
| [**autoComplete**](#autocomplete)                           | **POST** /enrollment/autocomplete                              |             |
| [**runCreate**](#runcreate)                                 | **POST** /enrollment                                           |             |
| [**runDefault**](#rundefault)                               | **GET** /enrollment                                            |             |
| [**runDelete**](#rundelete)                                 | **DELETE** /enrollment/{id}                                    |             |
| [**runFindOne**](#runfindone)                               | **GET** /enrollment/{id}                                       |             |
| [**runGetEnrollmentSchedules**](#rungetenrollmentschedules) | **GET** /enrollment-api/{id}/enrollment-schedules              |             |
| [**runPatch**](#runpatch)                                   | **PATCH** /enrollment/{id}                                     |             |
| [**runPatchMany**](#runpatchmany)                           | **PATCH** /enrollment/bulk-patch                               |             |
| [**runRemoveClassReplacement**](#runremoveclassreplacement) | **PATCH** /enrollment-api/{id}/remove-replacement/{scheduleId} |             |
| [**runReplaceClass**](#runreplaceclass)                     | **PATCH** /enrollment-api/{id}/replace-class/{scheduleId}      |             |
| [**runRestartEnrollment**](#runrestartenrollment)           | **PATCH** /enrollment-api/{id}/restart                         |             |
| [**runSearch**](#runsearch)                                 | **POST** /enrollment/search                                    |             |
| [**runStopEnrollment**](#runstopenrollment)                 | **PATCH** /enrollment-api/{id}/stop                            |             |
| [**runUpdate**](#runupdate)                                 | **PUT** /enrollment/{id}                                       |             |

# **autoComplete**

> Array<EnrollmentAutoComplete> autoComplete(body)

retrieve array of {\_id, code, name}

### Example

```typescript
import { ENROLLMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ENROLLMENTApi(configuration);

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

**Array<EnrollmentAutoComplete>**

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

> Enrollment runCreate(enrollment)

### Example

```typescript
import { ENROLLMENTApi, Configuration, Enrollment } from "./api";

const configuration = new Configuration();
const apiInstance = new ENROLLMENTApi(configuration);

let enrollment: Enrollment; //Data

const { status, data } = await apiInstance.runCreate(enrollment);
```

### Parameters

| Name           | Type           | Description | Notes |
| -------------- | -------------- | ----------- | ----- |
| **enrollment** | **Enrollment** | Data        |       |

### Return type

**Enrollment**

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
import { ENROLLMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ENROLLMENTApi(configuration);

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

> Enrollment runDelete()

### Example

```typescript
import { ENROLLMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ENROLLMENTApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runDelete(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**Enrollment**

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

> Enrollment runFindOne()

### Example

```typescript
import { ENROLLMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ENROLLMENTApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runFindOne(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**Enrollment**

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

# **runGetEnrollmentSchedules**

> EnrollmentSchedules runGetEnrollmentSchedules()

### Example

```typescript
import { ENROLLMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ENROLLMENTApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runGetEnrollmentSchedules(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**EnrollmentSchedules**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                       | Response headers |
| ----------- | ------------------------------------------------- | ---------------- |
| **200**     | get enrollent class schedule and billing schedule | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runPatch**

> runPatch(enrollment)

### Example

```typescript
import { ENROLLMENTApi, Configuration, Enrollment } from "./api";

const configuration = new Configuration();
const apiInstance = new ENROLLMENTApi(configuration);

let id: string; // (default to undefined)
let enrollment: Enrollment; //Data

const { status, data } = await apiInstance.runPatch(id, enrollment);
```

### Parameters

| Name           | Type           | Description | Notes                 |
| -------------- | -------------- | ----------- | --------------------- |
| **enrollment** | **Enrollment** | Data        |                       |
| **id**         | [**string**]   |             | defaults to undefined |

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
import { ENROLLMENTApi, Configuration, PatchManyRequest } from "./api";

const configuration = new Configuration();
const apiInstance = new ENROLLMENTApi(configuration);

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

# **runRemoveClassReplacement**

> string runRemoveClassReplacement(body)

### Example

```typescript
import { ENROLLMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ENROLLMENTApi(configuration);

let id: string; // (default to undefined)
let scheduleId: string; // (default to undefined)
let body: object; //Request Body

const { status, data } = await apiInstance.runRemoveClassReplacement(
  id,
  scheduleId,
  body
);
```

### Parameters

| Name           | Type         | Description  | Notes                 |
| -------------- | ------------ | ------------ | --------------------- |
| **body**       | **object**   | Request Body |                       |
| **id**         | [**string**] |              | defaults to undefined |
| **scheduleId** | [**string**] |              | defaults to undefined |

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
| **200**     | remove replacement | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runReplaceClass**

> string runReplaceClass(scheduleAttendanceReplacement)

### Example

```typescript
import {
  ENROLLMENTApi,
  Configuration,
  ScheduleAttendanceReplacement,
} from "./api";

const configuration = new Configuration();
const apiInstance = new ENROLLMENTApi(configuration);

let id: string; // (default to undefined)
let scheduleId: string; // (default to undefined)
let scheduleAttendanceReplacement: ScheduleAttendanceReplacement; //Request Body

const { status, data } = await apiInstance.runReplaceClass(
  id,
  scheduleId,
  scheduleAttendanceReplacement
);
```

### Parameters

| Name                              | Type                              | Description  | Notes                 |
| --------------------------------- | --------------------------------- | ------------ | --------------------- |
| **scheduleAttendanceReplacement** | **ScheduleAttendanceReplacement** | Request Body |                       |
| **id**                            | [**string**]                      |              | defaults to undefined |
| **scheduleId**                    | [**string**]                      |              | defaults to undefined |

### Return type

**string**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                                                  | Response headers |
| ----------- | ------------------------------------------------------------ | ---------------- |
| **200**     | replace enrollment for specific schedule to another schedule | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runRestartEnrollment**

> string runRestartEnrollment(enrollment)

### Example

```typescript
import { ENROLLMENTApi, Configuration, Enrollment } from "./api";

const configuration = new Configuration();
const apiInstance = new ENROLLMENTApi(configuration);

let id: string; // (default to undefined)
let enrollment: Enrollment; //Request Body

const { status, data } = await apiInstance.runRestartEnrollment(id, enrollment);
```

### Parameters

| Name           | Type           | Description  | Notes                 |
| -------------- | -------------- | ------------ | --------------------- |
| **enrollment** | **Enrollment** | Request Body |                       |
| **id**         | [**string**]   |              | defaults to undefined |

### Return type

**string**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                                                                 | Response headers |
| ----------- | --------------------------------------------------------------------------- | ---------------- |
| **200**     | restart student enrollment, add back future attendance and billing schedule | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runSearch**

> Array<Enrollment> runSearch(body)

### Example

```typescript
import { ENROLLMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ENROLLMENTApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<Enrollment>**

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

# **runStopEnrollment**

> string runStopEnrollment(enrollment)

### Example

```typescript
import { ENROLLMENTApi, Configuration, Enrollment } from "./api";

const configuration = new Configuration();
const apiInstance = new ENROLLMENTApi(configuration);

let id: string; // (default to undefined)
let enrollment: Enrollment; //Request Body

const { status, data } = await apiInstance.runStopEnrollment(id, enrollment);
```

### Parameters

| Name           | Type           | Description  | Notes                 |
| -------------- | -------------- | ------------ | --------------------- |
| **enrollment** | **Enrollment** | Request Body |                       |
| **id**         | [**string**]   |              | defaults to undefined |

### Return type

**string**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                                                    | Response headers |
| ----------- | -------------------------------------------------------------- | ---------------- |
| **200**     | stop student enrollment, prevent future attendance and invoice | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runUpdate**

> runUpdate(enrollment)

### Example

```typescript
import { ENROLLMENTApi, Configuration, Enrollment } from "./api";

const configuration = new Configuration();
const apiInstance = new ENROLLMENTApi(configuration);

let id: string; // (default to undefined)
let enrollment: Enrollment; //Data

const { status, data } = await apiInstance.runUpdate(id, enrollment);
```

### Parameters

| Name           | Type           | Description | Notes                 |
| -------------- | -------------- | ----------- | --------------------- |
| **enrollment** | **Enrollment** | Data        |                       |
| **id**         | [**string**]   |             | defaults to undefined |

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
