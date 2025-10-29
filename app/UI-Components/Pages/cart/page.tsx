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
            <h2 className="Unbounded text-2xl text-prim">
              &nbsp; Cart
            </h2>
          </div>
        </div>
      </div>

      {/* Cart Content */}
      <div className="px-[8%] lg:px-[12%] py-10">
        {cartItems.length === 0 ? (
          <p className="text-lg bg-red-200 px-5 py-2 rounded">
            Your Cart is Empty!
          </p>
        ):(
          <>
            {/* Desktop Table */}
              <div className=" hidden md:flex gap-5">
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300 rounded">
                    <thead className="bg-prim-light">
                      <tr>
                        <th className="px-4 py-3 text-left">Product</th>
                        <th className="px-4 py-3 text-left">Price</th>
                        <th className="px-4 py-3 text-left">Quantity</th>
                        <th className="px-4 py-3 text-left">SubTotal</th>
                        <th className="px-4 py-3 text-left">Remove</th>
                      </tr>
                    </thead>

                    <tbody>
                      {cartItems.map((item) => {   
                        const quantity = (item as any).qty ?? (item as any).quantity ?? 1;
                        const priceNum = parseFloat(item.price.replace(/[^0-9.]+/g, "")) || 0;
                        const itemSubTotal = priceNum * quantity;

                        return (
                          <tr
                            key={item.Id}
                            className="border-b border-gray-300 hover:bg-gray-100"
                          >
                            <td className="px-4 py-3 flex items-center gap-2">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-16 h-16 object-contain rounded"
                              />
                              <span>{item.title}</span>
                            </td>

                            <td className="px-4 py-3">{item.price}</td>

                            <td className="px-4 py-3">
                              <input
                                type="number"
                                min={1}
                                value={quantity}
                                onChange={(e) =>
                                  handleQtyChange(
                                    item.Id,
                                    parseInt(e.target.value)
                                  )
                                }
                                className="w-16 border rounded px-1"
                              />
                            </td>

                            <td className="px-4 py-3">
                              {itemSubTotal.toFixed(2)}
                            </td>

                            <td className="px-4 py-3">
                              <button
                                onClick={() => handleRemove(item.Id)}
                                className=" w-full bg-red-500/5 text-red-700 px-4 py-2 rounded cursor-pointer">
                                Remove
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Subtotal */}
                <div className="w-full lg:w-1/2 sticky h-[100%] top-22 left-0">
                  <div className="bg-prim-light p-5 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">
                      Cart Total
                    </h2>

                    <div className="flex justify-between mb-2">
                      <span className="Unbounded">Subtotal</span>
                      <span className="Unbounded">${subTotal.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between mb-2">
                      <span className="Unbounded">Estimated Delivery</span>
                      <span className="Unbounded">Free</span>
                    </div>

                    <div className="flex justify-between mb-2">
                      <span className="Unbounded">Estimated Taxes</span>
                      <span className="Unbounded">
                        USD {estimatedTaxes.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between font-bold border-t border-gray-400 pt-2 mb-10 text-xl">
                      <span className="Unbounded">Total</span>
                      <span className="Unbounded">
                        ${(subTotal + estimatedTaxes).toFixed(2)}
                      </span>
                    </div>

                    <button className="w-full py-3 cursor-pointer bg-[var(--prim-color)] text-white font-semibold rounded hover:bg-black transition">
                      <Link href="/UI-Components/Pages/checkout">
                        Proceed To Checkout
                      </Link>
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile Cards */}
              <div className="grid grid-cols-1 gap-4 md:hidden">
                {cartItems.map((item) => {
                  const quantity = (item as any).qty ?? (item as any).quantity ?? 1; // El cart acepta tanto el atributo 'qty' como 'quantity'
                  const priceNum = parseFloat(item.price.replace(/[^0-9.]+/g, "")) || 0;
                  const itemSubTotal = priceNum * quantity;

                  return (
                    <div
                      key={item.Id}
                      className="border p-4 rounded flex flex-col gap-2"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 object-contain rounded"
                        />
                        <div className="flex flex-col flex-1">
                          <p className="font-medium">{item.title}</p>
                          <p className="text-sm text-gray-500">{item.review}</p>
                          <p className="font-semibold">{item.price}</p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center mt-2">
                        <input
                          type="number"
                          min={1}
                          value={quantity}
                          onChange={(e) =>
                            handleQtyChange(item.Id, parseInt(e.target.value))
                          }
                          className="w-20 border rounded px-1"
                        />
                        <span className="font-semibold">
                          SubTotal: ${itemSubTotal.toFixed(2)}
                        </span>
                        <button
                          onClick={() => handleRemove(item.Id)}
                          className="  bg-red-500/5 text-red-700 px-4 py-2 rounded cursor-pointer"
                        >
                          X Remove
                        </button>
                      </div>
                    </div>
                  )
                })}

                {/* Mobile Subtotal */}
                <div className="w-full lg:w-1/2 sticky h-[100%] top-22 left-0">
                  <div className="bg-prim-light p-5 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">
                      Cart Total
                    </h2>

                    <div className="flex justify-between mb-2">
                      <span className="Unbounded">Subtotal</span>
                      <span className="Unbounded">${subTotal.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between mb-2">
                      <span className="Unbounded">Estimated Delivery</span>
                      <span className="Unbounded">Free</span>
                    </div>

                    <div className="flex justify-between mb-2">
                      <span className="Unbounded">Estimated Taxes</span>
                      <span className="Unbounded">
                        USD {estimatedTaxes.toFixed(2)}
                      </span>
                    </div>
                    
                    <div className="flex justify-between font-bold border-t border-gray-400 pt-2 mb-10 text-xl">
                      <span className="Unbounded">Total</span>
                      <span className="Unbounded">
                        ${(subTotal + estimatedTaxes).toFixed(2)}
                      </span>
                    </div>

                    <button className="w-full py-3 cursor-pointer bg-[var(--prim-color)] text-white font-semibold rounded hover:bg-black transition">
                      <Link href="/UI-Components/Pages/checkout">
                        Proceed To Checkout
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
          </>
        )}
      </div>
     
    </>
  )
}

export default Cart