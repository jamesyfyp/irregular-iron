import { AstroSite } from "sst/constructs";
import {  use } from "sst/constructs";
import { ApiStack } from "./ApiStack";
import { AuthStack } from "./AuthStack";
import { StorageStack } from "./StorageStack";

export function FrontEndStack({stack, app}) {
  const { api } = use(ApiStack);
  const { auth } = use(AuthStack);
  const { bucket } = use(StorageStack);

  const site = new AstroSite(stack, "Site", {

    environment: {
      PUBLIC_ASTRO_APP_API_URL: api.customDomainUrl || api.url,
      PUBLIC_ASTRO_APP_REGION: app.region,
      PUBLIC_ASTRO_APP_BUCKET: bucket.bucketName,
      PUBLIC_ASTRO_APP_USER_POOL_ID: auth.userPoolId,
      PUBLIC_ASTRO_APP_IDENTITY_POOL_ID: auth.cognitoIdentityPoolId,
      PUBLIC_ASTRO_APP_USER_POOL_CLIENT_ID: auth.userPoolClientId,
    },
  });
  stack.addOutputs({
        url: site.url,
      });
}

