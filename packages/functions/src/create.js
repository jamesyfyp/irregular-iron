import { Table } from "sst/node/table";
import * as uuid from "uuid";
import handler from "../../core/src/handler";
import dynamoDb from "../../core/src/dynamodb";

export const main = handler(async (event) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: Table.BlogPost.tableName,
    Item: {
      postTitle: data.title, 
      userId: event.requestContext.authorizer.iam.cognitoIdentity.identityId,
      content: data.content, 
      createdAt: Date.now(), 
    },
  };

  await dynamoDb.put(params);

  return params.Item;
});