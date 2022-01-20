import Image from "next/image";
import Card from "../components/Card";
import Head from "next/head";

import { getSinglePage } from "../lib/ghost";
import BlogContent from "../components/BlogContent";

export async function getStaticProps() {
  const page = await getSinglePage("zhuan-ye-she-ying-xiang-dao");
  return { props: { page }, revalidate: 30 };
}

const GuideService = ({ page }) => {
  return (
    <>
      <Head>
        <title>攝影嚮導服務</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="flex flex-col justify-center pb-10 bg-gray-100 mt-10">
        <Image
          src={page.feature_image}
          className="w-auto h-auto min-w-full min-h-full object-cover"
          width={1000}
          height={750}
        />
        <BlogContent content={page} />
      </section>
    </>
  );
};

export default GuideService;
