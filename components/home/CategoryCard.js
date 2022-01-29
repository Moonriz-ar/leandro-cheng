import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ content }) => {
  return (
    <Link href={`tag/${content.path}`}>
      <a>
        <article className="relative m-4 prose w-fit prose-h1:text-lg rounded-xl drop-shadow-2xl">
          <Image
            src={content.imagePath}
            className="object-cover min-w-full min-h-full rounded-xl"
            width={500}
            height={500}
          />
          <h3 className="absolute z-10 px-3 py-2 font-extrabold text-gray-100 rounded bg-white/20 bottom-5 right-5 drop-shadow-sm backdrop-blur-sm">
            {content.name}
          </h3>
        </article>
      </a>
    </Link>
  );
};

export default CategoryCard;
