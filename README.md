# simtrain-eco-mini-app-js-sdk

## How to use

```
npm i @simitgroup/simtrain-eco-mini-app-js-sdk
```

```
import { SimtrainEcoMiniAppJsSdk } from "@simitgroup/simtrain-eco-mini-app-js-sdk";

const sdk = new SimtrainEcoMiniAppJsSdk();
//download all student list
await sdk.student.list();

//navigate page away to /managestudent
sdk.ui.navigateTo("managestudents")

```
