'use client';

import ActiveProcess from "@/components/layout/Activeprocess";
import Bestfoodyproduct from "@/components/layout/Bestfoodyproduct";
import Blog from "@/components/layout/Blog";
import Chefs from "@/components/layout/Chefs";
import Foodcatr from "@/components/layout/Foodcatr";
import HeroSection from "@/components/layout/Hero";
import Nav from "@/components/layout/Nav";
import Ourmenu from "@/components/layout/Ourmenu";
import Review from "@/components/layout/Review";
import Testi from "@/components/layout/Testi";
import Whyus from "@/components/layout/Whyus";
import { useEffect, useState } from "react";
import { Foods, Chef } from "../../types/product";
import { client } from "@/sanity/lib/client";
import { allproducts, four } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from 'next/navigation';

export default function Home() {
  const [product, setProduct] = useState<Foods[]>([]); 
  const [chefs, setChefs] = useState<Chef[]>([]); 
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedProduct: Foods[] = await client.fetch(allproducts);
        const fetchedChef: Chef[] = await client.fetch(four);
        setProduct(fetchedProduct);
        setChefs(fetchedChef);
        console.log("Fetched Chefs:", fetchedChef); 
      } catch (error) {
        console.error("Error fetching data from Sanity:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <Nav />
      <HeroSection />

      {/* Displaying Food Data */}
      <div className="py-10">
        <h1 className="text-center text-4xl font-bold mb-8">Fetched Food Data</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {product.map((product) => (
            <div
              key={product._id}
              className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
              {product.image && (
                <div className="w-full h-60 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <p className="text-lg font-bold text-yellow-400 mb-2">Price: PKR {product.price}</p>
              <p className="text-gray-300 text-sm mb-4">{product.description}</p>
            <button 
              className="bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-400 transition duration-300 w-full"
              onClick={() => router.push(`/order/${product._id}`)}
            >
             Order Now
            </button>
            </div>
          ))}
        </div>
      </div>

      {/* Displaying Chef Data */}
      <div className="py-10">
        <h1 className="text-center text-4xl font-bold mb-8">Fetched Chefs Data</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {chefs.map((chef) => (
            <div
              key={chef._id}
              className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4">{chef.name}</h2>
              {chef.image && (
                <div className="w-full h-60 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={urlFor(chef.image).url()}
                    alt={chef.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <p className="text-gray-300 text-sm mb-4">{chef.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Bestfoodyproduct />
      <Foodcatr />
      <Whyus />
      <Review />
      <Ourmenu />
      <Chefs />
      <Testi />
      <ActiveProcess />
      <Blog />
    </div>
  );
}
