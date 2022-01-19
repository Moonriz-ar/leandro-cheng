import Image from "next/image";
import Card from "../components/Card";
import { getSinglePage } from "../lib/ghost";

export async function getStaticProps() {
  const page = await getSinglePage("zhuan-ye-she-ying-xiang-dao");
  return { props: { page }, revalidate: 30 };
}

const GuideService = ({ page }) => {
  return (
    <>
      <section className="flex flex-col justify-center pb-10 bg-gray-100 mt-10">
        <Image
          src={page.feature_image}
          className="w-auto h-auto min-w-full min-h-full object-cover"
          width={1000}
          height={750}
        />
        <Card content={page} />
      </section>
    </>
  );
};

export default GuideService;
