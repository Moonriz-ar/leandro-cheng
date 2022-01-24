import Card from "../Card";

const FeaturedPosts = ({ featuredPosts }) => {
  return (
    <section className="pb-10">
      <h2 className="px-5 text-2xl font-extrabold">/ 推薦文章</h2>
      <section>
        {featuredPosts.map((post) => (
          <Card content={post} />
        ))}
      </section>
    </section>
  );
};

export default FeaturedPosts;
