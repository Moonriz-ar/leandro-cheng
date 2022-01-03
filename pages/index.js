import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Homepage</h1>
      <h2>
        Check out the{" "}
        <Link href="/blog">
          <a>blog</a>
        </Link>
      </h2>
    </>
  );
}
