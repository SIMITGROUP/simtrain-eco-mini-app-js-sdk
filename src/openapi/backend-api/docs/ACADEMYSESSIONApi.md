# ACADEMYSESSIONApi

All URIs are relative to _http://localhost_

| Method                                                    | HTTP request                                                       | Description |
| --------------------------------------------------------- | ------------------------------------------------------------------ | ----------- |
| [**autoComplete**](#autocomplete)                         | **POST** /academysession/autocomplete                              |             |
| [**runCreate**](#runcreate)                               | **POST** /academysession                                           |             |
| [**runDefault**](#rundefault)                             | **GET** /academysession                                            |             |
| [**runDelete**](#rundelete)                               | **DELETE** /academysession/{id}                                    |             |
| [**runFindOne**](#runfindone)                             | **GET** /academysession/{id}                                       |             |
| [**runGenerateClasses**](#rungenerateclasses)             | **POST** /academysession-api/generate-classes                      |             |
| [**runGetHistories**](#rungethistories)                   | **GET** /academysession-api/history                                |             |
| [**runGetTuitionClassList**](#rungettuitionclasslist)     | **GET** /academysession-api/{id}/get-tuition-classes               |             |
| [**runPatch**](#runpatch)                                 | **PATCH** /academysession/{id}                                     |             |
| [**runPatchMany**](#runpatchmany)                         | **PATCH** /academysession/bulk-patch                               |             |
| [**runPrepareClassGenerator**](#runprepareclassgenerator) | **GET** /academysession-api/prepare-generate-classes               |             |
| [**runReverseClasses**](#runreverseclasses)               | **DELETE** /academysession-api/delete-generated-class/{generateId} |             |
| [**runSearch**](#runsearch)                               | **POST** /academysession/search                                    |             |
| [**runUpdate**](#runupdate)                               | **PUT** /academysession/{id}                                       |             |
| [**runUpdateClassGenerator**](#runupdateclassgenerator)   | **PUT** /academysession-api/update-class-generator                 |             |

# **autoComplete**

> Array<AcademySessionAutoComplete> autoComplete(body)

retrieve array of {\_id, code, name}

### Example

```typescript
import { ACADEMYSESSIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ACADEMYSESSIONApi(configuration);

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

**Array<AcademySessionAutoComplete>**

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

> AcademySession runCreate(academySession)

### Example

```typescript
import { ACADEMYSESSIONApi, Configuration, AcademySession } from "./api";

const configuration = new Configuration();
const apiInstance = new ACADEMYSESSIONApi(configuration);

let academySession: AcademySession; //Data

const { status, data } = await apiInstance.runCreate(academySession);
```

### Parameters

| Name               | Type               | Description | Notes |
| ------------------ | ------------------ | ----------- | ----- |
| **academySession** | **AcademySession** | Data        |       |

### Return type

**AcademySession**

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
import { ACADEMYSESSIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ACADEMYSESSIONApi(configuration);

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

> AcademySession runDelete()

### Example

```typescript
import { ACADEMYSESSIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ACADEMYSESSIONApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runDelete(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**AcademySession**

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

> AcademySession runFindOne()

### Example

```typescript
import { ACADEMYSESSIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ACADEMYSESSIONApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runFindOne(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**AcademySession**

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

# **runGenerateClasses**

> QueueJobProducerResponse runGenerateClasses(academySessionClassGenerator)

### Example

```typescript
import {
  ACADEMYSESSIONApi,
  Configuration,
  AcademySessionClassGenerator,
} from "./api";

const configuration = new Configuration();
const apiInstance = new ACADEMYSESSIONApi(configuration);

let academySessionClassGenerator: AcademySessionClassGenerator; //Request Body

const { status, data } = await apiInstance.runGenerateClasses(
  academySessionClassGenerator
);
```

### Parameters

| Name                             | Type                             | Description  | Notes |
| -------------------------------- | -------------------------------- | ------------ | ----- |
| **academySessionClassGenerator** | **AcademySessionClassGenerator** | Request Body |       |

### Return type

**QueueJobProducerResponse**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                                             | Response headers |
| ----------- | ------------------------------------------------------- | ---------------- |
| **200**     | duplicate tuition classes from previous academy session | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetHistories**

> Array<ClassGenerateHistory> runGetHistories()

### Example

```typescript
import { ACADEMYSESSIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ACADEMYSESSIONApi(configuration);

const { status, data } = await apiInstance.runGetHistories();
```

### Parameters

This endpoint does not have any parameters.

### Return type

**Array<ClassGenerateHistory>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description            | Response headers |
| ----------- | ---------------------- | ---------------- |
| **200**     | get generate histories | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetTuitionClassList**

> Array<TuitionClassWithSummary> runGetTuitionClassList()

### Example

```typescript
import { ACADEMYSESSIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ACADEMYSESSIONApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runGetTuitionClassList(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**Array<TuitionClassWithSummary>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                 | Response headers |
| ----------- | ------------------------------------------- | ---------------- |
| **200**     | get list of classes of this academy session | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runPatch**

> runPatch(academySession)

### Example

```typescript
import { ACADEMYSESSIONApi, Configuration, AcademySession } from "./api";

const configuration = new Configuration();
const apiInstance = new ACADEMYSESSIONApi(configuration);

let id: string; // (default to undefined)
let academySession: AcademySession; //Data

const { status, data } = await apiInstance.runPatch(id, academySession);
```

### Parameters

| Name               | Type               | Description | Notes                 |
| ------------------ | ------------------ | ----------- | --------------------- |
| **academySession** | **AcademySession** | Data        |                       |
| **id**             | [**string**]       |             | defaults to undefined |

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
import { ACADEMYSESSIONApi, Configuration, PatchManyRequest } from "./api";

const configuration = new Configuration();
const apiInstance = new ACADEMYSESSIONApi(configuration);

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

# **runPrepareClassGenerator**

> AcademySessionClassGenerator runPrepareClassGenerator()

### Example

```typescript
import { ACADEMYSESSIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ACADEMYSESSIONApi(configuration);

const { status, data } = await apiInstance.runPrepareClassGenerator();
```

### Parameters

This endpoint does not have any parameters.

### Return type

**AcademySessionClassGenerator**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                         | Response headers |
| ----------- | ----------------------------------- | ---------------- |
| **200**     | prepare draft class generate record | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runReverseClasses**

> string runReverseClasses()

### Example

```typescript
import { ACADEMYSESSIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ACADEMYSESSIONApi(configuration);

let generateId: string; // (default to undefined)

const { status, data } = await apiInstance.runReverseClasses(generateId);
```

### Parameters

| Name           | Type         | Description | Notes                 |
| -------------- | ------------ | ----------- | --------------------- |
| **generateId** | [**string**] |             | defaults to undefined |

### Return type

**string**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                        | Response headers |
| ----------- | -------------------------------------------------- | ---------------- |
| **200**     | delete generated classes, schedules and enrollment | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runSearch**

> Array<AcademySession> runSearch(body)

### Example

```typescript
import { ACADEMYSESSIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ACADEMYSESSIONApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<AcademySession>**

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

> runUpdate(academySession)

### Example

```typescript
import { ACADEMYSESSIONApi, Configuration, AcademySession } from "./api";

const configuration = new Configuration();
const apiInstance = new ACADEMYSESSIONApi(configuration);

let id: string; // (default to undefined)
let academySession: AcademySession; //Data

const { status, data } = await apiInstance.runUpdate(id, academySession);
```

### Parameters

| Name               | Type               | Description | Notes                 |
| ------------------ | ------------------ | ----------- | --------------------- |
| **academySession** | **AcademySession** | Data        |                       |
| **id**             | [**string**]       |             | defaults to undefined |

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

# **runUpdateClassGenerator**

> AcademySessionClassGenerator runUpdateClassGenerator(academySessionClassGenerator)

### Example

```typescript
import {
  ACADEMYSESSIONApi,
  Configuration,
  AcademySessionClassGenerator,
} from "./api";

const configuration = new Configuration();
const apiInstance = new ACADEMYSESSIONApi(configuration);

let academySessionClassGenerator: AcademySessionClassGenerator; //Request Body

const { status, data } = await apiInstance.runUpdateClassGenerator(
  academySessionClassGenerator
);
```

### Parameters

| Name                             | Type                             | Description  | Notes |
| -------------------------------- | -------------------------------- | ------------ | ----- |
| **academySessionClassGenerator** | **AcademySessionClassGenerator** | Request Body |       |

### Return type

**AcademySessionClassGenerator**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                                      | Response headers |
| ----------- | ------------------------------------------------ | ---------------- |
| **200**     | update class generator record but not process it | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
