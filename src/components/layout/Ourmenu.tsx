import Image from 'next/image';
import React from 'react';
import main from "../../../public/ourmenumai.png";

const ourdata = [
  {
    id: 0,
    title: "Lettuce Leaf",
    para: "Lacus nisi, et ac dapibus velit in consequat.",
    price: 12.5,
    img: "/ourmenu1.png"
  },
  {
    id: 1,
    title: "Fresh Breakfast",
    para: "Lacus nisi, et ac dapibus velit in consequat.",
    price: 14.5,
    img: "/ourmenu2.png"
  },
  {
    id: 2,
    title: "Mild Butter",
    para: "Lacus nisi, et ac dapibus velit in consequat.",
    price: 12.5,
    img: "/ourmenu3.png"
  },
  {
    id: 3,
    title: "Fresh bread",
    para: "Lacus nisi, et ac dapibus velit in consequat.",
    price: 12.5,
    img: "/ourmenu4.png"
  },
  {
    id: 4,
    title: "Glow Cheese",
    para: "Lacus nisi, et ac dapibus velit in consequat.",
    price: 12.5,
    img: "/ourmenu5.png"
  },
  {
    id: 5,
    title: "Italian pizza",
    para: "Lacus nisi, et ac dapibus velit in consequat.",
    price: 12.5,
    img: "/ourmenu6.png"
  },
  {
    id: 6,
    title: "Sllixe Beef",
    para: "Lacus nisi, et ac dapibus velit in consequat.",
    price: 12.5,
    img: "/ourmenu7.png"
  },
  {
    id: 7,
    title: "Mushaom Pizza",
    para: "Lacus nisi, et ac dapibus velit in consequat.",
    price: 12.5,
    img: "/ourmenu8.png"
  },
];

const Ourmenu = () => {
  return (
    <div className="mt-[100px]">
      <h1 className="text-center text-bordercoloryello font-greatVibes text-[24px] md:text-[32px] lg:text-[40px] leading-[30px] md:leading-[40px] font-medium">
        Choose & pick
      </h1>
      <h1 className="font-helvetica text-center font-bold text-[30px] md:text-[40px] lg:text-[50px] leading-[35px] md:leading-[45px] text-whitetext">
        <span className="text-bordercoloryello">Fr</span>om Our Menu
      </h1>
      <ul className="flex flex-wrap justify-center text-whitetext gap-[10px] md:gap-[30px] lg:gap-[50px] mt-[10px] md:mt-[20px]">
        <li className="text-[12px] md:text-[14px] lg:text-[15px] text-whitetext hover:text-bordercoloryello text-bold cursor-pointer leading-[28px]">Breakfast</li>
        <li className="text-[12px] md:text-[14px] lg:text-[15px] text-whitetext hover:text-bordercoloryello text-bold cursor-pointer leading-[28px]">Lunch</li>
        <li className="text-[12px] md:text-[14px] lg:text-[15px] text-whitetext hover:text-bordercoloryello text-bold cursor-pointer leading-[28px]"> Dinner</li>
        <li className="text-[12px] md:text-[14px] lg:text-[15px] text-whitetext hover:text-bordercoloryello text-bold cursor-pointer leading-[28px]"> Desert </li>
        <li className="text-[12px] md:text-[14px] lg:text-[15px] text-whitetext hover:text-bordercoloryello text-bold cursor-pointer leading-[28px]"> Drink</li>
        <li className="text-[12px] md:text-[14px] lg:text-[15px] text-whitetext hover:text-bordercoloryello text-bold cursor-pointer leading-[28px]">Snack</li>
        <li className="text-[12px] md:text-[14px] lg:text-[15px] text-whitetext hover:text-bordercoloryello text-bold cursor-pointer leading-[28px]">Soups</li>
      </ul>
      <div className="flex flex-col lg:flex-row px-[20px] md:px-[50px] lg:px-[100px] py-[20px] md:py-[50px] gap-[10px] md:gap-[15px] lg:gap-[20px]">
        <div className="flex justify-center">
          <Image
            src={main}
            alt="maipic"
            className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] h-auto"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] md:gap-[20px] lg:gap-[30px]">
          {ourdata.map((items) => {
            return (
              <div key={items.id} className="flex items-center space-x-4 p-4 rounded-md">
                <div className="flex gap-1">
                  <Image src={items.img} alt="menu" width={80} height={79} className="w-[60px] md:w-[70px] lg:w-[80px] h-[60px] md:h-[70px] lg:h-[79px] rounded-[6px]"
                  />
                </div>
                <div>
                  <h1 className="text-[14px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[26px] lg:leading-[28px] font-bold text-whitetext">
                    {items.title}
                  </h1>
                  <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-[18px] md:leading-[22px] lg:leading-[24px] text-whitetext">
                    {items.para}
                  </p>
                  <h1 className="text-[14px] md:text-[16px] lg:text-[18px] font-bold leading-[20px] md:leading-[26px] lg:leading-[28px] text-bordercoloryello">
                    {items.price}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Ourmenu;
