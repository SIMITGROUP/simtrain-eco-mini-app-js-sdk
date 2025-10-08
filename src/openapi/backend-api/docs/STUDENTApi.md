# STUDENTApi

All URIs are relative to _http://localhost_

| Method                                                                        | HTTP request                                              | Description |
| ----------------------------------------------------------------------------- | --------------------------------------------------------- | ----------- |
| [**autoComplete**](#autocomplete)                                             | **POST** /student/autocomplete                            |             |
| [**runChangePackage**](#runchangepackage)                                     | **POST** /student-api/change-package                      |             |
| [**runChangePackageEnrollToIndividual**](#runchangepackageenrolltoindividual) | **POST** /student-api/change-package-enroll-to-individual |             |
| [**runCheckForAvailablePackage**](#runcheckforavailablepackage)               | **GET** /student-api/{id}/check-available-package         |             |
| [**runCreate**](#runcreate)                                                   | **POST** /student                                         |             |
| [**runCreateEnrollments**](#runcreateenrollments)                             | **POST** /student-api/{id}/enrollments                    |             |
| [**runDefault**](#rundefault)                                                 | **GET** /student                                          |             |
| [**runDelete**](#rundelete)                                                   | **DELETE** /student/{id}                                  |             |
| [**runFindOne**](#runfindone)                                                 | **GET** /student/{id}                                     |             |
| [**runFullTextSearch**](#runfulltextsearch)                                   | **POST** /student/fulltextsearch                          |             |
| [**runGetActiveEnrollments**](#rungetactiveenrollments)                       | **GET** /student-api/{id}/active-enrollments              |             |
| [**runGetActiveStudentQty**](#rungetactivestudentqty)                         | **GET** /student-api/active-students                      |             |
| [**runGetEnrollmentHistories**](#rungetenrollmenthistories)                   | **GET** /student-api/{id}/enrollment-histories            |             |
| [**runGetEnrollments**](#rungetenrollments)                                   | **GET** /student-api/{id}/enrollments                     |             |
| [**runGetOutstandingInvoice**](#rungetoutstandinginvoice)                     | **GET** /student-api/{id}/outstanding                     |             |
| [**runGetPhoto**](#rungetphoto)                                               | **GET** /student-api/{id}/photo                           |             |
| [**runGetStudentSummary**](#rungetstudentsummary)                             | **GET** /student-api/{id}/summary                         |             |
| [**runGetTransactions**](#rungettransactions)                                 | **GET** /student-api/{id}/billing-history                 |             |
| [**runImportStudents**](#runimportstudents)                                   | **POST** /student-api/imports                             |             |
| [**runIndividualToPackage**](#runindividualtopackage)                         | **POST** /student-api/individual-to-package               |             |
| [**runModifyPackage**](#runmodifypackage)                                     | **POST** /student-api/modify-package                      |             |
| [**runPatch**](#runpatch)                                                     | **PATCH** /student/{id}                                   |             |
| [**runPatchMany**](#runpatchmany)                                             | **PATCH** /student/bulk-patch                             |             |
| [**runSearch**](#runsearch)                                                   | **POST** /student/search                                  |             |
| [**runSearchStudentListWithSummary**](#runsearchstudentlistwithsummary)       | **POST** /student-api/studentlist                         |             |
| [**runStopPackageEnroll**](#runstoppackageenroll)                             | **POST** /student-api/stop-package-enroll                 |             |
| [**runUpdate**](#runupdate)                                                   | **PUT** /student/{id}                                     |             |
| [**runUpgradeStudentLevel**](#runupgradestudentlevel)                         | **POST** /student-api/upgrade-student-level               |             |
| [**runUploadPhoto**](#runuploadphoto)                                         | **POST** /student-api/{id}/photo                          |             |

# **autoComplete**

> Array<StudentAutoComplete> autoComplete(body)

retrieve array of {\_id, code, name}

### Example

```typescript
import { STUDENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTApi(configuration);

let keyword: string; // (default to undefined)
let body: object; //Data

const { status, data } = await apiInstance.autoComplete(keyword, body);
```

### Parameters

| Name        | Type         | Description | Notes                 |
| ----------- | ------------ | ----------- | --------------------- |
| **body**    | **object**   | Data        |                       |
| **keyword** | [**string**] |             | defaults to undefined |

### Return type

**Array<StudentAutoComplete>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description    | Response headers |
| ----------- | -------------- | ---------------- |
| **200**     | Found          | -                |
| **500**     | Internal error | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runChangePackage**

> string runChangePackage(packageChanged)

### Example

```typescript
import { STUDENTApi, Configuration, PackageChanged } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTApi(configuration);

let packageChanged: PackageChanged; //Request Body

const { status, data } = await apiInstance.runChangePackage(packageChanged);
```

### Parameters

| Name               | Type               | Description  | Notes |
| ------------------ | ------------------ | ------------ | ----- |
| **packageChanged** | **PackageChanged** | Request Body |       |

### Return type

**string**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                        | Response headers |
| ----------- | ---------------------------------- | ---------------- |
| **200**     | Modify student package enrollment. | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runChangePackageEnrollToIndividual**

> string runChangePackageEnrollToIndividual(packageEnrollToIndividual)

### Example

```typescript
import { STUDENTApi, Configuration, PackageEnrollToIndividual } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTApi(configuration);

let packageEnrollToIndividual: PackageEnrollToIndividual; //Request Body

const { status, data } = await apiInstance.runChangePackageEnrollToIndividual(
  packageEnrollToIndividual
);
```

### Parameters

| Name                          | Type                          | Description  | Notes |
| ----------------------------- | ----------------------------- | ------------ | ----- |
| **packageEnrollToIndividual** | **PackageEnrollToIndividual** | Request Body |       |

### Return type

**string**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                                         | Response headers |
| ----------- | --------------------------------------------------- | ---------------- |
| **200**     | Change package enrollment to individual enrollment. | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runCheckForAvailablePackage**

> Array<AvailablePackageResponse> runCheckForAvailablePackage()

### Example

```typescript
import { STUDENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runCheckForAvailablePackage(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**Array<AvailablePackageResponse>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                                 | Response headers |
| ----------- | ----------------------------------------------------------- | ---------------- |
| **200**     | Check for available package for student current enrollment. | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runCreate**

> Student runCreate(student)

### Example

```typescript
import { STUDENTApi, Configuration, Student } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTApi(configuration);

let student: Student; //Data

const { status, data } = await apiInstance.runCreate(student);
```

### Parameters

| Name        | Type        | Description | Notes |
| ----------- | ----------- | ----------- | ----- |
| **student** | **Student** | Data        |       |

### Return type

**Student**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description    | Response headers |
| ----------- | -------------- | ---------------- |
| **201**     | success        | -                |
| **400**     | bad request    | -                |
| **500**     | internal error | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runCreateEnrollments**

> QueueJobProducerResponse runCreateEnrollments(newProductEnrollment)

### Example

```typescript
import { STUDENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTApi(configuration);

let id: string; // (default to undefined)
let newProductEnrollment: Array<NewProductEnrollment>; //Request Body

const { status, data } = await apiInstance.runCreateEnrollments(
  id,
  newProductEnrollment
);
```

### Parameters

| Name                     | Type                            | Description  | Notes                 |
| ------------------------ | ------------------------------- | ------------ | --------------------- |
| **newProductEnrollment** | **Array<NewProductEnrollment>** | Request Body |                       |
| **id**                   | [**string**]                    |              | defaults to undefined |

### Return type

**QueueJobProducerResponse**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description              | Response headers |
| ----------- | ------------------------ | ---------------- |
| **200**     | Add Multiple enrollments | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runDefault**

> object runDefault()

Run default behavior like say hello

### Example

```typescript
import { STUDENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTApi(configuration);

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

| Status code | Description         | Response headers |
| ----------- | ------------------- | ---------------- |
| **200**     | Sample 200 response | -                |
| **500**     | Internal error      | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runDelete**

> Student runDelete()

### Example

```typescript
import { STUDENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runDelete(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**Student**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description        | Response headers |
| ----------- | ------------------ | ---------------- |
| **200**     | success            | -                |
| **404**     | Document not found | -                |
| **500**     | Internal error     | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runFindOne**

> Student runFindOne()

### Example

```typescript
import { STUDENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runFindOne(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**Student**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description        | Response headers |
| ----------- | ------------------ | ---------------- |
| **200**     | Founds             | -                |
| **404**     | Document not found | -                |
| **500**     | Internal error     | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runFullTextSearch**

> Array<Student> runFullTextSearch(body)

### Example

```typescript
import { STUDENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runFullTextSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<Student>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description    | Response headers |
| ----------- | -------------- | ---------------- |
| **200**     | success        | -                |
| **400**     | bad request    | -                |
| **500**     | internal error | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetActiveEnrollments**

> Array<EnrollmentItem> runGetActiveEnrollments()

### Example

```typescript
import { STUDENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runGetActiveEnrollments(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**Array<EnrollmentItem>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                       | Response headers |
| ----------- | --------------------------------- | ---------------- |
| **200**     | Get all active registered classes | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetActiveStudentQty**

> number runGetActiveStudentQty()

### Example

```typescript
import { STUDENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTApi(configuration);

const { status, data } = await apiInstance.runGetActiveStudentQty();
```

### Parameters

This endpoint does not have any parameters.

### Return type

**number**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                             | Response headers |
| ----------- | --------------------------------------- | ---------------- |
| **200**     | obtain active student qty base on month | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetEnrollmentHistories**

> Array<EnrollmentItem> runGetEnrollmentHistories()

### Example

```typescript
import { STUDENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runGetEnrollmentHistories(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**Array<EnrollmentItem>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                | Response headers |
| ----------- | -------------------------- | ---------------- |
| **200**     | Get all registered classes | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetEnrollments**

> Array<EnrollmentItem> runGetEnrollments()

### Example

```typescript
import { STUDENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runGetEnrollments(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**Array<EnrollmentItem>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                | Response headers |
| ----------- | -------------------------- | ---------------- |
| **200**     | Get all registered classes | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetOutstandingInvoice**

> Array<OutstandingInvoice> runGetOutstandingInvoice()

### Example

```typescript
import { STUDENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runGetOutstandingInvoice(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**Array<OutstandingInvoice>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description             | Response headers |
| ----------- | ----------------------- | ---------------- |
| **200**     | Get outstanding invoice | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetPhoto**

> File runGetPhoto()

### Example

```typescript
import { STUDENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runGetPhoto(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**File**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/png

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **200**     | Get Student photo | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetStudentSummary**

> StudentWithSummary runGetStudentSummary()

### Example

```typescript
import { STUDENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runGetStudentSummary(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**StudentWithSummary**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                       | Response headers |
| ----------- | --------------------------------- | ---------------- |
| **200**     | Get student profile and summaries | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runGetTransactions**

> Array<BillingHistoryItem> runGetTransactions()

### Example

```typescript
import { STUDENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.runGetTransactions(id);
```

### Parameters

| Name   | Type         | Description | Notes                 |
| ------ | ------------ | ----------- | --------------------- |
| **id** | [**string**] |             | defaults to undefined |

### Return type

**Array<BillingHistoryItem>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description         | Response headers |
| ----------- | ------------------- | ---------------- |
| **200**     | Get billing history | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runImportStudents**

> Array<ImportErrorMessage> runImportStudents(importStudent)

### Example

```typescript
import { STUDENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTApi(configuration);

let importStudent: Array<ImportStudent>; //Request Body

const { status, data } = await apiInstance.runImportStudents(importStudent);
```

### Parameters

| Name              | Type                     | Description  | Notes |
| ----------------- | ------------------------ | ------------ | ----- |
| **importStudent** | **Array<ImportStudent>** | Request Body |       |

### Return type

**Array<ImportErrorMessage>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                  | Response headers |
| ----------- | ---------------------------- | ---------------- |
| **200**     | Bulk insert student profile. | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runIndividualToPackage**

> string runIndividualToPackage(individualtoPackage)

### Example

```typescript
import { STUDENTApi, Configuration, IndividualtoPackage } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTApi(configuration);

let individualtoPackage: IndividualtoPackage; //Request Body

const { status, data } =
  await apiInstance.runIndividualToPackage(individualtoPackage);
```

### Parameters

| Name                    | Type                    | Description  | Notes |
| ----------------------- | ----------------------- | ------------ | ----- |
| **individualtoPackage** | **IndividualtoPackage** | Request Body |       |

### Return type

**string**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                                          | Response headers |
| ----------- | ---------------------------------------------------- | ---------------- |
| **200**     | Convert individual enrollment to package enrollment. | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runModifyPackage**

> string runModifyPackage(packageModified)

### Example

```typescript
import { STUDENTApi, Configuration, PackageModified } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTApi(configuration);

let packageModified: PackageModified; //Request Body

const { status, data } = await apiInstance.runModifyPackage(packageModified);
```

### Parameters

| Name                | Type                | Description  | Notes |
| ------------------- | ------------------- | ------------ | ----- |
| **packageModified** | **PackageModified** | Request Body |       |

### Return type

**string**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                        | Response headers |
| ----------- | ---------------------------------- | ---------------- |
| **200**     | Modify student package enrollment. | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runPatch**

> runPatch(student)

### Example

```typescript
import { STUDENTApi, Configuration, Student } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTApi(configuration);

let id: string; // (default to undefined)
let student: Student; //Data

const { status, data } = await apiInstance.runPatch(id, student);
```

### Parameters

| Name        | Type         | Description | Notes                 |
| ----------- | ------------ | ----------- | --------------------- |
| **student** | **Student**  | Data        |                       |
| **id**      | [**string**] |             | defaults to undefined |

### Return type

void (empty response body)

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

### HTTP response details

| Status code | Description        | Response headers |
| ----------- | ------------------ | ---------------- |
| **200**     | success            | -                |
| **404**     | Document not found | -                |
| **500**     | Internal error     | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runPatchMany**

> UpdateManyResponse runPatchMany(patchManyRequest)

### Example

```typescript
import { STUDENTApi, Configuration, PatchManyRequest } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTApi(configuration);

let patchManyRequest: PatchManyRequest; //Data

const { status, data } = await apiInstance.runPatchMany(patchManyRequest);
```

### Parameters

| Name                 | Type                 | Description | Notes |
| -------------------- | -------------------- | ----------- | ----- |
| **patchManyRequest** | **PatchManyRequest** | Data        |       |

### Return type

**UpdateManyResponse**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description        | Response headers |
| ----------- | ------------------ | ---------------- |
| **200**     | success            | -                |
| **404**     | Document not found | -                |
| **500**     | Internal error     | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runSearch**

> Array<Student> runSearch(body)

### Example

```typescript
import { STUDENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTApi(configuration);

let body: object; //Data

const { status, data } = await apiInstance.runSearch(body);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **object** | Data        |       |

### Return type

**Array<Student>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description    | Response headers |
| ----------- | -------------- | ---------------- |
| **200**     | success        | -                |
| **400**     | bad request    | -                |
| **500**     | internal error | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runSearchStudentListWithSummary**

> Array<StudentListItemWithSummary> runSearchStudentListWithSummary(body)

### Example

```typescript
import { STUDENTApi, Configuration } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTApi(configuration);

let body: object; //Request Body

const { status, data } =
  await apiInstance.runSearchStudentListWithSummary(body);
```

### Parameters

| Name     | Type       | Description  | Notes |
| -------- | ---------- | ------------ | ----- |
| **body** | **object** | Request Body |       |

### Return type

**Array<StudentListItemWithSummary>**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                 | Response headers |
| ----------- | --------------------------- | ---------------- |
| **200**     | Get list of student summary | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runStopPackageEnroll**

> string runStopPackageEnroll(packageEnrollToIndividual)

### Example

```typescript
import { STUDENTApi, Configuration, PackageEnrollToIndividual } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTApi(configuration);

let packageEnrollToIndividual: PackageEnrollToIndividual; //Request Body

const { status, data } = await apiInstance.runStopPackageEnroll(
  packageEnrollToIndividual
);
```

### Parameters

| Name                          | Type                          | Description  | Notes |
| ----------------------------- | ----------------------------- | ------------ | ----- |
| **packageEnrollToIndividual** | **PackageEnrollToIndividual** | Request Body |       |

### Return type

**string**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                      | Response headers |
| ----------- | -------------------------------- | ---------------- |
| **200**     | Stop student package enrollment. | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runUpdate**

> runUpdate(student)

### Example

```typescript
import { STUDENTApi, Configuration, Student } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTApi(configuration);

let id: string; // (default to undefined)
let student: Student; //Data

const { status, data } = await apiInstance.runUpdate(id, student);
```

### Parameters

| Name        | Type         | Description | Notes                 |
| ----------- | ------------ | ----------- | --------------------- |
| **student** | **Student**  | Data        |                       |
| **id**      | [**string**] |             | defaults to undefined |

### Return type

void (empty response body)

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

### HTTP response details

| Status code | Description        | Response headers |
| ----------- | ------------------ | ---------------- |
| **200**     | success            | -                |
| **404**     | Document not found | -                |
| **500**     | Internal error     | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runUpgradeStudentLevel**

> string runUpgradeStudentLevel(upgradeStudentLevelRequestBody)

### Example

```typescript
import {
  STUDENTApi,
  Configuration,
  UpgradeStudentLevelRequestBody,
} from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTApi(configuration);

let upgradeStudentLevelRequestBody: UpgradeStudentLevelRequestBody; //Request Body

const { status, data } = await apiInstance.runUpgradeStudentLevel(
  upgradeStudentLevelRequestBody
);
```

### Parameters

| Name                               | Type                               | Description  | Notes |
| ---------------------------------- | ---------------------------------- | ------------ | ----- |
| **upgradeStudentLevelRequestBody** | **UpgradeStudentLevelRequestBody** | Request Body |       |

### Return type

**string**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                              | Response headers |
| ----------- | ---------------------------------------- | ---------------- |
| **200**     | Upgrade all student level to next level. | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runUploadPhoto**

> string runUploadPhoto(uploadPhoto)

### Example

```typescript
import { STUDENTApi, Configuration, UploadPhoto } from "./api";

const configuration = new Configuration();
const apiInstance = new STUDENTApi(configuration);

let id: string; // (default to undefined)
let uploadPhoto: UploadPhoto; //Request Body

const { status, data } = await apiInstance.runUploadPhoto(id, uploadPhoto);
```

### Parameters

| Name            | Type            | Description  | Notes                 |
| --------------- | --------------- | ------------ | --------------------- |
| **uploadPhoto** | **UploadPhoto** | Request Body |                       |
| **id**          | [**string**]    |              | defaults to undefined |

### Return type

**string**

### Authorization

[x-apisecret](../README.md#x-apisecret), [x-guest-accesstoken](../README.md#x-guest-accesstoken), [oauth2](../README.md#oauth2), [x-apikey](../README.md#x-apikey), [x-org](../README.md#x-org)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | Upload Student photo | -                |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
