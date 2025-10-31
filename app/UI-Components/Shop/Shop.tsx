"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import ProductDetails from "./ProductDetails/ProductDetails";
import Products from "./Products/Products";
import Arrivals from "@/app/JsonData/NewArrivals.json";
import BestDeals from "@/app/JsonData/BestDeals.json";
import BestSales from "@/app/JsonData/BestSales.json";
import OrganicFood from "@/app/JsonData/OrganicFood.json";
import Recommend from "@/app/JsonData/Recommend.json";
import ShortProducts from "@/app/JsonData/ShortProducts.json";
import { ProductType } from "@/app/types/types";

const Shop = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");

  // Esta lógica de combinación de productos ahora vive aquí
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
    const uniqueProducts = combinedProducts.filter(
      (product, index, self) => index === self.findIndex((p) => p.Id === product.Id)
    );
    return uniqueProducts;
  }, []);

  if (productId) {
    // Si hay un 'id', muestra los detalles del producto
    return <ProductDetails id={productId} products={allProduct} />;
  } else {
    // Si no hay 'id', muestra la lista de productos
    return <Products />;
  }
};

export default Shop;