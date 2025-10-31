"use client"

import blogData from "@/app/JsonData/Blogs.json";
import { useState } from "react";
import BlogDetails from "../blogDetails/page";
import Link from "next/link";

const categories = [
  "Fruits & Vegetables",
  "Dairy & Bakery",
  "Snacks & Beverages",
  "Staples",
  "Frozen & Packaged Food",
  "Personal Care",
  "Household Essentials",
]


const Blogs = () => {

  const [selectedBlog, setSelectedBlog] = useState<Number | null>(null);

  if(selectedBlog !== null){
    return (
      <BlogDetails 
        blog={blogData[selectedBlog]} 
        goBack={() => setSelectedBlog(null)}
      />
    )
  }

  return (
    <>
      {/* Breadcrumbs */}
      <div className="px-[8%] lg:px-[12%] bg-[#E6F9EF] py-5">
        <div className="flex justify-between items-center">

          <div className="flex">
            <Link href="/" className="text-2xl Unbounded">
              Home &nbsp; -
            </Link>
            <h2 className="Unbounded text-2xl text-prim">
              &nbsp; Blog
            </h2>
          </div>
        </div>
      </div>

      <div className="px-[8%] lg:px-[12%] py-5 mt-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-5">
          {/* Blog List */}
          <div className="w-full lg:w-1/1 gap-5">
            {blogData.map((blog, index) => (
              <div 
                key={index} 
                className="flex flex-col gap-5 mb-10 cursor-pointer"
                onClick={() => setSelectedBlog(index)} 
              >
                <div className="blog-image overflow-hidden rounded-md">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="transition-transform duration-300 ease-in-out hover:scale-110"  
                  />
 
                </div>

                <div className="blog-content mt-3">
                  <span className="bg-[#e6f9ef] p-3 shadow-md text-2xl Unbounded">
                    {blog.tag}
                  </span>

                  <h2 className="text-4xl Unbounded mt-5 hover:text-prim hover:underline">
                    {blog.title}
                  </h2>

                  <p className="mt-5 text-lg border-b pb-3 border-gray-400">
                    {blog.pere}
                  </p>

                  <div className="flex mt-5 gap-5">
                    <p className="text-gray-500">
                      <i className="bi bi-calendar2-week text-prim pr-1"></i>
                      {blog.date}
                    </p>

                    <p className="text-gray-500">
                      <i className="bi bi-chat-text text-prim pr-1"></i>
                      {blog.comment}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/2 gap-5 sticky top-22 left-0 h-[100%]">
            <div className="border border-gray-300 rounded">
              <div className="border-b border-gray-300 p-5">
                <h2 className="Unbounded text-2xl">
                  Recent Post
                </h2>
              </div>

              <div className="p-5">
                {blogData.map((blog, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-center mb-5 gap-5 curosr-pointer"
                    onClick={() => setSelectedBlog(index)}
                  >
                    <div className="w-1/2">
                      <img src={blog.image} alt={blog.title} />
                    </div>

                    <div className="w-1/2">
                      <div className="blog-content">
                        <h2 className="Unbounded hover:text-prim hover:underline">
                          {blog.title} 
                        </h2>

                        <div className="flex gap-5 mt-2">
                          <p className="text-gray-500">
                            <i className="bi bi-calendar2-week text-prim pr-1"></i>
                            {blog.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs