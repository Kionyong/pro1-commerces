'use client';
import Image from "next/image";
import { useContexts } from "./context/context";
import "@/app/globals.css"
export default function Home() {
  const { products, removeItem }: any = useContexts();
  console.log(products)
  if (!products) return <p>Loading...</p>;
  return (
    <main>
      {products.map((item: any) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.price}</p>
          <Image src={item.image} width={100} height={100} alt={item.title} />
          <button type="button" onClick={()=> removeItem(item.id)}>Delete</button>
        </div>
      ))}
    </main>
  );
}