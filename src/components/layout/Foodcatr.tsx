import Image from 'next/image';
import React from 'react';
import cate1 from "../../../public/cate1.png";
import cate2 from "../../../public/cate2.png";
import cate3 from "../../../public/cate3.png";
import cate4 from "../../../public/cate4.png";

const Foodcatr = () => {
  return (
    <div className='lg:mt-[100px] lg:px-[100px] '>
      <h1 className='text-bordercoloryello text-center font-greatVibes lg:text-[32px] text-[30px] leading-[40px] font-medium'>Food Category</h1>
      <h1 className='font-helvetica  font-bold text-center lg:text-[40px] text-[30px] leading-[45px] text-whitetext'><span className='text-bordercoloryello'>Ch</span>oose Food Iteam</h1>
      <div className='flex lg:flex-row flex-col gap-3 lg:px-[100px] sm:justify-center px-6  pt-[30px]'>
        <Image src={cate1} alt="category" className='lg:w-[325px] lg:h-[248px] rounded-[6px]' />
        <Image src={cate2} alt="category" className='lg:w-[325px] lg:h-[248px] rounded-[6px]' />
        <Image src={cate3} alt="category" className='lg:w-[325px] lg:h-[248px] rounded-[6px]' />
        <Image src={cate4} alt="category" className='lg:w-[325px] lg:h-[248px] rounded-[6px]' />
      </div>
    </div>
  )
}

export default Foodcatr;
