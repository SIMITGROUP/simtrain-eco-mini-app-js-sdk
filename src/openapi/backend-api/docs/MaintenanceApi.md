# MaintenanceApi

All URIs are relative to _http://localhost_

| Method                                                                                    | HTTP request                           | Description |
| ----------------------------------------------------------------------------------------- | -------------------------------------- | ----------- |
| [**maintenanceControllerGetUpdate**](#maintenancecontrollergetupdate)                     | **GET** /maintenance/get-updates       |             |
| [**maintenanceControllerRunGetServiceStatus**](#maintenancecontrollerrungetservicestatus) | **GET** /maintenance/service-status    |             |
| [**maintenanceControllerRunStartService**](#maintenancecontrollerrunstartservice)         | **POST** /maintenance/start-service    |             |
| [**maintenanceControllerRunStopService**](#maintenancecontrollerrunstopservice)           | **POST** /maintenance/stop-service     |             |
| [**maintenanceControllerRunUpdate**](#maintenancecontrollerrunupdate)                     | **POST** /maintenance/run-updates/{id} |             |

# **maintenanceControllerGetUpdate**

> Array<UpgradeScript> maintenanceControllerGetUpdate()

### Example

```typescript
import { MaintenanceApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new MaintenanceApi(configuration);

const { status, data } = await apiInstance.maintenanceControllerGetUpdate();
```

### Parameters

This endpoint does not have any parameters.

### Return type

**Array<UpgradeScript>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description         | Response headers |
| ----------- | ------------------- | ---------------- |
| **200**     | Sample 200 response | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **maintenanceControllerRunGetServiceStatus**

> boolean maintenanceControllerRunGetServiceStatus()

### Example

```typescript
import { MaintenanceApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new MaintenanceApi(configuration);

const { status, data } =
  await apiInstance.maintenanceControllerRunGetServiceStatus();
```

### Parameters

This endpoint does not have any parameters.

### Return type

**boolean**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description         | Response headers |
| ----------- | ------------------- | ---------------- |
| **200**     | Sample 200 response | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **maintenanceControllerRunStartService**

> string maintenanceControllerRunStartService()

### Example

```typescript
import { MaintenanceApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new MaintenanceApi(configuration);

const { status, data } =
  await apiInstance.maintenanceControllerRunStartService();
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

| Status code | Description         | Response headers |
| ----------- | ------------------- | ---------------- |
| **200**     | Sample 200 response | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **maintenanceControllerRunStopService**

> string maintenanceControllerRunStopService()

### Example

```typescript
import { MaintenanceApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new MaintenanceApi(configuration);

const { status, data } =
  await apiInstance.maintenanceControllerRunStopService();
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

| Status code | Description         | Response headers |
| ----------- | ------------------- | ---------------- |
| **200**     | Sample 200 response | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **maintenanceControllerRunUpdate**

> Array<string> maintenanceControllerRunUpdate()

### Example

```typescript
import { MaintenanceApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new MaintenanceApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.maintenanceControllerRunUpdate(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**Array<string>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description         | Response headers |
| ----------- | ------------------- | ---------------- |
| **200**     | Sample 200 response | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
