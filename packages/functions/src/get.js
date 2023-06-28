import { Table } from "sst/node/table";
import handler from "../../core/src/handler";
import dynamoDb from "../../core/src/dynamodb";

export const main = handler(async (event) => {
  const params = {
    TableName: Table.BlogPost.tableName,
    // 'Key' defines the partition key and sort key of the item to be retrieved
    Key: {
      postTitle: event.pathParameters.title, 
      userId: 'james', 
    },
  };

  const result = await dynamoDb.get(params);
  if (!result.Item) {
    throw new Error("Item not found.");
  }

  // Return the retrieved item
  return result.Item;
});