import getData from "@/components/getData";
import Image from "next/image";

const page = async ({ params }) => {
  const id = params.id;
  const blogs = await getData();
  const blog = blogs.find((blog) => blog._id === id);
  return (
    <div>
      <div className="mt-3 bg-[#e7eced] rounded-xl p-5">
        <div className="relative w-full h-[250px] sm:h-[270px] border border-[#D8A47F] rounded-xl">
          <Image
            src={blog.img}
            alt={blog.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="py-3">
          <h1 className="text-2xl capitalize font-extrabold text-[#0f7173]">
            {blog.title}
          </h1>
          <p className="w-full text-lg text-[#272932]">{blog.content}</p>
        </div>
      </div>
    </div>
  );
};
export default page;
