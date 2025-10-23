"use client";

import Image from "next/image";
import toast from "react-hot-toast";
import Link from "next/link";
import bestSales from "@/app/JsonData/BestSales.json";
import bestSaleBanner from "@/public/BestSales/special-snacks-img.png"

type ProductType = {
  Id: string;
  image: string;
  title: string;
  price: string;
  lessprice: string;
  review: string;
  sold: string;
  sale: string;
  quantity?: number;
};


const BestSales = () => {

  const handelAddToCart = (product: ProductType) => {
    const cart: ProductType[] = JSON.parse(localStorage.getItem("cart") || "[]");      // Recuperamos el cart del localStorage

    const existingProduct = cart.find((item: ProductType) => item.Id === product.Id);  // Buscamos si el producto ya existe en el cart

    if (existingProduct) {                                                             // Si existe, mostramos un toast
      toast(`${product.title} is already added to cart`, {
        icon: "👏",
      });
    } else {                                                                           // Si no existe, lo añadimos al cart
      cart.push({ ...product, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));                              // y lo actualizamos en el localStorage
      window.dispatchEvent(new Event("storageUpdate"));                                // Lanzamos ademas un evento para actualizar el cart en la UI
      toast.success(`${product.title} is added to cart`);
    }
  };


  return (
    <div className="px-[8%] lg:px-[12%] py-10">
      <div className="title my-10 w-full flex flex-col lg:flex-eow justify-between items-start gap-5">
        <h1 className="text-4xl md:text-5xl Unbounded">Today's Best Sales.</h1>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-5">
        {/* Columna de la izquierda */}
        <div className="w-full lg:h-2/3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {bestSales.map((product, index) => (
              
                <div key={index} className="product-wrap flex flex-row items-center gap-4 border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-all hover:border-prim cursor-pointer duration-300">
                  <div className="relative flex justify-center items-center w-full lg:w-2/5 h-50">
                    {/* Product Image */}
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={180}
                      height={180}
                      className="object-contain mt-10"
                    />


                    {/* Sale Badge */}
                    <span 
                      className={`
                        absolute off-product top-0 left-0 px-4 py-2 Merienda text-xs font-bold text-white rounded 
                        ${product.sale === "New"
                          ? "bg-yellow-400"
                          : product.sale.includes("%")
                            ? "bg-red-400"
                            : "opacity-0"
                        }
                      `}
                    >
                      {product.sale}
                    </span>
                  </div>

                  <div className="text-left w-full lg:w-3/5 mt-5 lg:mt-0">
                    <h3 className="font-semibold text-gray-800">
                      {product.title}
                    </h3>

                    <div className="flex justify-start items-center gap-2 mt-2">
                      <span className="text-prim font-bold">
                        {product.price}
                      </span>
                      <span className="text-gray-400 line-through text-sm">
                        {product.lessprice}
                      </span>
                    </div>

                    <div className="text-sm text-gray-500 mt-1">
                      {product.review} • Sold {product.sold}
                    </div>

                    <button
                      onClick={() => handelAddToCart(product)} 
                      className="w-full px-4 cursor-pointer border border-prim py-2 mt-3 text-sm font-semibold bg-prim-light text-prim hover:bg-prim hover:text-white rounded-full transition-all duration-300"
                    >
                      Add To Cart <i className="bi bi-cart ms-1"></i>
                    </button>
                  </div>
                </div>
              
            ))}
          </div>
        </div>

        {/* Columna de la derecha */}
        <div className="w-full lg:w-1/3 p-10 rounded-2xl best-sale-banner flex flex-col justify-center items-center">
          <Image src={bestSaleBanner} alt="bestSalelBanner" />

          <h1 className="text-4xl text-white Merienda my-5">
            Fresh Vegetables
          </h1>

          <p className="text-center text-white font-semibold mb-3">
            Get the freshest vegetables delivered to your doorstep. Healthy,
            organic, and full of flavor.
          </p>

          <button className="px-4 w-full py-2 cursor-pointer font-semibold text-prim bg-prim-light rounded-full text-md hover:bg-prim-dark hover:text-white transition-all duration-500">
            Add To Cart <i className="bi bi-cart ms-1"></i>
          </button>
        </div>

      </div>
    </div>
  )
}

export default BestSales