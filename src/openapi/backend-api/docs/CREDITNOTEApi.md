# CREDITNOTEApi

All URIs are relative to _http://localhost_

| Method                                                                            | HTTP request                                  | Description |
| --------------------------------------------------------------------------------- | --------------------------------------------- | ----------- |
| [**autoComplete**](#autocomplete)                                                 | **POST** /creditnote/autocomplete             |             |
| [**creditNoteControllerSetStatusConfirm**](#creditnotecontrollersetstatusconfirm) | **POST** /creditnote/{id}/set-confirm         |             |
| [**creditNoteControllerSetStatusDraft**](#creditnotecontrollersetstatusdraft)     | **POST** /creditnote/{id}/set-draft           |             |
| [**creditNoteControllerSetStatusVoid**](#creditnotecontrollersetstatusvoid)       | **POST** /creditnote/{id}/set-void            |             |
| [**runCreate**](#runcreate)                                                       | **POST** /creditnote                          |             |
| [**runDefault**](#rundefault)                                                     | **GET** /creditnote                           |             |
| [**runDelete**](#rundelete)                                                       | **DELETE** /creditnote/{id}                   |             |
| [**runFindOne**](#runfindone)                                                     | **GET** /creditnote/{id}                      |             |
| [**runPatch**](#runpatch)                                                         | **PATCH** /creditnote/{id}                    |             |
| [**runPatchMany**](#runpatchmany)                                                 | **PATCH** /creditnote/bulk-patch              |             |
| [**runPrint**](#runprint)                                                         | **GET** /creditnote-api/{id}/print/{formatId} |             |
| [**runSearch**](#runsearch)                                                       | **POST** /creditnote/search                   |             |
| [**runUpdate**](#runupdate)                                                       | **PUT** /creditnote/{id}                      |             |

# **autoComplete**

> Array<CreditNoteAutoComplete> autoComplete(body)

retrieve array of {\_id, code, name}

### Example

```typescript
import { CREDITNOTEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new CREDITNOTEApi(configuration);

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

**Array<CreditNoteAutoComplete>**

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

# **creditNoteControllerSetStatusConfirm**

> creditNoteControllerSetStatusConfirm(body)

### Example

```typescript
import { CREDITNOTEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new CREDITNOTEApi(configuration);

let id: string; // (default to undefined)
let body: object; //Document data

const { status, data } = await apiInstance.creditNoteControllerSetStatusConfirm(
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

# **creditNoteControllerSetStatusDraft**

> creditNoteControllerSetStatusDraft(body)

### Example

```typescript
import { CREDITNOTEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new CREDITNOTEApi(configuration);

let id: string; // (default to undefined)
let body: object; //Document data

const { status, data } = await apiInstance.creditNoteControllerSetStatusDraft(
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

# **creditNoteControllerSetStatusVoid**

> creditNoteControllerSetStatusVoid(body)

### Example

```typescript
import { CREDITNOTEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new CREDITNOTEApi(configuration);

let id: string; // (default to undefined)
let body: object; //Document data

const { status, data } = await apiInstance.creditNoteControllerSetStatusVoid(
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

# **runCreate**

> CreditNote runCreate(creditNote)

### Example

```typescript
import { CREDITNOTEApi, Configuration, CreditNote } from "./api";

const configuration = new Configuration();
const apiInstance = new CREDITNOTEApi(configuration);

let creditNote: CreditNote; //Data

const { status, data } = await apiInstance.runCreate(creditNote);
```

### Parameters

| Name           | Type           | Description | Notes |
| -------------- | -------------- | ----------- | ----- |
| **creditNote** | **CreditNote** | Data        |       |

### Return type

**CreditNote**

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
import { CREDITNOTEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new CREDITNOTEApi(configuration);

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

> CreditNote runDelete()

### Example

```typescript
import { CREDITNOTEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new CREDITNOTEApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runDelete(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**CreditNote**

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

> CreditNote runFindOne()

### Example

```typescript
import { CREDITNOTEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new CREDITNOTEApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runFindOne(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**CreditNote**

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

> runPatch(creditNote)

### Example

```typescript
import { CREDITNOTEApi, Configuration, CreditNote } from "./api";

const configuration = new Configuration();
const apiInstance = new CREDITNOTEApi(configuration);

let id: string; // (default to undefined)
let creditNote: CreditNote; //Data

const { status, data } = await apiInstance.runPatch(id, creditNote);
```

### Parameters

| Name           | Type           | Description | Notes                 |
| -------------- | -------------- | ----------- | --------------------- |
| **creditNote** | **CreditNote** | Data        |                       |
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
import { CREDITNOTEApi, Configuration, PatchManyRequest } from "./api";

const configuration = new Configuration();
const apiInstance = new CREDITNOTEApi(configuration);

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

# **runPrint**

> string runPrint()

### Example

```typescript
import { CREDITNOTEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new CREDITNOTEApi(configuration);

let id: string; // (default to undefined)
let formatId: string; // (default to undefined)

const { status, data } = await apiInstance.runPrint(id, formatId);
```

### Parameters

| Name         | Type         | Description | Notes                 |
| ------------ | ------------ | ----------- | --------------------- |
| **id**       | [**string**] |             | defaults to undefined |
| **formatId** | [**string**] |             | defaults to undefined |

### Return type

**string**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **200**     | obtain base64 pdf | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runSearch**

> Array<CreditNote> runSearch(body)

### Example

```typescript
import { CREDITNOTEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new CREDITNOTEApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<CreditNote>**

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

> runUpdate(creditNote)

### Example

```typescript
import { CREDITNOTEApi, Configuration, CreditNote } from "./api";

const configuration = new Configuration();
const apiInstance = new CREDITNOTEApi(configuration);

let id: string; // (default to undefined)
let creditNote: CreditNote; //Data

const { status, data } = await apiInstance.runUpdate(id, creditNote);
```

### Parameters

| Name           | Type           | Description | Notes                 |
| -------------- | -------------- | ----------- | --------------------- |
| **creditNote** | **CreditNote** | Data        |                       |
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
