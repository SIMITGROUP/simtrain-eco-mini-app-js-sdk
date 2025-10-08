# ACADEMYSESSIONCLASSGENERATORApi

All URIs are relative to _http://localhost_

| Method                            | HTTP request                                        | Description |
| --------------------------------- | --------------------------------------------------- | ----------- |
| [**autoComplete**](#autocomplete) | **POST** /academysessionclassgenerator/autocomplete |             |
| [**runCreate**](#runcreate)       | **POST** /academysessionclassgenerator              |             |
| [**runDefault**](#rundefault)     | **GET** /academysessionclassgenerator               |             |
| [**runDelete**](#rundelete)       | **DELETE** /academysessionclassgenerator/{id}       |             |
| [**runFindOne**](#runfindone)     | **GET** /academysessionclassgenerator/{id}          |             |
| [**runPatch**](#runpatch)         | **PATCH** /academysessionclassgenerator/{id}        |             |
| [**runPatchMany**](#runpatchmany) | **PATCH** /academysessionclassgenerator/bulk-patch  |             |
| [**runSearch**](#runsearch)       | **POST** /academysessionclassgenerator/search       |             |
| [**runUpdate**](#runupdate)       | **PUT** /academysessionclassgenerator/{id}          |             |

# **autoComplete**

> Array<AcademySessionClassGeneratorAutoComplete> autoComplete(body)

retrieve array of {\_id, code, name}

### Example

```typescript
import { ACADEMYSESSIONCLASSGENERATORApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ACADEMYSESSIONCLASSGENERATORApi(configuration);

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

**Array<AcademySessionClassGeneratorAutoComplete>**

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

> AcademySessionClassGenerator runCreate(academySessionClassGenerator)

### Example

```typescript
import {
  ACADEMYSESSIONCLASSGENERATORApi,
  Configuration,
  AcademySessionClassGenerator,
} from "./api";

const configuration = new Configuration();
const apiInstance = new ACADEMYSESSIONCLASSGENERATORApi(configuration);

let academySessionClassGenerator: AcademySessionClassGenerator; //Data

const { status, data } = await apiInstance.runCreate(
  academySessionClassGenerator
);
```

### Parameters

| Name                             | Type                             | Description | Notes |
| -------------------------------- | -------------------------------- | ----------- | ----- |
| **academySessionClassGenerator** | **AcademySessionClassGenerator** | Data        |       |

### Return type

**AcademySessionClassGenerator**

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
import { ACADEMYSESSIONCLASSGENERATORApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ACADEMYSESSIONCLASSGENERATORApi(configuration);

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

> AcademySessionClassGenerator runDelete()

### Example

```typescript
import { ACADEMYSESSIONCLASSGENERATORApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ACADEMYSESSIONCLASSGENERATORApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runDelete(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**AcademySessionClassGenerator**

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

> AcademySessionClassGenerator runFindOne()

### Example

```typescript
import { ACADEMYSESSIONCLASSGENERATORApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ACADEMYSESSIONCLASSGENERATORApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runFindOne(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**AcademySessionClassGenerator**

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

> runPatch(academySessionClassGenerator)

### Example

```typescript
import {
  ACADEMYSESSIONCLASSGENERATORApi,
  Configuration,
  AcademySessionClassGenerator,
} from "./api";

const configuration = new Configuration();
const apiInstance = new ACADEMYSESSIONCLASSGENERATORApi(configuration);

let id: string; // (default to undefined)
let academySessionClassGenerator: AcademySessionClassGenerator; //Data

const { status, data } = await apiInstance.runPatch(
  id,
  academySessionClassGenerator
);
```

### Parameters

| Name                             | Type                             | Description | Notes                 |
| -------------------------------- | -------------------------------- | ----------- | --------------------- |
| **academySessionClassGenerator** | **AcademySessionClassGenerator** | Data        |                       |
| **id**                           | [**string**]                     |             | defaults to undefined |

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
import {
  ACADEMYSESSIONCLASSGENERATORApi,
  Configuration,
  PatchManyRequest,
} from "./api";

const configuration = new Configuration();
const apiInstance = new ACADEMYSESSIONCLASSGENERATORApi(configuration);

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

> Array<AcademySessionClassGenerator> runSearch(body)

### Example

```typescript
import { ACADEMYSESSIONCLASSGENERATORApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ACADEMYSESSIONCLASSGENERATORApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<AcademySessionClassGenerator>**

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

> runUpdate(academySessionClassGenerator)

### Example

```typescript
import {
  ACADEMYSESSIONCLASSGENERATORApi,
  Configuration,
  AcademySessionClassGenerator,
} from "./api";

const configuration = new Configuration();
const apiInstance = new ACADEMYSESSIONCLASSGENERATORApi(configuration);

let id: string; // (default to undefined)
let academySessionClassGenerator: AcademySessionClassGenerator; //Data

const { status, data } = await apiInstance.runUpdate(
  id,
  academySessionClassGenerator
);
```

### Parameters

| Name                             | Type                             | Description | Notes                 |
| -------------------------------- | -------------------------------- | ----------- | --------------------- |
| **academySessionClassGenerator** | **AcademySessionClassGenerator** | Data        |                       |
| **id**                           | [**string**]                     |             | defaults to undefined |

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
