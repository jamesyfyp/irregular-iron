import { Table } from "sst/constructs";

export function StorageStack({ stack, app }) {
  // Create the DynamoDB table
  const table = new Table(stack, "Posts", {
    fields: {
      postId: "string",
      postTitle: "string",
    },
    primaryIndex: { partitionKey: "postId", sortKey: "postTitle" },
  });

  return {
    table,
  };
}