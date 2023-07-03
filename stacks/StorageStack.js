import { Table } from "sst/constructs";

export function StorageStack({ stack, app }) {
  // Create the DynamoDB table
  const table = new Table(stack, "BlogPost", {
    fields: {
      userId: "string",
      postTitle: "string",
    },
    primaryIndex: { partitionKey: "userId", sortKey: "postTitle" },
  });

  return {
    table,
  };
}