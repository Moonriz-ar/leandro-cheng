import Card from "../Card";

const FeaturedPosts = ({ featuredPosts }) => {
  return (
    <section className="pb-10 md:w-10/12 md:mx-auto">
      <h2 className="px-5 text-2xl font-extrabold">/ 推薦文章</h2>
      <section className="grid md:grid-cols-4 md:items-stretch">
        {featuredPosts.map((post) => (
          <Card content={post} key={post.id} />
        ))}
      </section>
    </section>
  );
};

export default FeaturedPosts;
