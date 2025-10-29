"use client"

import Image from "next/image"
import { StaticImageData } from 'next/image';
import Deals from "../../Index/Deals/Deals";
import toast from "react-hot-toast";
import { ProductType, useCartActions } from '../../../hooks/useCartActions';
import { useState } from "react";

interface ProductDetailsType {
  Id: string;
  image: string;
  title: string;
  price: string;
  lessprice: string;
  review: string;
  sold?: string;
  sale?: string;
}

interface Props {
  id?: string;
  products: ProductDetailsType[];

}

type CartItem = {
  Id: string;
  title: string;
  price: string;
  review: string;
  qty?: number;
  image: string;
};

const ProductDetails = ({ id, products }:Props) => {

  const { handleAddToCart, handleAddToWishlist } = useCartActions();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  if(!id){
    return (
      <div>
        <h1>
          All Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div 
              key={product.Id}
              className="border p-4 rounded-md"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />

              <h2 className="font-bold mt-2">{product.title}</h2>

              <p className="text-green-600">{product.price}</p>

              {product.lessprice && <p className="line-through">{product.lessprice}</p>}
            </div>
          ))}
        </div>
      </div>
    )
  }

  const product = products.find((item)=> String(item.Id) === String(id)); // Buscamos el producto con el ID especificado

  if(!product) return <p>Product Not Found</p>

  const relatedProducts = products.filter((item) => item.Id !== product.Id); // Buscamos los productos relacionados con el producto buscado


  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="flex justify-between gap-5">
          
          <div className="w-full lg:w-1/1 flex sticky top-2/12 left-0 h-fit justify-between">
            {/* Image (derecha)*/}
            <div className="border border-gray-300 rounded-2xl">
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={400}
                className="object-contain p-20"
              />
            </div>

            {/* Product Info (izquierda) */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <h2 className="Unbounded text-3xl">
                {product.title}
              </h2>

              <span className="flex items-center border-b border-gray-300 pb-3 text-yellow-500 text-md mt-4">
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star-fill me-1"></i>
                &nbsp;
                <span className="text-black font-medium"> 4.5 star Rating {product.review}</span>
              </span>

              <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, excepturi magni? Nostrum rerum, culpa magnam assumenda est cupiditate iusto obcaecati officiis dolor dignissimos ex non amet aperiam ipsam tempore quos?</p>
            
              <div className="flex items-center gap-2 border-b border-gray-300 pb-3">
                <h3 className="Unbounded text-2xl">{product.price}</h3>
                <del className="Unbounded text-gray-500">{product.lessprice}</del>
              </div>

              <span className="my-3 bg-[#97ffc971] px-2 py-3 rounded-md">
                Special Offer: <strong> 5 Days </strong> Remains untill the end of the offer
              </span>

              <div className="mt-5">
                <h3 className="mb-3 font-medium">Quantity</h3>
                <div className="flex items-center gap-4">
                  {/* Quantity Selector */}
                  <div className="flex items-center border border-gray-300 rounded-full">
                    <button
                      onClick={handleDecrement}
                      className="px-3 py-1 text-lg font-semibold"
                    >
                      -
                    </button>
                    <span className="px-4 font-medium">{quantity}</span>
                    <button
                      onClick={handleIncrement}
                      className="px-3 py-1 text-lg font-semibold"
                    >
                      +
                    </button>
                  </div>

                  {/* Action Buttons */}
                  <button
                    className="bg-prim text-white px-5 py-2 rounded-full cursor-pointer hover:bg-prim-dark transition-colors"
                    onClick={() => handleAddToCart({ ...product, qty: quantity })}
                  >
                    <i className="bi bi-cart2 mr-2"></i> Add To Cart
                  </button>
                  <button
                    className="bg-prim-light text-prim px-5 py-2 rounded-full cursor-pointer hover:bg-prim hover:text-white transition-colors"
                    onClick={() => handleAddToWishlist(product)}
                  >
                    <i className="bi bi-heart mr-2"></i> Add To Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default ProductDetails