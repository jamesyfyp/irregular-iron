import "sst/node/config";
declare module "sst/node/config" {
  export interface ConfigTypes {
    APP: string;
    STAGE: string;
  }
}import "sst/node/table";
declare module "sst/node/table" {
  export interface TableResources {
    "BlogPost": {
      tableName: string;
    }
  }
}import "sst/node/bucket";
declare module "sst/node/bucket" {
  export interface BucketResources {
    "Uploads": {
      bucketName: string;
    }
  }
}import "sst/node/api";
declare module "sst/node/api" {
  export interface ApiResources {
    "Api": {
      url: string;
    }
  }
}import "sst/node/site";
declare module "sst/node/site" {
  export interface AstroSiteResources {
    "site": {
      url: string;
    }
  }
}