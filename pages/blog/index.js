import Head from "next/head";
import Card from "../../components/Card";

import { getAllPosts } from "../../lib/ghost";

export async function getStaticProps() {
  const posts = await getAllPosts();
  return { props: { posts }, revalidate: 30 };
}

const Blog = ({ posts }) => {
  return (
    <section className="flex flex-col justify-center pb-10 mt-10 bg-gray-100">
      <Head>
        <title>所有文章</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <section className="mt-10">
        <h1 className="px-5 text-2xl font-extrabold">/ 所有文章</h1>
      </section>

      <section>
        {posts
          ? posts.map((post) => <Card content={post} key={post.id} />)
          : null}
      </section>
    </section>
  );
};

export default Blog;
