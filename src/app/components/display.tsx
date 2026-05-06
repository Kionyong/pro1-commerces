'use client';
import "@/app/globals.css";
import { useContexts } from "../context/context";
import Image from "next/image";
import { useState } from "react";

export default function DisplayProducts() {
      const [popup, setPopup] = useState<any | null>(null);
      const { products, addToCart } = useContexts();

      return (
            <main>

                  {/* HEADER */}
                  <div className="w-11/12 mx-auto mt-10 text-center lg:text-left">
                        <h1 className="text-xl font-semibold">PRODUCTS...</h1>
                        <p className="text-sm text-gray-500">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                  </div>

                  {/* GRID */}
                  <div className="mx-auto w-11/12 lg:w-9/12 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {products?.slice(0, 6).map((item: any) => (
                              <div
                                    key={item.id}
                                    className="rounded-lg p-4 flex flex-col items-center shadow border-blue-100 border hover:shadow-md"
                              >
                                    <div className="h-40 flex items-center">
                                          <Image
                                                className="cursor-pointer"
                                                src={item.image}
                                                width={100}
                                                height={70}
                                                alt={item.title}
                                                onClick={() => setPopup(item)} // ✅ store full item
                                          />
                                    </div>

                                    <h1 className="text-sm font-medium text-center mt-2">
                                          {item.title}
                                    </h1>
                                    <p className="text-blue-600 font-semibold">${item.price}</p>

                                    <button className="mt-2 bg-cyan-900 text-white px-4 py-1 rounded cursor-pointer">
                                          SHOPPING
                                    </button>
                              </div>
                        ))}
                  </div>

                  {/* POPUP */}
                  {popup && (
                        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

                              <div className="bg-white p-6 rounded-lg w-[90%] max-w-md relative">
                                    <button
                                          onClick={() => setPopup(null)}
                                          className="absolute top-2 right-3 text-xl cursor-pointer">✕</button>
                                    <div className="flex flex-col items-center">
                                          <Image
                                                src={popup.image}
                                                width={150}
                                                height={120}
                                                alt={popup.title}
                                          />

                                          <h2 className="mt-3 text-lg font-semibold text-center">
                                                {popup.title}
                                          </h2>
                                          <p>{popup.description}</p>
                                          <p className="text-blue-600 font-bold mt-2">
                                                ${popup.price}
                                          </p>

                                          <button className="mt-4 bg-cyan-900 text-white px-6 py-2 rounded cursor-pointer" onClick={()=> addToCart(popup)}>
                                                Add to Cart
                                          </button>
                                    </div>
                              </div>
                        </div>
                  )}
            </main>
      );
}