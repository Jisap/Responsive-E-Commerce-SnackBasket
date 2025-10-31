"use client"

import Link from "next/link"
import Arrivals from "@/app/JsonData/NewArrivals.json";
import BestDeals from "@/app/JsonData/BestDeals.json";
import BestSales from "@/app/JsonData/BestSales.json";
import OrganicFood from "@/app/JsonData/OrganicFood.json";
import Recommend from "@/app/JsonData/Recommend.json";
import ShortProducts from "@/app/JsonData/ShortProducts.json";


import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ProductType } from '../../types/types';


interface MiddleNavbarProps {
  isFixed: boolean;
  cartCount: number;
  wishlistCount: number;
}
type RawProduct = Partial<ProductType> & {
  Name?: string;
  ProductImage?: string;
  Price?: string;
};

const MiddleNavbar = ({ isFixed, cartCount, wishlistCount }: MiddleNavbarProps) => {
  const [searchTerm, setSearchTerm] = useState("");                    // Término de búsqueda
  const [result, setResult] = useState<ProductType[]>([]);             // Resultados de la búsqueda
  
  const allProduct: ProductType[] = useMemo(() => {
    const normalizeProduct = (p: RawProduct): ProductType => ({
      ...p,
      Id: p.Id || `generated-${Math.random()}`, // Aseguramos que Id siempre sea un string
      title: p.title || p.Name || "",
      image: p.image || p.ProductImage || "",
      price: p.price || p.Price || "0.00",
      lessprice: p.lessprice || "0.00",
      review: p.review || "(0)",
    });

    const combinedProducts = [
      ...Arrivals.map(normalizeProduct),
      ...BestDeals.map(normalizeProduct),
      ...BestSales.map(normalizeProduct),
      ...OrganicFood.map(normalizeProduct),
      ...Recommend.map(normalizeProduct),
      ...(ShortProducts?.Featured?.map(p => normalizeProduct({...p, Id: `Featured-${p.Id}`})) || []),
      ...(ShortProducts?.TopSelling?.map(p => normalizeProduct({...p, Id: `TopSelling-${p.Id}`})) || []),
      ...(ShortProducts?.OnSale?.map(p => normalizeProduct({...p, Id: `OnSale-${p.Id}`})) || []),
      ...(ShortProducts?.TopRated?.map(p => normalizeProduct({...p, Id: `TopRated-${p.Id}`})) || []),
    ];

    // Eliminar duplicados basados en el 'Id' del producto
    const uniqueProducts = combinedProducts.filter(
      (product, index, self) => index === self.findIndex((p) => p.Id === product.Id)
    );

    return uniqueProducts;
  }, []); // Memo de todos los productos

  // Se ejecuta cuando searchTerm cambia
  useEffect(() => {
    if (!searchTerm.trim()) {                                           // Si el término de búsqueda está vacío, limpiar los resultados
      setResult([]);
      return;
    }
    const filters = allProduct.filter((p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setResult(filters);                                                 // Actualizar los resultados
  }, [searchTerm, allProduct]);


  return (
    <div className={`w-full bg-prim-light border-b border-gray-300 relative z-40 transition-all duration-500 ease-in-out ${
      isFixed ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"
    }`}>
      <div className="flex items-center justify-between py-5 px-[8%] lg:px-[12%]">
        {/* logo */}
        <Link href="/" className="text-3xl font-bold Merienda text-black">
          Snack<span className="text-prim">Basket</span>
        </Link>

        {/* Search */}
        <div className="hidden lg:flex flex-1 ms-6 lg:mx-0 max-w-xl relative">
          <input 
            id="search" 
            type="text" 
            name="search" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a product or brand"
            className="flex-1 border px-3 py-2 rounded-s-lg border-gray-400 outline-none" 
          />

          <button className="bg-prim text-white px-3 rounded-r cursor-pointer">
            <i className="bi bi-search"></i>
          </button>

          {result.length > 0 && (
            <div className="search-result  absolute top-12 left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg  z-50 grid grid-cols-1 lg:grid-cols-3 gap-2 p-2 max-h-[500px] overflow-y-auto">
              {result.map((product) => (
                <Link
                  href={{
                    pathname: "/UI-Components/Shop",
                    query: { id: product.Id },
                  }}
                  onClick={() => setSearchTerm("")}
                  key={product.Id}
                >
                  <div className="flex flex-col h-fit items-center p-2 border border-gray-300 hover:bg-gray-200 rounded shadow-lg transition-all duration-300">
                    <Image
                      width={200}
                      height={200}
                      src={product.image}
                      alt={product.title}
                      className="w-full  object-cover rounded "
                    />

                    <h3 className="text-sm font-semibold text-center mt-2">
                      {product.title}
                    </h3>
                    
                    <p className="text-xs text-gray-500 mt-1">
                      ${product.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Location dropdown */}
          <div className="hidden lg:flex text-sm ms-5 bg-white items-center ps-4 rounded-lg border border-gray-400">
            <i className="bi bi-geo-alt text-lg text-prim"></i>
            <select
              name="location"
              className="px-3 rounded-lg text-prim font-semibold focus:border-prim appearance-none cursor-pointer outline-none"
              defaultValue="New York"
            >
              <option>New York</option>
              <option>Los Angeles</option>
              <option>Chicago</option>
              <option>Houston</option>
              <option>Phoenix</option>
              <option>Philadelphia</option>
            </select>
          </div>
        </div>

        {/* Whislist & Cart  */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Whislist */}
          <Link href="/UI-Components/Pages/whishlist" className="relative">
            <i className="bi bi-heart text-gray-600 text-xl hover:text-prim transition-all"></i>
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-prim text-white w-5 h-5 flex items-center justify-center rounded-full text-xs">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link href="/UI-Components/Pages/cart" className="relative">
            <i className="bi bi-cart text-gray-600 text-xl hover:text-prim transition-all"></i>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-prim text-white w-5 h-5 flex items-center justify-center rounded-full text-xs">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MiddleNavbar