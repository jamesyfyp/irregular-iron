import type { SSTConfig } from "sst";
import { StorageStack } from "./stacks/StorageStack";
import { AstroSite } from "sst/constructs";
import { ApiStack } from "./stacks/ApiStack";



export default {
  config(_input) {
    return {
      name: "irregular-iron",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(StorageStack).stack(ApiStack).stack(function Site({ stack }) {
      const site = new AstroSite(stack, "site", );
      stack.addOutputs({
        url: site.url,
      });
    });
  },
} satisfies SSTConfig;
