"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type CartItem = {
  Id: string;
  title: string;
  price: string;
  review: string;
  qty?: number;
  image: string;
};

const Cart = () => {

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [subTotal, setSubTotal] = useState<number>(0);
  const estimatedTaxes = 10;

  useEffect(() => {
    const loadCart = () => {
      try {
        const cart: CartItem[] = JSON.parse(                                          // Recuperamos el cart del localStorage
          localStorage.getItem("cart") || "[]"
        );
        setCartItems(cart);                                                           // Lo actualizamos en el estado

        const total = cart.reduce((acc: number, item: CartItem) => {                  // Calculamos el subtotal
          const quantity = item.qty ?? 1;                                                // Si no hay qty, lo ponemos a 1
          const priceNum = parseFloat(item.price.replace(/[^0-9.]+/g, "")) || 0;         // Si no hay precio, lo ponemos a 0
          return acc + priceNum * quantity;                                              // Sumamos el precio multiplicado por el qty
        }, 0);

        setSubTotal(total);                                                           // Lo actualizamos en el estado
      } catch (error) {
        console.error("Error loading cart:", error);
        setCartItems([]);
        setSubTotal(0);
      }
    };

    loadCart();
    window.addEventListener("storageUpdate", loadCart);                                // Escuchamos eventos de storageUpdate para actualizar el cart

    return () => {
      window.removeEventListener("storageUpdate", loadCart);
    };
  }, []);

  const handleRemove = (productId: string) => {
    const updatedCart = cartItems.filter((item) => item.Id !== productId);  // Eliminamos el producto del cart
    localStorage.setItem("cart", JSON.stringify(updatedCart));              // y actualizamos el cart en el localStorage
    window.dispatchEvent(new Event("storageUpdate"));                       // Lanzamos un evento para actualizar el cart en la UI
    toast.success("Product Removed From Cart");
  };

  const handleQtyChange = (productId: string, qty: number) => {             // Cambiamos el qty del producto en el cart
    if (qty < 1) return;                                                    // Si el qty es menor que 1, no hacemos nada
    const updatedCart = cartItems.map((item) =>                             // Actualizamos el cart en el estado
      item.Id === productId ? { ...item, qty } : item                       // Si el producto existe, actualizamos su qty
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));              // y actualizamos el cart en el localStorage
    window.dispatchEvent(new Event("storageUpdate"));                       // Lanzamos un evento para actualizar el cart en la UI
  };

  return (
    <>
      {/* Breadcrumbs */}
      <div className="px-[8%] lg:px-[12%] bg-[#E6F9EF] py-5">
        <div className="flex justify-between items-center">

          <div className="flex">
            <Link href="/" className="text-2xl Unbounded">
              Home &nbsp; -
            </Link>
            <h2 className="Unbounded text-2xl text-[var(--prim-color)]">
              &nbsp; Cart
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart