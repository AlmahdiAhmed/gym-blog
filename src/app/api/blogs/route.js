import connect from "@/libs/db";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connect();
    const blogs = await Blog.find();
    return new NextResponse(JSON.stringify(blogs), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
