import Head from "next/head";
import BlogCategories from "../components/home/BlogCategories";
import FeaturedPosts from "../components/home/FeaturedPosts";

import Hero from "../components/home/Hero";
import Profile from "../components/home/Profile";

import { getFeaturedPost } from "../lib/ghost";

export async function getStaticProps() {
  const posts = await getFeaturedPost(6);
  return { props: { posts }, revalidate: 30 };
}

export default function Home({ posts }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Leandro Cheng 中南美深度攝影</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
      <Profile />
      <FeaturedPosts featuredPosts={posts} />
      <BlogCategories />
    </div>
  );
}
