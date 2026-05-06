'use client';
import "@/app/globals.css";
import Link from "next/link";
import { useContexts } from "../context/context";
import { useState } from "react";
export default function NavBar(){
      const [open,setOpen] = useState(false);
      const { searchProducts } = useContexts();
      //use search products
      return(
            <main className="w-full bg-white flex flex-row h-16 justify-around">
                  <div className="w-auto h-auto flex justify-center items-center ">
                        <Link href={'/'} className="text-[20px] font-bold text-black">SHOPPING</Link>
                  </div>
                  <div className="hidden w-auto h-auto lg:flex justify-center items-center">
                        <ul className="flex justify-around">
                              <Link href={'/'} className="w-20 hover:underline text-cyan-950 text-[18px]">Home</Link>
                              <Link href={'/'} className="w-20 hover:underline text-cyan-950 text-[18px]">Shop</Link>
                              <Link href={'/'} className="w-20 hover:underline text-cyan-950 text-[18px]">About</Link>
                              <Link href={'/'} className="w-20 hover:underline text-cyan-950 text-[18px]">Checkout</Link>
                        </ul>
                  </div>
                  <div className="hidden lg:flex flex-row justify-between items-center">
                        <div className="w-full mr-5 overflow-auto">
                              <input 
                                    type="search" name="" 
                                    className="border rounded-lg text-gray-700 w-70 outline-0 ps-3 border-blue-200 h-8" 
                                    placeholder="Search items..."
                              />
                        </div>
                        <Link href={'/'}>
                              <button type="button" className="cursor-pointer hover:text-blue-100">Account</button>
                        </Link>
                  </div>
                  <button type="button" className="lg:hidden text-black text-2xl" onClick={()=>setOpen(!open)}>
                        ☰
                  </button>
                  {open && (
                        <div className="absolute top-16 left-0 w-full bg-mist-400 shadow-md flex flex-col items-center py-4 gap-3 lg:hidden">
                              <Link href="/">Home</Link>
                              <Link href="/">Shop</Link>
                              <Link href="/">About</Link>
                              <Link href="/">Checkout</Link>

                              <input
                                    type="search"
                                    placeholder="Search..."
                                    className="border rounded-lg px-3 h-8 outline-0 w-[80%]"
                              />
                              <button className="hover:bg-blue-600 cursor-pointer">Account</button>
                        </div>
                  )}
            </main>
      );
}