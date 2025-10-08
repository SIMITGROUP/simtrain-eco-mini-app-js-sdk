# INVOICEApi

All URIs are relative to _http://localhost_

| Method                                                                      | HTTP request                                | Description |
| --------------------------------------------------------------------------- | ------------------------------------------- | ----------- |
| [**autoComplete**](#autocomplete)                                           | **POST** /invoice/autocomplete              |             |
| [**invoiceControllerSetStatusConfirm**](#invoicecontrollersetstatusconfirm) | **POST** /invoice/{id}/set-confirm          |             |
| [**invoiceControllerSetStatusDraft**](#invoicecontrollersetstatusdraft)     | **POST** /invoice/{id}/set-draft            |             |
| [**invoiceControllerSetStatusVoid**](#invoicecontrollersetstatusvoid)       | **POST** /invoice/{id}/set-void             |             |
| [**runCreate**](#runcreate)                                                 | **POST** /invoice                           |             |
| [**runDefault**](#rundefault)                                               | **GET** /invoice                            |             |
| [**runDelete**](#rundelete)                                                 | **DELETE** /invoice/{id}                    |             |
| [**runFindOne**](#runfindone)                                               | **GET** /invoice/{id}                       |             |
| [**runGenerateBulkInvoice**](#rungeneratebulkinvoice)                       | **POST** /invoice-api/generate-bulk-invoice |             |
| [**runGenerateHistory**](#rungeneratehistory)                               | **GET** /invoice-api/generate-history       |             |
| [**runPatch**](#runpatch)                                                   | **PATCH** /invoice/{id}                     |             |
| [**runPatchMany**](#runpatchmany)                                           | **PATCH** /invoice/bulk-patch               |             |
| [**runPrepareBilling**](#runpreparebilling)                                 | **POST** /invoice-api/prepare-billing       |             |
| [**runPrint**](#runprint)                                                   | **GET** /invoice-api/{id}/print/{formatId}  |             |
| [**runSearch**](#runsearch)                                                 | **POST** /invoice/search                    |             |
| [**runTotalInvoiceAmount**](#runtotalinvoiceamount)                         | **GET** /invoice-api/totalsales/{month}     |             |
| [**runUpdate**](#runupdate)                                                 | **PUT** /invoice/{id}                       |             |

# **autoComplete**

> Array<InvoiceAutoComplete> autoComplete(body)

retrieve array of {\_id, code, name}

### Example

```typescript
import { INVOICEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new INVOICEApi(configuration);

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

**Array<InvoiceAutoComplete>**

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

# **invoiceControllerSetStatusConfirm**

> invoiceControllerSetStatusConfirm(body)

### Example

```typescript
import { INVOICEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new INVOICEApi(configuration);

let id: string; // (default to undefined)
let body: object; //Document data

const { status, data } = await apiInstance.invoiceControllerSetStatusConfirm(
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

# **invoiceControllerSetStatusDraft**

> invoiceControllerSetStatusDraft(body)

### Example

```typescript
import { INVOICEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new INVOICEApi(configuration);

let id: string; // (default to undefined)
let body: object; //Document data

const { status, data } = await apiInstance.invoiceControllerSetStatusDraft(
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

# **invoiceControllerSetStatusVoid**

> invoiceControllerSetStatusVoid(body)

### Example

```typescript
import { INVOICEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new INVOICEApi(configuration);

let id: string; // (default to undefined)
let body: object; //Document data

const { status, data } = await apiInstance.invoiceControllerSetStatusVoid(
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

> Invoice runCreate(invoice)

### Example

```typescript
import { INVOICEApi, Configuration, Invoice } from "./api";

const configuration = new Configuration();
const apiInstance = new INVOICEApi(configuration);

let invoice: Invoice; //Data

const { status, data } = await apiInstance.runCreate(invoice);
```

### Parameters

| Name        | Type        | Description | Notes |
| ----------- | ----------- | ----------- | ----- |
| **invoice** | **Invoice** | Data        |       |

### Return type

**Invoice**

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
import { INVOICEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new INVOICEApi(configuration);

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

> Invoice runDelete()

### Example

```typescript
import { INVOICEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new INVOICEApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runDelete(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**Invoice**

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

> Invoice runFindOne()

### Example

```typescript
import { INVOICEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new INVOICEApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runFindOne(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**Invoice**

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

# **runGenerateBulkInvoice**

> QueueJobProducerResponse runGenerateBulkInvoice(generateBulkInvoice)

### Example

```typescript
import { INVOICEApi, Configuration, GenerateBulkInvoice } from "./api";

const configuration = new Configuration();
const apiInstance = new INVOICEApi(configuration);

let generateBulkInvoice: GenerateBulkInvoice; //Request Body

const { status, data } =
  await apiInstance.runGenerateBulkInvoice(generateBulkInvoice);
```

### Parameters

| Name                    | Type                    | Description  | Notes |
| ----------------------- | ----------------------- | ------------ | ----- |
| **generateBulkInvoice** | **GenerateBulkInvoice** | Request Body |       |

### Return type

**QueueJobProducerResponse**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description           | Response headers |
| ----------- | --------------------- | ---------------- |
| **200**     | generate bulk invoice | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGenerateHistory**

> Array<BulkGenerateInvoiceHistory> runGenerateHistory()

### Example

```typescript
import { INVOICEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new INVOICEApi(configuration);

const { status, data } = await apiInstance.runGenerateHistory();
```

### Parameters

This endpoint does not have any parameters.

### Return type

**Array<BulkGenerateInvoiceHistory>**

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

# **runPatch**

> runPatch(invoice)

### Example

```typescript
import { INVOICEApi, Configuration, Invoice } from "./api";

const configuration = new Configuration();
const apiInstance = new INVOICEApi(configuration);

let id: string; // (default to undefined)
let invoice: Invoice; //Data

const { status, data } = await apiInstance.runPatch(id, invoice);
```

### Parameters

| Name        | Type         | Description | Notes                 |
| ----------- | ------------ | ----------- | --------------------- |
| **invoice** | **Invoice**  | Data        |                       |
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
import { INVOICEApi, Configuration, PatchManyRequest } from "./api";

const configuration = new Configuration();
const apiInstance = new INVOICEApi(configuration);

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

# **runPrepareBilling**

> Array<BillSummaryByStudent> runPrepareBilling(dateRangeFilter)

### Example

```typescript
import { INVOICEApi, Configuration, DateRangeFilter } from "./api";

const configuration = new Configuration();
const apiInstance = new INVOICEApi(configuration);

let dateRangeFilter: DateRangeFilter; //Request Body

const { status, data } = await apiInstance.runPrepareBilling(dateRangeFilter);
```

### Parameters

| Name                | Type                | Description  | Notes |
| ------------------- | ------------------- | ------------ | ----- |
| **dateRangeFilter** | **DateRangeFilter** | Request Body |       |

### Return type

**Array<BillSummaryByStudent>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                                            | Response headers |
| ----------- | ------------------------------------------------------ | ---------------- | --- |
| **200**     | prepare billing date within date-range like 2025-01-01 | 2025-01-31       | -   |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runPrint**

> string runPrint()

### Example

```typescript
import { INVOICEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new INVOICEApi(configuration);

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

> Array<Invoice> runSearch(body)

### Example

```typescript
import { INVOICEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new INVOICEApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<Invoice>**

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

# **runTotalInvoiceAmount**

> number runTotalInvoiceAmount()

### Example

```typescript
import { INVOICEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new INVOICEApi(configuration);

let month: string; // (default to undefined)

const { status, data } = await apiInstance.runTotalInvoiceAmount(month);
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

| Status code | Description              | Response headers |
| ----------- | ------------------------ | ---------------- |
| **200**     | get total sales by month | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runUpdate**

> runUpdate(invoice)

### Example

```typescript
import { INVOICEApi, Configuration, Invoice } from "./api";

const configuration = new Configuration();
const apiInstance = new INVOICEApi(configuration);

let id: string; // (default to undefined)
let invoice: Invoice; //Data

const { status, data } = await apiInstance.runUpdate(id, invoice);
```

### Parameters

| Name        | Type         | Description | Notes                 |
| ----------- | ------------ | ----------- | --------------------- |
| **invoice** | **Invoice**  | Data        |                       |
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
