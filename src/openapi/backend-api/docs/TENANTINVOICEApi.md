# TENANTINVOICEApi

All URIs are relative to _http://localhost_

| Method                                                                                  | HTTP request                                     | Description |
| --------------------------------------------------------------------------------------- | ------------------------------------------------ | ----------- |
| [**autoComplete**](#autocomplete)                                                       | **POST** /tenantinvoice/autocomplete             |             |
| [**runCreate**](#runcreate)                                                             | **POST** /tenantinvoice                          |             |
| [**runCreateMany**](#runcreatemany)                                                     | **POST** /tenantinvoice/bulk-create              |             |
| [**runDefault**](#rundefault)                                                           | **GET** /tenantinvoice                           |             |
| [**runDelete**](#rundelete)                                                             | **DELETE** /tenantinvoice/{id}                   |             |
| [**runFindOne**](#runfindone)                                                           | **GET** /tenantinvoice/{id}                      |             |
| [**runPatch**](#runpatch)                                                               | **PATCH** /tenantinvoice/{id}                    |             |
| [**runPatchMany**](#runpatchmany)                                                       | **PATCH** /tenantinvoice/bulk-patch              |             |
| [**runPrepareInvoiceNo**](#runprepareinvoiceno)                                         | **GET** /tenantinvoice-api/prepare-invoice-no    |             |
| [**runPrint**](#runprint)                                                               | **GET** /tenantinvoice-api/{id}/print/{formatId} |             |
| [**runSearch**](#runsearch)                                                             | **POST** /tenantinvoice/search                   |             |
| [**runUpdate**](#runupdate)                                                             | **PUT** /tenantinvoice/{id}                      |             |
| [**tenantInvoiceControllerSetStatusConfirm**](#tenantinvoicecontrollersetstatusconfirm) | **POST** /tenantinvoice/{id}/set-confirm         |             |
| [**tenantInvoiceControllerSetStatusDraft**](#tenantinvoicecontrollersetstatusdraft)     | **POST** /tenantinvoice/{id}/set-draft           |             |
| [**tenantInvoiceControllerSetStatusVoid**](#tenantinvoicecontrollersetstatusvoid)       | **POST** /tenantinvoice/{id}/set-void            |             |

# **autoComplete**

> Array<TenantInvoiceAutoComplete> autoComplete(body)

retrieve array of {\_id, code, name}

### Example

```typescript
import { TENANTINVOICEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TENANTINVOICEApi(configuration);

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

**Array<TenantInvoiceAutoComplete>**

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

> TenantInvoice runCreate(tenantInvoice)

### Example

```typescript
import { TENANTINVOICEApi, Configuration, TenantInvoice } from "./api";

const configuration = new Configuration();
const apiInstance = new TENANTINVOICEApi(configuration);

let tenantInvoice: TenantInvoice; //Data

const { status, data } = await apiInstance.runCreate(tenantInvoice);
```

### Parameters

| Name              | Type              | Description | Notes |
| ----------------- | ----------------- | ----------- | ----- |
| **tenantInvoice** | **TenantInvoice** | Data        |       |

### Return type

**TenantInvoice**

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

# **runCreateMany**

> Array<TenantInvoice> runCreateMany(tenantInvoice)

### Example

```typescript
import { TENANTINVOICEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TENANTINVOICEApi(configuration);

let tenantInvoice: Array<TenantInvoice>; //Data

const { status, data } = await apiInstance.runCreateMany(tenantInvoice);
```

### Parameters

| Name              | Type                     | Description | Notes |
| ----------------- | ------------------------ | ----------- | ----- |
| **tenantInvoice** | **Array<TenantInvoice>** | Data        |       |

### Return type

**Array<TenantInvoice>**

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
import { TENANTINVOICEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TENANTINVOICEApi(configuration);

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

> TenantInvoice runDelete()

### Example

```typescript
import { TENANTINVOICEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TENANTINVOICEApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runDelete(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**TenantInvoice**

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

> TenantInvoice runFindOne()

### Example

```typescript
import { TENANTINVOICEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TENANTINVOICEApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runFindOne(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**TenantInvoice**

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

> runPatch(tenantInvoice)

### Example

```typescript
import { TENANTINVOICEApi, Configuration, TenantInvoice } from "./api";

const configuration = new Configuration();
const apiInstance = new TENANTINVOICEApi(configuration);

let id: string; // (default to undefined)
let tenantInvoice: TenantInvoice; //Data

const { status, data } = await apiInstance.runPatch(id, tenantInvoice);
```

### Parameters

| Name              | Type              | Description | Notes                 |
| ----------------- | ----------------- | ----------- | --------------------- |
| **tenantInvoice** | **TenantInvoice** | Data        |                       |
| **id**            | [**string**]      |             | defaults to undefined |

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
import { TENANTINVOICEApi, Configuration, PatchManyRequest } from "./api";

const configuration = new Configuration();
const apiInstance = new TENANTINVOICEApi(configuration);

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

# **runPrepareInvoiceNo**

> string runPrepareInvoiceNo()

### Example

```typescript
import { TENANTINVOICEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TENANTINVOICEApi(configuration);

const { status, data } = await apiInstance.runPrepareInvoiceNo();
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

| Status code | Description            | Response headers |
| ----------- | ---------------------- | ---------------- |
| **200**     | prepare invoice number | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runPrint**

> string runPrint()

### Example

```typescript
import { TENANTINVOICEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TENANTINVOICEApi(configuration);

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

> Array<TenantInvoice> runSearch(body)

### Example

```typescript
import { TENANTINVOICEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TENANTINVOICEApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<TenantInvoice>**

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

> runUpdate(tenantInvoice)

### Example

```typescript
import { TENANTINVOICEApi, Configuration, TenantInvoice } from "./api";

const configuration = new Configuration();
const apiInstance = new TENANTINVOICEApi(configuration);

let id: string; // (default to undefined)
let tenantInvoice: TenantInvoice; //Data

const { status, data } = await apiInstance.runUpdate(id, tenantInvoice);
```

### Parameters

| Name              | Type              | Description | Notes                 |
| ----------------- | ----------------- | ----------- | --------------------- |
| **tenantInvoice** | **TenantInvoice** | Data        |                       |
| **id**            | [**string**]      |             | defaults to undefined |

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

# **tenantInvoiceControllerSetStatusConfirm**

> tenantInvoiceControllerSetStatusConfirm(body)

### Example

```typescript
import { TENANTINVOICEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TENANTINVOICEApi(configuration);

let id: string; // (default to undefined)
let body: object; //Document data

const { status, data } =
  await apiInstance.tenantInvoiceControllerSetStatusConfirm(id, body);
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

# **tenantInvoiceControllerSetStatusDraft**

> tenantInvoiceControllerSetStatusDraft(body)

### Example

```typescript
import { TENANTINVOICEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TENANTINVOICEApi(configuration);

let id: string; // (default to undefined)
let body: object; //Document data

const { status, data } =
  await apiInstance.tenantInvoiceControllerSetStatusDraft(id, body);
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

# **tenantInvoiceControllerSetStatusVoid**

> tenantInvoiceControllerSetStatusVoid(body)

### Example

```typescript
import { TENANTINVOICEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new TENANTINVOICEApi(configuration);

let id: string; // (default to undefined)
let body: object; //Document data

const { status, data } = await apiInstance.tenantInvoiceControllerSetStatusVoid(
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
