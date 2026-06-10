# LOGApi

All URIs are relative to _http://localhost_

| Method                                          | HTTP request                       | Description |
| ----------------------------------------------- | ---------------------------------- | ----------- |
| [**searchDocumentEvent**](#searchdocumentevent) | **GET** /log/search/{docName}/{id} |             |

# **searchDocumentEvent**

> Array<DocumentEventListItem> searchDocumentEvent()

Search Document Event

### Example

```typescript
import { LOGApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new LOGApi(configuration);

let docName: string; // (default to undefined)
let id: string; // (default to undefined)

const { status, data } = await apiInstance.searchDocumentEvent(docName, id);
```

### Parameters

| Name        | Type         | Description | Notes                 |
| ----------- | ------------ | ----------- | --------------------- |
| **docName** | [**string**] |             | defaults to undefined |
| **id**      | [**string**] |             | defaults to undefined |

### Return type

**Array<DocumentEventListItem>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     | Success     | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
