# ANNOUNCEMENTApi

All URIs are relative to _http://localhost_

| Method                                                                                | HTTP request                                     | Description |
| ------------------------------------------------------------------------------------- | ------------------------------------------------ | ----------- |
| [**announcementControllerSetStatusConfirm**](#announcementcontrollersetstatusconfirm) | **POST** /announcement/{id}/set-confirm          |             |
| [**announcementControllerSetStatusDraft**](#announcementcontrollersetstatusdraft)     | **POST** /announcement/{id}/set-draft            |             |
| [**announcementControllerSetStatusVoid**](#announcementcontrollersetstatusvoid)       | **POST** /announcement/{id}/set-void             |             |
| [**autoComplete**](#autocomplete)                                                     | **POST** /announcement/autocomplete              |             |
| [**runCreate**](#runcreate)                                                           | **POST** /announcement                           |             |
| [**runDefault**](#rundefault)                                                         | **GET** /announcement                            |             |
| [**runDelete**](#rundelete)                                                           | **DELETE** /announcement/{id}                    |             |
| [**runFindOne**](#runfindone)                                                         | **GET** /announcement/{id}                       |             |
| [**runGetAttachment**](#rungetattachment)                                             | **GET** /announcement-api/{id}/attachment        |             |
| [**runGetInboxList**](#rungetinboxlist)                                               | **GET** /announcement-api/getinbox               |             |
| [**runGetUserAnnouncement**](#rungetuserannouncement)                                 | **GET** /announcement-api/announcement           |             |
| [**runGetUserOneAnnouncement**](#rungetuseroneannouncement)                           | **GET** /announcement-api/{id}/announcement      |             |
| [**runGetUserOtherAnnouncement**](#rungetuserotherannouncement)                       | **GET** /announcement-api/otherannouncement      |             |
| [**runPatch**](#runpatch)                                                             | **PATCH** /announcement/{id}                     |             |
| [**runPatchMany**](#runpatchmany)                                                     | **PATCH** /announcement/bulk-patch               |             |
| [**runReadAnnouncement**](#runreadannouncement)                                       | **POST** /announcement-api/{id}/readannouncement |             |
| [**runReadInbox**](#runreadinbox)                                                     | **POST** /announcement-api/{type}/{id}/readInbox |             |
| [**runSearch**](#runsearch)                                                           | **POST** /announcement/search                    |             |
| [**runUpdate**](#runupdate)                                                           | **PUT** /announcement/{id}                       |             |
| [**runUploadAttachment**](#runuploadattachment)                                       | **POST** /announcement-api/{id}/attachment       |             |

# **announcementControllerSetStatusConfirm**

> announcementControllerSetStatusConfirm(body)

### Example

```typescript
import { ANNOUNCEMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ANNOUNCEMENTApi(configuration);

let id: string; // (default to undefined)
let body: object; //Document data

const { status, data } =
  await apiInstance.announcementControllerSetStatusConfirm(id, body);
```

### Parameters

| Name     | Type         | Description   | Notes                 |
| -------- | ------------ | ------------- | --------------------- |
| **body** | **object**   | Document data |                       |
| **id**   | [**string**] |               | defaults to undefined |

### Return type

void (empty response body)

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **201**     |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **announcementControllerSetStatusDraft**

> announcementControllerSetStatusDraft(body)

### Example

```typescript
import { ANNOUNCEMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ANNOUNCEMENTApi(configuration);

let id: string; // (default to undefined)
let body: object; //Document data

const { status, data } = await apiInstance.announcementControllerSetStatusDraft(
  id,
  body
);
```

### Parameters

| Name     | Type         | Description   | Notes                 |
| -------- | ------------ | ------------- | --------------------- |
| **body** | **object**   | Document data |                       |
| **id**   | [**string**] |               | defaults to undefined |

### Return type

void (empty response body)

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **201**     |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **announcementControllerSetStatusVoid**

> announcementControllerSetStatusVoid(body)

### Example

```typescript
import { ANNOUNCEMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ANNOUNCEMENTApi(configuration);

let id: string; // (default to undefined)
let body: object; //Document data

const { status, data } = await apiInstance.announcementControllerSetStatusVoid(
  id,
  body
);
```

### Parameters

| Name     | Type         | Description   | Notes                 |
| -------- | ------------ | ------------- | --------------------- |
| **body** | **object**   | Document data |                       |
| **id**   | [**string**] |               | defaults to undefined |

### Return type

void (empty response body)

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **201**     |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **autoComplete**

> Array<AnnouncementAutoComplete> autoComplete(body)

retrieve array of {\_id, code, name}

### Example

```typescript
import { ANNOUNCEMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ANNOUNCEMENTApi(configuration);

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

**Array<AnnouncementAutoComplete>**

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

> Announcement runCreate(announcement)

### Example

```typescript
import { ANNOUNCEMENTApi, Configuration, Announcement } from "./api";

const configuration = new Configuration();
const apiInstance = new ANNOUNCEMENTApi(configuration);

let announcement: Announcement; //Data

const { status, data } = await apiInstance.runCreate(announcement);
```

### Parameters

| Name             | Type             | Description | Notes |
| ---------------- | ---------------- | ----------- | ----- |
| **announcement** | **Announcement** | Data        |       |

### Return type

**Announcement**

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
import { ANNOUNCEMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ANNOUNCEMENTApi(configuration);

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

> Announcement runDelete()

### Example

```typescript
import { ANNOUNCEMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ANNOUNCEMENTApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runDelete(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**Announcement**

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

> Announcement runFindOne()

### Example

```typescript
import { ANNOUNCEMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ANNOUNCEMENTApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runFindOne(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**Announcement**

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

# **runGetAttachment**

> Array<string> runGetAttachment()

### Example

```typescript
import { ANNOUNCEMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ANNOUNCEMENTApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runGetAttachment(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**Array<string>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description              | Response headers |
| ----------- | ------------------------ | ---------------- |
| **200**     | obtain attachment base64 | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetInboxList**

> Array<SystemInboxResponse> runGetInboxList()

### Example

```typescript
import { ANNOUNCEMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ANNOUNCEMENTApi(configuration);

const { status, data } = await apiInstance.runGetInboxList();
```

### Parameters

This endpoint does not have any parameters.

### Return type

**Array<SystemInboxResponse>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                    | Response headers |
| ----------- | ------------------------------ | ---------------- |
| **200**     | Get other announcement by date | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetUserAnnouncement**

> Array<AnnouncementResponse> runGetUserAnnouncement()

### Example

```typescript
import { ANNOUNCEMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ANNOUNCEMENTApi(configuration);

const { status, data } = await apiInstance.runGetUserAnnouncement();
```

### Parameters

This endpoint does not have any parameters.

### Return type

**Array<AnnouncementResponse>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description              | Response headers |
| ----------- | ------------------------ | ---------------- |
| **200**     | Get announcement by date | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetUserOneAnnouncement**

> AnnouncementResponse runGetUserOneAnnouncement()

### Example

```typescript
import { ANNOUNCEMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ANNOUNCEMENTApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runGetUserOneAnnouncement(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**AnnouncementResponse**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description            | Response headers |
| ----------- | ---------------------- | ---------------- |
| **200**     | Get announcement by id | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetUserOtherAnnouncement**

> Array<AnnouncementResponse> runGetUserOtherAnnouncement()

### Example

```typescript
import { ANNOUNCEMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ANNOUNCEMENTApi(configuration);

const { status, data } = await apiInstance.runGetUserOtherAnnouncement();
```

### Parameters

This endpoint does not have any parameters.

### Return type

**Array<AnnouncementResponse>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                    | Response headers |
| ----------- | ------------------------------ | ---------------- |
| **200**     | Get other announcement by date | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runPatch**

> runPatch(announcement)

### Example

```typescript
import { ANNOUNCEMENTApi, Configuration, Announcement } from "./api";

const configuration = new Configuration();
const apiInstance = new ANNOUNCEMENTApi(configuration);

let id: string; // (default to undefined)
let announcement: Announcement; //Data

const { status, data } = await apiInstance.runPatch(id, announcement);
```

### Parameters

| Name             | Type             | Description | Notes                 |
| ---------------- | ---------------- | ----------- | --------------------- |
| **announcement** | **Announcement** | Data        |                       |
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
import { ANNOUNCEMENTApi, Configuration, PatchManyRequest } from "./api";

const configuration = new Configuration();
const apiInstance = new ANNOUNCEMENTApi(configuration);

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

# **runReadAnnouncement**

> string runReadAnnouncement(body)

### Example

```typescript
import { ANNOUNCEMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ANNOUNCEMENTApi(configuration);

let id: string; // (default to undefined)
let body: object; //Request Body

const { status, data } = await apiInstance.runReadAnnouncement(id, body);
```

### Parameters

| Name     | Type         | Description  | Notes                 |
| -------- | ------------ | ------------ | --------------------- |
| **body** | **object**   | Request Body |                       |
| **id**   | [**string**] |              | defaults to undefined |

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
| **200**     | read announcement | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runReadInbox**

> SystemInboxResponse runReadInbox(body)

### Example

```typescript
import { ANNOUNCEMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ANNOUNCEMENTApi(configuration);

let type: string; // (default to undefined)
let id: string; // (default to undefined)
let body: object; //Request Body

const { status, data } = await apiInstance.runReadInbox(type, id, body);
```

### Parameters

| Name     | Type         | Description  | Notes                 |
| -------- | ------------ | ------------ | --------------------- |
| **body** | **object**   | Request Body |                       |
| **type** | [**string**] |              | defaults to undefined |
| **id**   | [**string**] |              | defaults to undefined |

### Return type

**SystemInboxResponse**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     | read Inbox  | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runSearch**

> Array<Announcement> runSearch(body)

### Example

```typescript
import { ANNOUNCEMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ANNOUNCEMENTApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<Announcement>**

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

> runUpdate(announcement)

### Example

```typescript
import { ANNOUNCEMENTApi, Configuration, Announcement } from "./api";

const configuration = new Configuration();
const apiInstance = new ANNOUNCEMENTApi(configuration);

let id: string; // (default to undefined)
let announcement: Announcement; //Data

const { status, data } = await apiInstance.runUpdate(id, announcement);
```

### Parameters

| Name             | Type             | Description | Notes                 |
| ---------------- | ---------------- | ----------- | --------------------- |
| **announcement** | **Announcement** | Data        |                       |
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

# **runUploadAttachment**

> string runUploadAttachment(keyValue)

### Example

```typescript
import { ANNOUNCEMENTApi, Configuration, KeyValue } from "./api";

const configuration = new Configuration();
const apiInstance = new ANNOUNCEMENTApi(configuration);

let id: string; // (default to undefined)
let keyValue: KeyValue; //Request Body

const { status, data } = await apiInstance.runUploadAttachment(id, keyValue);
```

### Parameters

| Name         | Type         | Description  | Notes                 |
| ------------ | ------------ | ------------ | --------------------- |
| **keyValue** | **KeyValue** | Request Body |                       |
| **id**       | [**string**] |              | defaults to undefined |

### Return type

**string**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description               | Response headers |
| ----------- | ------------------------- | ---------------- |
| **200**     | post attachment in base64 | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
