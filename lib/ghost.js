import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_CONTENT_API_KEY,
  version: "v3",
});

export async function getAllPosts() {
  const posts = await api.posts.browse({ limit: 10, include: "tags,authors" });
  return posts;
}

export async function getPostById(id) {
  const post = await api.posts.read({ id }, { formats: ["html"] });
  return post;
}
