const Card = ({ content }) => {
  return (
    <article className="bg-gray-50 p-5 rounded-lg -mt-8 z-10 mx-4 drop-shadow-lg prose">
      <h1 className="text-center">{content.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content.html }}></div>
    </article>
  );
};

export default Card;
