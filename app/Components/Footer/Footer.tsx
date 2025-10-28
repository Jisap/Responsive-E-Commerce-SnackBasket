"use client"

import Image from "next/image"
import StoreImg1 from "@/public/store-img1.png"
import StoreImg2 from "@/public/store-img2.png"
import payment from "@/public/payment.png"
import Link from "next/link"




const Footer = () => {
  return (
    <>
      <div className="footer px-[8%] lg:px-[12%] py-5 pt-10">
        <div className="flex flex-col lg:flex-row gap-3 pb-5">
          <div className="flex flex-col">
            {/* logo */}
            <Link href="/" className="text-3xl font-bold Merienda text-black">
              Snack<span className="text-prim">Basket</span>
            </Link>

            <p className="my-3 text-gray-700">
              We&apos;re Grocery Shop, an innovative team of food supliers.
            </p>

            <div className="flex flex-col gap-y-6 mt-3">
              <p className="text-lg">
                <i className="bi bi-geo-alt-fill px-3 py-2 mr-3 text-white bg-prim rounded-full"></i>
                789 Inner Lane, Biyes park, California
              </p>

              <p className="text-lg">
                <i className="bi bi-telephone px-3 py-2 mr-3 text-white bg-prim rounded-full"></i>
                +00 123 456 789 or +00 987 654 012
              </p>

              <p className="text-lg">
                <i className="bi bi-envelope px-3 py-2 mr-3 text-white bg-prim rounded-full"></i>
                Example@site.com
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-12 lg:mt-0">
            <div className="flex flex-col ps-2">
              <h2 className="Unbounded text-2xl mb-3">Information</h2>

              <Link href="#" className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-prim hover:ps-2 transition-all duration-300">
                Become a vendor
              </Link>
              <Link href="#" className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-prim hover:ps-2 transition-all duration-300">
                Affiliate program
              </Link>
              <Link href="#" className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-prim hover:ps-2 transition-all duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-prim hover:ps-2 transition-all duration-300">
                Our Suppliers
              </Link>
              <Link href="#" className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-prim hover:ps-2 transition-all duration-300">
                Extended Plan
              </Link>
              <Link href="#" className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-prim hover:ps-2 transition-all duration-300">
                Community
              </Link>
            </div>

            <div className="flex flex-col ps-2">
              <h2 className="Unbounded text-2xl mb-3">Support</h2>

              <Link href="#" className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-prim hover:ps-2 transition-all duration-300">
                Help Center
              </Link>
              <Link href="#" className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-prim hover:ps-2 transition-all duration-300">
                Contact Us
              </Link>
              <Link href="#" className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-prim hover:ps-2 transition-all duration-300">
                Report Abuse
              </Link>
              <Link href="#" className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-prim hover:ps-2 transition-all duration-300">
                Submit and Dispute
              </Link>
              <Link href="#" className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-prim hover:ps-2 transition-all duration-300">
                Policies & Rule
              </Link>
              <Link href="#" className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-prim hover:ps-2 transition-all duration-300">
                Online Shopping
              </Link>
            </div>

            <div className="flex flex-col ps-2">
              <h2 className="Unbounded text-2xl mb-3">Account</h2>

              <Link href="#" className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-prim hover:ps-2 transition-all duration-300">
                My Account
              </Link>
              <Link href="#" className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-prim hover:ps-2 transition-all duration-300">
                Order History
              </Link>
              <Link href="#" className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-prim hover:ps-2 transition-all duration-300">
                Shopping cart
              </Link>
              <Link href="#" className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-prim hover:ps-2 transition-all duration-300">
                Compare
              </Link>
              <Link href="#" className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-prim hover:ps-2 transition-all duration-300">
                Help Ticket
              </Link>
              <Link href="#" className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-prim hover:ps-2 transition-all duration-300">
                Wishlist
              </Link>
            </div>

            <div className="flex flex-col ps-2">
              <h2 className="Unbounded text-2xl mb-3">Groceries</h2>

              <Link href="#" className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-prim hover:ps-2 transition-all duration-300">
                Dairy & Eggs
              </Link>
              <Link href="#" className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-prim hover:ps-2 transition-all duration-300">
                Meat & Seafood
              </Link>
              <Link href="#" className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-prim hover:ps-2 transition-all duration-300">
                Breakfast Food
              </Link>
              <Link href="#" className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-prim hover:ps-2 transition-all duration-300">
                Household Supplies
              </Link>
              <Link href="#" className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-prim hover:ps-2 transition-all duration-300">
                Bread & Bakery
              </Link>
              <Link href="#" className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-prim hover:ps-2 transition-all duration-300">
                Pantry Staples
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="Unbounded text-2xl mb-3">
              Shop on The Go
            </h2>

            <p className="my-3 text-gray-700">
              SnackBasket App is available. Get it now
            </p>

            <div className="flex">
              <Image 
                src={StoreImg1}
                alt="Store1"
              />

              <Image 
                src={StoreImg2}
                alt="Store2"
              />
            </div>

            <div className="social-media flex gap-3 mt-5">
              <i className="bi bi-facebook px-3 py-2 rounded-full bg-black text-white hover:bg-prim transition-all duration-300 cursor-pointer"></i>
              <i className="bi bi-twitter px-3 py-2 rounded-full bg-black text-white hover:bg-prim transition-all duration-300 cursor-pointer"></i>
              <i className="bi bi-linkedin px-3 py-2 rounded-full bg-black text-white hover:bg-prim transition-all duration-300 cursor-pointer"></i>
              <i className="bi bi-youtube px-3 py-2 rounded-full bg-black text-white hover:bg-prim transition-all duration-300 cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-footer px-[8%] lg:px-[12%] py-5 bg-prim-light">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-lg">
            ©2025. All Rights Reserved By <a href="https://uicode.in/" className="font-semibold">Uicode</a>
          </p>

          <Image 
            src={payment}
            alt="payment"
          />
        </div>
      </div>
    </>
  )
}

export default Footer