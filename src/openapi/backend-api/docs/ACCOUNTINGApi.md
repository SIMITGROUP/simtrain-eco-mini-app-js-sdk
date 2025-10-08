# ACCOUNTINGApi

All URIs are relative to _http://localhost_

| Method                                                  | HTTP request                                         | Description |
| ------------------------------------------------------- | ---------------------------------------------------- | ----------- |
| [**deleteJE**](#deleteje)                               | **POST** /accounting/{systemType}/{docType}/deleteJE |             |
| [**runCreateJEinAccounting**](#runcreatejeinaccounting) | **POST** /accounting/{systemType}/{docType}/createJE |             |
| [**runSearchDocuments**](#runsearchdocuments)           | **GET** /accounting/{docType}/{dateFrom}/{dateTo}    |             |
| [**voidJE**](#voidje)                                   | **POST** /accounting/{systemType}/{docType}/voidJE   |             |

# **deleteJE**

> FinalResponse deleteJE(requestBody)

Delete JE record

### Example

```typescript
import { ACCOUNTINGApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ACCOUNTINGApi(configuration);

let systemType: string; // (default to undefined)
let docType: string; // (default to undefined)
let requestBody: Array<string>; //Data

const { status, data } = await apiInstance.deleteJE(
  systemType,
  docType,
  requestBody
);
```

### Parameters

| Name            | Type              | Description | Notes                 |
| --------------- | ----------------- | ----------- | --------------------- |
| **requestBody** | **Array<string>** | Data        |                       |
| **systemType**  | [**string**]      |             | defaults to undefined |
| **docType**     | [**string**]      |             | defaults to undefined |

### Return type

**FinalResponse**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description              | Response headers |
| ----------- | ------------------------ | ---------------- |
| **200**     | JE record deleted        | -                |
| **404**     | Record not found         | -                |
| **500**     | Fail to delete JE record | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runCreateJEinAccounting**

> FinalResponse runCreateJEinAccounting(requestBody)

run create a Journal Entry record in accounting system

### Example

```typescript
import { ACCOUNTINGApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ACCOUNTINGApi(configuration);

let systemType: string; // (default to undefined)
let docType: string; // (default to undefined)
let requestBody: Array<string>; //document ids

const { status, data } = await apiInstance.runCreateJEinAccounting(
  systemType,
  docType,
  requestBody
);
```

### Parameters

| Name            | Type              | Description  | Notes                 |
| --------------- | ----------------- | ------------ | --------------------- |
| **requestBody** | **Array<string>** | document ids |                       |
| **systemType**  | [**string**]      |              | defaults to undefined |
| **docType**     | [**string**]      |              | defaults to undefined |

### Return type

**FinalResponse**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **201**     | Success create JE | -                |
| **400**     | Invalid create JE | -                |
| **500**     | Fail to create JE | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runSearchDocuments**

> Array<BillDocumentType> runSearchDocuments()

### Example

```typescript
import { ACCOUNTINGApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ACCOUNTINGApi(configuration);

let dateFrom: string; // (default to undefined)
let dateTo: string; // (default to undefined)
let docType: string; // (default to undefined)

const { status, data } = await apiInstance.runSearchDocuments(
  dateFrom,
  dateTo,
  docType
);
```

### Parameters

| Name         | Type         | Description | Notes                 |
| ------------ | ------------ | ----------- | --------------------- |
| **dateFrom** | [**string**] |             | defaults to undefined |
| **dateTo**   | [**string**] |             | defaults to undefined |
| **docType**  | [**string**] |             | defaults to undefined |

### Return type

**Array<BillDocumentType>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                     | Response headers |
| ----------- | ----------------------------------------------- | ---------------- |
| **200**     | get invoice/payment/credit note/refund by month | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **voidJE**

> FinalResponse voidJE(requestBody)

Void JE record

### Example

```typescript
import { ACCOUNTINGApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new ACCOUNTINGApi(configuration);

let systemType: string; // (default to undefined)
let docType: string; // (default to undefined)
let requestBody: Array<string>; //Data

const { status, data } = await apiInstance.voidJE(
  systemType,
  docType,
  requestBody
);
```

### Parameters

| Name            | Type              | Description | Notes                 |
| --------------- | ----------------- | ----------- | --------------------- |
| **requestBody** | **Array<string>** | Data        |                       |
| **systemType**  | [**string**]      |             | defaults to undefined |
| **docType**     | [**string**]      |             | defaults to undefined |

### Return type

**FinalResponse**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description            | Response headers |
| ----------- | ---------------------- | ---------------- |
| **200**     | JE record void         | -                |
| **404**     | Record not found       | -                |
| **500**     | Fail to void JE record | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
