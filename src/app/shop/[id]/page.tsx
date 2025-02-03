import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosGitCompare } from "react-icons/io";
import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { PiUserBold } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { shopdetail } from "../../../../Data/data"
import { IoIosStar } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
interface Params {
  params: {
    id: string
  }
}
const page = ({ params }: Params) => {
  const parmcal = Number(params.id)
  const datashop = shopdetail.find((item: any) => item.id === parmcal)
  return (
    <div>
      <header className="bg-black text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-yellow-500">FoodTuck</h1>
          <nav className="lg:block hidden">
            <ul className="flex space-x-6">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/ourmenu">Menu</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/ourchef">Chef</Link></li>
              <li><Link href="/aboutus">About</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/signin">SignIn</Link></li>
            </ul>
          </nav>
          <div className="flex gap-4 ">
            <h1><IoSearch className="text-whitetext text-[24px] cursor-pointer" /></h1>
            <h1><Link href={"/signup"}><PiUserBold className="text-whitetext text-[24px] cursor-pointer" /></Link></h1>
            <h1><Link href={"/shoppingcart"}><HiOutlineShoppingBag className="text-whitetext text-[24px] cursor-pointer" /></Link> </h1>
          </div>
          <div className="lg:hidden block">
            <Sheet>
              <SheetTrigger>
                <GiHamburgerMenu className="text-whitetext text-[24px] cursor-pointer" />
              </SheetTrigger>
              <SheetContent>
                <ul className="flex flex-col gap-[10px] font-medium text-[16px] text-blackkk">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/ourmenu">Menu</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/ourchef">Chef</Link></li>
                  <li><Link href="/aboutus">About</Link></li>
                  <li><Link href="/shop">Shop</Link></li>
                  <li><Link href="/signin">SignIn</Link></li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/allnav.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Our Product Detail</h2>
          <p className="pt-[10px]">
            <Link href="/" className="text-yellow-400">Home</Link> › Shop
          </p>
        </div>
      </section>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              alt="ecommerce"
              width={600}
              height={600}
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={datashop?.image || ""}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <button className="text-sm title-font rounded-sm p-1 text-whitetext bg-bordercoloryello tracking-widest">
                In Stock
              </button>
              <h1 className="text-gray-900 text-3xl title-font mb-1 pb-4 pt-1 font-bold">
                {datashop?.title}
              </h1>
              <p className="leading-relaxed text-[14px]">
                {datashop?.para}
              </p>
              <div className="flex flex-col gap-1 mt-6 items-start pb-5 border-b-2 border-gray-100 mb-5">
                <h1 className='font-bold text-blackkk text-[19px]'>{datashop?.price}</h1>
                <div className='flex gap-5 text-[13px]'>
                  <h1 className='text-bordercoloryello flex'> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /></h1>
                  <div className='border-b font-semibold tracking-tight transition-colors first:mt-0 pt-[20px] scroll-m-20 ' />
                  <h1 className='leading-[16px]'>{datashop?.rating} Rating</h1>
                  <div className='border-b font-semibold tracking-tight transition-colors first:mt-0 pt-[20px] scroll-m-20 ' />
                  <h1 className='leading-[16px]'>{datashop?.review} Review</h1>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex border border-gray-300 rounded">
                    <button className="px-3 text-gray-600 hover:bg-gray-200">-</button>
                    <input
                      type="number"
                      className="w-10 text-center items-center border-l border-r border-gray-300 focus:outline-none"
                      defaultValue="1"
                    />
                    <button className="px-3 text-gray-600 hover:bg-gray-200">+</button>
                  </div>
                  <button className="text-whitetext bg-bordercoloryello p-1">Add to cart</button>
                </div>
              </div>
              <div>
                <div>
                  <div className="flex flex-col gap-3 ">
                    <h1 className="flex leading-[15px] gap-[15px] text-[15px]"><IoMdHeartEmpty /> Add to Wishlist <IoIosGitCompare />Compare</h1>
                    <h1 className="leading-[15px] gap-[15px] text-[15px]" >Category: {datashop?.category} </h1>
                    <h1 className="leading-[15px] gap-[15px] text-[15px]">Tag: Our Shop</h1>
                  </div>
                  <div className="flex leading-[20px] gap-4 pt-3">
                    Share: <FaInstagram className="text-[20px]" /> <AiFillTwitterCircle className="text-[20px]" /> <FaFacebook className="text-[20px]" /> <AiFillTwitterCircle className="text-[20px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-[100px] mb-[100px] lg:w-4/5  container px-12 mx-auto">
        <div className="flex gap-10">
          <button className="bg-bordercoloryello text-whitetext p-2 ">Description</button><button>Reviews (22)</button>
        </div>
        <div className="flex flex-col gap-4 text-[14px] mt-4">
          <p>{datashop?.description}</p>
          <p>{datashop?.senddespara}</p>
          <h1 className="font-bold text-[16px]">Key Benefits</h1>
          <p className="text-[13px]">. {datashop?.firstkeybenficts}</p>
          <p className="text-[13px]">. {datashop?.secondkey}</p>
          <p className="text-[13px]">. {datashop?.thirdkey}</p>
          <p className="text-[13px]">. {datashop?.fourthkey}</p>
          <p className="text-[13px]">. {datashop?.fiftkey}</p>
        </div>
      </div>
    </div>
  )
}

export default page;
