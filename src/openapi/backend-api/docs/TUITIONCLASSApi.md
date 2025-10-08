# TUITIONCLASSApi

All URIs are relative to _http://localhost_

| Method                                                                                  | HTTP request                                           | Description |
| --------------------------------------------------------------------------------------- | ------------------------------------------------------ | ----------- |
| [**autoComplete**](#autocomplete)                                                       | **POST** /tuitionclass/autocomplete                    |             |
| [**runCloseRegistrations**](#runcloseregistrations)                                     | **POST** /tuitionclass-api/close-registrations         |             |
| [**runCreate**](#runcreate)                                                             | **POST** /tuitionclass                                 |             |
| [**runDefault**](#rundefault)                                                           | **GET** /tuitionclass                                  |             |
| [**runDelete**](#rundelete)                                                             | **DELETE** /tuitionclass/{id}                          |             |
| [**runFindOne**](#runfindone)                                                           | **GET** /tuitionclass/{id}                             |             |
| [**runFullTextSearch**](#runfulltextsearch)                                             | **POST** /tuitionclass/fulltextsearch                  |             |
| [**runGetActiveClassQtyByMonth**](#rungetactiveclassqtybymonth)                         | **GET** /tuitionclass-api/active-classes/{month}       |             |
| [**runGetTuitionClassWithSchedules**](#rungettuitionclasswithschedules)                 | **GET** /tuitionclass-api/{id}/get-schedules           |             |
| [**runGetTuitionClassesWithLastSchedules**](#rungettuitionclasseswithlastschedules)     | **POST** /tuitionclass-api/last-schedules              |             |
| [**runGetTuitionClassesWithNearbySchedules**](#rungettuitionclasseswithnearbyschedules) | **POST** /tuitionclass-api/nearby-schedules            |             |
| [**runPatch**](#runpatch)                                                               | **PATCH** /tuitionclass/{id}                           |             |
| [**runPatchMany**](#runpatchmany)                                                       | **PATCH** /tuitionclass/bulk-patch                     |             |
| [**runPreviewRegenerateSchedule**](#runpreviewregenerateschedule)                       | **POST** /tuitionclass-api/regenerate-schedule/preview |             |
| [**runSearch**](#runsearch)                                                             | **POST** /tuitionclass/search                          |             |
| [**runSendRecheduleQueue**](#runsendrechedulequeue)                                     | **POST** /tuitionclass-api/regenerate-schedule         |             |
| [**runUpdate**](#runupdate)                                                             | **PUT** /tuitionclass/{id}                             |             |

# **autoComplete**

> Array<TuitionClassAutoComplete> autoComplete(body)

retrieve array of {\_id, code, name}

### Example

```typescript
import { TUITIONCLASSApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TUITIONCLASSApi(configuration);

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

**Array<TuitionClassAutoComplete>**

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

# **runCloseRegistrations**

> Array<TuitionClass> runCloseRegistrations(closeTuitionClassesRegistration)

### Example

```typescript
import {
  TUITIONCLASSApi,
  Configuration,
  CloseTuitionClassesRegistration,
} from "./api";

const configuration = new Configuration();
const apiInstance = new TUITIONCLASSApi(configuration);

let closeTuitionClassesRegistration: CloseTuitionClassesRegistration; //Request Body

const { status, data } = await apiInstance.runCloseRegistrations(
  closeTuitionClassesRegistration
);
```

### Parameters

| Name                                | Type                                | Description  | Notes |
| ----------------------------------- | ----------------------------------- | ------------ | ----- |
| **closeTuitionClassesRegistration** | **CloseTuitionClassesRegistration** | Request Body |       |

### Return type

**Array<TuitionClass>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                                  | Response headers |
| ----------- | -------------------------------------------- | ---------------- |
| **200**     | Inactive tuition classes and their schedules | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runCreate**

> TuitionClass runCreate(tuitionClass)

### Example

```typescript
import { TUITIONCLASSApi, Configuration, TuitionClass } from "./api";

const configuration = new Configuration();
const apiInstance = new TUITIONCLASSApi(configuration);

let tuitionClass: TuitionClass; //Data

const { status, data } = await apiInstance.runCreate(tuitionClass);
```

### Parameters

| Name             | Type             | Description | Notes |
| ---------------- | ---------------- | ----------- | ----- |
| **tuitionClass** | **TuitionClass** | Data        |       |

### Return type

**TuitionClass**

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
import { TUITIONCLASSApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TUITIONCLASSApi(configuration);

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

> TuitionClass runDelete()

### Example

```typescript
import { TUITIONCLASSApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TUITIONCLASSApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runDelete(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**TuitionClass**

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

> TuitionClass runFindOne()

### Example

```typescript
import { TUITIONCLASSApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TUITIONCLASSApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runFindOne(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**TuitionClass**

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

> Array<TuitionClass> runFullTextSearch(body)

### Example

```typescript
import { TUITIONCLASSApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TUITIONCLASSApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runFullTextSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<TuitionClass>**

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

# **runGetActiveClassQtyByMonth**

> number runGetActiveClassQtyByMonth()

### Example

```typescript
import { TUITIONCLASSApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TUITIONCLASSApi(configuration);

let month: string; // (default to undefined)

const { status, data } = await apiInstance.runGetActiveClassQtyByMonth(month);
```

### Parameters

| Name      | Type         | Description | Notes                 |
| --------- | ------------ | ----------- | --------------------- |
| **month** | [**string**] |             | defaults to undefined |

### Return type

**number**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                 | Response headers |
| ----------- | --------------------------- | ---------------- |
| **200**     | Get active classes by month | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetTuitionClassWithSchedules**

> TuitionClassWithSchedules runGetTuitionClassWithSchedules()

### Example

```typescript
import { TUITIONCLASSApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TUITIONCLASSApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runGetTuitionClassWithSchedules(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**TuitionClassWithSchedules**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                  | Response headers |
| ----------- | ---------------------------- | ---------------- |
| **200**     | Get schedules of the classes | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetTuitionClassesWithLastSchedules**

> Array<TuitionClassWithLastSchedule> runGetTuitionClassesWithLastSchedules(tuitionClassWithLastScheduleParam)

### Example

```typescript
import {
  TUITIONCLASSApi,
  Configuration,
  TuitionClassWithLastScheduleParam,
} from "./api";

const configuration = new Configuration();
const apiInstance = new TUITIONCLASSApi(configuration);

let tuitionClassWithLastScheduleParam: TuitionClassWithLastScheduleParam; //Request Body

const { status, data } =
  await apiInstance.runGetTuitionClassesWithLastSchedules(
    tuitionClassWithLastScheduleParam
  );
```

### Parameters

| Name                                  | Type                                  | Description  | Notes |
| ------------------------------------- | ------------------------------------- | ------------ | ----- |
| **tuitionClassWithLastScheduleParam** | **TuitionClassWithLastScheduleParam** | Request Body |       |

### Return type

**Array<TuitionClassWithLastSchedule>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                                             | Response headers |
| ----------- | ------------------------------------------------------- | ---------------- |
| **200**     | Get last schedule for each tuition class by cutoff date | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetTuitionClassesWithNearbySchedules**

> Array<TuitionClassWithNearbySchedule> runGetTuitionClassesWithNearbySchedules(tuitionClassWithNearbyScheduleParam)

### Example

```typescript
import {
  TUITIONCLASSApi,
  Configuration,
  TuitionClassWithNearbyScheduleParam,
} from "./api";

const configuration = new Configuration();
const apiInstance = new TUITIONCLASSApi(configuration);

let tuitionClassWithNearbyScheduleParam: TuitionClassWithNearbyScheduleParam; //Request Body

const { status, data } =
  await apiInstance.runGetTuitionClassesWithNearbySchedules(
    tuitionClassWithNearbyScheduleParam
  );
```

### Parameters

| Name                                    | Type                                    | Description  | Notes |
| --------------------------------------- | --------------------------------------- | ------------ | ----- |
| **tuitionClassWithNearbyScheduleParam** | **TuitionClassWithNearbyScheduleParam** | Request Body |       |

### Return type

**Array<TuitionClassWithNearbySchedule>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                        | Response headers |
| ----------- | ---------------------------------- | ---------------- |
| **200**     | Get classes with +- n day schedule | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runPatch**

> runPatch(tuitionClass)

### Example

```typescript
import { TUITIONCLASSApi, Configuration, TuitionClass } from "./api";

const configuration = new Configuration();
const apiInstance = new TUITIONCLASSApi(configuration);

let id: string; // (default to undefined)
let tuitionClass: TuitionClass; //Data

const { status, data } = await apiInstance.runPatch(id, tuitionClass);
```

### Parameters

| Name             | Type             | Description | Notes                 |
| ---------------- | ---------------- | ----------- | --------------------- |
| **tuitionClass** | **TuitionClass** | Data        |                       |
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
import { TUITIONCLASSApi, Configuration, PatchManyRequest } from "./api";

const configuration = new Configuration();
const apiInstance = new TUITIONCLASSApi(configuration);

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

# **runPreviewRegenerateSchedule**

> Array<ScheduleChanges> runPreviewRegenerateSchedule(regenerateTuitionClassSchedule)

### Example

```typescript
import {
  TUITIONCLASSApi,
  Configuration,
  RegenerateTuitionClassSchedule,
} from "./api";

const configuration = new Configuration();
const apiInstance = new TUITIONCLASSApi(configuration);

let regenerateTuitionClassSchedule: RegenerateTuitionClassSchedule; //Request Body

const { status, data } = await apiInstance.runPreviewRegenerateSchedule(
  regenerateTuitionClassSchedule
);
```

### Parameters

| Name                               | Type                               | Description  | Notes |
| ---------------------------------- | ---------------------------------- | ------------ | ----- |
| **regenerateTuitionClassSchedule** | **RegenerateTuitionClassSchedule** | Request Body |       |

### Return type

**Array<ScheduleChanges>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                        | Response headers |
| ----------- | ---------------------------------- | ---------------- |
| **200**     | Preview regenerate schedule result | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runSearch**

> Array<TuitionClass> runSearch(body)

### Example

```typescript
import { TUITIONCLASSApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TUITIONCLASSApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<TuitionClass>**

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

# **runSendRecheduleQueue**

> QueueJobProducerResponse runSendRecheduleQueue(regenerateTuitionClassSchedule)

### Example

```typescript
import {
  TUITIONCLASSApi,
  Configuration,
  RegenerateTuitionClassSchedule,
} from "./api";

const configuration = new Configuration();
const apiInstance = new TUITIONCLASSApi(configuration);

let regenerateTuitionClassSchedule: RegenerateTuitionClassSchedule; //Request Body

const { status, data } = await apiInstance.runSendRecheduleQueue(
  regenerateTuitionClassSchedule
);
```

### Parameters

| Name                               | Type                               | Description  | Notes |
| ---------------------------------- | ---------------------------------- | ------------ | ----- |
| **regenerateTuitionClassSchedule** | **RegenerateTuitionClassSchedule** | Request Body |       |

### Return type

**QueueJobProducerResponse**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                 | Response headers |
| ----------- | --------------------------- | ---------------- |
| **200**     | Execute regenerate schedule | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runUpdate**

> runUpdate(tuitionClass)

### Example

```typescript
import { TUITIONCLASSApi, Configuration, TuitionClass } from "./api";

const configuration = new Configuration();
const apiInstance = new TUITIONCLASSApi(configuration);

let id: string; // (default to undefined)
let tuitionClass: TuitionClass; //Data

const { status, data } = await apiInstance.runUpdate(id, tuitionClass);
```

### Parameters

| Name             | Type             | Description | Notes                 |
| ---------------- | ---------------- | ----------- | --------------------- |
| **tuitionClass** | **TuitionClass** | Data        |                       |
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
