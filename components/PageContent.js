const PageContent = ({ content }) => {
  return (
    <article className="z-10 p-5 mx-4 -mt-8 prose rounded-lg bg-gray-50 drop-shadow-lg md:w-10/12 md:mx-auto md:prose-xl md:p-10">
      <h1 className="text-center">{content.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content.html }}></div>
    </article>
  );
};

export default PageContent;
