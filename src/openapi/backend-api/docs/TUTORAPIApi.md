# TUTORAPIApi

All URIs are relative to _http://localhost_

| Method                                                          | HTTP request                                | Description |
| --------------------------------------------------------------- | ------------------------------------------- | ----------- |
| [**getTutorAttendance**](#gettutorattendance)                   | **GET** /tutorapi/attendance/{scheduleId}   |             |
| [**getTutorBranches**](#gettutorbranches)                       | **GET** /tutorapi/tutor-branches            |             |
| [**runGetStudentEnrollBySearch**](#rungetstudentenrollbysearch) | **POST** /tutorapi/getStudentEnrollBySearch |             |
| [**runUpdateAttendance**](#runupdateattendance)                 | **PUT** /tutorapi/attendance/{id}           |             |
| [**runUpdateAttendanceRemark**](#runupdateattendanceremark)     | **PUT** /tutorapi/attendanceRemark/{id}     |             |
| [**runUpdateScheduleLessonPlan**](#runupdateschedulelessonplan) | **PUT** /tutorapi/scheduleLessonPlan/{id}   |             |
| [**searchStudent**](#searchstudent)                             | **POST** /tutorapi/searchStudent            |             |

# **getTutorAttendance**

> Array<TutorScheduleAttendance> getTutorAttendance()

get attendance detail by scheduleId

### Example

```typescript
import { TUTORAPIApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TUTORAPIApi(configuration);

let scheduleId: string; // (default to undefined)

const { status, data } = await apiInstance.getTutorAttendance(scheduleId);
```

### Parameters

| Name           | Type         | Description | Notes                 |
| -------------- | ------------ | ----------- | --------------------- |
| **scheduleId** | [**string**] |             | defaults to undefined |

### Return type

**Array<TutorScheduleAttendance>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description    | Response headers |
| ----------- | -------------- | ---------------- |
| **200**     | Found          | -                |
| **500**     | Internal error | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTutorBranches**

> Array<UserBranch> getTutorBranches()

design for tutor, list branch by parent email

### Example

```typescript
import { TUTORAPIApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TUTORAPIApi(configuration);

const { status, data } = await apiInstance.getTutorBranches();
```

### Parameters

This endpoint does not have any parameters.

### Return type

**Array<UserBranch>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description    | Response headers |
| ----------- | -------------- | ---------------- |
| **200**     | Found          | -                |
| **500**     | Internal error | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetStudentEnrollBySearch**

> Array<TutorAttendanceSearch> runGetStudentEnrollBySearch(runGetStudentEnrollBySearchRequest)

### Example

```typescript
import {
  TUTORAPIApi,
  Configuration,
  RunGetStudentEnrollBySearchRequest,
} from "./api";

const configuration = new Configuration();
const apiInstance = new TUTORAPIApi(configuration);

let runGetStudentEnrollBySearchRequest: RunGetStudentEnrollBySearchRequest; //Request Body

const { status, data } = await apiInstance.runGetStudentEnrollBySearch(
  runGetStudentEnrollBySearchRequest
);
```

### Parameters

| Name                                   | Type                                   | Description  | Notes |
| -------------------------------------- | -------------------------------------- | ------------ | ----- |
| **runGetStudentEnrollBySearchRequest** | **RunGetStudentEnrollBySearchRequest** | Request Body |       |

### Return type

**Array<TutorAttendanceSearch>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                      | Response headers |
| ----------- | -------------------------------- | ---------------- |
| **200**     | get student enrollment by search | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runUpdateAttendance**

> string runUpdateAttendance(tutorAttendanceUpdate)

### Example

```typescript
import { TUTORAPIApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TUTORAPIApi(configuration);

let id: string; // (default to undefined)
let tutorAttendanceUpdate: Array<TutorAttendanceUpdate>; //Data

const { status, data } = await apiInstance.runUpdateAttendance(
  id,
  tutorAttendanceUpdate
);
```

### Parameters

| Name                      | Type                             | Description | Notes                 |
| ------------------------- | -------------------------------- | ----------- | --------------------- |
| **tutorAttendanceUpdate** | **Array<TutorAttendanceUpdate>** | Data        |                       |
| **id**                    | [**string**]                     |             | defaults to undefined |

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
| **200**     | success            | -                |
| **404**     | Document not found | -                |
| **500**     | Internal error     | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runUpdateAttendanceRemark**

> string runUpdateAttendanceRemark(tutorAttendanceRemarkUpdate)

### Example

```typescript
import { TUTORAPIApi, Configuration, TutorAttendanceRemarkUpdate } from "./api";

const configuration = new Configuration();
const apiInstance = new TUTORAPIApi(configuration);

let id: string; // (default to undefined)
let tutorAttendanceRemarkUpdate: TutorAttendanceRemarkUpdate; //Data

const { status, data } = await apiInstance.runUpdateAttendanceRemark(
  id,
  tutorAttendanceRemarkUpdate
);
```

### Parameters

| Name                            | Type                            | Description | Notes                 |
| ------------------------------- | ------------------------------- | ----------- | --------------------- |
| **tutorAttendanceRemarkUpdate** | **TutorAttendanceRemarkUpdate** | Data        |                       |
| **id**                          | [**string**]                    |             | defaults to undefined |

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
| **200**     | success            | -                |
| **404**     | Document not found | -                |
| **500**     | Internal error     | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runUpdateScheduleLessonPlan**

> string runUpdateScheduleLessonPlan(tutorScheduleLessonPlanUpdate)

### Example

```typescript
import {
  TUTORAPIApi,
  Configuration,
  TutorScheduleLessonPlanUpdate,
} from "./api";

const configuration = new Configuration();
const apiInstance = new TUTORAPIApi(configuration);

let id: string; // (default to undefined)
let tutorScheduleLessonPlanUpdate: TutorScheduleLessonPlanUpdate; //Data

const { status, data } = await apiInstance.runUpdateScheduleLessonPlan(
  id,
  tutorScheduleLessonPlanUpdate
);
```

### Parameters

| Name                              | Type                              | Description | Notes                 |
| --------------------------------- | --------------------------------- | ----------- | --------------------- |
| **tutorScheduleLessonPlanUpdate** | **TutorScheduleLessonPlanUpdate** | Data        |                       |
| **id**                            | [**string**]                      |             | defaults to undefined |

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
| **200**     | success            | -                |
| **404**     | Document not found | -                |
| **500**     | Internal error     | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchStudent**

> SearchStudent searchStudent(runGetStudentEnrollBySearchRequest)

### Example

```typescript
import {
  TUTORAPIApi,
  Configuration,
  RunGetStudentEnrollBySearchRequest,
} from "./api";

const configuration = new Configuration();
const apiInstance = new TUTORAPIApi(configuration);

let runGetStudentEnrollBySearchRequest: RunGetStudentEnrollBySearchRequest; //Request Body

const { status, data } = await apiInstance.searchStudent(
  runGetStudentEnrollBySearchRequest
);
```

### Parameters

| Name                                   | Type                                   | Description  | Notes |
| -------------------------------------- | -------------------------------------- | ------------ | ----- |
| **runGetStudentEnrollBySearchRequest** | **RunGetStudentEnrollBySearchRequest** | Request Body |       |

### Return type

**SearchStudent**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description    | Response headers |
| ----------- | -------------- | ---------------- |
| **200**     | search student | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
