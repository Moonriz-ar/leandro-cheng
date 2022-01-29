import Image from "next/image";
import Head from "next/head";

import { getSinglePage, getAllPostsByTagSlug } from "../lib/ghost";
import PageContent from "../components/PageContent";
import Card from "../components/Card";

export async function getStaticProps() {
  const page = await getSinglePage("zhuan-ye-she-ying-xiang-dao");
  const posts = await getAllPostsByTagSlug("tour-guide-road-trip", 5);
  return { props: { page, posts }, revalidate: 30 };
}

const GuideService = ({ page, posts }) => {
  return (
    <>
      <Head>
        <title>攝影嚮導服務</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="flex flex-col justify-center pb-10 mt-10 bg-gray-100">
        <Image
          src={page.feature_image}
          className="object-cover w-auto h-auto min-w-full min-h-full"
          width={1000}
          height={750}
        />
        <PageContent content={page} className="" />
        <section className="mt-10">
          <h2 className="px-5 text-2xl font-extrabold">/ 已完成的行程</h2>
          <section>
            {posts.map((post) => (
              <Card content={post} key={post.id} />
            ))}
          </section>
        </section>
      </section>
    </>
  );
};

export default GuideService;
