"use client";
import { useContext } from "react";
import Blogs from "./Blogs";
import { CategoryProvider } from "./CategoryProvider";
import Test from "./Test";

const Container = ({ children }) => {
  const { category } = useContext(CategoryProvider);
  return (
    <div>
      <Test category={category}>{children}</Test>
    </div>
  );
};
export default Container;
