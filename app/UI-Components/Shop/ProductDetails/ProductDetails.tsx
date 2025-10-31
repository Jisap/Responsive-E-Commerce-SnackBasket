"use client"

import Image from "next/image"
import { ProductType } from '@/app/types/types';
import { useState } from "react";
import satisfactionIcon from "@/public/satisfaction-icon.png";
import { useCartActions } from '../../../hooks/useCartActions';

interface Props {
  id?: string;
  products: ProductType[];

}

const StarRating = ({ rating, review }: { rating: number; review: string }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <span className="flex items-center border-b border-gray-300 pb-3 text-yellow-500 text-md mt-4">
      {[...Array(fullStars)].map((_, i) => <i key={`full-${i}`} className="bi bi-star-fill me-1"></i>)}
      {halfStar && <i className="bi bi-star-half me-1"></i>}
      {[...Array(emptyStars)].map((_, i) => <i key={`empty-${i}`} className="bi bi-star me-1"></i>)}
      &nbsp;<span className="text-black font-medium">{rating} star Rating {review}</span>
    </span>
  );
};

const defaultBenefits = [
  {
    icon: "bi bi-truck",
    title: "Fast Delivery",
    description: "Lightning-fast shipping, guaranteed.",
  },
  {
    icon: "bi bi-arrow-return-left",
    title: "Free 30-day returns",
    description: "Shop risk-free with easy returns.",
  },
  {
    icon: "bi bi-bag-check",
    title: "Pickup available",
    description: "Usually ready in 24 hours.",
  },
  {
    icon: "bi bi-credit-card",
    title: "Payment",
    description: "Secure options: Card, Google Pay, COD.",
  },
  {
    icon: "bi bi-clipboard-heart",
    title: "Warranty",
    description: "The Consumer Protection Act does not provide for the return of this product of proper quality.",
  },
  {
    icon: "bi bi-box2-heart",
    title: "Packaging",
    description: "Research & development value proposition graphical user interface investor.",
  },
];

const ProductDetails = ({ id, products }: Props) => {

  const { handleAddToCart, handleAddToWishlist } = useCartActions();
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
              <Image 
                src={product.image || ""}
                alt={product.title}
                className="w-full h-48 object-cover"
                width={200}
                height={192}
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

  if (!product) return <p>Product Not Found</p>;


  return (
    <>
      <div className="px-4 sm:px-6 md:px-[8%] lg:px-[12%] py-10">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Columna Izquierda (Contenido Principal) */}
          <div className="w-full lg:w-2/3 flex flex-col gap-10">
            {/* Sección Superior: Imagen + Info */}
            <div className="flex flex-col md:flex-row gap-8">
            {/* Image (izquierda)*/}
            <div className="w-full md:w-1/2 border border-gray-300 rounded-2xl flex-shrink-0">
              <Image
                src={product.image || ""}
                alt={product.title || ""}
                width={400}
                height={400}
                className="object-contain w-full h-auto p-4 sm:p-8 md:p-10 lg:p-12"
              />
            </div>

            {/* Product Info (central) */}
            <div className="w-full md:w-1/2 flex flex-col">
              <h2 className="Unbounded text-2xl md:text-3xl">
                {product.title}
              </h2>

              {product.rating && <StarRating rating={product.rating} review={product.review} />}

              {/* Descripción corta visible en mobile/tablet */}
              {product.description && <p className="my-3 lg:hidden">{product.description}</p>}

              <div className="flex items-center gap-2 border-b border-gray-300 pb-3">
                <h3 className="Unbounded text-2xl">{product.price}</h3>
                <del className="Unbounded text-gray-500">{product.lessprice}</del>
              </div>

              {product.offer && <span className="my-3 bg-[#97ffc971] px-2 py-3 rounded-md">
                {product.offer}
              </span>}

              <div className="mt-5">
                <h3 className="mb-3 font-medium">Quantity</h3>
                <div className="flex items-center gap-4 flex-wrap">
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

            {/* Información de la descripción (movida aquí para mejor flujo en mobile) */}
            <div className="border border-gray-300 rounded-lg">
              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center border-b p-3 pb-5 border-gray-300 gap-4">
                <span className="bg-prim px-4 py-2 text-white font-semibold text-lg sm:text-xl rounded-full">
                  Description
                </span>

                <span className="bg-[#97ffc871] px-4 py-2 text-prim font-semibold text-base sm:text-lg rounded-full flex items-center gap-3">
                  <Image
                    src={satisfactionIcon}
                    alt="satisfaction"
                    width={24}
                    height={24}
                  />
                  100% satisfaction guaranteed
                </span>
              </div>

              <div className="p-5 mt-2 sm:mt-5">
                <h2 className="Unbounded text-xl md:text-2xl mb-3">Product Description</h2>

                {product.description && <p className="text-gray-500 mb-1">{product.description}</p>}

                {product.features && (
                  <div className="mt-5 ps-5">
                    {product.features.map((feature, index) => (
                      <p key={index} className="text-gray-500 mb-1">
                        <span>•</span> {feature}
                      </p>
                    ))}
                  </div>
                )}

                {product.tags && (
                  <div className="mt-3">
                    {product.tags.map((tag, index) => (
                      <p key={index} className="text-gray-500 mb-1">{tag}</p>
                    ))}
                  </div>
                )}

                <h2 className="Unbounded text-xl md:text-2xl mb-3 mt-8">Product Specifications</h2>

                {product.specifications && <div>
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <p key={key} className="text-gray-500 mb-2">
                      <i className="bi bi-check-circle text-prim mr-1"></i>
                      <span className="font-semibold text-black">{key}:</span> {value}
                    </p>
                  ))}
                </div>}
              </div>

              {/* Faltarían añadir a las props de los archivos json "Nutrition Facts" y "More Details" */}
            </div>
          </div>

          {/* Columna Derecha (Sidebar de Beneficios) */}
          <div className="w-full lg:w-1/3 lg:sticky top-28 h-fit">
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
                {/* Beneficios específicos del producto desde el JSON */}
                {product.benefits?.map((benefit, index) => (
                  <div key={index} className="flex items-center px-7 py-4 border-b border-gray-300 gap-3">
                    <i className={`${benefit.icon} mr-2 px-3 py-2 rounded-full text-prim`}></i>
                    <div className="flex flex-col">
                      <h3 className="Unbounded">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
                {/* Beneficios por defecto para todos los productos */}
                {defaultBenefits.map((benefit, index) => (
                  <div key={`default-${index}`} className="flex items-center px-7 py-4 border-b border-gray-300 gap-3">
                    <i className={`${benefit.icon} mr-2 px-3 py-2 rounded-full text-prim`}></i>
                    <div className="flex flex-col">
                      <h3 className="Unbounded">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails