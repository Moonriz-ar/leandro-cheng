import Link from "next/link";
import Script from "next/script";

import BlogInfo from "./BlogInfo";

const BlogContent = ({ content }) => {
  const renderTag = (content) => {
    return (
      <div className="flex">
        <span className="mr-2">
          <i class="fas fa-tag"></i>
        </span>
        {content.tags.map((tag) => (
          <Link key={tag.id} href={`/tag/${tag.slug}`}>
            <a className="px-2 py-1 mr-2 text-sm text-gray-200 no-underline bg-gray-800 rounded-xl">
              {tag.name}
            </a>
          </Link>
        ))}
      </div>
    );
  };

  return (
    <article className="z-10 p-5 mx-4 -mt-8 prose rounded-lg bg-gray-50 drop-shadow-lg">
      <Script
        src="https://kit.fontawesome.com/3552e4e004.js"
        crossorigin="anonymous"
      ></Script>

      <h1 className="text-center">{content.title}</h1>

      <BlogInfo content={content} />

      <div dangerouslySetInnerHTML={{ __html: content.html }}></div>

      <section className="mt-10">
        {content.tags ? renderTag(content) : null}
      </section>
    </article>
  );
};

export default BlogContent;
