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
      const removeItem =(index:any)=>{
            if (!confirm("Are you sure?")) return;
            const deleteItem = products.filter((_,i)=> i !== index);
            setProducts(deleteItem);
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
      const addToCart=()=>{
            setCart([...products,cart]);
      }

      return <contextProvider.Provider value={{ products, removeItem, searchProducts, filtered, search }}>
            {children}
      </contextProvider.Provider>
};
//declear arrow function for use to pages
export const useContexts = () => useContext(contextProvider);