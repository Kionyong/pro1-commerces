import Footer from "./components/footer";
import NavBar from "./components/navbar";
import { ProviderContext } from "./context/context";

export default function RootLayout({children}:{children:React.ReactNode}){
  return(
    <html lang="en">
      <body>
        <NavBar />
        <ProviderContext>
          {children}
        </ProviderContext>
        <Footer />
      </body>
    </html>
  )
}