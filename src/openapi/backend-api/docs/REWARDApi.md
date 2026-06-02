# REWARDApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**autoComplete**](#autocomplete) | **POST** /reward/autocomplete | |
|[**rewardControllerSetStatusConfirm**](#rewardcontrollersetstatusconfirm) | **POST** /reward/{id}/set-confirm | |
|[**rewardControllerSetStatusDraft**](#rewardcontrollersetstatusdraft) | **POST** /reward/{id}/set-draft | |
|[**rewardControllerSetStatusVoid**](#rewardcontrollersetstatusvoid) | **POST** /reward/{id}/set-void | |
|[**runCreate**](#runcreate) | **POST** /reward | |
|[**runCreateMany**](#runcreatemany) | **POST** /reward/bulk-create | |
|[**runDefault**](#rundefault) | **GET** /reward | |
|[**runDelete**](#rundelete) | **DELETE** /reward/{id} | |
|[**runFindOne**](#runfindone) | **GET** /reward/{id} | |
|[**runPatch**](#runpatch) | **PATCH** /reward/{id} | |
|[**runPatchMany**](#runpatchmany) | **PATCH** /reward/bulk-patch | |
|[**runPrint**](#runprint) | **GET** /reward-api/{id}/print/{formatId} | |
|[**runSearch**](#runsearch) | **POST** /reward/search | |
|[**runUpdate**](#runupdate) | **PUT** /reward/{id} | |

# **autoComplete**
> Array<RewardAutoComplete> autoComplete(body)

retrieve array of {_id, code, name}

### Example

```typescript
import {
    REWARDApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new REWARDApi(configuration);

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

**Array<RewardAutoComplete>**

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

# **rewardControllerSetStatusConfirm**
> rewardControllerSetStatusConfirm(body)


### Example

```typescript
import {
    REWARDApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new REWARDApi(configuration);

let id: string; // (default to undefined)
let body: object; //Document data

const { status, data } = await apiInstance.rewardControllerSetStatusConfirm(
    id,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**| Document data | |
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
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rewardControllerSetStatusDraft**
> rewardControllerSetStatusDraft(body)


### Example

```typescript
import {
    REWARDApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new REWARDApi(configuration);

let id: string; // (default to undefined)
let body: object; //Document data

const { status, data } = await apiInstance.rewardControllerSetStatusDraft(
    id,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**| Document data | |
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
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rewardControllerSetStatusVoid**
> rewardControllerSetStatusVoid(body)


### Example

```typescript
import {
    REWARDApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new REWARDApi(configuration);

let id: string; // (default to undefined)
let body: object; //Document data

const { status, data } = await apiInstance.rewardControllerSetStatusVoid(
    id,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**| Document data | |
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
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runCreate**
> Reward runCreate(reward)


### Example

```typescript
import {
    REWARDApi,
    Configuration,
    Reward
} from './api';

const configuration = new Configuration();
const apiInstance = new REWARDApi(configuration);

let reward: Reward; //Data

const { status, data } = await apiInstance.runCreate(
    reward
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reward** | **Reward**| Data | |


### Return type

**Reward**

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
> Array<Reward> runCreateMany(reward)


### Example

```typescript
import {
    REWARDApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new REWARDApi(configuration);

let reward: Array<Reward>; //Data

const { status, data } = await apiInstance.runCreateMany(
    reward
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reward** | **Array<Reward>**| Data | |


### Return type

**Array<Reward>**

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
    REWARDApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new REWARDApi(configuration);

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
> Reward runDelete()


### Example

```typescript
import {
    REWARDApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new REWARDApi(configuration);

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

**Reward**

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
> Reward runFindOne()


### Example

```typescript
import {
    REWARDApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new REWARDApi(configuration);

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

**Reward**

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
> runPatch(reward)


### Example

```typescript
import {
    REWARDApi,
    Configuration,
    Reward
} from './api';

const configuration = new Configuration();
const apiInstance = new REWARDApi(configuration);

let id: string; // (default to undefined)
let reward: Reward; //Data

const { status, data } = await apiInstance.runPatch(
    id,
    reward
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reward** | **Reward**| Data | |
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
    REWARDApi,
    Configuration,
    PatchManyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new REWARDApi(configuration);

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

# **runPrint**
> string runPrint()


### Example

```typescript
import {
    REWARDApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new REWARDApi(configuration);

let id: string; // (default to undefined)
let formatId: string; // (default to undefined)

const { status, data } = await apiInstance.runPrint(
    id,
    formatId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **formatId** | [**string**] |  | defaults to undefined|


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
|**200** | obtain base64 pdf |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runSearch**
> Array<Reward> runSearch(body)


### Example

```typescript
import {
    REWARDApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new REWARDApi(configuration);

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

**Array<Reward>**

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
> runUpdate(reward)


### Example

```typescript
import {
    REWARDApi,
    Configuration,
    Reward
} from './api';

const configuration = new Configuration();
const apiInstance = new REWARDApi(configuration);

let id: string; // (default to undefined)
let reward: Reward; //Data

const { status, data } = await apiInstance.runUpdate(
    id,
    reward
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reward** | **Reward**| Data | |
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

