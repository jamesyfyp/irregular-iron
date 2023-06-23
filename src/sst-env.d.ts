/// <reference path="../.sst/types/index.ts" />
const bucket = new Bucket(stack, "public");

const site = new AstroSite(stack, "site", {
+ bind: [bucket],
});