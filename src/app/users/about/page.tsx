'use client';
import "@/app/globals.css";
import Link from "next/link";

export default function About() {
      return (
            <main className="w-full min-h-screen flex flex-col items-center px-4 py-10">

                  {/* HEADER */}
                  <div className="w-full max-w-4xl text-center mb-10">
                        <h1 className="text-3xl font-bold">About Us</h1>
                        <p className="text-gray-500 mt-3">
                              Learn more about our store and what we do.
                        </p>
                  </div>

                  {/* CONTENT */}
                  <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-8">

                        {/* LEFT */}
                        <div className="w-full">
                              <h2 className="text-xl font-semibold mb-3">Who We Are</h2>
                              <p className="text-gray-600 leading-relaxed">
                                    We are an online shopping platform that provides high-quality products
                                    at affordable prices. Our goal is to make shopping easy, fast, and
                                    enjoyable for everyone.
                              </p>

                              <h2 className="text-xl font-semibold mt-6 mb-3">Our Mission</h2>
                              <p className="text-gray-600 leading-relaxed">
                                    Our mission is to deliver the best products with excellent customer
                                    service. We focus on quality, trust, and user experience.
                              </p>
                        </div>

                        {/* RIGHT */}
                        <div className="w-full bg-gray-100 rounded-lg p-5">
                              <h2 className="text-lg font-semibold mb-3">Quick Info</h2>

                              <ul className="text-gray-600 space-y-2 text-sm">
                                    <li>📦 Fast Delivery</li>
                                    <li>💳 Secure Payment</li>
                                    <li>⭐ High Quality Products</li>
                                    <li>📞 24/7 Support</li>
                              </ul>

                              <div className="mt-5">
                                    <Link
                                          href="/"
                                          className="inline-block bg-black text-white px-5 py-2 rounded-lg"
                                    >
                                          Go Shopping
                                    </Link>
                              </div>
                        </div>

                  </div>

            </main>
      );
}