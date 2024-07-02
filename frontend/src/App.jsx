import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import PlaceOrder from "./pages/PlaceOrder"
import Footer from "./components/Footer/Footer"
import LoginPopup from "./components/Loginpop/LoginPopup"
import { useState } from "react"
import Verify from "./pages/Verify"
import Myorders from "./pages/Myorders"
import Navbar from "./components/Navbar/Navbar"

const App = () =>{
  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {
      showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>
    }
  <div className="w-[80%] m-auto">
    {/* <Navbar setShowLogin={setShowLogin}/> */}
    <Navbar setShowLogin={setShowLogin}/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/order' element={<PlaceOrder/>}/>
      <Route path='/verify' element={<Verify/>}/>
      <Route path="/myorders" element={<Myorders/>}/>
    </Routes>
  </div>
  <Footer/>
  </>
  )
}
export default App