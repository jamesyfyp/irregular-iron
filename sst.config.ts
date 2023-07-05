import type { SSTConfig } from "sst";
import { StorageStack } from "./stacks/StorageStack";
import { ApiStack } from "./stacks/ApiStack";
import { AuthStack } from "./stacks/AuthStack";
import { FrontEndStack } from "./stacks/FrontEndStack";

export default {
  config(_input) {
    return {
      name: "irregular-iron",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app
    .stack(StorageStack)
    .stack(ApiStack)
    .stack(AuthStack)
    .stack(FrontEndStack);
  },
} satisfies SSTConfig;
