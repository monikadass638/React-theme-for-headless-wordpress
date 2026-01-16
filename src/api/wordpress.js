import { WP_API_URL } from "../config";

export const getPosts = async () => {
  const response = await fetch(`${WP_API_URL}posts?per_page=4&_embed`);

  return response.json();
};

//get the media file of the post
export const getMediaById = async (id) => {
  const res = await fetch(`${WP_API_URL}/media/${id}`);
  return res.json();
};
