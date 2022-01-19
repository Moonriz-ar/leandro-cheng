import Image from "next/image";
import Card from "./Card";

const BlogPost = ({ post }) => {
  return (
    <section className="flex flex-col justify-center pb-10 bg-gray-100 mt-10">
      <Image
        src={post.feature_image}
        className="w-auto h-auto min-w-full min-h-full object-cover"
        width={1000}
        height={750}
      />
      <Card content={post} />
    </section>
  );
};

export default BlogPost;
