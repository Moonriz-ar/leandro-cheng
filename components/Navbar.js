import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between content-center p-5">
      <div>
        <h1 className="text-xl">Leandro Cheng 中南美深度攝影</h1>
      </div>
      <div className="space-x-4">
        <Link href="/about">
          <a>關於版主</a>
        </Link>
        <Link href="/blog">
          <a>部落格</a>
        </Link>
        <Link href="/guide-service">
          <a>攝影嚮導</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
