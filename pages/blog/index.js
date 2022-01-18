import { getAllPosts } from "../../lib/ghost";
import Link from "next/link";

export async function getStaticProps() {
  const posts = await getAllPosts();
  return { props: { posts }, revalidate: 30 };
}

const Blog = ({ posts }) => {
  return (
    <>
      <h1>Blog posts</h1>
      <h2>Blog posts by theme</h2>
      <h2>Blog posts by country</h2>
      <h2>All blog posts</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Blog;
