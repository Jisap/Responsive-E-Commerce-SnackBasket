"use client";

import Image from "next/image";

import products from "@/app/JsonData/Recommend.json";
import toast from "react-hot-toast";
import Link from "next/link";

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




const Recommended = () => {

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

  const handelAddToWishlist = (product: ProductType) => {
    const wishlist: ProductType[] = JSON.parse(localStorage.getItem("wishlist") || "[]");

    const existingProduct = wishlist.find(
      (item: ProductType) => item.Id === product.Id
    );

    if (existingProduct) {
      toast(`${product.title} is already added to Wishlist`, {
        icon: "👏",
      });
    } else {
      wishlist.push({ ...product, quantity: 1 });
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      window.dispatchEvent(new Event("storageUpdate"));
      toast.success(`${product.title} is added to Wishlist`);
    }
  };

  return (
    <div className="px-[8%] lg:px-[12%] py-10">
      <div className="title my-10 w-full flex flex-col lg:flex-eow justify-between items-start gap-5">
        <h1 className="text-4xl md:text-5xl Unbounded">Recommended for you.</h1>
      </div>

      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {(products as ProductType[]).map((product, index) => (
            <div
              key={index}
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
                  onClick={() => handelAddToWishlist(product)}
                  className="absolute top-0 left-0 w-[40px] h-[40px] rounded-full text-prim bg-prim-light hover:bg-prim hover:text-white transition-all flex justify-center items-center "
                >
                  <i className="bi bi-balloon-heart text-2xl"></i>
                </div>

                <span
                  className={`
                    absolute off-product top-0 right-0 px-4 py-2 Merienda text-xs font-bold text-white rounded 
                    ${product.sale === "New"
                      ? "bg-yellow-400"
                      : product.sale.includes("%")
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
                onClick={() => handelAddToCart(product)}
                className="px-4 w-full py-2 cursor-pointer font-semibold text-prim bg-prim-light rounded-full text-md hover:bg-prim hover:text-white transition-all duration-500"
              >
                Add To Cart <i className="bi bi-cart ms-1"></i>
              </button>
            </div>

          ))}
        </div>
      </div>
    </div>
  )
}

export default Recommended