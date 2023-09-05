import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import AppContext from "@/components/CategoryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gym blog",
  description: "Find your workout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[url("../../public/bg.jpg")] max-w-2xl px-3 mx-auto`}
      >
        <AppContext>
          <Navbar />
          {children}
        </AppContext>
      </body>
    </html>
  );
}
