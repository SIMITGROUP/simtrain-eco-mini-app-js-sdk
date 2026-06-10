# SetupApi

All URIs are relative to _http://localhost_

| Method                          | HTTP request           | Description |
| ------------------------------- | ---------------------- | ----------- |
| [**setupCommit**](#setupcommit) | **POST** /setup/commit |             |

# **setupCommit**

> SetupCommitResult setupCommit(setup)

Run initial setup wizard

### Example

```typescript
import { SetupApi, Configuration, Setup } from "./api";

const configuration = new Configuration();
const apiInstance = new SetupApi(configuration);

let setup: Setup; //

const { status, data } = await apiInstance.setupCommit(setup);
```

### Parameters

| Name      | Type      | Description | Notes |
| --------- | --------- | ----------- | ----- |
| **setup** | **Setup** |             |       |

### Return type

**SetupCommitResult**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **201**     |             | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
