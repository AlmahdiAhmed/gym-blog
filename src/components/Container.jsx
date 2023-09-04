import Blogs from "./Blogs";
import Featured from "./Featured";
import getData from "./getData";

const Container = async () => {
  const blogs = await getData();

  // const isDataEmpty = !Array.isArray(blogs) || blogs.length < 1 || !blogs;
  return (
    <div>
      <Featured blogs={blogs} />
      <Blogs blogs={blogs} />
    </div>
  );
};
export default Container;
