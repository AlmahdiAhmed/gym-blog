"use client";
import { useContext } from "react";
import Blog from "./Blog";
import getData from "./getData";
import { CategoryProvider } from "./CategoryProvider";

const Blogs = ({ blogs }) => {
  let updated;
  const { category, setCategory } = useContext(CategoryProvider);
  if (category === "all") {
    updated = blogs;
  } else {
    updated = blogs.filter((blog) => blog.category === category);
  }
  return (
    <div className="mt-4 mx-auto w-full flex flex-col gap-5  bg-[#E7ECEF] rounded-xl p-2 sm:p-5">
      <div>
        <h1 className="capitalize text-2xl font-extrabold text-[#0f7173] underline decoration-[#F05D5E]">
          {category}
        </h1>
      </div>
      {updated.map((blog) => (
        <Blog key={blog._id} blog={blog} />
      ))}
    </div>
  );
};
export default Blogs;
