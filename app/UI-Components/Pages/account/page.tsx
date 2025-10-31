import Link from 'next/link'
import React from 'react'
import Benefits from '../../Index/Benefits/Benefits'

const Account = () => {
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
              &nbsp; Account
            </h2>
          </div>
        </div>
      </div>

      <div className="px-[8%] lg:px-[12%] py-10">
        <div className='flex flex-col lg:flex-row justify-between gap-5'>
          {/* Login */}
          <div className='w-full lg:w-1/2 gap-3 border border-gray-300 px-5 py-8 rounded-lg hover:border-prim cursor-pointer'>
            <h2 className='Unbounded text-xl mb-10'>Login</h2>

            <form>
              <div className='flex flex-col mb-5'>
                <label className='Unbounded mb-2'>Username or email address</label>
                <input 
                  type="text" 
                  placeholder="First Name"
                  className='border rounded-md border-gray-300 p-3 focus:outline-none focus:border-prim focus:ring-1 focus:ring-prim'
                />
              </div>

              <div className='flex flex-col mb-5'>
                <label className='Unbounded mb-2'>Password</label>
                <input 
                  type="password" 
                  placeholder="password"
                  className='border rounded-md border-gray-300 p-3 focus:outline-none focus:border-prim focus:ring-1 focus:ring-prim'
                />
              </div>

              <div className='flex items-center gap-5 mb-8'>
                <button className='px-8 py-3 rounded-md text-white Unbounded bg-prim hover:bg-green-400/80 hover:text-black transition-all duration-300'>
                  Login
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

          {/* Register */}
          <div className='w-full lg:w-1/2 gap-3 border border-gray-300 px-5 py-8 rounded-lg hover:border-prim cursor-pointer'>
            <h2 className='Unbounded text-xl mb-10'>Register</h2>

            <form>
              <div className='flex flex-col mb-5'>
                <label className='Unbounded mb-2'>Username</label>
                <input 
                  type="text" 
                  placeholder="First Name"
                  className='border rounded-md border-gray-300 p-3 focus:outline-none focus:border-prim focus:ring-1 focus:ring-prim'
                />
              </div>

              <div className='flex flex-col mb-5'>
                <label className='Unbounded mb-2'>Email</label>
                <input 
                  type="email" 
                  placeholder="email@example.com"
                  className='border rounded-md border-gray-300 p-3 focus:outline-none focus:border-prim focus:ring-1 focus:ring-prim'
                />
              </div>

              <div className='flex flex-col mb-5'>
                <label className='Unbounded mb-2'>Password</label>
                <input 
                  type="password" 
                  placeholder="password"
                  className='border rounded-md border-gray-300 p-3 focus:outline-none focus:border-prim focus:ring-1 focus:ring-prim'
                />
              </div>

              <div className='flex flex-col gap-5 mb-8'>
                  <p className='text-gray-600 text-md mb-5'>
                    Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#" className='text-prim hover:underline'>Privacy Policy</a>.
                  </p>
                

                <button className='self-start px-8 py-3 rounded-md text-white Unbounded bg-prim hover:bg-green-400/80 hover:text-black transition-all duration-300'>
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Benefits />
    </>
  )
}

export default Account