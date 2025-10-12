"use client"

import Link from "next/link"


const MiddleNavbar = () => {
  return (
    <div className="w-full bg-prim-light border-b border-gray-300 relative">
      <div className="flex items-center justify-between py-5 px-[8%] lg:px-[12%]">
        {/* logo */}
        <Link href="/" className="text-3xl font-bold Merienda text-black">
          Snack<span className="text-prim">Basket</span>
        </Link>

        {/* Search */}
        <div className="flex flex-1 ms-6 lg:mx-0 max-w-xl relative">
          <input 
            type="text" 
            placeholder="Search for a product or brand"
            name="search" 
            id="search" 
            className="flex-1 border px-3 py-2 rounded-s-lg border-gray-400 outline-none" 
          />

          <button className="bg-prim text-white px-3 rounded-r cursor-pointer">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MiddleNavbar