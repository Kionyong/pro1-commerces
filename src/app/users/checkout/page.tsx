'use client';
import "@/app/globals.css";
import { useContexts } from "@/app/context/context";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { CiCreditCard1 } from "react-icons/ci";
export default function Checkout() {
      const { cart, increaseQty, decreaseQty, removeFromCart } = useContexts();
      const getTotal = () => {
            return cart.reduce((total: number, item: any) => {
                  return total + item.price * item.qty;
            }, 0);
      };
      return (
            <main className="w-full flex flex-col lg:flex-row gap-5 p-3">

                  {/* LEFT: CART */}
                  <div className="w-full lg:w-2/3 rounded-lg">
                        <div className="flex justify-between p-4">
                              <h1 className="font-bold text-lg">Shopping Cart</h1>
                              <Link href="/" className="underline text-sm font-bold">
                                    Continue Shopping
                              </Link>
                        </div>

                        {/* HEADER */}
                        <div className="hidden sm:flex border-b px-4 py-2 justify-between text-xs font-bold">
                              <span>Product</span>
                              <span>Qty</span>
                              <span>Total</span>
                              <span>Action</span>
                        </div>

                        {/* ITEMS */}
                        {cart.map((items: any) => (
                              <div
                                    key={items.id}
                                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 px-4 py-3 border-b"
                              >
                                    {/* PRODUCT */}
                                    <div className="flex items-center gap-2">
                                          <Image
                                                src={items.image}
                                                width={40}
                                                height={40}
                                                alt={items.title}
                                                className="w-10 h-10"
                                          />
                                    </div>

                                    {/* QTY */}
                                    <div className="flex items-center">
                                          <button onClick={() => decreaseQty(items.id)}className="border w-6 h-6">-</button>
                                          <p className="px-2">{items.qty}</p>
                                          <button
                                                onClick={() => increaseQty(items.id)}
                                                className="border w-6 h-6"
                                          >
                                                +
                                          </button>
                                    </div>

                                    {/* PRICE */}
                                    <p className="text-sm">${items.price * items.qty}</p>

                                    {/* DELETE */}
                                    <button
                                          onClick={() => removeFromCart(items.id)}
                                          className="text-red-500 text-sm"
                                    >
                                          Delete
                                    </button>
                              </div>
                        ))}
                  </div>

                  {/* RIGHT: PAYMENT */}
                  <div className="w-full lg:w-1/3 flex justify-center">
                        <div className="w-full bg-white shadow rounded-lg p-5">
                              <h1 className="font-bold mb-3">Payment</h1>

                              {/* PAYMENT METHODS */}
                              <p className="text-sm">Payment Methods:</p>

                              <div className="mt-2 space-y-2">
                                    <label className="flex items-center gap-2">
                                          <input type="radio" name="payment" />
                                          <FcGoogle /> Google
                                    </label>

                                    <label className="flex items-center gap-2">
                                          <input type="radio" name="payment" />
                                          <CiCreditCard1 /> Credit Card
                                    </label>
                              </div>

                              {/* FORM */}
                              <div className="mt-4 space-y-4">
                                    <div>
                                          <label className="text-sm">Name On Card</label>
                                          <input
                                                type="text"
                                                placeholder="Enter name"
                                                className="w-full border h-9 rounded-lg px-3"
                                          />
                                    </div>

                                    <div>
                                          <label className="text-sm">Card Number</label>
                                          <input
                                                type="text"
                                                placeholder="Enter number"
                                                className="w-full border h-9 rounded-lg px-3"
                                          />
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3">
                                          <div className="w-full">
                                                <label className="text-sm">Expiration</label>
                                                <input
                                                      type="text"
                                                      className="w-full border h-9 rounded-lg px-3"
                                                />
                                          </div>

                                          <div className="w-full">
                                                <label className="text-sm">CVV</label>
                                                <input
                                                      type="text"
                                                      className="w-full border h-9 rounded-lg px-3"
                                                />
                                          </div>
                                    </div>

                                    <button className="w-full bg-green-600 text-white h-10 rounded-lg">
                                          Checkout (${getTotal()})
                                    </button>
                              </div>
                        </div>
                  </div>
            </main>
      )
}