"use client";
import { createContext, useState } from "react";

export const CategoryProvider = createContext();
export default function AppContext({ children }) {
  const [category, setCategory] = useState("back");
  return (
    <CategoryProvider.Provider value={{ category, setCategory }}>
      {children}
    </CategoryProvider.Provider>
  );
}
