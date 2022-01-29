import Image from "next/image";

import { countryNavLinks } from "../../lib/NavLinks";
import CategoryCard from "./CategoryCard";

const BlogCategories = () => {
  const renderBlogCategories = () => {
    return countryNavLinks.map((country) => (
      <CategoryCard key={country.id} country={country} />
    ));
  };
  return (
    <section className="pb-10">
      <h2 className="px-5 text-2xl font-extrabold">/ 文章類別</h2>
      <section>{renderBlogCategories()}</section>
    </section>
  );
};

export default BlogCategories;
