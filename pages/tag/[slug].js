import Head from "next/head";
import Card from "../../components/Card";

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
    <section className="flex flex-col justify-center pb-10 mt-10 bg-gray-100">
      <Head>
        <title>{tagData.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <section className="mt-10">
        <h1 className="px-5 text-2xl font-extrabold">/ {tagData.name}文章</h1>
      </section>

      <section>
        {posts
          ? posts.map((post) => <Card content={post} key={post.id} />)
          : null}
      </section>
    </section>
  );
}
