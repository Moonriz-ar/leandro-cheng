import { getAllPosts, getPostById } from "../../lib/ghost.js";

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map(({ id }) => ({ params: { id } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const data = await getPostById(id);
  return { props: { data } };
}

export default function Post({ data }) {
  return (
    <article className="prose prose-img:rounded-xl">
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.html }} />
    </article>
  );
}
