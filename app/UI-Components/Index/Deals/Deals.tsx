"use client"

import Image from "next/image"
import { StaticImageData } from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Deal1 from "@/public/Deals-img1.png";
import Deal2 from "@/public/Deals-img2.png";

import { useCartActions } from "@/app/hooks/useCartActions";
type DealItem = {
  image: StaticImageData;
  title: string;
  description: string;
  className?: string;
};

const dealsData: DealItem[] = [
  {
    image: Deal1,
    title: "Fresh Vegetables",
    description: "Shop fresh, healthy vegetables delivered daily. Taste the garden in every bite!",
  },
  {
    image: Deal2,
    title: "Daily Snacks",
    description: "Tasty daily snacks for every craving — fresh, fun, and ready to munch!",
    className: "deals-wrap2",
  },
  {
    image: Deal1,
    title: "Fresh Vegetables",
    description: "Shop fresh, healthy vegetables delivered daily. Taste the garden in every bite!",
  },
];

import products from "@/app/JsonData/BestDeals.json";
import Link from "next/link";

const Deals = () => {

  const { handleAddToCart } = useCartActions();

  return (
    <div className="px-[8%] lg:px-[12%] py-10">
      <div className="title my-10 w-full flex flex-col lg:flex-row justify-between items-start gap-5">
        <h1 className="text-5xl Unbounded">Todays Best Deals.</h1>
      </div>

      <Swiper
        slidesPerView={2}
        loop={true}
        spaceBetween={20}
        autoplay={{ delay: 1500 }}
        modules={[Autoplay]}
        speed={1500}
        breakpoints={{
          1200: { slidesPerView: 2 },
          991: { slidesPerView: 2 },
          767: { slidesPerView: 1 },

          575: { slidesPerView: 1 },
          0: { slidesPerView: 1 },
        }}
      >
        {dealsData.map((deal, index) => (
          <SwiperSlide key={index}>
            <div
              className={`
                deals-wrap px-5 py-6 h-[400px] md:h-[250px] rounded-2xl flex flex-col lg:flex-row justify-between items-center 
                ${deal.className || ""} gap-8 `
              }
            >
              <div className="w-full lg:w-1/2 deal-image">
                <Image
                  src={deal.image}
                  alt={deal.title}
                  width={500}
                  height={500}
                  className="w-full"
                />
              </div>

              <div className="w-full lg:w-1/2 deal-info">
                <h2 className=" Merienda text-4xl leading-11 whitespace-pre-line font-bold">
                  {deal.title}
                </h2>

                <p className="my-2 text-gray-800 font-normal">
                  {deal.description}
                </p>

                <button className="px-5 py-2 cursor-pointer rounded-full text-white bg-prim font-bold hover:bg-prim-light hover:text-prim transition-all duration-500">
                  Shop Now <i className="bi bi-cart3 ms-0 md:ms-3"></i>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="my-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {products.map((product, index) => (
            <div
              key={index}
              className="product-wrap border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-all hover:border-prim cursor-pointer duration-300"
            >
              <div className="relative flex justify-center items-center w-full h-50">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={180}
                  height={180}
                  className="object-contain mt-10"
                />

                <div
                  onClick={() => handleAddToCart(product)}
                  className="absolute top-0 right-0 flex justify-between items-center mt-1"
                >
                  <button className="px-4 py-2 cursor-pointer font-semibold text-[var(--prim-color)] bg-[var(--prim-light)] rounded-full text-md hover:bg-[var(--prim-color)] hover:text-white transition-all duration-500">
                    Add <i className="bi bi-cart"></i>
                  </button>
                </div>
              </div>

              <Link
                href={{
                  pathname: "/UI-Components/Shop",
                  query: { id: product.Id },
                }}
              >
                <div className="space-y-1 mt-5 product-info">
                  <div className="flex ite gap-2">
                    <span className="text-gray-500 text-sm line-through">
                      {product.lessprice}
                    </span>

                    <span className="text-xl font-semibold ">
                      {product.price}{" "}
                      <span className="text-gray-500 text-sm">/Qty</span>{" "}
                    </span>
                  </div>

                  <span className="flex items-center text-yellow-500 text-md">
                    <i className="bi bi-star-fill me-1"></i> {product.review}
                  </span>

                  <h2 className="text-lg font-normal Unbounded my-2 hover:text-[var(--prim-color)] transition-all duration-500">
                    {product.title}
                  </h2>

                  <p className="text-md text-gray-500 flex items-center gap-1">
                    <i className="bi bi-shop text-[var(--prim-color)]"></i> By
                    Lucky SuperMarket
                  </p>

                  <p className="mt-3 Unbounded text-sm text-gray-600">
                    Sold: {product.sold}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Deals