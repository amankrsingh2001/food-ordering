import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = ( props ) =>{

  

  const [cartItems,setCartItems] = useState({})
  
  // for(let item in cartItems){
  //   console.log(typeof(item))
  //   console.log(item,"item")
  //   console.log(cartItems[item],'check')
  // }

  const addtoCart = (itemId) =>{
    if(!cartItems[itemId]){
      setCartItems((prev)=>({...prev,[itemId]:1}))
    }
    else {
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
  }

  const removeFromCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }
const getTotalCartAmount = () =>{
    let totalAmount = 0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        let itemInfo = food_list.find((product)=>product._id===item)
        totalAmount += itemInfo.price*cartItems[item] 
         {/*  cartItems[item]--> this is returning the quantity */}
      }
    }
    return totalAmount;
}


  const contextValue = {
    food_list,cartItems,setCartItems,addtoCart,removeFromCart,getTotalCartAmount
  }
  return (
    <StoreContext.Provider value={contextValue}>{props.children} </StoreContext.Provider>
  )
}

export default StoreContextProvider