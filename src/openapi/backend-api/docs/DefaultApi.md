# DefaultApi

All URIs are relative to _http://localhost_

| Method                                              | HTTP request | Description |
| --------------------------------------------------- | ------------ | ----------- |
| [**appControllerGetHello**](#appcontrollergethello) | **GET** /    |             |

# **appControllerGetHello**

> appControllerGetHello()

### Example

```typescript
import { DefaultApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.appControllerGetHello();
```

### Parameters

This endpoint does not have any parameters.

### Return type

void (empty response body)

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
