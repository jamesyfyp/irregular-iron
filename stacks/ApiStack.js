import { Api, use } from "sst/constructs";
import { StorageStack } from "./StorageStack";

export function ApiStack({ stack, app }) {
  const { table } = use(StorageStack);

  // Create the API
  const api = new Api(stack, "Api", {
    defaults: {
      authorizer: "iam",
      function: {
        bind: [table],
      },
    },
    routes: {
      "POST /blogPost": {function: "packages/functions/src/create.main", authorizer: 'none'},
      "GET /blogPosts": {
        function:"packages/functions/src/list.main",
        authorizer: "none"
      },
      "GET /blogPost/{title}": {
        function:"packages/functions/src/get.main",
        authorizer:"none"
      },
      "PUT /blogPost/{title}": {function: "packages/functions/src/update.main", authorizer: 'none'},
      "DELETE /blogPost/{id}": {function: "packages/functions/src/delete.main", authorizer: 'none'}
    },
  });

  // Show the API endpoint in the output
  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  // Return the API resource
  return {
    api,
  };
}