import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="grid grid-cols-12 py-3 bg-teal-600 text-white font-bold">
      <div className="col-start-2 col-end-auto">
        <Link href="/">
          <a className="whitespace-nowrap">Leandro Cheng 中南美深度攝影</a>
        </Link>
      </div>
      <div className="col-start-auto col-end-11 whitespace-nowrap">
        <Link href="/blog">
          <a className="ml-7">部落格</a>
        </Link>
        <Link href="/about">
          <a className="ml-7">關於版主</a>
        </Link>
        <Link href="/guide-service">
          <a className="ml-7">攝影嚮導</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
