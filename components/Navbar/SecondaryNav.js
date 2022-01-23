import Link from "next/link";
import { countryNavLinks, categoryNavLinks } from "../../lib/NavLinks";

const SecondaryNav = () => {
  const renderLinks = (array) => {
    return array.map((items) => (
      <Link href={`/tag/${items.path}`}>
        <a className="py-1">{items.name}</a>
      </Link>
    ));
  };

  return (
    <nav className="flex justify-around w-screen px-4 py-3 text-sm font-extrabold text-gray-800 bg-gray-50 drop-shadow">
      <section className="flex flex-col w-max-4/5 ">
        <h3 className="pb-2 text-xl">
          <span className="mr-1">
            <i class="fas fa-globe-americas"></i>
          </span>
          地區
        </h3>
        <div className="flex flex-col">{renderLinks(countryNavLinks)}</div>
      </section>
      <section className="flex flex-col w-max-4/5 ">
        <h3 className="pb-2 text-xl">
          <span className="mr-1">
            <i class="fas fa-camera-retro"></i>
          </span>
          探索
        </h3>
        <div className="flex flex-col">{renderLinks(categoryNavLinks)}</div>
      </section>
    </nav>
  );
};

export default SecondaryNav;
