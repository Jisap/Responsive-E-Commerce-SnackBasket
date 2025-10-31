"use client"

import Link from "next/link";
import { useState } from "react";
import { NavLink } from '../../types/types';

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Shop",
    href: "/UI-Components/Shop",
    dropdown: [
      { label: "Shop", href: "/UI-Components/Shop" },
      { label: "Shop Details", href: "" },
    ]
  },
  {
    label: "Pages",
    href: "#",
    dropdown: [
      { label: "Cart", href: "/UI-Components/Pages/cart" },
      { label: "Wishlist", href: "/UI-Components/Pages/whishlist" },
      { label: "Checkout", href: "/UI-Components/Pages/checkout" },
      { label: "Account", href: "/UI-Components/Pages/account" },
    ]
  },
  {
    label: "Blog",
    href: "#",
    dropdown: [
      { label: "Blog", href: "/UI-Components/Blogs/blog" },
      { label: "Blog Details", href: "/UI-Components/Blogs/blogDetails?id=1" }
    ]
  },
  { label: "Contact Us", href: "/UI-Components/Pages/contact" },
]

interface BottomNavbarProps {
  isFixed: boolean;
  cartCount: number;
  wishlistCount: number;
}

const BottomNavbar = ({ isFixed, cartCount, wishlistCount }: BottomNavbarProps) => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [label]: !prevState[label],
    }));
  };

  return (
    <div
      className={`
        w-full bg-white shadow-sm transition-all duration-500
        ${isFixed ? "fixed top-0 left-0 z-50 fixed-nav" : ""}
      `}
    >
      <div className="flex items-center justify-between px-[8%] lg:px-[12%] text-gray-700">
        {/* Destktop Nav */}
        <Link
          href="/"
          className={`
            text-3xl font-bold Merienda text-black hidden
            ${isFixed ? "lg:flex" : "hidden"}
          `}
        >
          Snack<span className="text-prim">Basket</span>
        </Link>

        <nav className="hidden lg:flex space-x-6 menu-link relative">
          {navLinks.map((link) => (
            link.dropdown
              ? (
                <div key={link.label} className="relative group z-[999]">
                  <Link href={link.href} className="flex items-center gap-1">
                    {link.label} <i className="ri-arrow-down-s-line"></i>
                  </Link>

                  <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl p-2 border border-gray-100 rounded-lg min-w-[150px]">
                    {link.dropdown.map((item) =>
                      item.label === "Shop Details"
                        ? (
                          <Link
                            key={item.label}
                            href={{
                              pathname: "/UI-Components/Shop",
                              query: { id: "Featured-1" } // ID de ejemplo
                            }}
                            className="block px-4 py-2 rounded-md hover:bg-prim-light transition-all"
                          >
                            {item.label}
                          </Link>
                        ) : item.label === "Blog Details"
                          ? (
                            <Link
                              key={item.label}
                              href={{
                                pathname: "/UI-Components/Blogs/blogDetails",
                                query: { id: "1" } // ID de ejemplo
                              }}
                              className="block px-4 py-2 rounded-md hover:bg-prim-light transition-all"
                            >
                              {item.label}
                            </Link>
                          ) : (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="block px-4 py-2 rounded-md hover:bg-prim-light transition-all"
                            >
                              {item.label}
                            </Link>
                          )
                    )}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                >
                  {link.label}
                </Link>
              )
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-x-6">
          <button className="nav-button cursor-pointer font-bold bg-prim text-white p-3">
            <i className="bi bi-telephone pe-2 text-xl"></i> 91+ 123 123 123
          </button>
        </div>

        {/* Mobile Nav header */}
        <div className="lg:hidden flex items-center justify-between gap-4 w-full">
          <button
            onClick={()=>setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl focus:outline-none"
          >
            <div className="flex items-center gap-x-5">
              <i className="ri-menu-line"></i>
            </div>
          </button>

          <div className="flex lg:hidden items-center gap-x-6">
            {/* Whislist */}
            <Link href="/UI-Components/Pages/whishlist" className="relative">
              <i className="bi bi-heart text-gray-600 text-xl hover:text-prim transition-all"></i>
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-prim text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {wishlistCount}
                </span>
              )}
            </Link>
            {/* Cart */}
            <Link href="/UI-Components/Pages/cart" className="relative">
              <i className="bi bi-cart text-gray-600 text-xl hover:text-prim transition-all"></i>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-prim text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          <button className="nav-button cursor-pointer font-bold bg-prim text-white p-3">
            <i className="bi bi-telephone pe-2 text-xl"></i> 91+ 123 123 123
          </button>
        </div>
      </div>

      {/* Floating Icons for Desktop */}
      <div
        className={`
          fixed bottom-4 right-5 z-50 transition-all duration-300
          ${isFixed ? "hidden lg:flex lg:gap-3" : "hidden"}
        `}
      >
        {/* Wishlist */}
        <Link
          href="/UI-Components/Pages/whishlist"
          className="relative bg-white p-3 rounded-full shadow-lg hover:bg-prim group"
        >
          <i className="bi bi-heart text-gray-600 text-lg group-hover:text-white transition-all"></i>
          {wishlistCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-prim text-white w-5 h-5 flex items-center justify-center rounded-full text-xs">
              {wishlistCount}
            </span>
          )}
        </Link>
        {/* Cart */}
        <Link
          href="/UI-Components/Pages/cart"
          className="relative bg-white p-3 rounded-full shadow-lg hover:bg-prim group"
        >
          <i className="bi bi-cart text-gray-600 text-lg group-hover:text-white transition-all"></i>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-prim text-white w-5 h-5 flex items-center justify-center rounded-full text-xs">
              {cartCount}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md overflow-hidden transition-all duration-500">
          <nav className="flex flex-col px-[4%] py-4 space-y-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="flex flex-col">
                  {/* Dropdown Header */}
                  <button
                    className="flex justify-between items-center w-full px-2 py-2 font-medium rounded-md hover:bg-gray-100"
                    onClick={() => toggleDropdown(link.label)}
                  >
                    {link.label}{" "}
                    <i
                      className={`
                          ri-arrow-down-s-line transition-transform
                          ${openDropdowns[link.label] ? "rotate-180" : ""}
                        `}
                    ></i>
                  </button>

                  {/* Dropdown Content */}
                  <div
                    className={`
                        overflow-hidden transition-all duration-500
                        ${
                          openDropdowns[link.label] ? "max-h-60 mt-1" : "max-h-0"
                        }
                      `}
                  >
                    <div className="flex flex-col bg-prim-light p-2 space-y-1">
                      {link.dropdown.map((item) =>
                        item.label === "Shop Details" ? (
                          <Link
                            key={item.label}
                            href={{
                              pathname: "/UI-Components/Shop",
                              query: { id: "Featured-1" }, // ID de ejemplo
                            }}
                            className="block px-4 py-2 rounded-md bg-white border border-prim-light hover:bg-gray-100 transition-all"
                          >
                            {item.label}
                          </Link>
                        ) : item.label === "Blog Details" ? (
                          <Link
                            key={item.label}
                            href={{
                              pathname: "/UI-Components/Blogs/blogDetails",
                              query: { id: "1" }, // ID de ejemplo
                            }}
                            className="block px-4 py-2 rounded-md bg-white border border-prim-light hover:bg-gray-100 transition-all"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block px-4 py-2 rounded-md bg-white border border-prim-light hover:bg-gray-100 transition-all"
                          >
                            {item.label}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-2 py-2 font-medium rounded-md"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </div>
  );
};
export default BottomNavbar;