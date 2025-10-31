"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useCartActions } from "@/app/hooks/useCartActions";
import { ProductType } from '../../../types/types';

const Wishlist = () => {

  const [wishlistItems, setWishlistItems] = useState<ProductType[]>([]); // El tipo de WishlistItem es el mismo que el de useCartActions

  useEffect(() => {
    const loadWishlist = () => {
      try {
        const wishlist: ProductType[] = JSON.parse(         // Recuperamos el wishlist del localStorage
          localStorage.getItem("wishlist") || "[]"
        ) as ProductType[];

        setWishlistItems(wishlist);                          // Lo actualizamos en el estado
      } catch (error) {
        console.error("Error loading wishlist:", error);

        setWishlistItems([]);
      }
    };

    loadWishlist();
    window.addEventListener("storageUpdate", loadWishlist);   // Escuchamos eventos de storageUpdate para actualizar el wishlist

    return () => {
      window.removeEventListener("storageUpdate", loadWishlist);
    };
  }, []);

  const handleRemove = (productId: string) => {
    const updatedWishlist = wishlistItems.filter(                         // Eliminamos el producto del wishlist
      (item) => item.Id !== productId
    );
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));    // y actualizamos el wishlist en el localStorage
    window.dispatchEvent(new Event("storageUpdate"));                     // Lanzamos un evento para actualizar el wishlist en la UI
    toast.success("Product Removed From Wishlist");
  };

  const { handleAddToCart } = useCartActions();

  return (
    <>
      <div className="px-[8%] lg:px-[12%] bg-[#E6F9EF] py-5">
        {/* breadcrumbs */}
        <div className="flex justify-between items-center">
          <div className="flex">
            <Link href="/" className="text-2xl Unbounded">
              Home &nbsp; -
            </Link>

            <h2 className="Unbounded text-2xl text-[var(--prim-color)]">
              &nbsp; Wishlist
            </h2>
          </div>
        </div>      
      </div>

      <div className="px-[8%] lg:px-[12%] py-10">
        {wishlistItems.length === 0 ? (
          <p className="text-lg bg-red-200 px-5 py-2 rounded">
            Your Wishlist is Empty!
          </p>
        ):(
          <div className="overflow-x-auto">
              <div className="overflow-x-auto">
                {/* Desktop */}
                <table className="min-w-full border border-gray-300 rounded hidden md:table">
                  <thead className="bg-[var(--prim-light)]">
                    <tr>
                      <th className="px-4 py-3 Unbounded font-normal text-left border-r border-gray-300">
                        Product
                      </th>
                      <th className="px-4 py-3 Unbounded font-normal text-left border-r border-gray-300">
                        Price
                      </th>
                      <th className="px-4 py-3 Unbounded font-normal text-left border-r border-gray-300">
                        Stock Status
                      </th>
                      <th className="px-4 py-3 Unbounded font-normal text-left border-r border-gray-300">
                        Add to Cart
                      </th>
                      <th className="px-4 py-3 Unbounded font-normal text-left  ">
                        Remove
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {wishlistItems.map((product) => (
                      <tr key={product.Id} className="border-b border-gray-300">
                        <td className="px-4 py-3 flex items-center gap-1  border-r border-gray-300">
                          <Image
                            src={product.image || ""}
                            alt={product.title || ""}
                            className="w-16 h-16 object-contain rounded"
                            width={64}
                            height={64} />
                          <div className="flex flex-col">
                            <p className="font-medium Unbounded text-sm">
                              {product.title}
                            </p>
                            <h6 className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                              <i className="bi bi-shop text-[var(--prim-color)]"></i>{" "}
                              By Lucky Supermarket
                            </h6>
                            <span className="flex items-center text-yellow-500 text-sm">
                              <i className="bi bi-star-fill me-1"></i>
                              {product.review} review
                            </span>
                          </div>
                        </td>

                        <td className="px-4 py-2 border-r Unbounded border-gray-300">
                          $
                          {parseFloat(
                            (product.price || "0").replace(/[^0-9.-]+/g, "")
                          ).toFixed(2)}
                        </td>

                        <td className="px-4 py-2 border-r  Unbounded border-gray-300">
                          In Stock
                        </td>

                        <td className="px-4 py-2 border-r border-gray-300">
                          <button
                            onClick={() => handleAddToCart(product)}
                            className="bg-prim hover:bg-prim-light translation-all duration-300 text-white hover:text-prim px-4 py-2 rounded cursor-pointer"
                          >
                            Add to Cart
                          </button>
                        </td>

                        <td className="px-4 py-2 border-r border-gray-300">
                          <button
                            onClick={() => handleRemove(product.Id)}
                            className="bg-red-500/5 text-red-700 px-4 py-2 rounded cursor-pointer"
                          >
                            X Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* mobile */}
                <div className="grid grid-cols-1 gap-4 md:hidden">
                  {wishlistItems.map((product) => (
                    <div
                      key={product.Id}
                      className="border border-gray-300 rounded p-4 flex flex-col gap-2"
                    >
                      <div className="flex items-center gap-4">
                        <Image
                          src={product.image || ""}
                          alt={product.title || ""}
                          className="w-20 h-20 object-contain rounded"
                          width={80}
                          height={80} />

                        <div className="flex flex-col">
                          <p className="font-medium Unbounded text-base">
                            {product.title}
                          </p>
                          <p className="text-sm text-yellow-500">
                            {product.review} review
                          </p>
                          <p className="text-sm font-semibold Unbounded">
                            {" "}
                            $
                            {parseFloat((product.price || "0").replace(/[^0-9.-]+/g, "")).toFixed(2)}
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-between mt-2 gap-3">
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="w-full bg-[var(--prim-color)] hover:bg-[var(--prim-light)] translation-all duration-300 text-white hover:text-[var(--prim-color)] px-4 py-2 rounded cursor-pointer"
                        >
                          Add to Cart
                        </button>
                        <button
                          onClick={() => handleRemove(product.Id)}
                          className=" w-full bg-red-500/5 text-red-700 px-4 py-2 rounded cursor-pointer"
                        >
                          X Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Wishlist