import Image from "next/image";
import Link from "next/link";

const Blog = ({ blog }) => {
  const { _id, title, content, img } = blog;
  return (
    <Link key={_id} href={`/${_id}`}>
      <div className="w-full border border-[#D8A47F] p-3 items-center justify-center flex flex-col rounded-xl">
        <div className="relative w-full h-[210px] sm:h-[250px]">
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="w-full mt-2">
          <h2 className="text-2xl capitalize font-extrabold text-[#0f7173]">
            {title}
          </h2>
          <p className="w-full text-lg text-[#272932] whitespace-nowrap overflow-hidden text-ellipsis">
            {content}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default Blog;
