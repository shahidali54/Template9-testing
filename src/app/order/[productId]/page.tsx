"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { Foods } from "../../../../types/product";
import { urlFor } from "@/sanity/lib/image";
import { useParams } from "next/navigation";

const OrderPage = () => {
  const { productId } = useParams(); 
  const [product, setProduct] = useState<Foods | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (!productId) return; 
    async function fetchProduct() {
      try {
        const fetchedProduct: Foods[] = await client.fetch(
          `*[_id == "${productId}"]`
        );
        setProduct(fetchedProduct[0]); 
        setTotalPrice(fetchedProduct[0].price);
      } catch (error) {
        console.error("Error fetching product from Sanity:", error);
      }
    }
    fetchProduct();
  }, [productId]); 

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(event.target.value);
    setQuantity(newQuantity);
    if (product) {
      setTotalPrice(product.price * newQuantity);
    }
  };

  const handleOrderConfirm = (event: React.FormEvent) => {
    event.preventDefault();
    alert("Your order has been confirmed!");
  };

  if (!product) return <div className="text-center text-white mt-20">Loading...</div>; 

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-lg w-full">
        <h1 className="text-center text-2xl font-bold mb-4 text-yellow-400">Order Details</h1>
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 mb-4 overflow-hidden rounded-lg shadow-md">
            <img
              src={urlFor(product.image).url()}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-semibold text-center">{product.name}</h2>
          <p className="text-lg font-bold text-yellow-400 mt-2">Price: PKR {totalPrice}</p>
          <p className="text-gray-300 text-center text-sm mt-2 px-2">{product.description}</p>
        </div>

        <form onSubmit={handleOrderConfirm} className="mt-4">
          <div className="flex flex-col space-y-3">
            <label className="text-md">Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              className="bg-gray-700 text-white p-2 rounded-md w-3/4 mx-auto text-center"
            />

            <label className="text-md">Name:</label>
            <input type="text" required className="bg-gray-700 text-white p-2 rounded-md w-3/4 mx-auto" />

            <label className="text-md">Address:</label>
            <input type="text" required className="bg-gray-700 text-white p-2 rounded-md w-3/4 mx-auto" />

            <label className="text-md">Phone Number:</label>
            <input type="text" required className="bg-gray-700 text-white p-2 rounded-md w-3/4 mx-auto" />
          </div>

          <button
            type="submit"
            className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-400 transition duration-300 w-3/4 mx-auto block"
          >
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderPage;