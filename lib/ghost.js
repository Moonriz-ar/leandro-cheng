import GhostContentAPI from "@tryghost/content-api";

// Ghost API basic setup
const api = new GhostContentAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_CONTENT_API_KEY,
  version: "v3",
});

// Post related helper functions
export async function getAllPosts() {
  const posts = await api.posts.browse({
    limit: "all",
    include: "tags,authors",
  });
  return posts;
}

export async function getPostBySlug(slug) {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const post = await api.posts.read(
    { slug },
    { formats: ["html"], include: "tags" }
  );

  post.dateFormatted = new Intl.DateTimeFormat("en-US", options).format(
    new Date(post.published_at)
  );

  return post;
}

// Page related helper functions
export async function getAllPages() {
  const pages = await api.pages.browse({
    limit: "all",
    include: "tags,authors",
  });
  return pages.pages;
}

export async function getSinglePage(slug) {
  const page = await api.pages.read({ slug });
  return page;
}

// Tag related helper functions
export async function getAllTags() {
  const tags = await api.tags.browse({ limit: "all" });
  return tags;
}

export async function getAllPostsByTagSlug(slug, number = "all") {
  const posts = await api.posts.browse({
    limit: number,
    filter: `tag:${slug}`,
  });
  return posts;
}

export async function getTagBySlug(slug) {
  const tag = await api.tags.read({ slug }, { include: "count.posts" });
  return tag;
}
