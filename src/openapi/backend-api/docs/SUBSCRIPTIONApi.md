# SUBSCRIPTIONApi

All URIs are relative to _http://localhost_

| Method                                                            | HTTP request                                             | Description |
| ----------------------------------------------------------------- | -------------------------------------------------------- | ----------- |
| [**calculateProration**](#calculateproration)                     | **GET** /subscriptions/calculate/proration               |             |
| [**cancel**](#cancel)                                             | **POST** /subscriptions/cancel                           |             |
| [**checkPaymentStatus**](#checkpaymentstatus)                     | **POST** /subscriptions/payment/status/{onlinePaymentId} |             |
| [**checkoutAddOn**](#checkoutaddon)                               | **POST** /subscriptions/add-on/checkout                  |             |
| [**checkoutDowngrade**](#checkoutdowngrade)                       | **POST** /subscriptions/downgrade/checkout               |             |
| [**checkoutRenewal**](#checkoutrenewal)                           | **POST** /subscriptions/renewal/checkout                 |             |
| [**checkoutUpgradeFreeLicense**](#checkoutupgradefreelicense)     | **POST** /subscriptions/upgrade/free/checkout            |             |
| [**checkoutUpgradePaidLicense**](#checkoutupgradepaidlicense)     | **POST** /subscriptions/upgrade/paid/checkout            |             |
| [**getAddOnSummary**](#getaddonsummary)                           | **GET** /subscriptions/add-on/summary                    |             |
| [**getDowngradeSummary**](#getdowngradesummary)                   | **GET** /subscriptions/downgrade/summary                 |             |
| [**getRenewalSummary**](#getrenewalsummary)                       | **GET** /subscriptions/renewal/summary                   |             |
| [**getUpgradeFreeLicenseSummary**](#getupgradefreelicensesummary) | **GET** /subscriptions/upgrade/free/summary              |             |
| [**getUpgradePaidLicenseSummary**](#getupgradepaidlicensesummary) | **GET** /subscriptions/upgrade/paid/summary              |             |

# **calculateProration**

> SubscriptionProration calculateProration()

### Example

```typescript
import { SUBSCRIPTIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new SUBSCRIPTIONApi(configuration);

let utcStartTime: string; // (default to undefined)
let utcEndTime: string; // (default to undefined)
let utcProcessTime: string; // (default to undefined)
let timeZoneOffset: number; //Timezone offset in minutes (e.g. 480 for UTC+8). (default to undefined)
let currentPrice: number; // (default to undefined)
let targetPrice: number; // (default to undefined)

const { status, data } = await apiInstance.calculateProration(
  utcStartTime,
  utcEndTime,
  utcProcessTime,
  timeZoneOffset,
  currentPrice,
  targetPrice
);
```

### Parameters

| Name               | Type         | Description                                      | Notes                 |
| ------------------ | ------------ | ------------------------------------------------ | --------------------- |
| **utcStartTime**   | [**string**] |                                                  | defaults to undefined |
| **utcEndTime**     | [**string**] |                                                  | defaults to undefined |
| **utcProcessTime** | [**string**] |                                                  | defaults to undefined |
| **timeZoneOffset** | [**number**] | Timezone offset in minutes (e.g. 480 for UTC+8). | defaults to undefined |
| **currentPrice**   | [**number**] |                                                  | defaults to undefined |
| **targetPrice**    | [**number**] |                                                  | defaults to undefined |

### Return type

**SubscriptionProration**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **0**       |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cancel**

> Tenant cancel()

### Example

```typescript
import { SUBSCRIPTIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new SUBSCRIPTIONApi(configuration);

const { status, data } = await apiInstance.cancel();
```

### Parameters

This endpoint does not have any parameters.

### Return type

**Tenant**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **0**       |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkPaymentStatus**

> SubscriptionOnlinePaymentStatusResponse checkPaymentStatus()

### Example

```typescript
import { SUBSCRIPTIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new SUBSCRIPTIONApi(configuration);

let onlinePaymentId: string; // (default to undefined)

const { status, data } = await apiInstance.checkPaymentStatus(onlinePaymentId);
```

### Parameters

| Name                | Type         | Description | Notes                 |
| ------------------- | ------------ | ----------- | --------------------- |
| **onlinePaymentId** | [**string**] |             | defaults to undefined |

### Return type

**SubscriptionOnlinePaymentStatusResponse**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **0**       |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkoutAddOn**

> SubscriptionCheckoutResponse checkoutAddOn(subscriptionCheckoutAddOnDto)

### Example

```typescript
import {
  SUBSCRIPTIONApi,
  Configuration,
  SubscriptionCheckoutAddOnDto,
} from "./api";

const configuration = new Configuration();
const apiInstance = new SUBSCRIPTIONApi(configuration);

let subscriptionCheckoutAddOnDto: SubscriptionCheckoutAddOnDto; //

const { status, data } = await apiInstance.checkoutAddOn(
  subscriptionCheckoutAddOnDto
);
```

### Parameters

| Name                             | Type                             | Description | Notes |
| -------------------------------- | -------------------------------- | ----------- | ----- |
| **subscriptionCheckoutAddOnDto** | **SubscriptionCheckoutAddOnDto** |             |       |

### Return type

**SubscriptionCheckoutResponse**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **0**       |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkoutDowngrade**

> SubscriptionCheckoutResponse checkoutDowngrade(subscriptionCheckoutDowngradeDto)

### Example

```typescript
import {
  SUBSCRIPTIONApi,
  Configuration,
  SubscriptionCheckoutDowngradeDto,
} from "./api";

const configuration = new Configuration();
const apiInstance = new SUBSCRIPTIONApi(configuration);

let subscriptionCheckoutDowngradeDto: SubscriptionCheckoutDowngradeDto; //

const { status, data } = await apiInstance.checkoutDowngrade(
  subscriptionCheckoutDowngradeDto
);
```

### Parameters

| Name                                 | Type                                 | Description | Notes |
| ------------------------------------ | ------------------------------------ | ----------- | ----- |
| **subscriptionCheckoutDowngradeDto** | **SubscriptionCheckoutDowngradeDto** |             |       |

### Return type

**SubscriptionCheckoutResponse**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **0**       |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkoutRenewal**

> SubscriptionCheckoutResponse checkoutRenewal(subscriptionCheckoutRenewalDto)

### Example

```typescript
import {
  SUBSCRIPTIONApi,
  Configuration,
  SubscriptionCheckoutRenewalDto,
} from "./api";

const configuration = new Configuration();
const apiInstance = new SUBSCRIPTIONApi(configuration);

let subscriptionCheckoutRenewalDto: SubscriptionCheckoutRenewalDto; //

const { status, data } = await apiInstance.checkoutRenewal(
  subscriptionCheckoutRenewalDto
);
```

### Parameters

| Name                               | Type                               | Description | Notes |
| ---------------------------------- | ---------------------------------- | ----------- | ----- |
| **subscriptionCheckoutRenewalDto** | **SubscriptionCheckoutRenewalDto** |             |       |

### Return type

**SubscriptionCheckoutResponse**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **0**       |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkoutUpgradeFreeLicense**

> SubscriptionCheckoutResponse checkoutUpgradeFreeLicense(subscriptionCheckoutUpgradeFreeLicenseDto)

### Example

```typescript
import {
  SUBSCRIPTIONApi,
  Configuration,
  SubscriptionCheckoutUpgradeFreeLicenseDto,
} from "./api";

const configuration = new Configuration();
const apiInstance = new SUBSCRIPTIONApi(configuration);

let subscriptionCheckoutUpgradeFreeLicenseDto: SubscriptionCheckoutUpgradeFreeLicenseDto; //

const { status, data } = await apiInstance.checkoutUpgradeFreeLicense(
  subscriptionCheckoutUpgradeFreeLicenseDto
);
```

### Parameters

| Name                                          | Type                                          | Description | Notes |
| --------------------------------------------- | --------------------------------------------- | ----------- | ----- |
| **subscriptionCheckoutUpgradeFreeLicenseDto** | **SubscriptionCheckoutUpgradeFreeLicenseDto** |             |       |

### Return type

**SubscriptionCheckoutResponse**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **0**       |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkoutUpgradePaidLicense**

> SubscriptionCheckoutResponse checkoutUpgradePaidLicense(subscriptionCheckoutUpgradePaidLicenseDto)

### Example

```typescript
import {
  SUBSCRIPTIONApi,
  Configuration,
  SubscriptionCheckoutUpgradePaidLicenseDto,
} from "./api";

const configuration = new Configuration();
const apiInstance = new SUBSCRIPTIONApi(configuration);

let subscriptionCheckoutUpgradePaidLicenseDto: SubscriptionCheckoutUpgradePaidLicenseDto; //

const { status, data } = await apiInstance.checkoutUpgradePaidLicense(
  subscriptionCheckoutUpgradePaidLicenseDto
);
```

### Parameters

| Name                                          | Type                                          | Description | Notes |
| --------------------------------------------- | --------------------------------------------- | ----------- | ----- |
| **subscriptionCheckoutUpgradePaidLicenseDto** | **SubscriptionCheckoutUpgradePaidLicenseDto** |             |       |

### Return type

**SubscriptionCheckoutResponse**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **0**       |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAddOnSummary**

> SubscriptionSummaryWithInvoice getAddOnSummary()

### Example

```typescript
import { SUBSCRIPTIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new SUBSCRIPTIONApi(configuration);

let addOnStudentQty: number; // (optional) (default to undefined)
let addOnBranchQty: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.getAddOnSummary(
  addOnStudentQty,
  addOnBranchQty
);
```

### Parameters

| Name                | Type         | Description | Notes                            |
| ------------------- | ------------ | ----------- | -------------------------------- |
| **addOnStudentQty** | [**number**] |             | (optional) defaults to undefined |
| **addOnBranchQty**  | [**number**] |             | (optional) defaults to undefined |

### Return type

**SubscriptionSummaryWithInvoice**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **0**       |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDowngradeSummary**

> SubscriptionSummaryWithInvoice getDowngradeSummary()

### Example

```typescript
import { SUBSCRIPTIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new SUBSCRIPTIONApi(configuration);

let licenseCode: "free" | "lite" | "professional" | "enterprise"; // (default to undefined)
let addOnStudentQty: number; // (optional) (default to undefined)
let addOnBranchQty: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.getDowngradeSummary(
  licenseCode,
  addOnStudentQty,
  addOnBranchQty
);
```

### Parameters

| Name                | Type                | Description    | Notes                            |
| ------------------- | ------------------- | -------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --- | --------------------- |
| **licenseCode**     | [\*\*&#39;free&#39; | &#39;lite&#39; | &#39;professional&#39;           | &#39;enterprise&#39;**]**Array<&#39;free&#39; &#124; &#39;lite&#39; &#124; &#39;professional&#39; &#124; &#39;enterprise&#39;>\*\* |     | defaults to undefined |
| **addOnStudentQty** | [**number**]        |                | (optional) defaults to undefined |
| **addOnBranchQty**  | [**number**]        |                | (optional) defaults to undefined |

### Return type

**SubscriptionSummaryWithInvoice**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **0**       |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRenewalSummary**

> SubscriptionSummaryWithInvoice getRenewalSummary()

### Example

```typescript
import { SUBSCRIPTIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new SUBSCRIPTIONApi(configuration);

const { status, data } = await apiInstance.getRenewalSummary();
```

### Parameters

This endpoint does not have any parameters.

### Return type

**SubscriptionSummaryWithInvoice**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **0**       |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUpgradeFreeLicenseSummary**

> SubscriptionSummaryWithInvoice getUpgradeFreeLicenseSummary()

### Example

```typescript
import { SUBSCRIPTIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new SUBSCRIPTIONApi(configuration);

let billingCycle: "monthly" | "yearly"; // (default to undefined)
let licenseCode: "free" | "lite" | "professional" | "enterprise"; // (default to undefined)
let addOnStudentQty: number; // (optional) (default to undefined)
let addOnBranchQty: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.getUpgradeFreeLicenseSummary(
  billingCycle,
  licenseCode,
  addOnStudentQty,
  addOnBranchQty
);
```

### Parameters

| Name                | Type                   | Description                                                               | Notes                            |
| ------------------- | ---------------------- | ------------------------------------------------------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --- | --------------------- |
| **billingCycle**    | [\*\*&#39;monthly&#39; | &#39;yearly&#39;**]**Array<&#39;monthly&#39; &#124; &#39;yearly&#39;>\*\* |                                  | defaults to undefined                                                                                                              |
| **licenseCode**     | [\*\*&#39;free&#39;    | &#39;lite&#39;                                                            | &#39;professional&#39;           | &#39;enterprise&#39;**]**Array<&#39;free&#39; &#124; &#39;lite&#39; &#124; &#39;professional&#39; &#124; &#39;enterprise&#39;>\*\* |     | defaults to undefined |
| **addOnStudentQty** | [**number**]           |                                                                           | (optional) defaults to undefined |
| **addOnBranchQty**  | [**number**]           |                                                                           | (optional) defaults to undefined |

### Return type

**SubscriptionSummaryWithInvoice**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **0**       |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUpgradePaidLicenseSummary**

> SubscriptionSummaryWithInvoice getUpgradePaidLicenseSummary()

### Example

```typescript
import { SUBSCRIPTIONApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new SUBSCRIPTIONApi(configuration);

let licenseCode: "free" | "lite" | "professional" | "enterprise"; // (default to undefined)
let addOnStudentQty: number; // (optional) (default to undefined)
let addOnBranchQty: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.getUpgradePaidLicenseSummary(
  licenseCode,
  addOnStudentQty,
  addOnBranchQty
);
```

### Parameters

| Name                | Type                | Description    | Notes                            |
| ------------------- | ------------------- | -------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --- | --------------------- |
| **licenseCode**     | [\*\*&#39;free&#39; | &#39;lite&#39; | &#39;professional&#39;           | &#39;enterprise&#39;**]**Array<&#39;free&#39; &#124; &#39;lite&#39; &#124; &#39;professional&#39; &#124; &#39;enterprise&#39;>\*\* |     | defaults to undefined |
| **addOnStudentQty** | [**number**]        |                | (optional) defaults to undefined |
| **addOnBranchQty**  | [**number**]        |                | (optional) defaults to undefined |

### Return type

**SubscriptionSummaryWithInvoice**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **0**       |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
