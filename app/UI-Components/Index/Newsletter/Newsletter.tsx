"use client"

import Image from "next/image"
import newsletter from "@/public/newsletter-img.png"




const Newsletter = () => {
  return (
    <div className="px-[8%] lg:px-[12%] py-10">
      <div className="p-10 newsletter-wrap text-white rounded-2xl flex flex-col lg:flex-row justify-between items-center gap-5">
        <div className="w-full lg:w-1/2">
          <h1 className="Unbounded text-4xl lg:text-6xl">Dont&apos;t Miss Out on Grocery Deals</h1>
          <h3 className="text-md lg:text-2xl my-4 Unbounded">SING UP FOR THE UPDATE NEWSLETTER</h3>
        </div>
      </div>
    </div>
  )
}

export default Newsletter