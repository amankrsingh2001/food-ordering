import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate()

  const {cartItems,food_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext)


  return (
    <div className='mt-[100px] '>{/*cart */}
      <div className='cart-items'>
          <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-[gray] text-xs'> {/* */}
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br/>
          <hr/>
          {
            food_list.map((item,index)=>{
              if(cartItems[item._id]>0){ // If the cartItem object has the item.id then return the page else be empty            
                return (
                <div>
                   <div key={index} className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center my-[10px] mx-[0px] text-black'>
                  <img className='w-[50px]' src={item.image} alt=''/>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price *cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className='cursor-pointer'>x</p>
                </div>
                <hr className='h-[1px] bg-[#e2e2e2] border-none'/>
                </div>
             )
              }
            })
          }
      </div>
      <div className="mt-[80px] flex justify-between gap-[12vw]"> {/*card-bottom */}
        <div className="flex flex-col gap-[20px]  "> {/*card-total*/}
          <h2>Card Total</h2>
          <div>
            <div className='flex justify-between text-[#555]' >
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='my-[10px] mx-0'/>
            <div className='flex justify-between text-[#555]'>
              <p>Delivery Fee</p>
              <p>
               ${getTotalCartAmount()!==0 ? 2 :0}
                </p>
            </div>
            <hr className='my-[10px] mx-0' />
            <div className='flex justify-between text-[#555]'>
              <b>Total</b>
              <b>${getTotalCartAmount()!==0? getTotalCartAmount() +2:0}</b>
            </div>
          </div>
            <button onClick={()=>navigate('/order')} className='border-none bg-[tomato] text-white width-[15vw] py-[12px] px-[12px] rounded-[4px] cursor-pointer'>PROCEED TO CHECKOUT</button>
        </div>
        <div className="flex-1">
          <div>
            <p className='text-[#555]'>If You Have a Promo code, Enter it here</p>
            <div className='mt-[10px] flex items-center justify-between bg-[#eaeaea] rounded-[4px]'>
              <input className='bg-transparent border-none outline-none pl-[10px]' type='text' placeholder='promocode'/>
              <button className='w-[150px] py-[12px] px-[5px] bg-black border-none text-white rounded-[4px]'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart