"use client"

import Image from "next/image"
import { ProductType, CartItem } from '@/app/types/types';
import { useState } from "react";
import satisfactionIcon from "@/public/satisfaction-icon.png";
import { useCartActions } from '../../../hooks/useCartActions';

interface Props {
  id?: string;
  products: ProductType[];

}

const ProductDetails = ({ id, products }: Props) => {

  const { handleAddToCart, handleAddToWishlist } = useCartActions();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  if (!id) {
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

  const product = products.find((item) => String(item.Id) === String(id)); // Buscamos el producto con el ID especificado

  if (!product) return <p>Product Not Found</p>

  const relatedProducts = products.filter((item) => item.Id !== product.Id); // Buscamos los productos relacionados con el producto buscado


  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="flex justify-between gap-5">

          {/* Imagen + Info */}
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
                    onClick={() => handleAddToCart({ ...product, quantity })}
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

          <div className="w-full lg:w-1/2">
            <div className="border border-gray-300 rounded-md">
              <div className="p-3">
                <div className="flex justify-between items-center gap-2 px-2 bg-prim p-3 rounded-full">
                  <span className="text-white">
                    <i className="bi bi-shop mr-2 bg-white text-black px-3 py-2 rounded-full"></i>
                    By <span className="font-semibold">SnackBasket</span>
                  </span>

                  <button className="bg-white text-black px-5 py-2 rounded-full hover:bg-black cursor-pointer hover:text-white transition-colors">
                    View More
                  </button>
                </div>
              </div>

              <div className="bg-[#97ffc871]">
                <div className="flex items-center px-7 py-4 border-b border-gray-300 gap-3">
                  <i className="bi bi-truck mr-2 px-3 py-2 rounded-full text-prim"></i>

                  <div className="flex flex-col">
                    <h3 className="Unbounded">Fast Delivery</h3>
                    <p className="text-gray-600">Lightning-fast shipping, guaranteed.</p>
                  </div>
                </div>

                <div className="flex items-center px-7 py-4 border-b border-gray-300 gap-3">
                  <i className="bi bi-arrow-return-left mr-2 px-3 py-2 rounded-full text-prim"></i>

                  <div className="flex flex-col">
                    <h3 className="Unbounded">Free 30-day returns</h3>
                    <p className="text-gray-600">Shop risk-free with easy returns.</p>
                  </div>
                </div>

                <div className="flex items-center px-7 py-4 border-b border-gray-300 gap-3">
                  <i className="bi bi-bag-check mr-2 px-3 py-2 rounded-full text-prim"></i>

                  <div className="flex flex-col">
                    <h3 className="Unbounded">Pickup available at Shop location</h3>
                    <p className="text-gray-600">Usually ready in 24 hours.</p>
                  </div>
                </div>

                <div className="flex items-center px-7 py-4 border-b border-gray-300 gap-3">
                  <i className="bi bi-bag-check mr-2 px-3 py-2 rounded-full text-prim"></i>

                  <div className="flex flex-col">
                    <h3 className="Unbounded">Payment</h3>
                    <p className="text-gray-600">Payment upon receipt of goods, Payment by card in the department, Google Pay, Online card.</p>
                  </div>
                </div>

                <div className="flex items-center px-7 py-4 border-b border-gray-300 gap-3">
                  <i className="bi bi-clipboard-heart mr-2 px-3 py-2 rounded-full text-prim"></i>

                  <div className="flex flex-col">
                    <h3 className="Unbounded">Warranty</h3>
                    <p className="text-gray-600">The Consumer Protection Act does not provide for the return of this product of proper quality.</p>
                  </div>
                </div>

                <div className="flex items-center px-7 py-4 border-b border-gray-300 gap-3">
                  <i className="bi bi-box2-heart mr-2 px-3 py-2 rounded-full text-prim"></i>

                  <div className="flex flex-col">
                    <h3 className="Unbounded">Packaging</h3>
                    <p className="text-gray-600">Research & development value proposition graphical user interface investor..</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-gray-300 mt-10 rounded-lg">
          <div className="flex justify-between items-center border-b p-3 pb-5 border-gray-300 gap-2">
            <span className="bg-prim px-4 py-2 text-white font-semibold text-xl rounded-full">
              Description
            </span>

            <span className="bg-[#97ffc871] px-4 py-2 text-prim font-semibold text-xl rounded-full flex gap-3">
              <Image
                src={satisfactionIcon}
                alt="satisfaction"
              />
              100% satisfaction guaranteed
            </span>
          </div>

          <div className="p-5 mt-5">
            <h2 className="Unbounded text-2xl mb-3">Product Description</h2>
            
            <p className="text-gray-500 mb-1">
              Wherever celebrations and good times happen, the LAY'S brand will be there just as it has been for more than 75 years. With flavors almost as rich as our history, we have a chip or crisp flavor guaranteed to bring a smile on your face.
            </p>
            <p className="text-gray-500 mb-1">
              Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor, eleifend nunc a, lobortis neque. viverra. Maecenas lacus odio, feugiat eu nunc sit amet, maximus sagittis dolor.
            </p>
            <p className="text-gray-500 mb-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius perferendis perspiciatis temporibus voluptate, nemo quod dignissimos nam molestias nulla a officia eos, voluptatem beatae provident, dolorum suscipit aspernatur doloribus. Ut.
            </p>

            <div className="mt-5 ps-5">
              <p className="text-gray-500 mb-1">
                <span>•</span> 8.0 oz. bag of LAY'S Classic Potato Chips
              </p>
              <p className="text-gray-500 mb-1">
                <span>•</span> Tasty LAY's potato chips are a great snack
              </p>
              <p className="text-gray-500 mb-1">
                <span>•</span> Includes three ingredients: potatoes, oil, and salt
              </p>
              <p className="text-gray-500 mb-1">
                <span>•</span> Gluten free product
              </p>
            </div>

            <div className="mt-3">
              <p className="text-gray-500 mb-1">Made in USA</p>
              <p className="text-gray-500 mb-1">Ready to Eat</p>
            </div>

            <h2 className="Unbounded text-2xl mb-3 mt-8">Product Specifications</h2>

            <div>
              <p className="text-gray-500 mb-2">
                <i className="bi bi-check-circle text-prim mr-1"></i>
                <span className="font-semibold text-black">Product Type:</span> Chips & Dips
              </p>
              <p className="text-gray-500 mb-2">
                <i className="bi bi-check-circle text-prim mr-1"></i>
                <span className="font-semibold text-black">Product Name:</span> {product.title}
              </p>
              <p className="text-gray-500 mb-2">
                <i className="bi bi-check-circle text-prim mr-1"></i>
                <span className="font-semibold text-black">Brand:</span> Lay's
              </p>
              <p className="text-gray-500 mb-2">
                <i className="bi bi-check-circle text-prim mr-1"></i>
                <span className="font-semibold text-black">FSA Eligible:</span> No
              </p>
              <p className="text-gray-500 mb-2">
                <i className="bi bi-check-circle text-prim mr-1"></i>
                <span className="font-semibold text-black">Size/Count:</span> 8.0oz
              </p>
              <p className="text-gray-500 mb-2">
                <i className="bi bi-check-circle text-prim mr-1"></i>
                <span className="font-semibold text-black">Item Code:</span> 425652
              </p>
              <p className="text-gray-500 mb-2">
                <i className="bi bi-check-circle text-prim mr-1"></i>
                <span className="font-semibold text-black">Ingredients:</span> Potatoes, Vegetable Oil, and Salt.
              </p>
            </div>
          </div>

          
        </div>
      </div>
    </>
  )
}

export default ProductDetails