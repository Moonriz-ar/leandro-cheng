import Image from "next/image";
import { getSinglePage } from "../lib/ghost";

export async function getStaticProps() {
  const page = await getSinglePage("zhuan-ye-she-ying-xiang-dao");
  return { props: { page } };
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
        <article className="bg-gray-50 p-5 rounded-lg -mt-8 z-10 mx-4 drop-shadow-lg prose prose-sm">
          <h1 className="text-center">{page.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: page.html }}></div>
        </article>
      </section>
    </>
  );
};

export default GuideService;
