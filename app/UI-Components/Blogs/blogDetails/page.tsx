"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import blogData from "@/app/JsonData/Blogs.json";


const BlogDetails = () => {

  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const blog = blogData.find((b) => b.id.toString() === id);

  if (!blog) return <div>Blog Not Found</div>

  return (
    <div>page</div>
  )
}

export default BlogDetails