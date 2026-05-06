import Footer from "./components/footer";
import NavBar from "./components/navbar";
import { ProviderContext } from "./context/context";
import { Toaster } from "react-hot-toast";
export default function RootLayout({children}:{children:React.ReactNode}){
  return(
    <html lang="en">
      <body>
        <NavBar />
        <ProviderContext>
          {children}
          <Toaster position="top-left"/>
        </ProviderContext>
        <Footer />
      </body>
    </html>
  )
}