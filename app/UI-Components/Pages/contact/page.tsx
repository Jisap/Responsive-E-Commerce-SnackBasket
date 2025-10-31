import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="px-[8%] lg:px-[12%] bg-[#E6F9EF] py-5">
        <div className="flex justify-between items-center">

          <div className="flex">
            <Link href="/" className="text-2xl Unbounded">
              Home &nbsp; -
            </Link>
            <h2 className="Unbounded text-2xl text-prim">
              &nbsp; Contact
            </h2>
          </div>
        </div>
      </div>

      <div className='px-[8%] lg:px-[12%] py-10'>
        <div className='flex flex-col lg:flex-row justify-between gap-5'>
          {/* Make custom request */}
          <div className='w-full lg:w-1/1 gap-3 border py-6 border-gray-300 px-5 rounded-lg hover:border-prim cursor-pointer'>
            <h2 className='Unbounded text-xl mb-10'>
              Make custom request
            </h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                <div className='flex flex-col'>
                  <label className='Unbounded mb-2'>Full Name</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className='border rounded-md border-gray-300 p-3 focus:outline-none focus:border-prim focus:ring-1 focus:ring-prim'
                  />
                </div>

                <div className='flex flex-col'>
                  <label className='Unbounded mb-2'>Email</label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className='border rounded-md border-gray-300 p-3 focus:outline-none focus:border-prim focus:ring-1 focus:ring-prim'
                  />
                </div>
                
                <div className='flex flex-col'>
                  <label className='Unbounded mb-2'>Phone Number</label>
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className='border rounded-md border-gray-300 p-3 focus:outline-none focus:border-prim focus:ring-1 focus:ring-prim'
                  />
                </div>

                <div className='flex flex-col'>
                  <label className='Unbounded mb-2'>Subject</label>
                  <input
                    type="text"
                    placeholder="Subject"
                    className='border rounded-md border-gray-300 p-3 focus:outline-none focus:border-prim focus:ring-1 focus:ring-prim'
                  />
                </div>

                <div className='flex flex-col md:col-span-2'>
                  <label className='Unbounded mb-2'>Message</label>
                  <textarea 
                    
                    placeholder="Message"
                    className='border rounded-md border-gray-300 p-3 focus:outline-none focus:border-prim focus:ring-1 focus:ring-prim'
                    rows={5}
                  />
                </div>

              <div className='flex items-center gap-5 md:col-span-2'>
                <button className='px-8 py-3 rounded-md text-white Unbounded bg-prim hover:bg-green-400/80 hover:text-black transition-all duration-300 self-start'>
                    Send Message
                  </button>

                <div className='flex'>
                  <label className='flex items-center text-xl cursor-pointer'>
                    <input type="checkbox" className='text-gray-600 w-5 h-5 mr-2' />
                    Remember Me
                  </label>
                </div>
              </div>
            </form>
          </div>

          {/* Get in touch */}
          <div className='w-full lg:w-1/2 gap-3 sticky top-25 left-0 h-[100%]  hover:border-prim cursor-pointer'>
            <div className='border border-gray-300 px-5 py-6 rounded-lg'>
              <h2 className='Unbounded text-xl mb-10'>Get in touch</h2>

              <div className='flex flex-col gap-8 mt-5'>
                <p className='text-prim Unbounded'>
                  <i className='bi bi-telephone mr-2 text-xl border border-prim text-prim px-3 py-2 rounded-full'></i>
                  +00 123 456 789
                </p>
                <p className='text-prim Unbounded'>
                  <i className='bi bi-envelope mr-2 text-xl border border-prim text-prim px-3 py-2 rounded-full'></i>
                  snackbasket@example.com
                </p>
                <p className='text-prim Unbounded'>
                  <i className='bi bi-geo-alt mr-2 text-xl border border-prim text-prim px-3 py-2 rounded-full'></i>
                  123 Snack St, Food City, USA
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact