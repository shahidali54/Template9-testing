import React from 'react'
import Link from "next/link";
const page = () => {
  return (
    <div>
      <header className="bg-black text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-yellow-500">FoodTuck</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/menu">Menu</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/allnav.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">404 Error</h2>
          <p className="pt-[10px]">
            <Link href="/" className="text-yellow-400">Home</Link> › 404
          </p>
        </div>
      </section>
      <div className='mt-[100px] mb-[100px] flex flex-col justify-center items-center space-y-4'>
        <h1 className='text-bordercoloryello text-center font-bold text-4xl'>404</h1>
        <h1 className='text-center font-bold text-[25px]'>Oops! Looks like something went wrong</h1>
        <p className='text-center w-[400px] font-medium'>Page cannot be found! We’ll have it figured out in no time. Meanwhile, check out these fresh ideas:</p>
        <button className='bg-bordercoloryello w-[100px] h-[40px]'>Go to home</button>
      </div>

    </div>
  )
}

export default page
