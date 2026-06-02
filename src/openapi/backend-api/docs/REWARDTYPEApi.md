# REWARDTYPEApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**autoComplete**](#autocomplete) | **POST** /rewardtype/autocomplete | |
|[**runCreate**](#runcreate) | **POST** /rewardtype | |
|[**runCreateMany**](#runcreatemany) | **POST** /rewardtype/bulk-create | |
|[**runDefault**](#rundefault) | **GET** /rewardtype | |
|[**runDelete**](#rundelete) | **DELETE** /rewardtype/{id} | |
|[**runFindOne**](#runfindone) | **GET** /rewardtype/{id} | |
|[**runPatch**](#runpatch) | **PATCH** /rewardtype/{id} | |
|[**runPatchMany**](#runpatchmany) | **PATCH** /rewardtype/bulk-patch | |
|[**runSearch**](#runsearch) | **POST** /rewardtype/search | |
|[**runUpdate**](#runupdate) | **PUT** /rewardtype/{id} | |

# **autoComplete**
> Array<RewardTypeAutoComplete> autoComplete(body)

retrieve array of {_id, code, name}

### Example

```typescript
import {
    REWARDTYPEApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new REWARDTYPEApi(configuration);

let keyword: string; // (default to undefined)
let body: object; //Data

const { status, data } = await apiInstance.autoComplete(
    keyword,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**| Data | |
| **keyword** | [**string**] |  | defaults to undefined|


### Return type

**Array<RewardTypeAutoComplete>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Found |  -  |
|**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runCreate**
> RewardType runCreate(rewardType)


### Example

```typescript
import {
    REWARDTYPEApi,
    Configuration,
    RewardType
} from './api';

const configuration = new Configuration();
const apiInstance = new REWARDTYPEApi(configuration);

let rewardType: RewardType; //Data

const { status, data } = await apiInstance.runCreate(
    rewardType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rewardType** | **RewardType**| Data | |


### Return type

**RewardType**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | success |  -  |
|**400** | bad request |  -  |
|**500** | internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runCreateMany**
> Array<RewardType> runCreateMany(rewardType)


### Example

```typescript
import {
    REWARDTYPEApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new REWARDTYPEApi(configuration);

let rewardType: Array<RewardType>; //Data

const { status, data } = await apiInstance.runCreateMany(
    rewardType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rewardType** | **Array<RewardType>**| Data | |


### Return type

**Array<RewardType>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | success |  -  |
|**400** | bad request |  -  |
|**500** | internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runDefault**
> object runDefault()

Run default behavior like say hello

### Example

```typescript
import {
    REWARDTYPEApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new REWARDTYPEApi(configuration);

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
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Sample 200 response |  -  |
|**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runDelete**
> RewardType runDelete()


### Example

```typescript
import {
    REWARDTYPEApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new REWARDTYPEApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RewardType**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  -  |
|**404** | Document not found |  -  |
|**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runFindOne**
> RewardType runFindOne()


### Example

```typescript
import {
    REWARDTYPEApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new REWARDTYPEApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runFindOne(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RewardType**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Founds |  -  |
|**404** | Document not found |  -  |
|**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runPatch**
> runPatch(rewardType)


### Example

```typescript
import {
    REWARDTYPEApi,
    Configuration,
    RewardType
} from './api';

const configuration = new Configuration();
const apiInstance = new REWARDTYPEApi(configuration);

let id: string; // (default to undefined)
let rewardType: RewardType; //Data

const { status, data } = await apiInstance.runPatch(
    id,
    rewardType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rewardType** | **RewardType**| Data | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  -  |
|**404** | Document not found |  -  |
|**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runPatchMany**
> UpdateManyResponse runPatchMany(patchManyRequest)


### Example

```typescript
import {
    REWARDTYPEApi,
    Configuration,
    PatchManyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new REWARDTYPEApi(configuration);

let patchManyRequest: PatchManyRequest; //Data

const { status, data } = await apiInstance.runPatchMany(
    patchManyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchManyRequest** | **PatchManyRequest**| Data | |


### Return type

**UpdateManyResponse**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  -  |
|**404** | Document not found |  -  |
|**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runSearch**
> Array<RewardType> runSearch(body)


### Example

```typescript
import {
    REWARDTYPEApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new REWARDTYPEApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runSearch(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**| Data | |


### Return type

**Array<RewardType>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  -  |
|**400** | bad request |  -  |
|**500** | internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runUpdate**
> runUpdate(rewardType)


### Example

```typescript
import {
    REWARDTYPEApi,
    Configuration,
    RewardType
} from './api';

const configuration = new Configuration();
const apiInstance = new REWARDTYPEApi(configuration);

let id: string; // (default to undefined)
let rewardType: RewardType; //Data

const { status, data } = await apiInstance.runUpdate(
    id,
    rewardType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rewardType** | **RewardType**| Data | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  -  |
|**404** | Document not found |  -  |
|**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

