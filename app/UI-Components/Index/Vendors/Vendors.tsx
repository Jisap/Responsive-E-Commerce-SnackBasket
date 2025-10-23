"use client";

import Image from "next/image";
import vendorsData from "@/app/JsonData/Vendors.json" 
import { useMemo } from "react";

type VendorType = {
  id: number;
  title: string;
  time: string;
  off: string;
  vendorMain: string;
  vendors: string[];
};

export default function Vendors() {
  const bgColors = useMemo(
    () => [
      "#F8EAE4",
      "#DEE6F3",
      "#DAF2DB",
      "#EBF1DA",
      "#F4F6E6",
      "#E6F6F6",
      "#F6E6F6",
      "#F8EAE4",
    ],
    []
  );

  return (
    <div className="px-[8%] lg:px-[12%] py-10">
      {/* Header */}
      <div className="title my-10 w-full flex flex-col lg:flex-row justify-between items-start gap-5">
        <h1 className="text-4xl md:text-5xl Unbounded">Weekly Top Vendors.</h1>
      </div>

      {/* Vendor's Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
        {vendorsData.map((vendor: VendorType, index: number) => (
          <div
            key={vendor.id}
            className="vendor-wrap relative border bg-white cursor-pointer border-gray-200 rounded-2xl p-5 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            style={{ backgroundColor: bgColors[index % bgColors.length] }}
          >
            <div className="flex flex-col items-center mb-3">
              <div className="relative w-[120px] h-[120px] -mt-14">
                {/* Vendor's Image */}
                <Image
                  src={vendor.vendorMain}
                  alt={vendor.title}
                  fill
                  className="object-contain rounded-full border border-gray-300 p-4"
                  style={{
                    backgroundColor: bgColors[index % bgColors.length],
                  }}
                />
              </div>

              {/* Vendor's Info */}
              <div className=" text-center">
                <h2 className="text-2xl font-semibold hover:text-prim transition-all">
                  {vendor.title}
                </h2>
                <p className="text-gray-500 text-lg mt-1">{vendor.time}</p>
                <p className="bg-prim px-4 mt-3 inline-block text-white text-lg py-1 rounded-full">
                  {vendor.off}
                </p>
              </div>

              {/* Vendor's Products Image*/}
              <div className="flex justify-center gap-2 mt-4 flex-wrap">
                {vendor.vendors.map((img, i) => (
                  <div key={i} className="w-[60px] h-[60px] relative">
                    <Image
                      src={img}
                      alt={`Vendor product ${i + 1}`}
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}