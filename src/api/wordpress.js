import { WP_API_URL } from "../config";

//get the first 4 latest post

export const getPosts = async () => {
  const response = await fetch(`${WP_API_URL}posts?per_page=4&_embed`);

  return response.json();
};

//get all the Posts
export const getallPosts = async () => {
  const response = await fetch(`${WP_API_URL}posts?_embed`);

  return response.json();
};

//get the single post by slug
export const getPostBYslug = async (slug) => {
  const response = await fetch(`${WP_API_URL}posts?slug=${slug}&_embed`);
  console.log(response);
  return response.json();
};
