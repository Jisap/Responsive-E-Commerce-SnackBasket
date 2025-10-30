"use client";

import toast from "react-hot-toast";
import { ProductType } from "../types/types";

export const useCartActions = () => {
  
  
  const handleAddToCart = (product: ProductType) => {
    try {
      const cart: ProductType[] = JSON.parse(                                  // Recuperamos el cart del localStorage
        localStorage.getItem("cart") || "[]"                                  
      );
      
      const qtyToAdd = Math.max(1, Number(product.quantity ?? 1));             // Calculamos el qty a añadir
      const index = cart.findIndex((item) => item.Id === product.Id);          // Buscamos el índice del producto en el cart
      
      if (index !== -1) {                                                      // Si el producto existe en el cart
        const currentQty = Number(cart[index].quantity ?? 1);                  // Obtenemos la cantidad actual del producto
        const newQty = currentQty + qtyToAdd;                                  // Sumamos el nuevo qty al actual
        cart[index] = { ...cart[index], quantity: newQty };                    // Actualizamos el producto en el cart
        localStorage.setItem("cart", JSON.stringify(cart));                    // y actualizamos el cart en el localStorage
        window.dispatchEvent(new Event("storageUpdate"));                      // Lanzamos un evento para actualizar el cart en la UI
        toast.success(`${product.title} quantity updated to ${newQty}`);       // Mostramos un toast para indicar que se actualizó el qty
      } else {                                                                 // Si no existe, lo añadimos al cart
        cart.push({ ...product, quantity: qtyToAdd });
        localStorage.setItem("cart", JSON.stringify(cart));
        window.dispatchEvent(new Event("storageUpdate"));
        toast.success(`${product.title} is added to cart (x${qtyToAdd})`);
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

