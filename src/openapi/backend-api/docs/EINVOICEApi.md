# EINVOICEApi

All URIs are relative to _http://localhost_

| Method                                                | HTTP request                                    | Description |
| ----------------------------------------------------- | ----------------------------------------------- | ----------- |
| [**runCancelEinvoice**](#runcanceleinvoice)           | **POST** /einvoice/cancelEinvoice               |             |
| [**runGetDashboardDetails**](#rungetdashboarddetails) | **GET** /einvoice/dashboard/{datefrom}/{dateto} |             |
| [**runGetDashboardDocList**](#rungetdashboarddoclist) | **POST** /einvoice/dashboard/docList/{type}     |             |
| [**runGetDashboardDocSync**](#rungetdashboarddocsync) | **POST** /einvoice/dashboard/synchronized       |             |
| [**runGetEinvoiceSummary**](#rungeteinvoicesummary)   | **GET** /einvoice/summary/{document}/{id}       |             |
| [**runGetFileName**](#rungetfilename)                 | **GET** /einvoice/filename                      |             |
| [**runGetURL**](#rungeturl)                           | **GET** /einvoice/{id}/{type}                   |             |

# **runCancelEinvoice**

> runCancelEinvoice(einvoiceCancelRequest)

### Example

```typescript
import { EINVOICEApi, Configuration, EinvoiceCancelRequest } from "./api";

const configuration = new Configuration();
const apiInstance = new EINVOICEApi(configuration);

let einvoiceCancelRequest: EinvoiceCancelRequest; //

const { status, data } = await apiInstance.runCancelEinvoice(
  einvoiceCancelRequest
);
```

### Parameters

| Name                      | Type                      | Description | Notes |
| ------------------------- | ------------------------- | ----------- | ----- |
| **einvoiceCancelRequest** | **EinvoiceCancelRequest** |             |       |

### Return type

void (empty response body)

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

### HTTP response details

| Status code | Description     | Response headers |
| ----------- | --------------- | ---------------- |
| **200**     | cancel eInvoice | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetDashboardDetails**

> EinvoiceDashboardDataList runGetDashboardDetails()

### Example

```typescript
import { EINVOICEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new EINVOICEApi(configuration);

let datefrom: string; // (default to undefined)
let dateto: string; // (default to undefined)

const { status, data } = await apiInstance.runGetDashboardDetails(
  datefrom,
  dateto
);
```

### Parameters

| Name         | Type         | Description | Notes                 |
| ------------ | ------------ | ----------- | --------------------- |
| **datefrom** | [**string**] |             | defaults to undefined |
| **dateto**   | [**string**] |             | defaults to undefined |

### Return type

**EinvoiceDashboardDataList**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description            | Response headers |
| ----------- | ---------------------- | ---------------- |
| **200**     | get einvoice dashboard | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetDashboardDocList**

> Array<EinvoiceDashboardDocList> runGetDashboardDocList(requestBody)

### Example

```typescript
import { EINVOICEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new EINVOICEApi(configuration);

let type: string; // (default to undefined)
let requestBody: Array<string>; //

const { status, data } = await apiInstance.runGetDashboardDocList(
  type,
  requestBody
);
```

### Parameters

| Name            | Type              | Description | Notes                 |
| --------------- | ----------------- | ----------- | --------------------- |
| **requestBody** | **Array<string>** |             |                       |
| **type**        | [**string**]      |             | defaults to undefined |

### Return type

**Array<EinvoiceDashboardDocList>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                          | Response headers |
| ----------- | ------------------------------------ | ---------------- |
| **200**     | get einvoice dashboard document list | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetDashboardDocSync**

> runGetDashboardDocSync(einvoiceDashboardSync)

### Example

```typescript
import { EINVOICEApi, Configuration, EinvoiceDashboardSync } from "./api";

const configuration = new Configuration();
const apiInstance = new EINVOICEApi(configuration);

let einvoiceDashboardSync: EinvoiceDashboardSync; //

const { status, data } = await apiInstance.runGetDashboardDocSync(
  einvoiceDashboardSync
);
```

### Parameters

| Name                      | Type                      | Description | Notes |
| ------------------------- | ------------------------- | ----------- | ----- |
| **einvoiceDashboardSync** | **EinvoiceDashboardSync** |             |       |

### Return type

void (empty response body)

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

### HTTP response details

| Status code | Description                                  | Response headers |
| ----------- | -------------------------------------------- | ---------------- |
| **200**     | get einvoice dashboard document synchronized | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetEinvoiceSummary**

> EinvoiceRecordSummary runGetEinvoiceSummary()

### Example

```typescript
import { EINVOICEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new EINVOICEApi(configuration);

let document: string; // (default to undefined)
let id: string; // (default to undefined)

const { status, data } = await apiInstance.runGetEinvoiceSummary(document, id);
```

### Parameters

| Name         | Type         | Description | Notes                 |
| ------------ | ------------ | ----------- | --------------------- |
| **document** | [**string**] |             | defaults to undefined |
| **id**       | [**string**] |             | defaults to undefined |

### Return type

**EinvoiceRecordSummary**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | get einvoice summary | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetFileName**

> MicroFrontendAssetsResponse runGetFileName()

### Example

```typescript
import { EINVOICEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new EINVOICEApi(configuration);

const { status, data } = await apiInstance.runGetFileName();
```

### Parameters

This endpoint does not have any parameters.

### Return type

**MicroFrontendAssetsResponse**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description           | Response headers |
| ----------- | --------------------- | ---------------- |
| **200**     | get einvoice filename | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetURL**

> EinvoiceRecordURLResponse runGetURL()

### Example

```typescript
import { EINVOICEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new EINVOICEApi(configuration);

let id: string; // (default to undefined)
let type: string; // (default to undefined)

const { status, data } = await apiInstance.runGetURL(id, type);
```

### Parameters

| Name     | Type         | Description | Notes                 |
| -------- | ------------ | ----------- | --------------------- |
| **id**   | [**string**] |             | defaults to undefined |
| **type** | [**string**] |             | defaults to undefined |

### Return type

**EinvoiceRecordURLResponse**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                  | Response headers |
| ----------- | ---------------------------- | ---------------- |
| **200**     | get einvoice LHDN record url | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
