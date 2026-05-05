'use client';
import { createContext,useContext, useEffect, useState } from "react";
const contextProvider = createContext<any>([]);

export const ProviderContext=({children}:any)=>{
      const [products,setProducts] =useState<any[]>([]);
      console.log(products);
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

      const removeItem =(index:any)=>{
            const deleteItem = products.filter((_,i)=> i !== index);
            setProducts(deleteItem);
      }
      return <contextProvider.Provider value={{products, removeItem }}>
            {children}
      </contextProvider.Provider>
};
export const useContexts = () => useContext(contextProvider);