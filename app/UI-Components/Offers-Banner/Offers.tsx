"use client";

import Image, { StaticImageData } from "next/image";

import Deal1 from "@/public/offer-img1.png";
import Deal2 from "@/public/offer-img2.png";

// import products from "@/app/Data/BestDeals.json";
type DealItem = {
  image: StaticImageData;
  title: string;
  description: string;
  className?: string;
};

const dealsData: DealItem[] = [
  {
    image: Deal1,
    title: "$5 off your first order",
    description: "Delivery by 6:15am",
  },
  {
    image: Deal2,
    title: "$5 off your first order",
    description: "Delivery by 6:15am",
  },
];
function Offers() {
  return (
    <div className="px-[8%] lg:px-[12%] py-10">
      <div className="flex flex-col lg:flex-row gap-5">
        {dealsData.map((deal, index) => (
          <div
            key={index}
            className={`
              offer-wrap px-5 py-6 rounded-2xl flex flex-col md:flex-row justify-center items-center gap-2  
              ${deal.className || ""} 
            `}
          >
            <div className="w-full lg:w-1/2 deal-image">
              <Image src={deal.image} alt={deal.title} className="" />
            </div>

            <div className="w-full lg:w-1/2 deal-info">
              <h2 className="Merienda font-bold text-white text-4xl leading-11 whitespace-pre-line">
                {deal.title}
              </h2>

              <p className="my-2 text-md text-white font-normal">
                {deal.description}{" "}
                <span className="text-yellow-500">expired Aug, 5 </span>
              </p>

              <button className="px-5 py-3 rounded-full text-white font-bold mt-5 bg-black hover:bg-white hover:text-prim transition-all duration-300 cursor-pointer">
                Shop Now <i className="bi bi-arrow-right ps-2"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;