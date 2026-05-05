import "@/app/globals.css";
import Link from "next/link";
export default function NavBar(){

      return(
            <main className="w-full bg-mist-500 flex flex-row h-16 justify-around">
                  <div className="w-auto h-auto flex justify-center items-center">
                        <Link href={'/'} className="text-[20px] font-bold text-black">SHOPPING</Link>
                  </div>
                  <div className="w-auto h-auto flex justify-center items-center">
                        <ul className="flex justify-around">
                              <Link href={'/'} className="w-20 hover:underline text-cyan-950 text-[18px]">Home</Link>
                              <Link href={'/'} className="w-20 hover:underline text-cyan-950 text-[18px]">Shop</Link>
                              <Link href={'/'} className="w-20 hover:underline text-cyan-950 text-[18px]">About</Link>
                              <Link href={'/'} className="w-20 hover:underline text-cyan-950 text-[18px]">Checkout</Link>
                        </ul>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                        <div className="w-full mr-5 overflow-auto">
                              <input type="text" name="" className="border rounded-lg text-gray-700 w-70 outline-0 ps-3 border-blue-200 h-8" placeholder="Search items..."/>
                        </div>
                        <Link href={'/'}>
                              <button type="button" className="cursor-pointer hover:text-blue-100">Account</button>
                        </Link>
                  </div>
            </main>
      );
}