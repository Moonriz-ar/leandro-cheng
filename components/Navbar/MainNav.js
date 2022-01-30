import Link from "next/link";

const MainNav = ({ handleClick }) => {
  return (
    <nav className="flex justify-between w-screen px-4 py-3 text-sm font-extrabold text-gray-800 bg-gray-50 drop-shadow md:px-32">
      <div className="">
        <Link href="/">
          <a className="inline-block hover:text-gray-500">
            Leandro Cheng{" "}
            <span className="hidden md:inline">中南美深度攝影</span>
          </a>
        </Link>
      </div>
      <div>
        <ul className="flex">
          <li>
            <div className="ml-3 hover:text-gray-500" onClick={handleClick}>
              部落格<i class="fas fa-caret-down"></i>
            </div>
          </li>
          <li>
            <Link href="/about">
              <a className="ml-3 hover:text-gray-500">關於版主</a>
            </Link>
          </li>
          <li>
            <Link href="/guide-service">
              <a className="px-2 py-1 ml-3 text-gray-800 transition duration-150 ease-in border border-gray-400 rounded hover:text-gray-500">
                攝影嚮導
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;
