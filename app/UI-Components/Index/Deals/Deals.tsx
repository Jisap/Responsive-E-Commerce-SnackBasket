"use client"

import Image from "next/image"
import { StaticImageData } from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Deal1 from "@/public/Deals-bg1.png";
import Deal2 from "@/public/Deals-bg2.png";

import toast from "react-hot-toast";

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

const Deals = () => {
  
  const handleAddToCart = (product: any) => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]"); // Obtener el carro de la sesión
  
    const existingProduct = cart.fin((item: any) => item.Id === product.Id); // Comprobar si el producto ya existe en el carro
  
    if(existingProduct) {
      toast(`${product.title} is already in the cart!`, {
        icon: <i className="bi bi-exclamation-triangle-fill text-yellow-500 text-2xl"></i>,
        style: {
          border: "1px solid #facc15",
          padding: "16px",
          color: "#333",
          background: "#fff9c4"
        }
      })
    } else {
      cart.push({...product, qty: 1});                    // Agregar el producto al carro
      localStorage.setItem("cart", JSON.stringify(cart)); // Actualizar el carro en el almacenamiento local
      window.dispatchEvent(new Event("storageUpdate"));   // Lanza evento de actualización de almacenamiento

      toast(`${product.title} added to the cart!`);
    }
  }  

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
              className={`deals-wrap px-5 py-6 h-[400px] md:h-[250px] rounded-2xl flex flex-col lg:flex-row justify-between items-center ${deal.className || ""
                } gap-8 `}
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
    </div>
  )
}

export default Deals