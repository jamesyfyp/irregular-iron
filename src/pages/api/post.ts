 import type { APIRoute } from 'astro';

 export const get: APIRoute = async (request) => {
  let status = 200
  const allBlogPosts = await fetch("https://di10dsxzc6.execute-api.us-east-1.amazonaws.com/blogPosts").then(
    (response) => {
      if (!response.ok) {
      throw new Error("Request failed");
      }
  return response.json();
  })
  .then((data) => {
    console.log(data);
    return data;
  })
  .catch((error) => {
    return console.error(error);
  });
  return new Response(JSON.stringify({ allBlogPosts}), {status})
 }