import "@/app/globals.css";
import Image from "next/image";
export default function Slider(){
      return(
            <main className="sm:w-full sm:h-100 bg-white flex lg:flex-row justify-around items-center shadow sm:flex-col-reverse">
                  <div className="w-auto flex sm:flex-col sm:justify-center sm:items-center">
                        <h1 className="w-100 lg:text-[25px] sm:text-[10px] text-indigo-700 text-center">PRODUCTS OF SHOPPING</h1>
                        <p className="text-black text-start lg:text-[15px] sm:text-[10px] p-2 font-light">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quia?
                        </p>
                        <button type="button" className="lg sm:py-2 cursor-pointer text-white borderr outline-0 rounded-lg w-50 h-10 bg-cyan-950">
                              SHOPPING
                        </button>
                  </div>
                  <div className="w-auto">
                        <Image src={'/shoppping1.png'} width={250} height={200} alt="error" />
                  </div>
            </main>
      );
}