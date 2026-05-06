import "@/app/globals.css";
import Image from "next/image";

export default function Slider() {
      return (
            <main className="w-full bg-white flex flex-col-reverse h-100 lg:flex-row justify-around items-center p-4">
                  <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
                        <h1 className="text-indigo-700 text-[16px] lg:text-[28px] font-semibold">
                              PRODUCTS OF SHOPPING
                        </h1>
                        <p className="text-black text-[12px] lg:text-[16px] p-2 font-light">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quia?
                        </p>
                        <button className="mt-2 py-2 px-6 cursor-pointer text-white rounded-lg bg-cyan-950">
                              SHOPPING
                        </button>
                  </div>
                  <div className="mb-4 lg:mb-0">
                        <Image
                              src="/shoppping1.png"
                              width={250}
                              height={200}
                              alt="shopping"
                              className="w-[180px] lg:w-[250px] h-auto"
                        />
                  </div>

            </main>
      );
}