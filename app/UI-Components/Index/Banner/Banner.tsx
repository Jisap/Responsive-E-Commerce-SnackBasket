"use client";

import Image from "next/image";
import deliveryMan from "@/public/delivery-man.png";
import specialSnacks from "@/public/special-snacks-img.png";

const Banner = () => {
  return (
    <div className="px-[8%] lg:px-[12%] py-10">
      <div className="banner h-[300px] relative rounded-2xl flex justify-center items-center">
        <Image 
          src={deliveryMan}
          alt="delivery man"
          className="banner-img1 absolute -bottom-10 left-5"
        />

        <div className="flex flex-col items-center">
          <h1 className="text-white text-4xl leading-15 text-center Merienda">
            We Delivery on Next Day from 10:00 <br /> AM to 08:00 PM
          </h1>

          <p className="text-white">
            For orders starts from $100
          </p>

          <button className="px-8 py-3 my-3 text-lg font-semibold text-prim bg-prim-light rounded-md text-md hover:bg-white hover:text-prim cursor-pointer transition-all duration-300">
            Shop Now <i className="bi bi-cart"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner