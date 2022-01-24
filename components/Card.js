import Image from "next/image";
import Link from "next/link";

const Card = ({ content }) => {
  return (
    <Link href={`/blog/${content.slug}`}>
      <a>
        <article className="z-10 m-4 prose prose-h1:text-lg rounded-xl bg-gray-50 drop-shadow-2xl">
          {content.feature_image && (
            <div className="overflow-hidden">
              <Image
                src={content.feature_image}
                className="object-cover min-w-full min-h-full rounded-t-xl"
                width={500}
                height={250}
              />
            </div>
          )}
          <div className="px-5 py-2">
            <h1 className="">{content.title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: content.excerpt.slice(0, 50) + "...",
              }}
              className="pb-5"
            ></div>
            <div className="text-sm border-t">
              <p>
                Leandro Cheng
                <span className="ml-4 mr-2">
                  <i class="far fa-calendar-alt"></i>
                </span>
                <span>{content.dateFormatted}</span>
              </p>
            </div>
          </div>
        </article>
      </a>
    </Link>
  );
};

export default Card;
