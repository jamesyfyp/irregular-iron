import { Table } from "sst/node/table";
import * as uuid from "uuid";
import handler from "../../core/src/handler";
import dynamoDb from "../../core/src/dynamodb";

export const main = handler(async (event) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: Table.BlogPost.tableName,
    Item: {
      // The attributes of the item to be created
      postTitle: data.title, // The id of the author
      userId: 'james', // A unique uuid
      content: data.content, // Parsed from request body
      createdAt: Date.now(), // Current Unix timestamp
    },
  };

  await dynamoDb.put(params);

  return params.Item;
});