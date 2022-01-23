import Link from "next/link";

const Footer = () => {
  return (
    <footer className="sticky px-4 py-4 text-sm text-gray-200 bg-gray-800 top-full">
      <p className="text-center">
        © 2012–2022 Leandro Cheng Blog. All rights reserved.
      </p>
      <p className="text-center">
        Made with ❤ by{" "}
        <Link href="https://github.com/Moonriz-ar">
          <a className="no-underline">Andrea Lin</a>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
