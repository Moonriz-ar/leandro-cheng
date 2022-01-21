import Image from "next/image";
import Link from "next/link";

import profilePic from "../../public/images/profile-rectangle.jpg";

const BlogInfo = ({ content }) => {
  return (
    <section className="flex items-center">
      <Link href="/about">
        <a>
          <Image
            src={profilePic}
            alt="photo of Leandro Cheng"
            className="rounded-full"
            width={50}
            height={50}
          />
        </a>
      </Link>

      <div className="ml-4 text-sm">
        <p>
          <Link href="/about">
            <a className="no-underline">Leandro Cheng</a>
          </Link>
          <span className="ml-4 mr-2">
            <i class="far fa-calendar-alt"></i>
          </span>
          <span>{content.dateFormatted}</span>
        </p>
      </div>
    </section>
  );
};

export default BlogInfo;
