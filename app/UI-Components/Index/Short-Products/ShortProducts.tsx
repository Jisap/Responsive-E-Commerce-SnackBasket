"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import toast from "react-hot-toast";
import products from "@/app/JsonData/ShortProducts.json";
import Link from "next/link";

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

const ShortProducts = () => {


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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Featured */}
          <div className="flex flex-col rounded-2xl gap-2 p-3 border border-gray-300 hover:border-prim transition-all duration-300 cursor-pointer">
            <div className="short-product-title bg-prim-light py-2 px-4 rounded-md">
              <h2 className="Unbounded text-xl inline-block pb-2">Feat. Products</h2>
            </div>

            <div className="w-full mt-5">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1200}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
              >
                <SwiperSlide>
                  {products.Featured.map((item) => (
                    <Link 
                      key={item.Id} 
                      href={{
                        pathname: "/UI-Components/Shop",
                        query: {id: item.Id }
                      }}
                    >
                      <div className="short-product w-full flex justify-between items-center gap-3 mb-3">
                        <div className="w-1/3">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={200}
                            height={200}
                            className="object-contain border-gray-300 rounded-2xl"
                          />
                        </div>

                        <div className="w-1/1 short-product-info flex flex-col">
                          <h5 className="flex gap-1 text-gray-400 text-[12px]">
                            4.8 <i className="bi bi-star-fill text-yellow-500"></i> {item.review}
                          </h5>

                          <h2 className="Unbounded hover:text-prim transition-all duration-300">
                            {item.title}
                          </h2>

                          <div className="flex gap-2">
                            <h3 className="font-semibold">{item.price}</h3>
                            <del className="text-gray-400">{item.lessprice}</del>
                          </div>
                        </div>
                      </div>    
                    </Link>
                  ))}
                </SwiperSlide>

                <SwiperSlide>
                  {products.Featured.map((item) => (
                    <Link 
                      key={item.Id} 
                      href={{
                        pathname: "/UI-Components/Shop",
                        query: {id: item.Id }
                      }}
                    >
                      <div className="short-product w-full flex justify-between items-center gap-3 mb-3">
                        <div className="w-1/3">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={200}
                            height={200}
                            className="object-contain border-gray-300 rounded-2xl"
                          />
                        </div>

                        <div className="w-1/1 short-product-info flex flex-col">
                          <h5 className="flex gap-1 text-gray-400 text-[12px]">
                            4.8 <i className="bi bi-star-fill text-yellow-500"></i> {item.review}
                          </h5>

                          <h2 className="Unbounded hover:text-prim transition-all duration-300">
                            {item.title}
                          </h2>

                          <div className="flex gap-2">
                            <h3 className="font-semibold">{item.price}</h3>
                            <del className="text-gray-400">{item.lessprice}</del>
                          </div>
                        </div>
                      </div>    
                    </Link>
                  ))}
                </SwiperSlide>
              </Swiper>
            </div>             
          </div>

          {/* Top Selling */}
          <div className="flex flex-col rounded-2xl gap-2 p-3 border border-gray-300 hover:border-prim transition-all duration-300 cursor-pointer">
            <div className="short-product-title bg-prim-light py-2 px-4 rounded-md">
              <h2 className="Unbounded text-xl inline-block pb-2">Top Selling</h2>
            </div>

            <div className="w-full mt-5">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1200}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
              >
                <SwiperSlide>
                  {products.TopSelling.map((item) => (
                    <Link
                      key={item.Id}
                      href={{
                        pathname: "/UI-Components/Shop",
                        query: { id: item.Id }
                      }}
                    >
                      <div className="short-product w-full flex justify-between items-center gap-3 mb-3">
                        <div className="w-1/3">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={200}
                            height={200}
                            className="object-contain border-gray-300 rounded-2xl"
                          />
                        </div>

                        <div className="w-1/1 short-product-info flex flex-col">
                          <h5 className="flex gap-1 text-gray-400 text-[12px]">
                            4.8 <i className="bi bi-star-fill text-yellow-500"></i> {item.review}
                          </h5>

                          <h2 className="Unbounded hover:text-prim transition-all duration-300">
                            {item.title}
                          </h2>

                          <div className="flex gap-2">
                            <h3 className="font-semibold">{item.price}</h3>
                            <del className="text-gray-400">{item.lessprice}</del>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </SwiperSlide>

                <SwiperSlide>
                  {products.TopSelling.map((item) => (
                    <Link
                      key={item.Id}
                      href={{
                        pathname: "/UI-Components/Shop",
                        query: { id: item.Id }
                      }}
                    >
                      <div className="short-product w-full flex justify-between items-center gap-3 mb-3">
                        <div className="w-1/3">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={200}
                            height={200}
                            className="object-contain border-gray-300 rounded-2xl"
                          />
                        </div>

                        <div className="w-1/1 short-product-info flex flex-col">
                          <h5 className="flex gap-1 text-gray-400 text-[12px]">
                            4.8 <i className="bi bi-star-fill text-yellow-500"></i> {item.review}
                          </h5>

                          <h2 className="Unbounded hover:text-prim transition-all duration-300">
                            {item.title}
                          </h2>

                          <div className="flex gap-2">
                            <h3 className="font-semibold">{item.price}</h3>
                            <del className="text-gray-400">{item.lessprice}</del>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          {/* On Sale */}
          <div className="flex flex-col rounded-2xl gap-2 p-3 border border-gray-300 hover:border-prim transition-all duration-300 cursor-pointer">
            <div className="short-product-title bg-prim-light py-2 px-4 rounded-md">
              <h2 className="Unbounded text-xl inline-block pb-2">On Sale</h2>
            </div>

            <div className="w-full mt-5">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1200}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
              >
                <SwiperSlide>
                  {products.OnSale.map((item) => (
                    <Link
                      key={item.Id}
                      href={{
                        pathname: "/UI-Components/Shop",
                        query: { id: item.Id }
                      }}
                    >
                      <div className="short-product w-full flex justify-between items-center gap-3 mb-3">
                        <div className="w-1/3">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={200}
                            height={200}
                            className="object-contain border-gray-300 rounded-2xl"
                          />
                        </div>

                        <div className="w-1/1 short-product-info flex flex-col">
                          <h5 className="flex gap-1 text-gray-400 text-[12px]">
                            4.8 <i className="bi bi-star-fill text-yellow-500"></i> {item.review}
                          </h5>

                          <h2 className="Unbounded hover:text-prim transition-all duration-300">
                            {item.title}
                          </h2>

                          <div className="flex gap-2">
                            <h3 className="font-semibold">{item.price}</h3>
                            <del className="text-gray-400">{item.lessprice}</del>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </SwiperSlide>

                <SwiperSlide>
                  {products.OnSale.map((item) => (
                    <Link
                      key={item.Id}
                      href={{
                        pathname: "/UI-Components/Shop",
                        query: { id: item.Id }
                      }}
                    >
                      <div className="short-product w-full flex justify-between items-center gap-3 mb-3">
                        <div className="w-1/3">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={200}
                            height={200}
                            className="object-contain border-gray-300 rounded-2xl"
                          />
                        </div>

                        <div className="w-1/1 short-product-info flex flex-col">
                          <h5 className="flex gap-1 text-gray-400 text-[12px]">
                            4.8 <i className="bi bi-star-fill text-yellow-500"></i> {item.review}
                          </h5>

                          <h2 className="Unbounded hover:text-prim transition-all duration-300">
                            {item.title}
                          </h2>

                          <div className="flex gap-2">
                            <h3 className="font-semibold">{item.price}</h3>
                            <del className="text-gray-400">{item.lessprice}</del>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          {/* Top Rated */}
          <div className="flex flex-col rounded-2xl gap-2 p-3 border border-gray-300 hover:border-prim transition-all duration-300 cursor-pointer">
            <div className="short-product-title bg-prim-light py-2 px-4 rounded-md">
              <h2 className="Unbounded text-xl inline-block pb-2">Top Rated</h2>
            </div>

            <div className="w-full mt-5">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1200}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
              >
                <SwiperSlide>
                  {products.TopRated.map((item) => (
                    <Link
                      key={item.Id}
                      href={{
                        pathname: "/UI-Components/Shop",
                        query: { id: item.Id }
                      }}
                    >
                      <div className="short-product w-full flex justify-between items-center gap-3 mb-3">
                        <div className="w-1/3">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={200}
                            height={200}
                            className="object-contain border-gray-300 rounded-2xl"
                          />
                        </div>

                        <div className="w-1/1 short-product-info flex flex-col">
                          <h5 className="flex gap-1 text-gray-400 text-[12px]">
                            4.8 <i className="bi bi-star-fill text-yellow-500"></i> {item.review}
                          </h5>

                          <h2 className="Unbounded hover:text-prim transition-all duration-300">
                            {item.title}
                          </h2>

                          <div className="flex gap-2">
                            <h3 className="font-semibold">{item.price}</h3>
                            <del className="text-gray-400">{item.lessprice}</del>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </SwiperSlide>

                <SwiperSlide>
                  {products.TopRated.map((item) => (
                    <Link
                      key={item.Id}
                      href={{
                        pathname: "/UI-Components/Shop",
                        query: { id: item.Id }
                      }}
                    >
                      <div className="short-product w-full flex justify-between items-center gap-3 mb-3">
                        <div className="w-1/3">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={200}
                            height={200}
                            className="object-contain border-gray-300 rounded-2xl"
                          />
                        </div>

                        <div className="w-1/1 short-product-info flex flex-col">
                          <h5 className="flex gap-1 text-gray-400 text-[12px]">
                            4.8 <i className="bi bi-star-fill text-yellow-500"></i> {item.review}
                          </h5>

                          <h2 className="Unbounded hover:text-prim transition-all duration-300">
                            {item.title}
                          </h2>

                          <div className="flex gap-2">
                            <h3 className="font-semibold">{item.price}</h3>
                            <del className="text-gray-400">{item.lessprice}</del>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShortProducts