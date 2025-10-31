"use client"

import Image from "next/image";
import Hero1 from "@/public/hero-img1.png"; // Asegúrate de que estas rutas sean correctas
import Hero2 from "@/public/hero-img2.png"; // Asegúrate de que estas rutas sean correctas
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useState, useEffect } from "react";
 

const Hero = () => {

  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (swiper && !swiper.destroyed) {
      // @ts-expect-error: Swiper's navigation params are read-only, but we need to update them dynamically.
      swiper.params.navigation.prevEl = prevRef.current;
      // @ts-expect-error: Swiper's navigation params are read-only, but we need to update them dynamically.
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <div className="px-[8%] lg:px-[12%] py-5">
      <div className="relative p-10 px-20 Hero flex items-center gap-5">
        <Swiper
          slidesPerView={1}
          loop={true}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={setSwiper}
        >

          {/* Slide 1 */}
          <SwiperSlide>
            <div className="hero-wrap w-full flex flex-col lg:flex-row items-center justify-between">
              <div className="w-full lg:w-1/1">
                <h1 className="Merienda text-2xl lg:text-[3.6rem] font-bold">
                  Daily Grocery Order and Get Express Delivery
                </h1>

                <p className="w-[80%] my-3">
                  Order your daily groceries online and enjoy express delivery
                  straight to your doorstep. Fresh produce, essentials, and more—fast,
                  convenient, and reliable service for your everyday needs.
                </p>

                <button className="px-5 py-3 rounded-full text-white font-bold mt-5 bg-prim hover:bg-white hover:text-prim transition-all duration-300 cursor-pointer">
                  Shop Now
                  <i className="bi bi-cart3 px-3"></i>
                </button>
              </div>

              <div className="hero-image w-full lg:w-1/2">
                <Image 
                  src={Hero1}
                  alt="hero-image"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="hero-wrap w-full flex flex-col lg:flex-row items-center justify-between">
              <div className="w-full lg:w-1/1">
                <h1 className="Merienda text-2xl lg:text-[3.6rem] font-bold">
                  Daily Grocery Order and Get Express Delivery
                </h1>

                <p className="w-[80%] my-3">
                  Order your daily groceries online and enjoy express delivery
                  straight to your doorstep. Fresh produce, essentials, and more—fast,
                  convenient, and reliable service for your everyday needs.
                </p>

                <button className="px-5 py-3 rounded-full text-white font-bold mt-5 bg-prim hover:bg-white hover:text-prim transition-all duration-300 cursor-pointer">
                  Shop Now
                  <i className="bi bi-cart3 px-3"></i>
                </button>
              </div>

              <div className="hero-image w-full lg:w-1/2">
                <Image 
                  src={Hero2}
                  alt="hero-image"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Slider Buttons */}
        <div 
          ref={prevRef}
          className="swiper-button-prev-custom absolute left-5 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white/80 px-3 py-2 shadow hover:bg-white"
        >
          <i className="ri-arrow-left-s-line text-2xl text-gray-800"></i>
        </div>

        <div 
          ref={nextRef}
          className="swiper-button-next-custom absolute right-5 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white/80 px-3 py-2 shadow hover:bg-white"
        >
          <i className="ri-arrow-right-s-line text-2xl text-gray-800"></i>
        </div>
      </div>
    </div>
  )
}

export default Hero