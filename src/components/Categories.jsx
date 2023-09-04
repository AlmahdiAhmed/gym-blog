"use client";
import Link from "next/link";
import { useState } from "react";

const Categories = ({ setCategory }) => {
  const category = (value) => {
    setCategory(value);
  };
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full h-full relative flex items-center z-10">
      <div
        onClick={() => setToggle(!toggle)}
        className="h-full w-full flex items-center"
      >
        <h1 className="text-xl text-[#0f7173] hover:text-[#f05d5e] transition-all cursor-pointer">
          Categories
        </h1>
      </div>
      {toggle && (
        <div className="absolute w-full top-[50px] flex flex-col justify-center items-center bg-[#e7ecef] transition-all text-[#0f7173] py-2">
          <button
            className="py-1 hover:text-[#f05d5e] transition-all"
            onClick={() => {
              category("all");
              setToggle(false);
            }}
          >
            <Link href={"/"}>All</Link>
          </button>
          <button
            className="hover:text-[#f05d5e] transition-all py-1 border-t border-b border-[#f05d5e]"
            onClick={() => {
              setCategory("chest");
              setToggle(false);
            }}
          >
            <Link href={"/"}>Chest</Link>
          </button>
          <button
            className="hover:text-[#f05d5e] transition-all"
            onClick={() => {
              setCategory("back");
              setToggle(false);
            }}
          >
            <Link href={"/"}>Back</Link>
          </button>
          <button
            className="hover:text-[#f05d5e] transition-all py-1 border-t border-b border-[#f05d5e]"
            onClick={() => {
              setCategory("legs");
              setToggle(false);
            }}
          >
            <Link href={"/"}>Legs</Link>
          </button>
          <button
            className="hover:text-[#f05d5e] transition-all py-1"
            onClick={() => {
              setCategory("arms");
              setToggle(false);
            }}
          >
            <Link href={"/"}>Arms</Link>
          </button>
        </div>
      )}
    </div>
  );
};
export default Categories;
