# SetupOrganization

## Properties

| Name               | Type                                              | Description | Notes                             |
| ------------------ | ------------------------------------------------- | ----------- | --------------------------------- |
| **centreCode**     | **string**                                        |             | [optional] [default to undefined] |
| **centreName**     | **string**                                        |             | [optional] [default to undefined] |
| **regNo**          | **string**                                        |             | [optional] [default to undefined] |
| **companyName**    | **string**                                        |             | [optional] [default to undefined] |
| **mobileNo**       | **string**                                        |             | [optional] [default to undefined] |
| **email**          | **string**                                        |             | [optional] [default to undefined] |
| **description**    | **string**                                        |             | [optional] [default to undefined] |
| **address**        | [**SetupAddress**](SetupAddress.md)               |             | [optional] [default to undefined] |
| **currency**       | **string**                                        |             | [optional] [default to undefined] |
| **timezone**       | **string**                                        |             | [optional] [default to undefined] |
| **operatingHours** | [**SetupOperatingHours**](SetupOperatingHours.md) |             | [optional] [default to undefined] |

## Example

```typescript
import { SetupOrganization } from "./api";

const instance: SetupOrganization = {
  centreCode,
  centreName,
  regNo,
  companyName,
  mobileNo,
  email,
  description,
  address,
  currency,
  timezone,
  operatingHours,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
