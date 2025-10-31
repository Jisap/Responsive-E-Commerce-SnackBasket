"use client"

import Link from "next/link"
import { useSearchParams, useRouter } from "next/navigation"
import blogData from "@/app/JsonData/Blogs.json";

const BlogDetails = () => {

  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get("id");
  const blog = blogData.find((b) => b.id.toString() === id);

  if (!blog) return <div>Blog Not Found</div>

  return (
    <>
      {/* Breadcrumbs */}
      <div className="px-[8%] lg:px-[12%] bg-[#E6F9EF] py-5">
        <div className="flex justify-between items-center">
          
          <span className="text-xl font-normal hidden lg:block ps-2">
            {blog.title}
          </span>

          <div className="flex">
            <Link href="/" className="text-2xl Unbounded">
              Home &nbsp; -
            </Link>
            <h2 className="Unbounded text-2xl text-prim">
              &nbsp; Blog Details
            </h2>
          </div>
        </div>
      </div>

      <div className="px-[8%] lg:px-[12%] py-5 mt-10">
        <button 
          onClick={() => router.back()} 
          className="mb-5 bg-prim text-white px-4 py-2 rounded hover:bg-opacity-90 Unbounded"
        >
          <i className="bi bi-arrow-left pr-2"></i>
          Volver a los Blogs
        </button>
        
        <div>
          <img src={blog.image} alt={blog.title} className="rounded-md w-full" />
          <div className="blog-content mt-5">
            <span className="bg-[#e6f9ef] p-3 shadow-md text-2xl Unbounded">
              {blog.tag}
            </span>
            <h1 className="text-4xl Unbounded mt-5">{blog.title}</h1>
            <div className="flex mt-5 gap-5 border-b pb-3 border-gray-400">
              <p className="text-gray-500">
                <i className="bi bi-calendar2-week text-prim pr-1"></i>
                {blog.date}
              </p>
              <p className="text-gray-500">
                <i className="bi bi-chat-text text-prim pr-1"></i>
                {blog.comment}
              </p>
            </div>
            <p className="mt-5 text-lg">{blog.pere}</p>
            <p className="mt-5 text-lg">{blog.pere2}</p>
            <p className="text-lg">{blog.pere3}</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default BlogDetails;