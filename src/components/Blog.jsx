const Blog = ({ blog }) => {
  const { _id, title, content, img } = blog;
  return <div>{title}</div>;
};
export default Blog;
