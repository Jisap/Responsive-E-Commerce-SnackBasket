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

          {/* Location dropdown */}
          <div className="hidden lg:flex text-sm ms-5 bg-white items-center ps-4 rounded-lg border border-gray-400">
            <i className="bi bi-geo-alt text-lg text-prim"></i>
            <select
              name="location"
              className="px-3 rounded-lg text-prim font-semibold focus:border-prim appearance-none cursor-pointer outline-none"
              defaultValue="New York"
            >
              <option>New York</option>
              <option>Los Angeles</option>
              <option>Chicago</option>
              <option>Houston</option>
              <option>Phoenix</option>
              <option>Philadelphia</option>
            </select>
          </div>
        </div>

        {/* Whislist & Cart  */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Whislist */}
          <Link href="#" className="relative">
            <i className="bi bi-heart text-gray-600 text-xl hover:text-prim transition-all"></i>
            <span className="absolute -top-2 -right-2 bg-prim text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              1
            </span>
          </Link>
          {/* Cart */}
          <Link href="#" className="relative">
            <i className="bi bi-cart text-gray-600 text-xl hover:text-prim transition-all"></i>
            <span className="absolute -top-2 -right-2 bg-prim text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              2
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MiddleNavbar