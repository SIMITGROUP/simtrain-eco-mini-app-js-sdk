# Setup

## Properties

| Name                | Type                                                       | Description | Notes                             |
| ------------------- | ---------------------------------------------------------- | ----------- | --------------------------------- |
| **institutionType** | **string**                                                 |             | [optional] [default to undefined] |
| **organization**    | [**SetupOrganization**](SetupOrganization.md)              |             | [optional] [default to undefined] |
| **teams**           | [**Array&lt;SetupTeam&gt;**](SetupTeam.md)                 |             | [optional] [default to undefined] |
| **levels**          | [**Array&lt;SetupLevel&gt;**](SetupLevel.md)               |             | [optional] [default to undefined] |
| **rooms**           | [**Array&lt;SetupRoom&gt;**](SetupRoom.md)                 |             | [optional] [default to undefined] |
| **subjects**        | [**Array&lt;SetupSubject&gt;**](SetupSubject.md)           |             | [optional] [default to undefined] |
| **subjectPrices**   | [**Array&lt;SetupSubjectPrice&gt;**](SetupSubjectPrice.md) |             | [optional] [default to undefined] |
| **charges**         | [**Array&lt;SetupCharge&gt;**](SetupCharge.md)             |             | [optional] [default to undefined] |
| **academicSession** | [**SetupAcademicSession**](SetupAcademicSession.md)        |             | [optional] [default to undefined] |
| **holidays**        | [**Array&lt;SetupHoliday&gt;**](SetupHoliday.md)           |             | [optional] [default to undefined] |
| **classes**         | [**Array&lt;SetupClass&gt;**](SetupClass.md)               |             | [optional] [default to undefined] |

## Example

```typescript
import { Setup } from "./api";

const instance: Setup = {
  institutionType,
  organization,
  teams,
  levels,
  rooms,
  subjects,
  subjectPrices,
  charges,
  academicSession,
  holidays,
  classes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
