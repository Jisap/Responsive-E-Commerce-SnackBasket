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

const Checkout = () => {

  const [deliveryOption, setDeliveryOption] = useState<"ship" | "pickup">("ship");  // Seleccionamos el tipo de envío por defecto
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const saveCart = JSON.parse(localStorage.getItem("cart") || "[]");              // Recuperamos el cart del localStorage
    setCartItems(saveCart);                                                         // Lo actualizamos en el estado
  }, []);

  const handlePlaceOrder = () => {
    toast.success("Order Placed Successfully!");
  };

  const totalPrice = cartItems.reduce((acc, item) => {                              // Calculamos el subtotal del cart
    const price = parseFloat(item.price.replace("$", "")) || 0;                     // Si no hay precio, lo ponemos a 0
    const quantity = item.qty ?? 1;                                                 // Si no hay qty, lo ponemos a 1
    return acc + price * quantity;                                                  // Sumamos el precio multiplicado por el qty
  }, 0);

  const estimatedTax = (totalPrice * 0.1).toFixed(2);                               // Calculamos el impuesto estimado

  return (
    <>
      <div className="px-[8%] lg:px-[12%] bg-[#E6F9EF] py-5">
        <div className="flex justify-between items-center">
          {/* breadcrumbs */}
          <div className="flex">
            <Link href="/" className="text-2xl Unbounded">
              Home &nbsp; -
            </Link>

            <h2 className="Unbounded text-2xl text-[var(--prim-color)]">
              &nbsp; Checkout
            </h2>
          </div>
        </div>
      </div>

      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="grid gap-4 lg:grid-cols-12">
          {/* Left Checkout Form */}
          <div className="lg:col-span-7">
            {/* Input Contact */}
            <h5 className="mb-2 Unbounded text-2xl">Contact</h5>
            <input
              type="email"
              className="border border-gray-300 rounded w-full p-2 mb-3"
              placeholder="Email or Mobile Phone number"
            />

            <div className="mb-4">
              <input type="checkbox" id="newsCheck" className="me-2" />
              <label htmlFor="newsCheck">Email me with news and offers</label>
            </div>

            {/* Delivery type */}
            <h5 className="mb-2 Unbounded text-2xl">Delivery</h5>
            <div className="mb-3 flex gap-4">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="deliveryOption"
                  checked={deliveryOption === "ship"}
                  onChange={() => setDeliveryOption("ship")}
                />
                Ship
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="deliveryOption"
                  checked={deliveryOption === "pickup"}
                  onChange={() => setDeliveryOption("pickup")}
                />
                pickup in store
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout