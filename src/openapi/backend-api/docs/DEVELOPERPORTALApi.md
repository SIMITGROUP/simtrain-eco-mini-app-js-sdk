# DEVELOPERPORTALApi

All URIs are relative to _http://localhost_

| Method                                                        | HTTP request                                              | Description |
| ------------------------------------------------------------- | --------------------------------------------------------- | ----------- |
| [**runDeveloperInstalledXOrgs**](#rundeveloperinstalledxorgs) | **GET** /developer/installed-xorgs/{developerPortalAppId} |             |
| [**runDeveloperPublish**](#rundeveloperpublish)               | **POST** /developer/publish/{developerPortalAppId}        |             |
| [**runDeveloperPublishDev**](#rundeveloperpublishdev)         | **POST** /developer/publish-dev/{developerPortalAppId}    |             |

# **runDeveloperInstalledXOrgs**

> DeveloperPortalInstalledXOrgsResponse runDeveloperInstalledXOrgs()

### Example

```typescript
import { DEVELOPERPORTALApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new DEVELOPERPORTALApi(configuration);

let developerPortalAppId: string; // (default to undefined)

const { status, data } =
  await apiInstance.runDeveloperInstalledXOrgs(developerPortalAppId);
```

### Parameters

| Name                     | Type         | Description | Notes                 |
| ------------------------ | ------------ | ----------- | --------------------- |
| **developerPortalAppId** | [**string**] |             | defaults to undefined |

### Return type

**DeveloperPortalInstalledXOrgsResponse**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runDeveloperPublish**

> MiniApp runDeveloperPublish(miniApp)

### Example

```typescript
import { DEVELOPERPORTALApi, Configuration, MiniApp } from "./api";

const configuration = new Configuration();
const apiInstance = new DEVELOPERPORTALApi(configuration);

let developerPortalAppId: string; // (default to undefined)
let miniApp: MiniApp; //Request Body

const { status, data } = await apiInstance.runDeveloperPublish(
  developerPortalAppId,
  miniApp
);
```

### Parameters

| Name                     | Type         | Description  | Notes                 |
| ------------------------ | ------------ | ------------ | --------------------- |
| **miniApp**              | **MiniApp**  | Request Body |                       |
| **developerPortalAppId** | [**string**] |              | defaults to undefined |

### Return type

**MiniApp**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runDeveloperPublishDev**

> MiniApp runDeveloperPublishDev(miniApp)

### Example

```typescript
import { DEVELOPERPORTALApi, Configuration, MiniApp } from "./api";

const configuration = new Configuration();
const apiInstance = new DEVELOPERPORTALApi(configuration);

let developerPortalAppId: string; // (default to undefined)
let miniApp: MiniApp; //Request Body

const { status, data } = await apiInstance.runDeveloperPublishDev(
  developerPortalAppId,
  miniApp
);
```

### Parameters

| Name                     | Type         | Description  | Notes                 |
| ------------------------ | ------------ | ------------ | --------------------- |
| **miniApp**              | **MiniApp**  | Request Body |                       |
| **developerPortalAppId** | [**string**] |              | defaults to undefined |

### Return type

**MiniApp**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
