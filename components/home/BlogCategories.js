import Image from "next/image";

import { countryNavLinks } from "../../lib/NavLinks";
import CategoryCard from "./CategoryCard";

const BlogCategories = () => {
  const renderCards = (array) => {
    return array.map((array) => (
      <CategoryCard key={array.id} content={array} />
    ));
  };
  return (
    <section className="pb-10 md:w-10/12 md:mx-auto">
      <h2 className="px-5 text-2xl font-extrabold">/ 文章類別</h2>
      <section className="grid md:grid-cols-4 md:items-stretch">
        {renderCards(countryNavLinks)}
      </section>
    </section>
  );
};

export default BlogCategories;
