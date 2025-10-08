# SCHEDULEApi

All URIs are relative to _http://localhost_

| Method                                                      | HTTP request                                       | Description |
| ----------------------------------------------------------- | -------------------------------------------------- | ----------- |
| [**autoComplete**](#autocomplete)                           | **POST** /schedule/autocomplete                    |             |
| [**runActivateSchedules**](#runactivateschedules)           | **POST** /schedule-api/activate-schedules          |             |
| [**runCreate**](#runcreate)                                 | **POST** /schedule                                 |             |
| [**runDefault**](#rundefault)                               | **GET** /schedule                                  |             |
| [**runDelete**](#rundelete)                                 | **DELETE** /schedule/{id}                          |             |
| [**runFindOne**](#runfindone)                               | **GET** /schedule/{id}                             |             |
| [**runGetAttendanceByWeek**](#rungetattendancebyweek)       | **GET** /schedule-api/attendanceweek               |             |
| [**runGetDailyAbsendStudents**](#rungetdailyabsendstudents) | **GET** /schedule-api/student-attendance/{date}    |             |
| [**runGetScheduleByDay**](#rungetschedulebyday)             | **GET** /schedule-api/date/{date}                  |             |
| [**runGetScheduleInfo**](#rungetscheduleinfo)               | **GET** /schedule-api/{id}/info                    |             |
| [**runInActiveSchedules**](#runinactiveschedules)           | **POST** /schedule-api/inactive-schedules          |             |
| [**runPatch**](#runpatch)                                   | **PATCH** /schedule/{id}                           |             |
| [**runPatchMany**](#runpatchmany)                           | **PATCH** /schedule/bulk-patch                     |             |
| [**runPrintAttendance**](#runprintattendance)               | **POST** /schedule-api/attendance-check-list       |             |
| [**runSearch**](#runsearch)                                 | **POST** /schedule/search                          |             |
| [**runSearchSchedulesByMonth**](#runsearchschedulesbymonth) | **POST** /schedule-api/schedules-month/{yearmonth} |             |
| [**runSearchWithRelation**](#runsearchwithrelation)         | **POST** /schedule-api/search-with-relation        |             |
| [**runUpdate**](#runupdate)                                 | **PUT** /schedule/{id}                             |             |
| [**runUpdateAttendance**](#runupdateattendance)             | **PUT** /schedule-api/{id}/attendance              |             |

# **autoComplete**

> Array<ScheduleAutoComplete> autoComplete(body)

retrieve array of {\_id, code, name}

### Example

```typescript
import { SCHEDULEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new SCHEDULEApi(configuration);

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

**Array<ScheduleAutoComplete>**

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

# **runActivateSchedules**

> string runActivateSchedules(requestBody)

### Example

```typescript
import { SCHEDULEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new SCHEDULEApi(configuration);

let requestBody: Array<string>; //Request Body

const { status, data } = await apiInstance.runActivateSchedules(requestBody);
```

### Parameters

| Name            | Type              | Description  | Notes |
| --------------- | ----------------- | ------------ | ----- |
| **requestBody** | **Array<string>** | Request Body |       |

### Return type

**string**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                | Response headers |
| ----------- | -------------------------- | ---------------- |
| **200**     | set active to schedule ids | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runCreate**

> Schedule runCreate(schedule)

### Example

```typescript
import { SCHEDULEApi, Configuration, Schedule } from "./api";

const configuration = new Configuration();
const apiInstance = new SCHEDULEApi(configuration);

let schedule: Schedule; //Data

const { status, data } = await apiInstance.runCreate(schedule);
```

### Parameters

| Name         | Type         | Description | Notes |
| ------------ | ------------ | ----------- | ----- |
| **schedule** | **Schedule** | Data        |       |

### Return type

**Schedule**

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
import { SCHEDULEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new SCHEDULEApi(configuration);

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

> Schedule runDelete()

### Example

```typescript
import { SCHEDULEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new SCHEDULEApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runDelete(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**Schedule**

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

> Schedule runFindOne()

### Example

```typescript
import { SCHEDULEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new SCHEDULEApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runFindOne(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**Schedule**

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

# **runGetAttendanceByWeek**

> AttendanceReport runGetAttendanceByWeek()

### Example

```typescript
import { SCHEDULEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new SCHEDULEApi(configuration);

const { status, data } = await apiInstance.runGetAttendanceByWeek();
```

### Parameters

This endpoint does not have any parameters.

### Return type

**AttendanceReport**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                 | Response headers |
| ----------- | --------------------------- | ---------------- |
| **200**     | Get Attendance Rate By Week | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetDailyAbsendStudents**

> Array<Attendance> runGetDailyAbsendStudents()

### Example

```typescript
import { SCHEDULEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new SCHEDULEApi(configuration);

let date: string; // (default to undefined)

const { status, data } = await apiInstance.runGetDailyAbsendStudents(date);
```

### Parameters

| Name     | Type         | Description | Notes                 |
| -------- | ------------ | ----------- | --------------------- |
| **date** | [**string**] |             | defaults to undefined |

### Return type

**Array<Attendance>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                     | Response headers |
| ----------- | ------------------------------- | ---------------- |
| **200**     | absend students from attendance | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetScheduleByDay**

> Array<ScheduleListItem> runGetScheduleByDay()

### Example

```typescript
import { SCHEDULEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new SCHEDULEApi(configuration);

let date: string; // (default to undefined)

const { status, data } = await apiInstance.runGetScheduleByDay(date);
```

### Parameters

| Name     | Type         | Description | Notes                 |
| -------- | ------------ | ----------- | --------------------- |
| **date** | [**string**] |             | defaults to undefined |

### Return type

**Array<ScheduleListItem>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description              | Response headers |
| ----------- | ------------------------ | ---------------- |
| **200**     | Get schedule list by day | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetScheduleInfo**

> Attendance runGetScheduleInfo()

### Example

```typescript
import { SCHEDULEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new SCHEDULEApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runGetScheduleInfo(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**Attendance**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description           | Response headers |
| ----------- | --------------------- | ---------------- |
| **200**     | Get schedule students | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runInActiveSchedules**

> string runInActiveSchedules(requestBody)

### Example

```typescript
import { SCHEDULEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new SCHEDULEApi(configuration);

let requestBody: Array<string>; //Request Body

const { status, data } = await apiInstance.runInActiveSchedules(requestBody);
```

### Parameters

| Name            | Type              | Description  | Notes |
| --------------- | ----------------- | ------------ | ----- |
| **requestBody** | **Array<string>** | Request Body |       |

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
| **200**     | set inactive to schedule ids | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runPatch**

> runPatch(schedule)

### Example

```typescript
import { SCHEDULEApi, Configuration, Schedule } from "./api";

const configuration = new Configuration();
const apiInstance = new SCHEDULEApi(configuration);

let id: string; // (default to undefined)
let schedule: Schedule; //Data

const { status, data } = await apiInstance.runPatch(id, schedule);
```

### Parameters

| Name         | Type         | Description | Notes                 |
| ------------ | ------------ | ----------- | --------------------- |
| **schedule** | **Schedule** | Data        |                       |
| **id**       | [**string**] |             | defaults to undefined |

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
import { SCHEDULEApi, Configuration, PatchManyRequest } from "./api";

const configuration = new Configuration();
const apiInstance = new SCHEDULEApi(configuration);

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

# **runPrintAttendance**

> string runPrintAttendance(printAttendanceFilter)

### Example

```typescript
import { SCHEDULEApi, Configuration, PrintAttendanceFilter } from "./api";

const configuration = new Configuration();
const apiInstance = new SCHEDULEApi(configuration);

let printAttendanceFilter: PrintAttendanceFilter; //Request Body

const { status, data } = await apiInstance.runPrintAttendance(
  printAttendanceFilter
);
```

### Parameters

| Name                      | Type                      | Description  | Notes |
| ------------------------- | ------------------------- | ------------ | ----- |
| **printAttendanceFilter** | **PrintAttendanceFilter** | Request Body |       |

### Return type

**string**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                | Response headers |
| ----------- | -------------------------- | ---------------- |
| **200**     | set active to schedule ids | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runSearch**

> Array<Schedule> runSearch(body)

### Example

```typescript
import { SCHEDULEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new SCHEDULEApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<Schedule>**

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

# **runSearchSchedulesByMonth**

> Array<ScheduleListItem> runSearchSchedulesByMonth(body)

### Example

```typescript
import { SCHEDULEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new SCHEDULEApi(configuration);

let yearmonth: string; // (default to undefined)
let body: object; //Request Body

const { status, data } = await apiInstance.runSearchSchedulesByMonth(
  yearmonth,
  body
);
```

### Parameters

| Name          | Type         | Description  | Notes                 |
| ------------- | ------------ | ------------ | --------------------- |
| **body**      | **object**   | Request Body |                       |
| **yearmonth** | [**string**] |              | defaults to undefined |

### Return type

**Array<ScheduleListItem>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description               | Response headers |
| ----------- | ------------------------- | ---------------- |
| **200**     | Get schedules for 1 month | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runSearchWithRelation**

> Array<ScheduleWithRelation> runSearchWithRelation(searchScheduleWithRelations)

### Example

```typescript
import { SCHEDULEApi, Configuration, SearchScheduleWithRelations } from "./api";

const configuration = new Configuration();
const apiInstance = new SCHEDULEApi(configuration);

let searchScheduleWithRelations: SearchScheduleWithRelations; //Request Body

const { status, data } = await apiInstance.runSearchWithRelation(
  searchScheduleWithRelations
);
```

### Parameters

| Name                            | Type                            | Description  | Notes |
| ------------------------------- | ------------------------------- | ------------ | ----- |
| **searchScheduleWithRelations** | **SearchScheduleWithRelations** | Request Body |       |

### Return type

**Array<ScheduleWithRelation>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                              | Response headers |
| ----------- | ---------------------------------------- | ---------------- |
| **200**     | Search schedule with tuition class info. | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runUpdate**

> runUpdate(schedule)

### Example

```typescript
import { SCHEDULEApi, Configuration, Schedule } from "./api";

const configuration = new Configuration();
const apiInstance = new SCHEDULEApi(configuration);

let id: string; // (default to undefined)
let schedule: Schedule; //Data

const { status, data } = await apiInstance.runUpdate(id, schedule);
```

### Parameters

| Name         | Type         | Description | Notes                 |
| ------------ | ------------ | ----------- | --------------------- |
| **schedule** | **Schedule** | Data        |                       |
| **id**       | [**string**] |             | defaults to undefined |

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

# **runUpdateAttendance**

> string runUpdateAttendance(attendance)

### Example

```typescript
import { SCHEDULEApi, Configuration, Attendance } from "./api";

const configuration = new Configuration();
const apiInstance = new SCHEDULEApi(configuration);

let id: string; // (default to undefined)
let attendance: Attendance; //Request Body

const { status, data } = await apiInstance.runUpdateAttendance(id, attendance);
```

### Parameters

| Name           | Type           | Description  | Notes                 |
| -------------- | -------------- | ------------ | --------------------- |
| **attendance** | **Attendance** | Request Body |                       |
| **id**         | [**string**]   |              | defaults to undefined |

### Return type

**string**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **200**     | update attendance | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
