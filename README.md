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

## Authenticating your own backend (`sdk.auth.getToken()`)

If your mini app has its **own backend**, that backend cannot trust the `user` / `org` /
`branch` values the iframe reads from the bridge — they are plain text and forgeable. Instead,
ask SimTrain to mint a short-lived **signed token** (a JWT) that vouches for the logged-in user,
and verify it on your backend.

### 1. In your iframe app — get a token

```ts
const token = await sdk.auth.getToken();

// send it to YOUR backend
await fetch("https://your-backend.example.com/api/whatever", {
  headers: { Authorization: `Bearer ${token}` },
});
```

The token is short-lived (about 5 minutes). Don't cache it for long — just call
`sdk.auth.getToken()` again whenever you need a fresh one.

### 2. On your backend — verify the token

The token is an RS256 JWT signed by SimTrain. Verify it **offline** against SimTrain's public
keys (JWKS) — no per-request call to SimTrain is needed.

```ts
// npm i jsonwebtoken jwks-rsa
import jwt from "jsonwebtoken";
import jwksClient from "jwks-rsa";

const ISSUER = "<MINI_API_PUBLIC_URL>";            // the `iss` in the token
const APP_ID = "<your developer-portal app id>";   // your app's id (the `aud`)

const client = jwksClient({ jwksUri: `${ISSUER}/.well-known/jwks.json` });

async function verifySimtrainToken(token: string) {
  const { header } = jwt.decode(token, { complete: true }) as any;
  const key = await client.getSigningKey(header.kid);
  const decoded = jwt.verify(token, key.getPublicKey(), {
    algorithms: ["RS256"],
    issuer: ISSUER,
    audience: APP_ID, // REQUIRED — rejects tokens minted for a different app
  });
  // decoded = { sub: <userId>, tenant, org, branch, email, name,
  //             groups: string[], group, iss, aud, iat, exp }
  //   groups = all roles the user has (e.g. ["admin","teacher"])
  //   group  = the role they're currently acting as (may be "")
  return decoded;
}
```

Always check `audience` — it scopes the token to your app, so a token minted for another mini
app cannot be replayed against your backend. Discovery metadata is also available at
`${ISSUER}/.well-known/openid-configuration`.

> Replace `<MINI_API_PUBLIC_URL>` with the SimTrain mini-api base URL shown in your developer
> portal, and `<your developer-portal app id>` with your application's id.
