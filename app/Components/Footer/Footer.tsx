"use client"

import Image from "next/image"
import StoreImg1 from "@/public/store-img1.png"
import StoreImg2 from "@/public/store-img2.png"
import payment from "@/public/payment.png"
import Link from "next/link"

const Footer = () => {
  // --- Datos para la información de contacto ---
  const contactItems = [
    {
      icon: "bi-geo-alt-fill",
      content: (
        <>
          789 Inner Lane,
          <span className="hidden lg:inline"><br /></span>
          Biyes park, California
        </>
      ),
      wrapperClass: "leading-relaxed",
    },
    {
      icon: "bi-telephone",
      content: (
        <>
          +00 123 456 789
          <span className="hidden lg:inline"><br /></span>
          or +00 987 654 012
        </>
      ),
      wrapperClass: "leading-relaxed break-words",
    },
    {
      icon: "bi-envelope",
      content: "Example@site.com",
      wrapperClass: "leading-relaxed break-all",
    },
  ];

  // --- Datos para las columnas de enlaces del footer ---
  const footerLinks = [
    {
      title: "Information",
      links: ["Become a vendor", "Affiliate program", "Privacy Policy", "Our Suppliers", "Extended Plan", "Community"],
    },
    {
      title: "Support",
      links: ["Help Center", "Contact Us", "Report Abuse", "Submit and Dispute", "Policies & Rule", "Online Shopping"],
    },
    {
      title: "Account",
      links: ["My Account", "Order History", "Shopping Cart", "Compare", "Help Ticket", "Wishlist"],
    },
    {
      title: "Groceries",
      links: ["Dairy & Eggs", "Meat & Seafood", "Breakfast Food", "Household Supplies", "Bread & Bakery", "Pantry Staples"],
    },
  ];

  return (
    <>
      <footer className="footer px-[8%] lg:px-[12%] py-10">
        {/* --- GRID PRINCIPAL --- */}
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_250px] gap-10 pb-10">

          {/* --- Columna 1: Logo y contacto --- */}
          <div className="flex flex-col">
            <Link
              href="/"
              className="text-2xl sm:text-3xl font-bold Merienda text-black"
            >
              Snack<span className="text-prim">Basket</span>
            </Link>

            <p className="my-3 text-sm sm:text-base text-gray-700">
              We&apos;re Grocery Shop,
              <span className="hidden lg:inline"><br /></span>
              an innovative team of food suppliers.
            </p>

            <div className="flex flex-col gap-y-5 mt-3">
              {contactItems.map((item, index) => (
                <div key={index} className="flex items-start text-sm sm:text-base">
                  <i className={`bi ${item.icon} px-3 py-2 mr-3 text-white bg-prim rounded-full flex-shrink-0`}></i>
                  <span className={item.wrapperClass}>
                    {item.content}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* --- Columna 2: Bloques de enlaces --- */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-7 sm:gap-10">
            {footerLinks.map((column) => (
              <div key={column.title} className="flex flex-col">
                <h2 className="Unbounded text-xl md:text-lg lg:text-base mb-3">{column.title}</h2>
                {column.links.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-prim hover:ps-2 transition-all duration-300"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            ))}
          </div>

          {/* --- Columna 3: App y redes sociales --- */}
          <div className="flex flex-col lg:items-end lg:text-right">
            <h2 className="Unbounded text-xl md:text-lg lg:text-base mb-3">Shop on The Go</h2>
            <p className="my-3 text-gray-700">
              SnackBasket App is available.
              <span className="hidden lg:inline"><br /></span>
              Get it now
            </p>

            <div className="flex gap-3 flex-col xl:flex-col lg:items-end">
              <Image src={StoreImg1} alt="Store1" className="w-[130px] h-auto" />
              <Image src={StoreImg2} alt="Store2" className="w-[130px] h-auto" />
            </div>

            <div className="social-media flex gap-3 mt-5 lg:justify-end">
              {["facebook", "twitter", "linkedin", "youtube"].map((icon) => (
                <i
                  key={icon}
                  className={`bi bi-${icon} px-3 py-2 rounded-full bg-black text-white hover:bg-prim transition-all duration-300 cursor-pointer`}
                ></i>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* --- Pie inferior --- */}
      <div className="bottom-footer px-[8%] lg:px-[12%] py-5 bg-prim-light">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-center md:text-left text-lg">
            ©2025. All Rights Reserved By{" "}
            <a href="https://uicode.in/" className="font-semibold hover:text-prim transition-colors">
              Uicode
            </a>
          </p>

          <Image src={payment} alt="payment" className="w-auto h-[28px]" />
        </div>
      </div>
    </>
  )
}

export default Footer
