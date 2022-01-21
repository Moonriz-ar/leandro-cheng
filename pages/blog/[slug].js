import BlogPost from "../../components/Blog/BlogPost.js";
import { getAllPosts, getPostBySlug } from "../../lib/ghost.js";

// automatically generate path
export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));
  return { paths, fallback: "blocking" };
}

// fetch post data, ISR
export async function getStaticProps({ params }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);
  return { props: { post }, revalidate: 30 };
}

// render each post page component
export default function Post({ post }) {
  return (
    <>
      <BlogPost post={post} />
    </>
  );
}
