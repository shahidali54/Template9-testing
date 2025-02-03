"use client";
import Image from 'next/image';
import React from 'react';
import { FaCheck } from "react-icons/fa";
import about1 from "../../../public/about1.png";
import about2 from "../../../public/about2.png";
import about3 from "../../../public/about3.png";

const Bestfoodyproduct = () => {
  return (
    <div className='lg:flex mt-[100px] lg:px-[150px] px-6 lg:gap-[100px]'>
      <div className='lg:w-[662px] lh:h-[562px] w-[300px] h-[300px]'>
        <h1 className='text-bordercoloryello font-greatVibes lg:text-[32px] text-[30px] leading-[40px] font-medium'>About us</h1>
        <h1 className='font-helvetica lg:w-[400px] font-bold lg:text-[40px] text-[30px] leading-[45px] text-whitetext'><span className='text-bordercoloryello'>We</span> Create the best foody product</h1>
        <p className='font-normal lg:text-[16px] text-[13px] lg:leading-6  text-whitetext lg:w-[480px] w-[280px] h-[48px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
        <div className='lg:block hidden'>
          <div className='leading-8 lg:mt-[90px] lg:block lg:text-[16px] text-whitetext flex flex-col lg:gap-[20px] '>
            <p className='flex gap-[15px] lg:block '> <FaCheck className='text-whitetext lg:block hidden' /> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            <p className='flex gap-[15px] lg:block '> <FaCheck className='text-whitetext lg:block hidden' /> Quisque diam pellentesque bibendum non dui volutpat fringilla</p>
            <p className='flex gap-[15px] lg:block '> <FaCheck className='text-whitetext lg:block hidden' /> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
        <button></button>
      </div>
      <div className='lg:ml-[-260px] lg:h-[562px] h-[200px]'>
        <section className="">
          <div className="flex flex-wrap">
            <div className="lg:w-2/3 mx-auto">
              <div className="flex flex-wrap lg:w-[500px] lg:h-[300px] w-[330px] h-[130px] rounded-[6px] px-6 mb-4">
                <Image src={about1} alt='aboutpics' />
              </div>
              <div className="flex flex-row gap-5">
                <div className="lg:block hidden">
                  <div className="flex flex-wrap lg:w-[240px] lg:h-[174px] w-[100px] rounded-[6px]">
                    <Image src={about2} alt='aboutpics' />
                  </div>
                </div>
                <div className="lg:block hidden">
                  <div className="flex flex-wrap lg:w-[240px] lg:h-[174px] w-[100px] rounded-[6px]">
                    <Image src={about3} alt='aboutpics' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Bestfoodyproduct;
