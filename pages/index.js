import Head from "next/head";

import Hero from "../components/home/Hero";
import Profile from "../components/home/Profile";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Leandro Cheng 中南美深度攝影</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
      <section>
        <Profile />
      </section>
    </div>
  );
}
