import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 flex justify-between w-screen px-4 py-3 font-extrabold z-20 text-gray-900 bg-gray-50 text-sm drop-shadow">
      <div className="">
        <Link href="/">
          <a className="inline-block hover:text-gray-600">
            Leandro Cheng{" "}
            <span className="hidden md:inline">中南美深度攝影</span>
          </a>
        </Link>
      </div>
      <div className="inline-block ">
        <Link href="/blog">
          <a className="ml-3 hover:text-gray-600">部落格</a>
        </Link>
        <Link href="/about">
          <a className="ml-3 hover:text-gray-600">關於版主</a>
        </Link>
        <Link href="/guide-service">
          <a className="px-1 py-2 ml-3 transition duration-150 ease-in rounded text-gray-800 hover:text-gray-700">
            攝影嚮導
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
