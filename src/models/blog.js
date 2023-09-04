import mongoose from "mongoose";
import { Schema } from "mongoose";
const blog = new Schema(
  {
    title: String,
    content: String,
    img: String,
    featured: String,
    category: String,
  },
  { timestamps: true }
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", blog);
export default Blog;
