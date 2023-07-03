import { Api, use } from "sst/constructs";
import { StorageStack } from "./StorageStack";

export function ApiStack({ stack, app }) {
  const { table } = use(StorageStack);

  // Create the API
  const api = new Api(stack, "Api", {
    defaults: {
      function: {
        bind: [table],
      },
    },
    routes: {
      "POST /blogPosts": "packages/functions/src/create.main",
      "GET /blogPosts": "packages/functions/src/list.main",
      "GET /blogPost/{title}": "packages/functions/src/get.main",
      "PUT /blogPost/{title}": "packages/functions/src/update.main",
      "DELETE /blogPost/{id}": "packages/functions/src/delete.main"
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