import Image from "next/image";
import profilePic from "../public/images/profile.jpg";
import { getSinglePage } from "../lib/ghost";
import Card from "../components/Card";

export async function getStaticProps() {
  const page = await getSinglePage("guan-yu-ban-zhu");
  return { props: { page } };
}

const About = ({ page }) => {
  return (
    <>
      <section className="flex flex-col justify-center pb-10 bg-gray-100 mt-10">
        <Image
          src={profilePic}
          alt="photo of Leandro Cheng"
          className="w-auto h-auto min-w-full min-h-full object-cover object-top"
        />
        <Card content={page} />
      </section>
    </>
  );
};

export default About;
