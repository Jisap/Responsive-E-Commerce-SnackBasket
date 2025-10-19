"use client";

import { useEffect, useState } from "react";
import MiddleNavbar from "./MiddleNavbar";
import BottomNavbar from "./BottomNavbar";
import TopNavbar from "./TopNavbar";

type CartItem = {
  Id: string | number;
};

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const loadCounts = () => {
      try {
        const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
        const wishlist: CartItem[] = JSON.parse(localStorage.getItem("wishlist") || "[]");

        const uniqueCart = new Set(cart.map((item) => item.Id));
        const uniqueWishlist = new Set(wishlist.map((item) => item.Id));

        setCartCount(uniqueCart.size);
        setWishlistCount(uniqueWishlist.size);
      } catch (error) {
        console.error("Failed to parse cart/wishlist from localStorage", error);
        setCartCount(0);
        setWishlistCount(0);
      }
    };

    loadCounts();
    window.addEventListener("storageUpdate", loadCounts);

    return () => {
      window.removeEventListener("storageUpdate", loadCounts);
    };
  }, []);

  return (
    <>
      <TopNavbar />
      <MiddleNavbar isFixed={isFixed} cartCount={cartCount} wishlistCount={wishlistCount} />
      <BottomNavbar isFixed={isFixed} cartCount={cartCount} wishlistCount={wishlistCount} />
    </>
  );
};

export default Navbar;