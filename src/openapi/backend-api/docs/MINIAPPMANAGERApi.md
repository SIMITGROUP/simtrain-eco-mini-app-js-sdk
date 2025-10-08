# MINIAPPMANAGERApi

All URIs are relative to _http://localhost_

| Method                                                                    | HTTP request                                                     | Description |
| ------------------------------------------------------------------------- | ---------------------------------------------------------------- | ----------- |
| [**runGetCategorizedMiniApps**](#rungetcategorizedminiapps)               | **GET** /mini-app-manager/categorized-mini-apps                  |             |
| [**runGetInstalledMiniApps**](#rungetinstalledminiapps)                   | **GET** /mini-app-manager/installed-mini-apps                    |             |
| [**runGetMiniAppDetail**](#rungetminiappdetail)                           | **GET** /mini-app-manager/mini-apps/{miniAppCode}                |             |
| [**runInstallMiniApp**](#runinstallminiapp)                               | **PUT** /mini-app-manager/mini-apps/{miniAppCode}/install        |             |
| [**runSystemDefaultMiniAppMigration**](#runsystemdefaultminiappmigration) | **POST** /mini-app-manager/system-default-mini-apps-migration    |             |
| [**runUninstallMiniApp**](#rununinstallminiapp)                           | **PUT** /mini-app-manager/mini-apps/{miniAppCode}/uninstall      |             |
| [**runUpdateMiniAppSetting**](#runupdateminiappsetting)                   | **PUT** /mini-app-manager/mini-apps/{miniAppCode}/update-setting |             |

# **runGetCategorizedMiniApps**

> CategorizedMiniAppDetail runGetCategorizedMiniApps()

### Example

```typescript
import { MINIAPPMANAGERApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new MINIAPPMANAGERApi(configuration);

const { status, data } = await apiInstance.runGetCategorizedMiniApps();
```

### Parameters

This endpoint does not have any parameters.

### Return type

**CategorizedMiniAppDetail**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description              | Response headers |
| ----------- | ------------------------ | ---------------- |
| **200**     | Get categorized miniApps | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetInstalledMiniApps**

> InstalledMiniAppDetail runGetInstalledMiniApps()

### Example

```typescript
import { MINIAPPMANAGERApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new MINIAPPMANAGERApi(configuration);

const { status, data } = await apiInstance.runGetInstalledMiniApps();
```

### Parameters

This endpoint does not have any parameters.

### Return type

**InstalledMiniAppDetail**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description            | Response headers |
| ----------- | ---------------------- | ---------------- |
| **200**     | Get installed miniApps | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetMiniAppDetail**

> MiniAppDetail runGetMiniAppDetail()

### Example

```typescript
import { MINIAPPMANAGERApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new MINIAPPMANAGERApi(configuration);

let miniAppCode: string; // (default to undefined)

const { status, data } = await apiInstance.runGetMiniAppDetail(miniAppCode);
```

### Parameters

| Name            | Type         | Description | Notes                 |
| --------------- | ------------ | ----------- | --------------------- |
| **miniAppCode** | [**string**] |             | defaults to undefined |

### Return type

**MiniAppDetail**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description        | Response headers |
| ----------- | ------------------ | ---------------- |
| **200**     | Get miniApp detail | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runInstallMiniApp**

> MiniAppInstallation runInstallMiniApp()

### Example

```typescript
import { MINIAPPMANAGERApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new MINIAPPMANAGERApi(configuration);

let miniAppCode: string; // (default to undefined)

const { status, data } = await apiInstance.runInstallMiniApp(miniAppCode);
```

### Parameters

| Name            | Type         | Description | Notes                 |
| --------------- | ------------ | ----------- | --------------------- |
| **miniAppCode** | [**string**] |             | defaults to undefined |

### Return type

**MiniAppInstallation**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **200**     | Install a miniApp | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runSystemDefaultMiniAppMigration**

> Array<MiniApp> runSystemDefaultMiniAppMigration()

### Example

```typescript
import { MINIAPPMANAGERApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new MINIAPPMANAGERApi(configuration);

const { status, data } = await apiInstance.runSystemDefaultMiniAppMigration();
```

### Parameters

This endpoint does not have any parameters.

### Return type

**Array<MiniApp>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                     | Response headers |
| ----------- | ------------------------------- | ---------------- |
| **200**     | Migrate system default miniApp. | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runUninstallMiniApp**

> MiniAppInstallation runUninstallMiniApp()

### Example

```typescript
import { MINIAPPMANAGERApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new MINIAPPMANAGERApi(configuration);

let miniAppCode: string; // (default to undefined)

const { status, data } = await apiInstance.runUninstallMiniApp(miniAppCode);
```

### Parameters

| Name            | Type         | Description | Notes                 |
| --------------- | ------------ | ----------- | --------------------- |
| **miniAppCode** | [**string**] |             | defaults to undefined |

### Return type

**MiniAppInstallation**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description         | Response headers |
| ----------- | ------------------- | ---------------- |
| **200**     | Uninstall a miniApp | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runUpdateMiniAppSetting**

> MiniAppInstallation runUpdateMiniAppSetting(body)

### Example

```typescript
import { MINIAPPMANAGERApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new MINIAPPMANAGERApi(configuration);

let miniAppCode: string; // (default to undefined)
let body: object; //Request Body

const { status, data } = await apiInstance.runUpdateMiniAppSetting(
  miniAppCode,
  body
);
```

### Parameters

| Name            | Type         | Description  | Notes                 |
| --------------- | ------------ | ------------ | --------------------- |
| **body**        | **object**   | Request Body |                       |
| **miniAppCode** | [**string**] |              | defaults to undefined |

### Return type

**MiniAppInstallation**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description            | Response headers |
| ----------- | ---------------------- | ---------------- |
| **200**     | Update miniApp setting | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
