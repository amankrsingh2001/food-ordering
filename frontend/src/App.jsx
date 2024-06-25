import { Routes,Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import PlaceOrder from "./pages/PlaceOrder"
import Footer from "./components/Footer/Footer"
import LoginPopup from "./components/Loginpop/LoginPopup"
import { useState } from "react"

const App = () =>{
  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {
      showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>
    }
  <div className="w-[80%] m-auto">
    <Navbar setShowLogin={setShowLogin}/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/order' element={<PlaceOrder/>}/>
    </Routes>
  </div>
  <Footer/>
  </>
  )
}
export default App