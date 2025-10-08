# STUDENTAPIApi

All URIs are relative to _http://localhost_

| Method                                                    | HTTP request                                          | Description |
| --------------------------------------------------------- | ----------------------------------------------------- | ----------- |
| [**getOneStudentSchedules**](#getonestudentschedules)     | **GET** /studentapi/{studentId}/student-one-schedules |             |
| [**getOneStudentSchedules_0**](#getonestudentschedules_0) | **GET** /studentapi/{id}/student-one-schedules        |             |
| [**getParentBranches**](#getparentbranches)               | **GET** /studentapi/parent-branches                   |             |
| [**getResourceVersion**](#getresourceversion)             | **GET** /studentapi/resourceversion                   |             |
| [**getStudentSchedules**](#getstudentschedules)           | **GET** /studentapi/student-schedules                 |             |

# **getOneStudentSchedules**

> Array<StudentApiSchedule> getOneStudentSchedules()

obtain student schedules

### Example

```typescript
import { STUDENTAPIApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTAPIApi(configuration);

let studentId: string; // (default to undefined)

const { status, data } = await apiInstance.getOneStudentSchedules(studentId);
```

### Parameters

| Name          | Type         | Description | Notes                 |
| ------------- | ------------ | ----------- | --------------------- |
| **studentId** | [**string**] |             | defaults to undefined |

### Return type

**Array<StudentApiSchedule>**

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

# **getOneStudentSchedules_0**

> Array<StudentApiSchedule> getOneStudentSchedules_0()

obtain student schedules

### Example

```typescript
import { STUDENTAPIApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTAPIApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getOneStudentSchedules_0(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**Array<StudentApiSchedule>**

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

# **getParentBranches**

> ParentBranch getParentBranches()

design for parent, list branch by parent email

### Example

```typescript
import { STUDENTAPIApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTAPIApi(configuration);

const { status, data } = await apiInstance.getParentBranches();
```

### Parameters

This endpoint does not have any parameters.

### Return type

**ParentBranch**

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

# **getResourceVersion**

> string getResourceVersion()

obtain resource version

### Example

```typescript
import { STUDENTAPIApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTAPIApi(configuration);

const { status, data } = await apiInstance.getResourceVersion();
```

### Parameters

This endpoint does not have any parameters.

### Return type

**string**

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

# **getStudentSchedules**

> Array<StudentApiSchedule> getStudentSchedules()

obtain student schedules

### Example

```typescript
import { STUDENTAPIApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTAPIApi(configuration);

const { status, data } = await apiInstance.getStudentSchedules();
```

### Parameters

This endpoint does not have any parameters.

### Return type

**Array<StudentApiSchedule>**

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
