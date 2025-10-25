"use client";

import toast from "react-hot-toast";

export type ProductType = {
  Id: string;
  image: string;
  title: string;
  price: string;
  lessprice: string;
  review: string;
  sold?: string;
  sale?: string;
  quantity?: number;
};

export const useCartActions = () => {
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

  return { handleAddToCart, handleAddToWishlist };
};