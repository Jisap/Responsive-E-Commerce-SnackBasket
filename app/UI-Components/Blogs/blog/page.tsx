"use client"

import { useState, useMemo } from "react";
import blogData from "@/app/JsonData/Blogs.json";
import Link from "next/link";

const Blogs = () => {
  // Generamos dinámicamente las categorías a partir de los blogs existentes.
  // Usamos Set para obtener valores únicos y luego lo convertimos a un array.
  const categories = useMemo(() => Array.from(new Set(blogData.map(blog => blog.tag))), []);
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredBlogs = useMemo(() => {
    if (!selectedCategory) {
      return blogData;
    }
    return blogData.filter((blog) => blog.tag === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryClick = (category: string | null) => {
    setSelectedCategory(category);
  };

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
          <div className="w-full lg:w-2/3">
            {filteredBlogs.map((blog) => (
              <Link 
                key={blog.id} 
                href={`/UI-Components/Blogs/blogDetails?id=${blog.id}`} 
                className="flex flex-col gap-5 mb-10 cursor-pointer group"
              >
                  <div className="blog-image overflow-hidden rounded-md">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="transition-transform duration-300 ease-in-out group-hover:scale-110"  
                    />
  
                  </div>

                  <div className="blog-content mt-3">
                    <span className="bg-[#e6f9ef] p-3 shadow-md text-2xl Unbounded">
                      {blog.tag}
                    </span>

                    <h2 className="text-4xl Unbounded mt-5 group-hover:text-prim group-hover:underline">
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
              </Link>
            ))}
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 gap-5 sticky top-28 left-0 h-fit">
            {/* Categories */}
            <div className="border border-gray-300 rounded mb-8">
              <div className="border-b border-gray-300 p-5">
                <h2 className="Unbounded text-2xl">
                  Categories
                </h2>
              </div>
              <div className="p-5 flex flex-col items-start">
                <button
                  onClick={() => handleCategoryClick(null)}
                  className={`w-full text-left p-2 rounded mb-2 transition-colors ${
                    selectedCategory === null
                      ? 'bg-prim text-white'
                      : 'bg-gray-100 hover:bg-prim-light'
                  }`}
                >
                  All Categories
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`w-full text-left p-2 rounded mb-2 transition-colors ${
                      selectedCategory === category
                        ? 'bg-prim text-white'
                        : 'bg-gray-100 hover:bg-prim-light'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Post */}
            <div className="border border-gray-300 rounded">
              <div className="border-b border-gray-300 p-5">
                <h2 className="Unbounded text-2xl">
                  Recent Post
                </h2>
              </div>

              <div className="p-5">
                {blogData.map((blog) => (
                  <Link
                    key={blog.id}
                    href={`/UI-Components/Blogs/blogDetails?id=${blog.id}`}
                    className="flex justify-between items-center mb-5 gap-5 cursor-pointer group"
                  >
                    <div className="w-1/2">
                      <img src={blog.image} alt={blog.title} />
                    </div>

                    <div className="w-1/2">
                      <div className="blog-content">
                        <h2 className="Unbounded group-hover:text-prim group-hover:underline">
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
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs;