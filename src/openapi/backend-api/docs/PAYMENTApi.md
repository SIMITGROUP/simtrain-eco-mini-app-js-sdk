# PAYMENTApi

All URIs are relative to _http://localhost_

| Method                                                                        | HTTP request                                                  | Description |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------- | ----------- |
| [**autoComplete**](#autocomplete)                                             | **POST** /payment/autocomplete                                |             |
| [**paymentControllerSetStatusConfirm**](#paymentcontrollersetstatusconfirm)   | **POST** /payment/{id}/set-confirm                            |             |
| [**paymentControllerSetStatusDraft**](#paymentcontrollersetstatusdraft)       | **POST** /payment/{id}/set-draft                              |             |
| [**paymentControllerSetStatusVoid**](#paymentcontrollersetstatusvoid)         | **POST** /payment/{id}/set-void                               |             |
| [**runCreate**](#runcreate)                                                   | **POST** /payment                                             |             |
| [**runCreateOnlinePaymentReceipt**](#runcreateonlinepaymentreceipt)           | **POST** /payment-api/payment/create-online-payment-receipt   |             |
| [**runDefault**](#rundefault)                                                 | **GET** /payment                                              |             |
| [**runDelete**](#rundelete)                                                   | **DELETE** /payment/{id}                                      |             |
| [**runFindOne**](#runfindone)                                                 | **GET** /payment/{id}                                         |             |
| [**runGetDailyCollectionByPaymentType**](#rungetdailycollectionbypaymenttype) | **GET** /payment-api/dailycollectio-bypaymenttype/{date}      |             |
| [**runPatch**](#runpatch)                                                     | **PATCH** /payment/{id}                                       |             |
| [**runPatchMany**](#runpatchmany)                                             | **PATCH** /payment/bulk-patch                                 |             |
| [**runPrint**](#runprint)                                                     | **GET** /payment-api/{id}/print/{formatId}                    |             |
| [**runRecreateOnlinePaymentReceipt**](#runrecreateonlinepaymentreceipt)       | **POST** /payment-api/payment/recreate-online-payment-receipt |             |
| [**runSearch**](#runsearch)                                                   | **POST** /payment/search                                      |             |
| [**runTotalPaymentAmount**](#runtotalpaymentamount)                           | **GET** /payment-api/totalcollection/{month}                  |             |
| [**runUpdate**](#runupdate)                                                   | **PUT** /payment/{id}                                         |             |

# **autoComplete**

> Array<PaymentAutoComplete> autoComplete(body)

retrieve array of {\_id, code, name}

### Example

```typescript
import { PAYMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new PAYMENTApi(configuration);

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

**Array<PaymentAutoComplete>**

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

# **paymentControllerSetStatusConfirm**

> paymentControllerSetStatusConfirm(body)

### Example

```typescript
import { PAYMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new PAYMENTApi(configuration);

let id: string; // (default to undefined)
let body: object; //Document data

const { status, data } = await apiInstance.paymentControllerSetStatusConfirm(
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

# **paymentControllerSetStatusDraft**

> paymentControllerSetStatusDraft(body)

### Example

```typescript
import { PAYMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new PAYMENTApi(configuration);

let id: string; // (default to undefined)
let body: object; //Document data

const { status, data } = await apiInstance.paymentControllerSetStatusDraft(
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

# **paymentControllerSetStatusVoid**

> paymentControllerSetStatusVoid(body)

### Example

```typescript
import { PAYMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new PAYMENTApi(configuration);

let id: string; // (default to undefined)
let body: object; //Document data

const { status, data } = await apiInstance.paymentControllerSetStatusVoid(
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

> Payment runCreate(payment)

### Example

```typescript
import { PAYMENTApi, Configuration, Payment } from "./api";

const configuration = new Configuration();
const apiInstance = new PAYMENTApi(configuration);

let payment: Payment; //Data

const { status, data } = await apiInstance.runCreate(payment);
```

### Parameters

| Name        | Type        | Description | Notes |
| ----------- | ----------- | ----------- | ----- |
| **payment** | **Payment** | Data        |       |

### Return type

**Payment**

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

# **runCreateOnlinePaymentReceipt**

> Payment runCreateOnlinePaymentReceipt(body)

### Example

```typescript
import { PAYMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new PAYMENTApi(configuration);

let body: object; //Request Body

const { status, data } = await apiInstance.runCreateOnlinePaymentReceipt(body);
```

### Parameters

| Name     | Type       | Description  | Notes |
| -------- | ---------- | ------------ | ----- |
| **body** | **object** | Request Body |       |

### Return type

**Payment**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                   | Response headers |
| ----------- | ----------------------------- | ---------------- |
| **200**     | Create Online Payment Receipt | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runDefault**

> object runDefault()

Run default behavior like say hello

### Example

```typescript
import { PAYMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new PAYMENTApi(configuration);

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

> Payment runDelete()

### Example

```typescript
import { PAYMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new PAYMENTApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runDelete(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**Payment**

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

> Payment runFindOne()

### Example

```typescript
import { PAYMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new PAYMENTApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runFindOne(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**Payment**

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

# **runGetDailyCollectionByPaymentType**

> Array<CodeLabelValue> runGetDailyCollectionByPaymentType()

### Example

```typescript
import { PAYMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new PAYMENTApi(configuration);

let date: string; // (default to undefined)

const { status, data } =
  await apiInstance.runGetDailyCollectionByPaymentType(date);
```

### Parameters

| Name     | Type         | Description | Notes                 |
| -------- | ------------ | ----------- | --------------------- |
| **date** | [**string**] |             | defaults to undefined |

### Return type

**Array<CodeLabelValue>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                   | Response headers |
| ----------- | ----------------------------- | ---------------- |
| **200**     | get total collection by month | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runPatch**

> runPatch(payment)

### Example

```typescript
import { PAYMENTApi, Configuration, Payment } from "./api";

const configuration = new Configuration();
const apiInstance = new PAYMENTApi(configuration);

let id: string; // (default to undefined)
let payment: Payment; //Data

const { status, data } = await apiInstance.runPatch(id, payment);
```

### Parameters

| Name        | Type         | Description | Notes                 |
| ----------- | ------------ | ----------- | --------------------- |
| **payment** | **Payment**  | Data        |                       |
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
import { PAYMENTApi, Configuration, PatchManyRequest } from "./api";

const configuration = new Configuration();
const apiInstance = new PAYMENTApi(configuration);

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
import { PAYMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new PAYMENTApi(configuration);

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

# **runRecreateOnlinePaymentReceipt**

> Payment runRecreateOnlinePaymentReceipt(body)

### Example

```typescript
import { PAYMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new PAYMENTApi(configuration);

let body: object; //Request Body

const { status, data } =
  await apiInstance.runRecreateOnlinePaymentReceipt(body);
```

### Parameters

| Name     | Type       | Description  | Notes |
| -------- | ---------- | ------------ | ----- |
| **body** | **object** | Request Body |       |

### Return type

**Payment**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                     | Response headers |
| ----------- | ------------------------------- | ---------------- |
| **200**     | Recreate Online Payment Receipt | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runSearch**

> Array<Payment> runSearch(body)

### Example

```typescript
import { PAYMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new PAYMENTApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<Payment>**

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

# **runTotalPaymentAmount**

> number runTotalPaymentAmount()

### Example

```typescript
import { PAYMENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new PAYMENTApi(configuration);

let month: string; // (default to undefined)

const { status, data } = await apiInstance.runTotalPaymentAmount(month);
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

| Status code | Description                   | Response headers |
| ----------- | ----------------------------- | ---------------- |
| **200**     | get total collection by month | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runUpdate**

> runUpdate(payment)

### Example

```typescript
import { PAYMENTApi, Configuration, Payment } from "./api";

const configuration = new Configuration();
const apiInstance = new PAYMENTApi(configuration);

let id: string; // (default to undefined)
let payment: Payment; //Data

const { status, data } = await apiInstance.runUpdate(id, payment);
```

### Parameters

| Name        | Type         | Description | Notes                 |
| ----------- | ------------ | ----------- | --------------------- |
| **payment** | **Payment**  | Data        |                       |
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
