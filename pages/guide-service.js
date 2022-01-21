import Image from "next/image";
import Head from "next/head";

import { getSinglePage } from "../lib/ghost";
import PageContent from "../components/PageContent";

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
      <section className="flex flex-col justify-center pb-10 mt-10 bg-gray-100">
        <Image
          src={page.feature_image}
          className="object-cover w-auto h-auto min-w-full min-h-full"
          width={1000}
          height={750}
        />
        <PageContent content={page} />
      </section>
    </>
  );
};

export default GuideService;
