"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const Brands = () => {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="bg-prim-light p-3 rounded-2xl">
          <div className="title my-10 w-full flex justify-center items-center gap-5">
            <h1 className="text-4xl md:text-5xl Unbounded">Shop by Brands.</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Brands