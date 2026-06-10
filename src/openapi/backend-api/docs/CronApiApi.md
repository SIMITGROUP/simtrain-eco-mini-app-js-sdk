# CronApiApi

All URIs are relative to _http://localhost_

| Method                                                                                                    | HTTP request                                         | Description |
| --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ----------- |
| [**cronApiControllerDeleteApiLog**](#cronapicontrollerdeleteapilog)                                       | **GET** /cron-api/delete-api-log                     |             |
| [**cronApiControllerDeleteDocumentEvents**](#cronapicontrollerdeletedocumentevents)                       | **GET** /cron-api/delete-document-events             |             |
| [**cronApiControllerDeleteQueueJob**](#cronapicontrollerdeletequeuejob)                                   | **GET** /cron-api/delete-queue-job                   |             |
| [**cronApiControllerMonitorStuckQueueJobs**](#cronapicontrollermonitorstuckqueuejobs)                     | **GET** /cron-api/monitor-stuck-queue-jobs           |             |
| [**cronApiControllerPing**](#cronapicontrollerping)                                                       | **GET** /cron-api/ping                               |             |
| [**cronApiControllerSendBillingDocumentNotification**](#cronapicontrollersendbillingdocumentnotification) | **GET** /cron-api/send-billing-document-notification |             |
| [**cronApiControllerSendOutstandingPaymentReminders**](#cronapicontrollersendoutstandingpaymentreminders) | **GET** /cron-api/send-outstanding-payment-reminders |             |
| [**cronApiControllerSendScheduleReminder**](#cronapicontrollersendschedulereminder)                       | **GET** /cron-api/send-schedule-reminder             |             |
| [**cronApiControllerSendScheduledAnnouncements**](#cronapicontrollersendscheduledannouncements)           | **GET** /cron-api/send-scheduled-announcements       |             |
| [**cronApiControllerSendTenantExpiredNotice**](#cronapicontrollersendtenantexpirednotice)                 | **GET** /cron-api/send-tenant-expired-notice         |             |
| [**cronApiControllerTriggerScheduleBilling**](#cronapicontrollertriggerschedulebilling)                   | **GET** /cron-api/trigger-schedule-billing           |             |

# **cronApiControllerDeleteApiLog**

> cronApiControllerDeleteApiLog()

### Example

```typescript
import { CronApiApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new CronApiApi(configuration);

const { status, data } = await apiInstance.cronApiControllerDeleteApiLog();
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

# **cronApiControllerDeleteDocumentEvents**

> cronApiControllerDeleteDocumentEvents()

### Example

```typescript
import { CronApiApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new CronApiApi(configuration);

const { status, data } =
  await apiInstance.cronApiControllerDeleteDocumentEvents();
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

# **cronApiControllerDeleteQueueJob**

> cronApiControllerDeleteQueueJob()

### Example

```typescript
import { CronApiApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new CronApiApi(configuration);

const { status, data } = await apiInstance.cronApiControllerDeleteQueueJob();
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

# **cronApiControllerMonitorStuckQueueJobs**

> cronApiControllerMonitorStuckQueueJobs()

### Example

```typescript
import { CronApiApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new CronApiApi(configuration);

const { status, data } =
  await apiInstance.cronApiControllerMonitorStuckQueueJobs();
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

# **cronApiControllerPing**

> cronApiControllerPing()

### Example

```typescript
import { CronApiApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new CronApiApi(configuration);

const { status, data } = await apiInstance.cronApiControllerPing();
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

# **cronApiControllerSendBillingDocumentNotification**

> cronApiControllerSendBillingDocumentNotification()

### Example

```typescript
import { CronApiApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new CronApiApi(configuration);

const { status, data } =
  await apiInstance.cronApiControllerSendBillingDocumentNotification();
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

# **cronApiControllerSendOutstandingPaymentReminders**

> cronApiControllerSendOutstandingPaymentReminders()

### Example

```typescript
import { CronApiApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new CronApiApi(configuration);

let studentId: string; //When set, send the reminder only for this student. (optional) (default to undefined)

const { status, data } =
  await apiInstance.cronApiControllerSendOutstandingPaymentReminders(studentId);
```

### Parameters

| Name          | Type         | Description                                        | Notes                            |
| ------------- | ------------ | -------------------------------------------------- | -------------------------------- |
| **studentId** | [**string**] | When set, send the reminder only for this student. | (optional) defaults to undefined |

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

# **cronApiControllerSendScheduleReminder**

> cronApiControllerSendScheduleReminder()

### Example

```typescript
import { CronApiApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new CronApiApi(configuration);

const { status, data } =
  await apiInstance.cronApiControllerSendScheduleReminder();
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

# **cronApiControllerSendScheduledAnnouncements**

> cronApiControllerSendScheduledAnnouncements()

### Example

```typescript
import { CronApiApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new CronApiApi(configuration);

const { status, data } =
  await apiInstance.cronApiControllerSendScheduledAnnouncements();
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

# **cronApiControllerSendTenantExpiredNotice**

> cronApiControllerSendTenantExpiredNotice()

### Example

```typescript
import { CronApiApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new CronApiApi(configuration);

const { status, data } =
  await apiInstance.cronApiControllerSendTenantExpiredNotice();
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

# **cronApiControllerTriggerScheduleBilling**

> cronApiControllerTriggerScheduleBilling()

### Example

```typescript
import { CronApiApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new CronApiApi(configuration);

const { status, data } =
  await apiInstance.cronApiControllerTriggerScheduleBilling();
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
