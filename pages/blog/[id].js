import { getAllPosts, getPostById } from "../../lib/ghost.js";

// automatically generate path
export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map(({ id }) => ({ params: { id } }));
  return { paths, fallback: "blocking" };
}

// fetch post data
export async function getStaticProps({ params }) {
  const { id } = params;
  const data = await getPostById(id);
  return { props: { data }, revalidate: 30 };
}

// render post
export default function Post({ data }) {
  return (
    <article className="prose prose-img:rounded-xl">
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.html }} />
    </article>
  );
}
