import type { SSTConfig } from "sst";
import { AstroSite } from "sst/constructs";
import { StorageStack } from "./stacks/StorageStack";
import { ApiStack } from "./stacks/ApiStack";
import { AuthStack } from "./stacks/AuthStack";


export default {
  config(_input) {
    return {
      name: "irregular-iron",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(StorageStack).stack(ApiStack).stack(AuthStack).stack(function Site({ stack }) {
      const site = new AstroSite(stack, "site", {
      });
      stack.addOutputs({
        url: site.url,
      });
    });
  },
} satisfies SSTConfig;
