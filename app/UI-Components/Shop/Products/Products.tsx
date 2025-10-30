"use client"

import Image from "next/image"
import  products from "@/app/JsonData/Recommend.json";
import Link from "next/link";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useCartActions } from "@/app/hooks/useCartActions";


const Products = () => {

  const [price, setPrice] = useState(100);
  const [discount50, setDiscount50] = useState(false);
  const [discount30, setDiscount30] = useState(false);
  const [isNew, setIsNew] = useState(false);

  const { handleAddToCart, handleAddToWishlist } = useCartActions();

  const [filteredProducts, setFilteredProducts] = useState(products)

  useEffect(() => {
    let result = products;                                                // Guardamos los products en una variable

    result= result.filter((p) => {                                        // Filtramos los productos que cumplan con los criterios de búsqueda
      const productPrice = parseFloat(p.price.replace(/[^0-9.-]+/g, "")); // Obtenemos el precio de los productos
      return productPrice <= price;                                       // Comprobamos si el precio del producto es menor o igual al precio buscado
    });

    if(discount50){                                         // Si el filtro de descuento de 50% está activo
      result = result.filter((p) => p.sale.includes("50%")) // Filtramos los productos que tengan descuento de 50%
    }

    if(discount30){                                         // Si el filtro de descuento de 30% está activo
      result = result.filter((p) => p.sale.includes("30%")) // Filtramos los productos que tengan descuento de 30%
    }

    if(isNew){                                              // Si el filtro de nuevos productos está activo
      result = result.filter((p) => p.sold === "New")       // Filtramos los productos que son nuevos
    }

    setFilteredProducts(result); // Actualizamos los resultados filtrados

  }, [price, discount50, discount30, isNew])

  const [randomProduct, setRandomProduct] = useState(products[0]);

  useEffect(() => {
    // Seleccionar un producto aleatorio solo en el cliente para evitar errores de hidratación
    setRandomProduct(products[Math.floor(Math.random() * products.length)]);
  }, []); // El array vacío asegura que esto solo se ejecute una vez en el cliente

  return (
    <div className="px-[8%] lg:px-[12%] py-10">
      <div className="my-10">
        <div className="flex flex-col md:flex-row justify-between gap-5 items-start">
          {/* Sidebar */}
          <div className="relative w-full h-full md:w-1/2 lg:w-1/3 lg:sticky top-22 left-0">
            <div className="border border-gray-300 shadow rounded p-3">
              <div className="border-b w-full border-gray-300 pb-3 flex items-center justify-between">
                <h2 className="text-xl Unbounded">Product Category</h2>

                <button
                  onClick={() => setFilteredProducts(products)}
                  className="border border-gray-300 px-2 py-2 rounded cursor-pointer hover:border-gray-500 transition-all duration-300"
                >
                  Reset
                </button>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-medium mb-2">
                  Price Range
                </h3>

                <div className="flex items-center space-x-4">
                  <span className="text-gray-700 text-sm font-medium">$0</span>
                  <input 
                    type="range"
                    min={0}
                    max={100}
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full accent-prim"
                  />
                  <span className="text-gray-700 text-sm font-medium">${price}</span>
                </div>
              </div>

              {/* Discount */}
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Discount</h3>
                <form className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={discount50}
                      onChange={(e) => setDiscount50(e.target.checked)}
                      className="form-checkbox accent-prim"
                    />

                    <span className="">50% off</span>
                  </label>

                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={discount30}
                      onChange={(e) => setDiscount50(e.target.checked)}
                      className="form-checkbox accent-prim"
                    />

                    <span className="">30% off</span>
                  </label>
                </form>
              </div>

              {/* other */}
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Other</h3>

                <form className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isNew}
                      onChange={(e) => setIsNew(e.target.checked)}
                      className="form-checkbox accent-prim"
                    />

                    <span className="">New Product</span>
                  </label>
                </form>
              </div>
            </div>

            {/* Random Product */}
            <div className="mt-3">
                {randomProduct && <div
                  key={randomProduct.Id}
                  className="product-wrap border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-all hover:border-[var(--prim-color)] cursor-pointer duration-300"
                >
                  <div className="relative flex justify-center items-center w-full h-50">
                    <Image
                      src={randomProduct.image}
                      alt={randomProduct.title}
                      width={180}
                      height={180}
                      className="object-contain mt-10"
                    />

                    {/* Botton on product card */}
                    <div
                      onClick={() => handleAddToWishlist(randomProduct)}
                      className="absolute top-0 left-0 w-[40px] h-[40px] rounded-full text-prim bg-prim-light hover:bg-prim hover:text-white transition-all flex justify-center items-center "
                    >
                      <i className="bi bi-balloon-heart text-2xl"></i>
                    </div>

                    <span
                      className={`
                        absolute off-product top-0 right-0 px-4 py-2 Merienda text-xs font-bold text-white rounded 
                        ${randomProduct.sale === "New"
                          ? "bg-yellow-400"
                          : randomProduct.sale?.includes("%")
                            ? "bg-red-400"
                            : "opacity-0"
                        }`
                      }
                    >
                      {randomProduct.sale}
                    </span>
                  </div>

                  {/* Product info */}
                  <Link
                    href={{
                      pathname: "/UI-Components/Shop",
                      query: { id: randomProduct.Id },
                    }}
                  >
                    <div className="space-y-1 mt-5  product-info h-[200px]">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500 text-sm line-through">
                          {randomProduct.lessprice}
                        </span>

                        <span className="text-xl font-semibold ">
                          {randomProduct.price}{" "}
                          <span className="text-gray-500 text-sm">/Qty</span>{" "}
                        </span>
                      </div>

                      <p className="text-md text-gray-500 flex items-center gap-1">
                        <i className="bi bi-shop text-[var(--prim-color)]"></i> By
                        Lucky SuperMarket
                      </p>

                      <h3 className="text-md font-normal Unbounded my-2 hover:text-[var(--prim-color)] transition-all duration-500">
                        {randomProduct.title}
                      </h3>

                      <span className="flex items-center text-yellow-500 text-md">
                        <i className="bi bi-star-fill me-1"></i> {randomProduct.review}
                      </span>

                      <p className="mt-3 Unbounded text-sm text-gray-600">
                        Sold: {randomProduct.sold}
                      </p>
                    </div>
                  </Link>

                  <button
                  onClick={() => handleAddToCart(randomProduct)}
                    className="px-4 w-full py-2 cursor-pointer font-semibold text-prim bg-prim-light rounded-full text-md hover:bg-prim hover:text-white transition-all duration-500"
                  >
                    Add To Cart <i className="bi bi-cart ms-1"></i>
                  </button>
                </div>}
            </div>

          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-3 lg:mt-0 mt-20">
            {filteredProducts.length > 0 
              ? ( filteredProducts.map((product) => (
                <div
                  key={product.Id}
                  className="product-wrap border border-gray-300 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-all hover:border-[var(--prim-color)] cursor-pointer duration-300"
                >
                  <div className="relative flex justify-center items-center w-full h-50">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={180}
                      height={180}
                      className="object-contain mt-10"
                    />

                    {/* Botton on product card */}
                    <div
                      onClick={() => handleAddToWishlist(product)}
                      className="absolute top-0 left-0 w-[40px] h-[40px] rounded-full text-prim bg-prim-light hover:bg-prim hover:text-white transition-all flex justify-center items-center "
                    >
                      <i className="bi bi-balloon-heart text-2xl"></i>
                    </div>

                    <span
                      className={`
                    absolute off-product top-0 right-0 px-4 py-2 Merienda text-xs font-bold text-white rounded 
                    ${product.sale === "New"
                          ? "bg-yellow-400"
                          : product.sale?.includes("%")
                            ? "bg-red-400"
                            : "opacity-0"
                        }`
                      }
                    >
                      {product.sale}
                    </span>
                  </div>

                  {/* Product info */}
                  <Link
                    href={{
                      pathname: "/UI-Components/Shop",
                      query: { id: product.Id },
                    }}
                  >
                    <div className="space-y-1 mt-5  product-info h-[200px]">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500 text-sm line-through">
                          {product.lessprice}
                        </span>

                        <span className="text-xl font-semibold ">
                          {product.price}{" "}
                          <span className="text-gray-500 text-sm">/Qty</span>{" "}
                        </span>
                      </div>

                      <p className="text-md text-gray-500 flex items-center gap-1">
                        <i className="bi bi-shop text-[var(--prim-color)]"></i> By
                        Lucky SuperMarket
                      </p>

                      <h3 className="text-md font-normal Unbounded my-2 hover:text-[var(--prim-color)] transition-all duration-500">
                        {product.title}
                      </h3>

                      <span className="flex items-center text-yellow-500 text-md">
                        <i className="bi bi-star-fill me-1"></i> {product.review}
                      </span>

                      <p className="mt-3 Unbounded text-sm text-gray-600">
                        Sold: {product.sold}
                      </p>
                    </div>
                  </Link>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="px-4 w-full py-2 cursor-pointer font-semibold text-prim bg-prim-light rounded-full text-md hover:bg-prim hover:text-white transition-all duration-500"
                  >
                    Add To Cart <i className="bi bi-cart ms-1"></i>
                  </button>
                </div>
              ))) : (
                <p className="font-bold border-b h-7 text-gray-500">
                  No products found
                </p>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products