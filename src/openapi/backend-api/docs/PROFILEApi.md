# PROFILEApi

All URIs are relative to _http://localhost_

| Method                                    | HTTP request                                 | Description |
| ----------------------------------------- | -------------------------------------------- | ----------- |
| [**createTenant**](#createtenant)         | **POST** /profile/tenant                     |             |
| [**decideInvitation**](#decideinvitation) | **POST** /profile/invitation/{id}/{decision} |             |
| [**getAllTenants**](#getalltenants)       | **GET** /profile/tenants                     |             |
| [**getProfile**](#getprofile)             | **GET** /profile                             |             |
| [**getSession**](#getsession)             | **GET** /profile/session                     |             |
| [**runTourComplete**](#runtourcomplete)   | **POST** /profile/tour-complete/{guidename}  |             |
| [**uploadPhoto**](#uploadphoto)           | **POST** /profile/photo                      |             |

# **createTenant**

> object createTenant(regTenant)

create new tenant

### Example

```typescript
import { PROFILEApi, Configuration, RegTenant } from "./api";

const configuration = new Configuration();
const apiInstance = new PROFILEApi(configuration);

let regTenant: RegTenant; //create tenant name

const { status, data } = await apiInstance.createTenant(regTenant);
```

### Parameters

| Name          | Type          | Description        | Notes |
| ------------- | ------------- | ------------------ | ----- |
| **regTenant** | **RegTenant** | create tenant name |       |

### Return type

**object**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **201**     | Success     | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **decideInvitation**

> object decideInvitation()

accept or reject invitation to tenant

### Example

```typescript
import { PROFILEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new PROFILEApi(configuration);

let id: string; // (default to undefined)
let decision: string; // (default to undefined)

const { status, data } = await apiInstance.decideInvitation(id, decision);
```

### Parameters

| Name         | Type         | Description | Notes                 |
| ------------ | ------------ | ----------- | --------------------- |
| **id**       | [**string**] |             | defaults to undefined |
| **decision** | [**string**] |             | defaults to undefined |

### Return type

**object**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **201**     | Success     | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllTenants**

> object getAllTenants()

Get all tenants

### Example

```typescript
import { PROFILEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new PROFILEApi(configuration);

const { status, data } = await apiInstance.getAllTenants();
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

| Status code | Description      | Response headers |
| ----------- | ---------------- | ---------------- |
| **200**     | Success          | -                |
| **401**     | Undefine profile | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProfile**

> UserContextInfo getProfile()

Get current user profile

### Example

```typescript
import { PROFILEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new PROFILEApi(configuration);

const { status, data } = await apiInstance.getProfile();
```

### Parameters

This endpoint does not have any parameters.

### Return type

**UserContextInfo**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description      | Response headers |
| ----------- | ---------------- | ---------------- |
| **200**     | Success          | -                |
| **401**     | Undefine profile | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSession**

> object getSession()

Get current user session

### Example

```typescript
import { PROFILEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new PROFILEApi(configuration);

const { status, data } = await apiInstance.getSession();
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
| ----------- | ----------- | ---------------- |
| **200**     | Success     | -                |
| **401**     | Expired     | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runTourComplete**

> object runTourComplete()

complete specific tour guide

### Example

```typescript
import { PROFILEApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new PROFILEApi(configuration);

let guidename: string; // (default to undefined)

const { status, data } = await apiInstance.runTourComplete(guidename);
```

### Parameters

| Name          | Type         | Description | Notes                 |
| ------------- | ------------ | ----------- | --------------------- |
| **guidename** | [**string**] |             | defaults to undefined |

### Return type

**object**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **201**     | Success     | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadPhoto**

> string uploadPhoto(keyValue)

Upload avatar image with base64

### Example

```typescript
import { PROFILEApi, Configuration, KeyValue } from "./api";

const configuration = new Configuration();
const apiInstance = new PROFILEApi(configuration);

let keyValue: KeyValue; //base64 photo

const { status, data } = await apiInstance.uploadPhoto(keyValue);
```

### Parameters

| Name         | Type         | Description  | Notes |
| ------------ | ------------ | ------------ | ----- |
| **keyValue** | **KeyValue** | base64 photo |       |

### Return type

**string**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **201**     | Success     | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
