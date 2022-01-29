import BlogPost from "../../components/Blog/BlogPost.js";
import { getAllPosts, getPostBySlug } from "../../lib/ghost.js";
import Head from "next/head";

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
      <Head>
        <title>{post.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BlogPost post={post} />
    </>
  );
}
