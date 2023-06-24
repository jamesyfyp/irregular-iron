import type { SSTConfig } from "sst";
import { AstroSite, Api } from "sst/constructs";


export default {
  config(_input) {
    return {
      name: "irregular-iron",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const api = new Api(stack, "api", {
        routes: {
          "GET /": "packages/functions/src/time.handler",
        },
      });
      const site = new AstroSite(stack, "site", {
        bind: [api]
      });
      stack.addOutputs({
        url: site.url,
      });
    });
  },
} satisfies SSTConfig;
