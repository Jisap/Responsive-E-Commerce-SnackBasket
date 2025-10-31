"use client"

import Image from "next/image"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Category1 from "@/public/Category1.png";
import Category2 from "@/public/Category2.png";
import Category3 from "@/public/Category3.png";
import Category4 from "@/public/Category4.png";
import Category5 from "@/public/Category5.png";
import Category6 from "@/public/Category6.png";
import Category7 from "@/public/Category7.png";
import Category8 from "@/public/Category8.png";
import Category9 from "@/public/Category9.png";
import Category10 from "@/public/Category10.png";

import { CategoryType } from '../../../types/types';

const categories: CategoryType[] = [
  { image: Category1, title: "Vegetables", products: "125+ Products" },
  { image: Category2, title: "Fish & Meats", products: "90+ Products" },
  { image: Category3, title: "Desserts", products: "80+ Products" },
  { image: Category4, title: "Drinks & Juice", products: "60+ Products" },
  { image: Category5, title: "Animals Food", products: "100+ Products" },
  { image: Category6, title: "Fresh Fruits", products: "70+ Products" },
  { image: Category7, title: "Yummy Candy", products: "50+ Products" },
  { image: Category8, title: "Dairy & Eggs", products: "45+ Products" },
  { image: Category9, title: "Snacks", products: "110+ Products" },
  { image: Category10, title: "Frozen Foods", products: "40+ Products" },
]




const Category = () => {
  return (
    <div className="px-[8%] lg:px-[12%] py-10">
      <Swiper
        slidesPerView={8}
        spaceBetween={20}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1500,
        }}
        speed={1500}
        breakpoints={{
          1200: { slidesPerView: 8 },
          992: { slidesPerView: 5 },
          768: { slidesPerView: 4 },
          576: { slidesPerView: 3 },
          0: { slidesPerView: 3 },
        }}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="category-wrap flex flex-col justify-center items-center cusor-pointer">
              <div className="category-image">
                <Image 
                  src={category.image}
                  alt="category-image"
                  className="transition-all duration-300"
                />
              </div>

              <div className="category-info my-2 flex flex-col justify-center items-center">
                <h2 className="text-lg Unbounded hover:text-prim transition-all duration-300 text-center text-balance">
                  {category.title}
                </h2>

                <p className="text-gray-500">
                  {category.products}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Category