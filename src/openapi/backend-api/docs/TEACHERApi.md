# TEACHERApi

All URIs are relative to _http://localhost_

| Method                                                                | HTTP request                                                        | Description |
| --------------------------------------------------------------------- | ------------------------------------------------------------------- | ----------- |
| [**autoComplete**](#autocomplete)                                     | **POST** /teacher/autocomplete                                      |             |
| [**runCreate**](#runcreate)                                           | **POST** /teacher                                                   |             |
| [**runCreateTeacherCommission**](#runcreateteachercommission)         | **POST** /teacher-api/{id}/teacher-commission-settings              |             |
| [**runDefault**](#rundefault)                                         | **GET** /teacher                                                    |             |
| [**runDelete**](#rundelete)                                           | **DELETE** /teacher/{id}                                            |             |
| [**runFindOne**](#runfindone)                                         | **GET** /teacher/{id}                                               |             |
| [**runFullTextSearch**](#runfulltextsearch)                           | **POST** /teacher/fulltextsearch                                    |             |
| [**runGetAttendanceByTeacher**](#rungetattendancebyteacher)           | **GET** /teacher-api/{dateFrom}/{dateTo}/attendance-by-teacher      |             |
| [**runGetAttendanceSummaryByTable**](#rungetattendancesummarybytable) | **GET** /teacher-api/{dateFrom}/{dateTo}/attendancesummary-by-table |             |
| [**runGetPhoto**](#rungetphoto)                                       | **GET** /teacher-api/{id}/photo                                     |             |
| [**runGetTeacherByLvl**](#rungetteacherbylvl)                         | **GET** /teacher-api/{dateFrom}/{dateTo}/teacher-by-lvl             |             |
| [**runGetTeacherCommissionResult**](#rungetteachercommissionresult)   | **GET** /teacher-api/teacherCommission/{period}                     |             |
| [**runGetTeacherCommissionSetting**](#rungetteachercommissionsetting) | **GET** /teacher-api/{id}/teacher-commission-settings               |             |
| [**runGetTeacherGroupAnalyse**](#rungetteachergroupanalyse)           | **GET** /teacher-api/{dateFrom}/{dateTo}/teacher-group-analyse      |             |
| [**runGetTeacherPerformance**](#rungetteacherperformance)             | **GET** /teacher-api/{dateFrom}/{dateTo}/teacher-performance        |             |
| [**runPatch**](#runpatch)                                             | **PATCH** /teacher/{id}                                             |             |
| [**runPatchMany**](#runpatchmany)                                     | **PATCH** /teacher/bulk-patch                                       |             |
| [**runSearch**](#runsearch)                                           | **POST** /teacher/search                                            |             |
| [**runUpdate**](#runupdate)                                           | **PUT** /teacher/{id}                                               |             |
| [**runUploadPhoto**](#runuploadphoto)                                 | **POST** /teacher-api/{id}/photo                                    |             |

# **autoComplete**

> Array<TeacherAutoComplete> autoComplete(body)

retrieve array of {\_id, code, name}

### Example

```typescript
import { TEACHERApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TEACHERApi(configuration);

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

**Array<TeacherAutoComplete>**

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

> Teacher runCreate(teacher)

### Example

```typescript
import { TEACHERApi, Configuration, Teacher } from "./api";

const configuration = new Configuration();
const apiInstance = new TEACHERApi(configuration);

let teacher: Teacher; //Data

const { status, data } = await apiInstance.runCreate(teacher);
```

### Parameters

| Name        | Type        | Description | Notes |
| ----------- | ----------- | ----------- | ----- |
| **teacher** | **Teacher** | Data        |       |

### Return type

**Teacher**

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

# **runCreateTeacherCommission**

> string runCreateTeacherCommission(teacherCommissionSettingRequest)

### Example

```typescript
import {
  TEACHERApi,
  Configuration,
  TeacherCommissionSettingRequest,
} from "./api";

const configuration = new Configuration();
const apiInstance = new TEACHERApi(configuration);

let id: string; // (default to undefined)
let teacherCommissionSettingRequest: TeacherCommissionSettingRequest; //Request Body

const { status, data } = await apiInstance.runCreateTeacherCommission(
  id,
  teacherCommissionSettingRequest
);
```

### Parameters

| Name                                | Type                                | Description  | Notes                 |
| ----------------------------------- | ----------------------------------- | ------------ | --------------------- |
| **teacherCommissionSettingRequest** | **TeacherCommissionSettingRequest** | Request Body |                       |
| **id**                              | [**string**]                        |              | defaults to undefined |

### Return type

**string**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                  | Response headers |
| ----------- | ---------------------------- | ---------------- |
| **200**     | post teacher commission data | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runDefault**

> object runDefault()

Run default behavior like say hello

### Example

```typescript
import { TEACHERApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TEACHERApi(configuration);

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

> Teacher runDelete()

### Example

```typescript
import { TEACHERApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TEACHERApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runDelete(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**Teacher**

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

> Teacher runFindOne()

### Example

```typescript
import { TEACHERApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TEACHERApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runFindOne(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**Teacher**

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

> Array<Teacher> runFullTextSearch(body)

### Example

```typescript
import { TEACHERApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TEACHERApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runFullTextSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<Teacher>**

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

# **runGetAttendanceByTeacher**

> Array<AttendanceSummaryByTeacher> runGetAttendanceByTeacher()

### Example

```typescript
import { TEACHERApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TEACHERApi(configuration);

let dateFrom: string; // (default to undefined)
let dateTo: string; // (default to undefined)

const { status, data } = await apiInstance.runGetAttendanceByTeacher(
  dateFrom,
  dateTo
);
```

### Parameters

| Name         | Type         | Description | Notes                 |
| ------------ | ------------ | ----------- | --------------------- |
| **dateFrom** | [**string**] |             | defaults to undefined |
| **dateTo**   | [**string**] |             | defaults to undefined |

### Return type

**Array<AttendanceSummaryByTeacher>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description               | Response headers |
| ----------- | ------------------------- | ---------------- |
| **200**     | get attendance by teacher | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetAttendanceSummaryByTable**

> Array<AttendanceSummaryByTable> runGetAttendanceSummaryByTable()

### Example

```typescript
import { TEACHERApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TEACHERApi(configuration);

let dateFrom: string; // (default to undefined)
let dateTo: string; // (default to undefined)

const { status, data } = await apiInstance.runGetAttendanceSummaryByTable(
  dateFrom,
  dateTo
);
```

### Parameters

| Name         | Type         | Description | Notes                 |
| ------------ | ------------ | ----------- | --------------------- |
| **dateFrom** | [**string**] |             | defaults to undefined |
| **dateTo**   | [**string**] |             | defaults to undefined |

### Return type

**Array<AttendanceSummaryByTable>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                     | Response headers |
| ----------- | ------------------------------- | ---------------- |
| **200**     | get attendance summary by table | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetPhoto**

> File runGetPhoto()

### Example

```typescript
import { TEACHERApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TEACHERApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runGetPhoto(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**File**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/png

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **200**     | Get Teacher photo | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetTeacherByLvl**

> Array<TeacherByLvl> runGetTeacherByLvl()

### Example

```typescript
import { TEACHERApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TEACHERApi(configuration);

let dateFrom: string; // (default to undefined)
let dateTo: string; // (default to undefined)

const { status, data } = await apiInstance.runGetTeacherByLvl(dateFrom, dateTo);
```

### Parameters

| Name         | Type         | Description | Notes                 |
| ------------ | ------------ | ----------- | --------------------- |
| **dateFrom** | [**string**] |             | defaults to undefined |
| **dateTo**   | [**string**] |             | defaults to undefined |

### Return type

**Array<TeacherByLvl>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | get teacher by level | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetTeacherCommissionResult**

> Array<CommissionResponseData> runGetTeacherCommissionResult()

### Example

```typescript
import { TEACHERApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TEACHERApi(configuration);

let period: string; // (default to undefined)

const { status, data } =
  await apiInstance.runGetTeacherCommissionResult(period);
```

### Parameters

| Name       | Type         | Description | Notes                 |
| ---------- | ------------ | ----------- | --------------------- |
| **period** | [**string**] |             | defaults to undefined |

### Return type

**Array<CommissionResponseData>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                  | Response headers |
| ----------- | ---------------------------- | ---------------- |
| **200**     | get teacher commisson result | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetTeacherCommissionSetting**

> TeacherCommissionSettingRequest runGetTeacherCommissionSetting()

### Example

```typescript
import { TEACHERApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TEACHERApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runGetTeacherCommissionSetting(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**TeacherCommissionSettingRequest**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                   | Response headers |
| ----------- | ----------------------------- | ---------------- |
| **200**     | get teacher commisson setting | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetTeacherGroupAnalyse**

> Array<TeacherGroupAnalyse> runGetTeacherGroupAnalyse()

### Example

```typescript
import { TEACHERApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TEACHERApi(configuration);

let dateFrom: string; // (default to undefined)
let dateTo: string; // (default to undefined)

const { status, data } = await apiInstance.runGetTeacherGroupAnalyse(
  dateFrom,
  dateTo
);
```

### Parameters

| Name         | Type         | Description | Notes                 |
| ------------ | ------------ | ----------- | --------------------- |
| **dateFrom** | [**string**] |             | defaults to undefined |
| **dateTo**   | [**string**] |             | defaults to undefined |

### Return type

**Array<TeacherGroupAnalyse>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                | Response headers |
| ----------- | -------------------------- | ---------------- |
| **200**     | get teacher group analysis | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetTeacherPerformance**

> TeacherPerformance runGetTeacherPerformance()

### Example

```typescript
import { TEACHERApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TEACHERApi(configuration);

let dateFrom: string; // (default to undefined)
let dateTo: string; // (default to undefined)

const { status, data } = await apiInstance.runGetTeacherPerformance(
  dateFrom,
  dateTo
);
```

### Parameters

| Name         | Type         | Description | Notes                 |
| ------------ | ------------ | ----------- | --------------------- |
| **dateFrom** | [**string**] |             | defaults to undefined |
| **dateTo**   | [**string**] |             | defaults to undefined |

### Return type

**TeacherPerformance**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description             | Response headers |
| ----------- | ----------------------- | ---------------- |
| **200**     | get teacher performance | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runPatch**

> runPatch(teacher)

### Example

```typescript
import { TEACHERApi, Configuration, Teacher } from "./api";

const configuration = new Configuration();
const apiInstance = new TEACHERApi(configuration);

let id: string; // (default to undefined)
let teacher: Teacher; //Data

const { status, data } = await apiInstance.runPatch(id, teacher);
```

### Parameters

| Name        | Type         | Description | Notes                 |
| ----------- | ------------ | ----------- | --------------------- |
| **teacher** | **Teacher**  | Data        |                       |
| **id**      | [**string**] |             | defaults to undefined |

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
import { TEACHERApi, Configuration, PatchManyRequest } from "./api";

const configuration = new Configuration();
const apiInstance = new TEACHERApi(configuration);

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

> Array<Teacher> runSearch(body)

### Example

```typescript
import { TEACHERApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TEACHERApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<Teacher>**

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

> runUpdate(teacher)

### Example

```typescript
import { TEACHERApi, Configuration, Teacher } from "./api";

const configuration = new Configuration();
const apiInstance = new TEACHERApi(configuration);

let id: string; // (default to undefined)
let teacher: Teacher; //Data

const { status, data } = await apiInstance.runUpdate(id, teacher);
```

### Parameters

| Name        | Type         | Description | Notes                 |
| ----------- | ------------ | ----------- | --------------------- |
| **teacher** | **Teacher**  | Data        |                       |
| **id**      | [**string**] |             | defaults to undefined |

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

# **runUploadPhoto**

> string runUploadPhoto(uploadPhoto)

### Example

```typescript
import { TEACHERApi, Configuration, UploadPhoto } from "./api";

const configuration = new Configuration();
const apiInstance = new TEACHERApi(configuration);

let id: string; // (default to undefined)
let uploadPhoto: UploadPhoto; //Request Body

const { status, data } = await apiInstance.runUploadPhoto(id, uploadPhoto);
```

### Parameters

| Name            | Type            | Description  | Notes                 |
| --------------- | --------------- | ------------ | --------------------- |
| **uploadPhoto** | **UploadPhoto** | Request Body |                       |
| **id**          | [**string**]    |              | defaults to undefined |

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
| **200**     | Upload Teacher photo | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
