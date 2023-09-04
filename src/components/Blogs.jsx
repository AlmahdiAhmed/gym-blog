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
    <div>
      <h1>{category}</h1>
      {updated.map((blog) => (
        <Blog key={blog._id} blog={blog} />
      ))}
    </div>
  );
};
export default Blogs;
