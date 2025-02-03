import { groq } from "next-sanity";


export const allproducts = groq`*[_type == "food"]`;
export const four = groq`*[_type == "chef"]`;