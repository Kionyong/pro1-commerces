import DisplayProducts from "./components/display";
import Slider from "./components/slide";

export default function Home(){
  return(
    <article>
      <Slider />
      <DisplayProducts />
    </article>
  )
}