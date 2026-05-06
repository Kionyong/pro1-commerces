'use client';
import { useContexts } from "@/app/context/context";
import "@/app/globals.css";
import Image from "next/image";
import { useState } from "react";


export default function Products(){
      const { products, addToCart } = useContexts();
      const [popup,setPopup] = useState<any | null>(null);
      return(
            <main className="w-10/12 h-auto mx-auto mt-10">
                  <div className="w-full flxe justify-between items-center">
                        <h1 className="text-center font-bold text-2xl underline">PRODUCTS</h1>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
                  {

                              products.map((items:any)=>(
                                    <div key={items.id}
                                    className="h-auto rounded-lg shadow border-0 shadow-gray-300"
                                    >     
                                          <div className="w-full h-40 flex justify-center items-center p-2">
                                                <Image src={items.image} width={100} height={50} alt={items.title} onClick={()=> setPopup(items)} className="cursor-pointer"/>
                                          </div>
                                          <div className="w-full h-auto flex flex-col p-4">
                                                <h1 className="text-sm font-medium text-center mt-2">{items.title}</h1>
                                                <p className="text-blue-600 font-semibold text-center">{items.price}</p>
                                                <button 
                                                      type="button" 
                                                      className=" mt-2 bg-cyan-900 text-white px-4 py-1 rounded cursor-pointer"
                                                      onClick={()=> addToCart(items)}
                                                >
                                                      Add Cart
                                                </button>
                                          </div>

                                    </div>
                              ))
                     
                  }
                  </div>
                  {/* {popup} */}
                  {
                        popup && (
                              <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                                    <div className="bg-white p-6 rounded-lg  w-[90%] max-w-md relative">
                                          <button type="button"
                                                className="absolute top-2 right-3 text-xl cursor-pointer"
                                          onClick={()=>setPopup(null)}
                                          >
                                                Close
                                          </button>
                                          <div className="flex flex-col items-center">
                                                <Image src={popup.image} width={150} height={120} alt={popup.title} />
                                                <h2 className="mt-3 text-lg font-semibold text-center">{popup.title}</h2>
                                                <p>{popup.description}</p>
                                                <p className="text-blue-600 font-bold mt-2">
                                                      ${popup.price}
                                                </p>

                                                <button className="mt-4 bg-cyan-900 text-white px-6 py-2 rounded cursor-pointer" onClick={() => addToCart(popup)}>
                                                      Add to Cart
                                                </button>
                                          </div>
                                    </div>
                              </div>
                        )
                  }
            </main>
      )

}