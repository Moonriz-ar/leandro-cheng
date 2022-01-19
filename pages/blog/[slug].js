import { getAllPosts, getPostBySlug } from "../../lib/ghost.js";

// automatically generate path
export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));
  return { paths, fallback: "blocking" };
}

// fetch post data
export async function getStaticProps({ params }) {
  const { slug } = params;
  const data = await getPostBySlug(slug);
  return { props: { data }, revalidate: 30 };
}

// render each post page component
export default function Post({ data }) {
  return (
    <article className="prose prose-img:rounded-xl">
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.html }} />
    </article>
  );
}
