import Link from "next/link";

const renderTag = (content) => {
  return (
    <>
      {content.tags.map((tag) => (
        <Link key={tag.id} href={`/tag/${tag.slug}`}>
          <a>#{tag.name}</a>
        </Link>
      ))}
    </>
  );
};

const BlogContent = ({ content }) => {
  return (
    <article className="z-10 p-5 mx-4 -mt-8 prose rounded-lg bg-gray-50 drop-shadow-lg">
      <h1 className="text-center">{content.title}</h1>
      {content.tags ? renderTag(content) : null}
      <div dangerouslySetInnerHTML={{ __html: content.html }}></div>
    </article>
  );
};

export default BlogContent;
