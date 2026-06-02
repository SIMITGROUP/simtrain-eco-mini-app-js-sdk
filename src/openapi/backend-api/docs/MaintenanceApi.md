# MaintenanceApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getUpdates**](#getupdates) | **GET** /maintenance/get-updates | |
|[**runGetEnvironment**](#rungetenvironment) | **GET** /maintenance/service-status | |
|[**runStartService**](#runstartservice) | **POST** /maintenance/start-service | |
|[**runStopService**](#runstopservice) | **POST** /maintenance/stop-service | |
|[**runUpdate**](#runupdate) | **POST** /maintenance/run-updates/{id} | |
|[**runUpdateEnvironment**](#runupdateenvironment) | **PUT** /maintenance/service-status | |

# **getUpdates**
> Array<UpgradeScript> getUpdates()

get all available update scripts

### Example

```typescript
import {
    MaintenanceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MaintenanceApi(configuration);

const { status, data } = await apiInstance.getUpdates();
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
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Sample 200 response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetEnvironment**
> Environment runGetEnvironment()

get system status

### Example

```typescript
import {
    MaintenanceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MaintenanceApi(configuration);

const { status, data } = await apiInstance.runGetEnvironment();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Environment**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Sample 200 response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runStartService**
> string runStartService()

start backend, system back to usual

### Example

```typescript
import {
    MaintenanceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MaintenanceApi(configuration);

const { status, data } = await apiInstance.runStartService();
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
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Sample 200 response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runStopService**
> string runStopService()

suspend backend, only superadmin can access

### Example

```typescript
import {
    MaintenanceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MaintenanceApi(configuration);

const { status, data } = await apiInstance.runStopService();
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
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Sample 200 response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runUpdate**
> Array<string> runUpdate()

run specific update script

### Example

```typescript
import {
    MaintenanceApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MaintenanceApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runUpdate(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Array<string>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Sample 200 response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runUpdateEnvironment**
> Environment runUpdateEnvironment(environment)

Update system status

### Example

```typescript
import {
    MaintenanceApi,
    Configuration,
    Environment
} from './api';

const configuration = new Configuration();
const apiInstance = new MaintenanceApi(configuration);

let environment: Environment; //Data

const { status, data } = await apiInstance.runUpdateEnvironment(
    environment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **environment** | **Environment**| Data | |


### Return type

**Environment**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Sample 200 response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

