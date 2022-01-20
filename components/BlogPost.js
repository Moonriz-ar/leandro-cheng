import Image from "next/image";
import BlogContent from "./BlogContent.js";

const renderFeaturedImage = (post) => {
  return (
    <Image
      src={post.feature_image}
      className="w-auto h-auto min-w-full min-h-full object-cover"
      width={1000}
      height={750}
    />
  );
};

const BlogPost = ({ post }) => {
  return (
    <section className="flex flex-col justify-center pb-10 bg-gray-100 mt-10">
      {post.feature_image !== null ? renderFeaturedImage(post) : null}
      <BlogContent content={post} />
    </section>
  );
};

export default BlogPost;
