import { useEffect } from "react"
import Hero from "./components/Hero"
import Inquire from "./components/Inquire"
import Message from "./components/Message"
import Query from "./components/Query"
import Services from "./components/Services"


function App() {
  useEffect(() => {
    document.title = "Home | M.M. Shipping (S) P.Ltd"
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <Message />
      <Query />
      <Inquire />
    </>
  )
}

export default App
