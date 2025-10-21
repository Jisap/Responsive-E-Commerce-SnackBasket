"use client";

import Image from "next/image";

import products from "@/app/JsonData/Recommend.json";
import toast from "react-hot-toast";
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




const Recommended = () => {
  return (
    <div className="px-[8%] lg:px-[12%] py-10">
      <div className="title my-10 w-full flex flex-col lg:flex-eow justify-between items-start gap-5">
        <h1 className="text-4xl md:text-5xl Unbounded">Recommended for you.</h1>
      </div>

      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {(products as ProductType[]).map((product, index) => (
            <div
              key={index}
              className="product-wrap border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-all hover:border-[var(--prim-color)] cursor-pointer duration-300"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={180}
                height={180}
                className="object-contain mt-10"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Recommended