# PHOTOApi

All URIs are relative to _http://localhost_

| Method                                                          | HTTP request                       | Description |
| --------------------------------------------------------------- | ---------------------------------- | ----------- |
| [**runMigrateKeyValuePairToCDN**](#runmigratekeyvaluepairtocdn) | **POST** /photo/migrate-kvp-to-cdn |             |

# **runMigrateKeyValuePairToCDN**

> string runMigrateKeyValuePairToCDN(body)

### Example

```typescript
import { PHOTOApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new PHOTOApi(configuration);

let body: object; //Request Body

const { status, data } = await apiInstance.runMigrateKeyValuePairToCDN(body);
```

### Parameters

| Name     | Type       | Description  | Notes |
| -------- | ---------- | ------------ | ----- |
| **body** | **object** | Request Body |       |

### Return type

**string**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description               | Response headers |
| ----------- | ------------------------- | ---------------- |
| **200**     | Get schedules for 1 month | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
