import Image from "next/image";
import Head from "next/head";

import profilePic from "../public/images/profile.jpg";
import { getSinglePage } from "../lib/ghost";
import BlogContent from "../components/BlogContent";

export async function getStaticProps() {
  const page = await getSinglePage("guan-yu-ban-zhu");
  return { props: { page } };
}

const About = ({ page }) => {
  return (
    <>
      <Head>
        <title>關於版主</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="flex flex-col justify-center pb-10 bg-gray-100 mt-10">
        <Image
          src={profilePic}
          alt="photo of Leandro Cheng"
          className="w-auto h-auto min-w-full min-h-full object-cover object-top"
        />
        <BlogContent content={page} />
      </section>
    </>
  );
};

export default About;
