import GhostContentAPI from "@tryghost/content-api";
import { setHttpAgentOptions } from "next/dist/server/config";

// Ghost API basic setup
const api = new GhostContentAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_CONTENT_API_KEY,
  version: "v3",
});

// Post related helper functions
export async function getAllPosts(number = "all") {
  return await api.posts
    .browse({
      limit: number,
      include: "tags, authors",
    })
    .then((results) => results.map((post) => formatDate(post)))
    .catch((err) => {
      console.error(err);
    });
}

export async function getFeaturedPost(number = "all") {
  return await api.posts
    .browse({
      limit: number,
      include: "tags, authors",
      filter: "featured:true",
    })
    .then((results) => results.map((post) => formatDate(post)))
    .catch((err) => {
      console.error(err);
    });
}

export async function getPostBySlug(slug) {
  return await api.posts
    .read({ slug }, { formats: ["html"], include: "tags" })
    .then((result) => formatDate(result))
    .catch((err) => {
      console.error(err);
    });
}

// Page related helper functions
export async function getAllPages() {
  return await api.pages
    .browse({
      limit: "all",
      include: "tags, authors",
    })
    .then((result) => result.pages)
    .catch((err) => {
      console.error(err);
    });
}

export async function getSinglePage(slug) {
  return await api.pages.read({ slug }).catch((err) => {
    console.error(err);
  });
}

// Tag related helper functions
export async function getAllTags() {
  return await api.tags.browse({ limit: "all" }).catch((err) => {
    console.error(err);
  });
}

export async function getAllPostsByTagSlug(slug, number = "all") {
  return await api.posts
    .browse({
      limit: number,
      filter: `tag:${slug}`,
    })
    .then((results) => results.map((post) => formatDate(post)))
    .catch((err) => {
      console.error(err);
    });
}

export async function getTagBySlug(slug) {
  return await api.tags
    .read({ slug }, { include: "count.posts" })
    .catch((err) => {
      console.error(err);
    });
}

// Date formatter helper function
export function formatDate(post) {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  post.dateFormatted = new Intl.DateTimeFormat("en-US", options).format(
    new Date(post.published_at)
  );

  return post;
}
