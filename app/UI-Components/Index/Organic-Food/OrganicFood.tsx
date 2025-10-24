"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import toast from "react-hot-toast";
import hotDealBanner from "@/public/hot-deals-img.png";
import products from "@/app/JsonData/OrganicFood.json"
import Link from 'next/link';



type ProductType = {
  Id: string;
  image: string;
  title: string;
  price: string;
  lessprice: string;
  review: string;
  sold: string;
  sale: string;
  quantity?: number;
};


const OrganicFood = () => {

  const handleAddToCart = (product: ProductType) => {
    try {
      const cart: (ProductType & { quantity: number })[] = JSON.parse(
        localStorage.getItem("cart") || "[]"
      );

      const existingProduct = cart.find((item) => item.Id === product.Id);

      if (existingProduct) {
        toast(`${product.title} is already added to cart`, { icon: "👏" });
      } else {
        cart.push({ ...product, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(cart));
        window.dispatchEvent(new Event("storageUpdate"));
        toast.success(`${product.title} is added to cart`);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Something went wrong while adding to cart");
    }
  };

  const handleAddToWishlist = (product: ProductType) => {
    try {
      const wishlist: ProductType[] = JSON.parse(
        localStorage.getItem("wishlist") || "[]"
      );

      const existingProduct = wishlist.find((item) => item.Id === product.Id);

      if (existingProduct) {
        toast(`${product.title} is already added to wishlist`, { icon: "👏" });
      } else {
        wishlist.push(product);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        window.dispatchEvent(new Event("storageUpdate"));
        toast.success(`${product.title} is added to wishlist`);
      }
    } catch (error) {
      console.error("Error adding to wishlist:", error);
      toast.error("Something went wrong while adding to wishlist");
    }
  };

  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="title my-10 w-full flex flex-col lg:flex-eow justify-between items-start gap-5">
          <h1 className="text-4xl md:text-5xl Unbounded">Organic Food.</h1>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-5">
          <div className="w-full">
            <Swiper
              spaceBetween={20}
              slidesPerView={4}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              breakpoints={{
                1200: { slidesPerView: 4 },
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
    </>
  )
}

export default OrganicFood