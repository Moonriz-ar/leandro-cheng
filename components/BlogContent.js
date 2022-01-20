import Link from "next/link";

const BlogContent = ({ content }) => {
  return (
    <article className="bg-gray-50 p-5 rounded-lg -mt-8 z-10 mx-4 drop-shadow-lg prose">
      <h1 className="text-center">{content.title}</h1>
      {content.tags.map((tag) => (
        <Link key={tag.id} href={`/tag/${tag.slug}`}>
          <a>#{tag.name}</a>
        </Link>
      ))}

      <div dangerouslySetInnerHTML={{ __html: content.html }}></div>
    </article>
  );
};

export default BlogContent;
