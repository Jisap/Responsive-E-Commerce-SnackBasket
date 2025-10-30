"use client"

import { useSearchParams } from 'next/navigation';


import React, { useMemo } from 'react'
import Arrivals from "@/app/JsonData/NewArrivals.json";
import BestDeals from "@/app/JsonData/BestDeals.json";
import BestSales from "@/app/JsonData/BestSales.json";
import OrganicFood from "@/app/JsonData/OrganicFood.json";
import Recommend from "@/app/JsonData/Recommend.json";
import ShortProducts from "@/app/JsonData/ShortProducts.json";
import ProductDetails from './ProductDetails/ProductDetails';
import Products from './Products/Products';
import { ProductType } from '@/app/types/types';

const ShopPage = () => {

  const allProduct: ProductType[] = useMemo(() => {
    const combinedProducts = [
      ...Arrivals,
      ...BestDeals,
      ...BestSales,
      ...OrganicFood,
      ...Recommend,
      ...(ShortProducts?.Featured?.map(p => ({ ...p, Id: `Featured-${p.Id}` })) || []),
      ...(ShortProducts?.TopSelling?.map(p => ({ ...p, Id: `TopSelling-${p.Id}` })) || []),
      ...(ShortProducts?.OnSale?.map(p => ({ ...p, Id: `OnSale-${p.Id}` })) || []),
      ...(ShortProducts?.TopRated?.map(p => ({ ...p, Id: `TopRated-${p.Id}` })) || []),
    ];

    // Eliminar duplicados basados en el 'Id' del producto
    const uniqueProducts = combinedProducts.filter(
      (product, index, self) => index === self.findIndex((p) => p.Id === product.Id)
    );

    return uniqueProducts;
  }, []); // Memo de todos los productos

  const searchParams = useSearchParams();
  const productId = searchParams.get("id");

  return (
    <div>
      {productId ? (
        <ProductDetails 
          id={productId}
          products={allProduct}  
        />
      ):(
        <Products />
      )}
    </div>
  )
}

export default ShopPage