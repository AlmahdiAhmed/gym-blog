import Blog from "@/components/Blog";
import Blogs from "@/components/Blogs";
import Test from "@/components/Test";
import getData from "@/components/getData";

export default async function Home() {
  const blogs = await getData();

  const isDataEmpty = !Array.isArray(blogs) || blogs.length < 1 || !blogs;
  return (
    <div>
      home
      <div>
        <Blogs blogs={blogs} />
      </div>
    </div>
  );
}
