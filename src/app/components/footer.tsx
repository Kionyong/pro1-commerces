'use client';
import Link from "next/link";

export default function Footer() {
      return (
            <footer className="w-full bg-gray-900 text-white mt-10">
                  <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* LOGO / ABOUT */}
                        <div>
                              <h1 className="text-xl font-bold mb-3">MyShop</h1>
                              <p className="text-gray-400 text-sm">
                                    We provide high-quality products with the best prices.
                                    Shop بسهولة and enjoy fast delivery.
                              </p>
                        </div>

                        {/* LINKS */}
                        <div>
                              <h2 className="font-semibold mb-3">Quick Links</h2>
                              <ul className="space-y-2 text-sm text-gray-400">
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/about">About</Link></li>
                                    <li><Link href="/shop">Shop</Link></li>
                                    <li><Link href="/checkout">Checkout</Link></li>
                              </ul>
                        </div>

                        {/* SUPPORT */}
                        <div>
                              <h2 className="font-semibold mb-3">Support</h2>
                              <ul className="space-y-2 text-sm text-gray-400">
                                    <li>Help Center</li>
                                    <li>Privacy Policy</li>
                                    <li>Terms & Conditions</li>
                                    <li>Contact Us</li>
                              </ul>
                        </div>

                        {/* CONTACT */}
                        <div>
                              <h2 className="font-semibold mb-3">Contact</h2>
                              <ul className="space-y-2 text-sm text-gray-400">
                                    <li>Email: support@myshop.com</li>
                                    <li>Phone: +855 123 456 789</li>
                                    <li>Location: Phnom Penh</li>
                              </ul>
                        </div>

                  </div>

                  {/* BOTTOM */}
                  <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
                        © {new Date().getFullYear()} MyShop. All rights reserved.
                  </div>
            </footer>
      );
}