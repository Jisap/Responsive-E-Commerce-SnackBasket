"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CartItem } from '../../../types/types';

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
    const quantity = item.quantity ?? 1;                                                 // Si no hay qty, lo ponemos a 1
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

            {/* Delivery  */}
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

            {deliveryOption === "ship" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <select className="md:w-60 w-40 border border-gray-300 rounded appearance-none px-2 py-2 md:col-span-2">
                  <option>Germany</option>
                  <option>France</option>
                  <option>United States</option>
                </select>

                <input
                  type="text"
                  className="border border-gray-300 rounded w-full p-2"
                  placeholder="First Name (optional)"
                />
                <input
                  type="text"
                  className="border border-gray-300 rounded w-full p-2"
                  placeholder="Lat Name (optional)"
                />
              </div>
            )}

            {deliveryOption === "pickup" && (
              <div className="my-4 p-3 border rounded bg-red-50 text-red-700">
                <strong>No Stores Available with your item</strong>
                <div>
                  <Link href="#" className="underline">
                    Ship to address
                  </Link>{" "}
                  instead
                </div>
              </div>
            )}

            {/* Delivery Address */}
            <input
              type="text"
              className="border border-gray-300 rounded w-full p-2 mb-3"
              placeholder="Address"
            />
            <input
              type="text"
              className="border border-gray-300 rounded w-full p-2 mb-3"
              placeholder="Apartment, suite, etc. (optional)"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <input
                type="text"
                className="border border-gray-300 rounded w-full p-2  "
                placeholder="City"
              />
              <input
                type="text"
                className="border border-gray-300 rounded w-full p-2  "
                placeholder="Postal Code (optional)"
              />
            </div>

            <div className="mb-4">
              <input type="checkbox" id="saveInfo" className="me-2" />
              <label htmlFor="saveInfo">
                Save this information for next time
              </label>
            </div>

            {/* Shipping Method */}
            <h5 className="mb-2 Unbounded text-2xl">Shipping Method</h5>
            <div className="p-3 flex justify-between items-center border border-gray-300 rounded bg-blue-50">
              <span>Standard</span>
              <span className="text-green-600">Free</span>
            </div>

            {/* Payment */}
            <h4 className="mt-5 mb-2 Unbounded text-2xl">Payment</h4>
            <p className="text-gray-500 mb-3">
              All transactions are secure and encrypted.
            </p>

            <div className="border border-gray-300 rounded p-3 mb-3">
              <input
                type="text"
                className="border border-gray-300 rounded w-full p-2 mb-2"
                placeholder="Card Number"
              />

              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  className="border border-gray-300 rounded w-full p-2 mb-2"
                  placeholder="Expiration Date (MM/YY)"
                />

                <input
                  type="text"
                  className="border border-gray-300 rounded w-full p-2 mb-2"
                  placeholder="Security Code"
                />
              </div>

              <input
                type="text"
                className="border border-gray-300 rounded w-full p-2 mb-2"
                placeholder="Name on Card"
              />
            </div>

            <button
              type="submit"
              onClick={handlePlaceOrder}
              className="bg-prim hover:bg-prim-light text-white hover:text-prim translation-all duration-300 py-2 px- cursor-pointer rounded w-full"
            >
              Pay Now
            </button>
          </div>

          {/* Right Order Summary */}
          <div className="lg:col-span-5 mt-10">
            <div className="border border-gray-300 p-4 rounded shadow">
              {/* Header */}
              <h5 className="font-bold mb-3 flex items-center gap-2 Unbounded">
                <i className="ri-shopping-cart-2-line text-prim"></i>{" "}
                Cart Summery
              </h5>

              {cartItems.length === 0 ? (
                <p className="text-gray-500">Your cart is Empty!</p>
              ) : (
                cartItems.map((item: CartItem) => {
                  const priceNum = parseFloat(item.price.replace("$", "")) || 0;
                  const quantity = item.quantity ?? 1;
                  return (
                    <div
                      key={item.Id}
                      className="flex justify-between items-center border-b border-gray-300 py-3"
                    >
                      {/* Image and Info */}
                      <div className="flex items-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-16 object-cover"
                        />
                        <div className="ml-3">
                          <p className="Unbounded font-semibold">
                            {item.title}
                          </p>
                          <p className="text-gray-500">
                            ${(priceNum * quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}

              {/* Summary */}
              <div className="flex justify-between text-sm pt-2">
                <span>Subtotal</span>
                <span className="Unbounded">${totalPrice.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-sm pt-2">
                <span>Shipping</span>
                <span>Enter address</span>
              </div>

              <div className="flex justify-between text-sm pt-2">
                <span>Estimated Tax</span>
                <span className="Unbounded">${estimatedTax}</span>
              </div>

              <div className="flex justify-between text-sm pt-2">
                <span>Total</span>
                <span className="Unbounded">
                  ${(totalPrice + parseFloat(estimatedTax)).toFixed(2)}
                </span>
              </div>

              <button
                type="submit"
                onClick={handlePlaceOrder}
                className="my-2 mt-4 bg-[var(--prim-color)] hover:bg-[var(--prim-light)] text-white hover:text-[var(--prim-color)] translation-all duration-300 py-2 px- cursor-pointer rounded w-full"
              >
                Pay Now
              </button>
              <Link
                href="/UI-Components/Pages/cart"
                className="block text-center py-2 border rounded hover:bg-gray-100 transition"
              >
                Back to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout