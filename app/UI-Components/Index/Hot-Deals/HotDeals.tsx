"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import hotDealBanner from "@/public/hot-deals-img.png";
import products from "@/app/JsonData/HotDeals.json"; 
import { useCartActions} from "@/app/hooks/useCartActions";

const HotDeals = () => {

  const { handleAddToCart, handleAddToWishlist } = useCartActions();

  return (
    <div className="px-[8%] lg:px-[12%] py-10">
      <div className="title my-10 w-full flex flex-col lg:flex-row justify-between items-start gap-5">
        <h1 className="text-4xl md:text-5xl Unbounded">
          Today&apos;s Hot Deals.
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-5">
        {/* Banner */}
        <div className="w-full lg:w-1/3 p-10 rounded-2xl hot-deal-banner flex flex-col items-center bg-[var(--prim-color)]">
          <Image src={hotDealBanner} alt="hotDealBanner" />

          <h1 className="text-4xl text-white Merienda my-5">
            Fresh Vegetables
          </h1>

          <p className="text-center text-white font-semibold mb-3">
            Get the freshest vegetables delivered to your doorstep. Healthy,
            organic, and full of flavor.
          </p>

          <button className="px-4 w-full py-2 cursor-pointer font-semibold text-prim bg-prim-light rounded-full text-md hover:bg-prim-dark hover:text-white transition-all duration-500">
            Add To Cart <i className="bi bi-cart ms-1"></i>
          </button>
        </div>

        {/* Swiper */}
        <div className="w-full lg:w-2/3">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              1200: { slidesPerView: 2.5 },
              991: { slidesPerView: 2.5 },
              575: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                {/* Product Card */}
                <div className="product-wrap border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-all hover:border-prim cursor-pointer duration-300">
                  <div className="relative flex justify-center items-center w-full h-50">
                    {/* Product Image */}
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={180}
                      height={180}
                      className="object-contain mt-10"
                    />

                    {/* Wishlist Button */}
                    <div
                      onClick={() => handleAddToWishlist(product)}
                      className="absolute top-0 left-0 w-[40px] h-[40px] rounded-full text-prim bg-prim-light hover:bg-prim hover:text-white transition-all flex justify-center items-center"
                    >
                      <i className="bi bi-balloon-heart text-2xl"></i>
                    </div>

                    {/* Sale Badge */}
                    <span
                      className={`
                        absolute off-product top-0 right-0 px-4 py-2 Merienda text-xs font-bold text-white rounded 
                        ${product.sale === "New"
                          ? "bg-yellow-400"
                          : product.sale.includes("%")
                            ? "bg-red-400"
                            : "opacity-0"
                        }
                      `}
                    >
                      {product.sale}
                    </span>
                  </div>

                  <div className="text-center mt-5">
                    <h3 className="font-semibold text-gray-800">
                      {product.title}
                    </h3>

                    <div className="flex justify-center items-center gap-2 mt-2">
                      <span className="text-prim font-bold">
                        {product.price}
                      </span>
                      <span className="text-gray-400 line-through text-sm">
                        {product.lessprice}
                      </span>
                    </div>

                    <div className="text-sm text-gray-500 mt-1">
                      {product.review} • Sold {product.sold}
                    </div>

                    <button
                      onClick={() => handleAddToCart(product)}
                      className="px-4 cursor-pointer border border-prim py-2 mt-3 text-sm font-semibold text-prim-light hover:text-prim bg-prim rounded-full hover:bg-prim-light transition-all duration-300"
                    >
                      Add To Cart <i className="bi bi-cart ms-1"></i>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default HotDeals