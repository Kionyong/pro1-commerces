'use client';
import "@/app/globals.css";
import { useContexts } from "../context/context";
import Image from "next/image";

export default function DisplayProducts() {
      const { products } = useContexts();
      return (
            <main>
                  <div className="w-11/12 h-10 flex flex-col mx-auto mt-10">
                        <h1>PRODUCTS...</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, sint.</p>
                  </div>
                  <div className="mx-auto w-9/12 h-auto mt-10 grid grid-cols-3 gap-4">
                        {products?.slice(0, 6).map((item: any) => (
                              <div key={item.id} className="border border-b-blue-400 rounded-lg w-auto h-85 flex justify-center flex-col">
                                    <div className="w-auto h-40 flex justify-center items-center">
                                          <Image src={item.image} width={100} height={70} alt={item.title} />
                                    </div>
                                    <h1>{item.title}</h1>
                                    <p>{item.price}</p>
                                    <button>SHOPPING</button>
                              </div>
                        ))}
                  </div>

            </main>
      );
}