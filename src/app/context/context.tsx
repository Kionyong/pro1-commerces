'use client';
import { createContext,useContext, useEffect, useState } from "react";
const contextProvider = createContext<any>([]);//create context for share data to pages ,

export const ProviderContext=({children}:any)=>{
      const [products,setProducts] =useState<any[]>([]);
      const [search, setSearch] = useState<string>("");
      const [filtered, setFiltered] = useState<any[]>([]);
      const [cart, setCart] =useState<any[]>([]);

      //use useEffect for fetch data for api
      useEffect(()=>{
            const getProducts=async()=>{
                  try{
                        const data = await fetch("https://fakestoreapi.com/products");
                        const res = await data.json();
                        setProducts(res);
                  }catch(err){
                        console.log(err);
                  }
            };
            getProducts(); //call functiion
      },[]);
      //function delete products index
      const removeFromCart = (id: number) => {
            setCart((prev) => prev.filter((item) => item.id !== id));
      };
      //function 
      const searchProducts = (text: string) => {
            setSearch(text);
            const result = products.filter((item) =>
                  item.title.toLowerCase().includes(text.toLowerCase())
            );
            setFiltered(result);
      };

      //add cart
      const addToCart = (product: any) => {
            setCart((prev:any[]) => {
                  const exist = prev.find((item) => item.id === product.id);

                  if (exist) {
                        return prev.map((item) =>
                              item.id === product.id
                                    ? { ...item, qty: item.qty + 1 } 
                                    : item
                        );
                  }
                  return [...prev, { ...product, qty: 1 }];
            });
      };
      const increaseQty = (id: number) => {
            setCart((prev) =>
                  prev.map((item) =>
                        item.id === id ? { ...item, qty: item.qty + 1 } : item
                  )
            );
      };

      const decreaseQty = (id: number) => {
            setCart((prev) =>
                  prev.map((item) =>
                        item.id === id && item.qty > 1
                              ? { ...item, qty: item.qty - 1 }
                              : item
                  )
            );
      };
      return <contextProvider.Provider value={{ decreaseQty, increaseQty, cart, addToCart, products, removeFromCart, searchProducts, filtered, search }}>
            {children}
      </contextProvider.Provider>
};
//declear arrow function for use to pages
export const useContexts = () => useContext(contextProvider);