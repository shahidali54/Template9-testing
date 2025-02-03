import { MdStar } from "react-icons/md";
import Image from 'next/image';
import React from 'react';
import client from "../../../public/client.png";
import { PiQuotesLight } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";

const Testi = () => {
  return (
    <div className="px-[20px] md:px-[50px] lg:px-[100px] mt-[50px] md:mt-[80px] lg:mt-[100px]">
      <h1 className="text-bordercoloryello font-greatVibes text-[24px] md:text-[28px] lg:text-[32px] leading-[30px] md:leading-[36px] lg:leading-[40px] font-medium">
        Testimonials
      </h1>
      <h1 className="font-helvetica font-bold text-[24px] md:text-[32px] lg:text-[40px] leading-[30px] md:leading-[38px] lg:leading-[45px] text-whitetext">
        What our client are saying
      </h1>
      <div className="px-[10px] md:px-[50px] lg:px-[100px] flex flex-col items-center">
        <div className="mt-10 bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col items-center w-full max-w-[600px] md:max-w-[700px] lg:max-w-[868px]">
          <div className="w-[80px] md:w-[100px] lg:w-[120px] h-[80px] md:h-[100px] lg:h-[120px] rounded-full overflow-hidden">
            <Image src={client} alt="client pic" className="object-cover" />
          </div>
          <div className="mt-6">
            <PiQuotesLight className="text-bordercoloryello text-[36px] md:text-[42px] lg:text-[48px]" />
          </div>
          <p className="mt-4 text-sm md:text-base lg:text-lg text-gray-600 text-center w-full max-w-[500px] md:max-w-[600px] lg:max-w-[696px] leading-[22px] md:leading-[24px] lg:leading-[26px] font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
            pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
            augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
            sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>
          <div className="flex text-lg md:text-xl lg:text-2xl mt-[10px]">
            <MdStar className="text-bordercoloryello" />
            <MdStar className="text-bordercoloryello" />
            <MdStar className="text-bordercoloryello" />
            <MdStar className="text-bordercoloryello" />
            <MdStar className="text-gray-400" />
          </div>
          <h2 className="mt-6 text-[18px] md:text-[20px] lg:text-[24px] font-bold text-gray-800">
            Alamin Hasan
          </h2>
          <p className="text-gray-500 text-sm md:text-base">Food Specialist</p>
        </div>
        <div className="text-sm md:text-base lg:text-xl flex mt-[10px] md:mt-[15px] lg:mt-[20px]">
          <GoDotFill className="text-bordercoloryello" />
          <GoDotFill className="text-bordercoloryello/30" />
          <GoDotFill className="text-bordercoloryello/30" />
          <GoDotFill className="text-bordercoloryello/30" />
        </div>
      </div>
    </div>
  );
};

export default Testi;
