# MiniAppDetail

## Properties

| Name                    | Type                                                    | Description | Notes                             |
| ----------------------- | ------------------------------------------------------- | ----------- | --------------------------------- |
| **\_id**                | **string**                                              |             | [optional] [default to undefined] |
| **created**             | **string**                                              |             | [optional] [default to undefined] |
| **updated**             | **string**                                              |             | [optional] [default to undefined] |
| **createdBy**           | **string**                                              |             | [optional] [default to undefined] |
| **updatedBy**           | **string**                                              |             | [optional] [default to undefined] |
| **tenantId**            | **number**                                              |             | [optional] [default to undefined] |
| **orgId**               | **number**                                              |             | [optional] [default to undefined] |
| **branchId**            | **number**                                              |             | [optional] [default to undefined] |
| **code**                | **string**                                              |             | [default to undefined]            |
| **name**                | **string**                                              |             | [default to undefined]            |
| **env**                 | **string**                                              |             | [default to undefined]            |
| **version**             | **string**                                              |             | [default to undefined]            |
| **logo**                | **string**                                              |             | [default to undefined]            |
| **website**             | **string**                                              |             | [optional] [default to undefined] |
| **description**         | **string**                                              |             | [default to undefined]            |
| **pricing**             | **number**                                              |             | [default to undefined]            |
| **status**              | **string**                                              |             | [default to undefined]            |
| **tags**                | **Array&lt;string&gt;**                                 |             | [optional] [default to undefined] |
| **author**              | [**MiniAppAuthor**](MiniAppAuthor.md)                   |             | [default to undefined]            |
| **access**              | [**MiniAppAccess**](MiniAppAccess.md)                   |             | [default to undefined]            |
| **development**         | [**MiniAppDevelopment**](MiniAppDevelopment.md)         |             | [optional] [default to undefined] |
| **developerPortal**     | [**MiniAppDeveloperPortal**](MiniAppDeveloperPortal.md) |             | [default to undefined]            |
| **intro**               | [**MiniAppIntro**](MiniAppIntro.md)                     |             | [default to undefined]            |
| **integration**         | [**MiniAppIntegration**](MiniAppIntegration.md)         |             | [default to undefined]            |
| **miniAppInstallation** | [**MiniAppInstallation**](MiniAppInstallation.md)       |             | [optional] [default to undefined] |
| **hasRequiredPlan**     | **boolean**                                             |             | [default to undefined]            |

## Example

```typescript
import { MiniAppDetail } from "./api";

const instance: MiniAppDetail = {
  _id,
  created,
  updated,
  createdBy,
  updatedBy,
  tenantId,
  orgId,
  branchId,
  code,
  name,
  env,
  version,
  logo,
  website,
  description,
  pricing,
  status,
  tags,
  author,
  access,
  development,
  developerPortal,
  intro,
  integration,
  miniAppInstallation,
  hasRequiredPlan,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
