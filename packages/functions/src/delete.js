import { Table } from "sst/node/table";
import handler from "@notes/core/handler";
import dynamoDb from "@notes/core/dynamodb";

export const main = handler(async (event) => {
  const params = {
    TableName: Table.BlogPost.tableName,
    Key: {
      postTitle: event.pathParameters.title, 
      userId: event.requestContext.authorizer.iam.cognitoIdentity.identityId, 
    },
  };

  await dynamoDb.delete(params);

  return { status: true };
});