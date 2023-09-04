import Blogs from "./Blogs";
import getData from "./getData";

const Container = async () => {
  const blogs = await getData();

  // const isDataEmpty = !Array.isArray(blogs) || blogs.length < 1 || !blogs;
  return (
    <div>
      <Blogs blogs={blogs} />
    </div>
  );
};
export default Container;
