import Link from "next/link";
import {
  getAllTags,
  getAllPostsByTagSlug,
  getTagBySlug,
} from "../../lib/ghost";

// automatically generate path
export async function getStaticPaths() {
  const tags = await getAllTags();
  const paths = tags.map(({ slug }) => ({ params: { slug } }));
  return { paths, fallback: "blocking" };
}

// fetch post data, ISR
export async function getStaticProps({ params }) {
  const { slug } = params;
  const posts = await getAllPostsByTagSlug(slug);
  const tagData = await getTagBySlug(slug);
  return { props: { posts, tagData }, revalidate: 30 };
}

// render tag page
export default function Tag({ posts, tagData }) {
  return (
    <>
      <h1>{tagData.name}</h1>
      <p>A collection of {tagData.count.posts} posts</p>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
