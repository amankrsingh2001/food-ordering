import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <div>
      <form className='flex items-start justify-between gap-[10px] mt-[100px]'> {/*place-order */}
      <div className='w-[full] max-w-[30%]'> {/**place-order-left */}
        <p className='text-[30px] font-medium mb-[50px]'>Delivery Information</p> {/*title */}
        <div className ='flex gap-[10px]'> {/**multi-fields */}
            <input className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] ' type='text' placeholder='First Name'/>
            <input  className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] ' type='text'placeholder='Last Name'/>
        </div>
        <input  className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] ' type='email' placeholder='Email address'/>
        <input  className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] ' type='text' placeholder='Street'/>
        <div className ='flex gap-[10px]'>
          <input  className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] ' type="text" placeholder='City' />
          <input  className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] ' type="text" placeholder='State'/>

        </div>
        <div className ='flex gap-[10px]'>
          <input  className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] ' type="text" placeholder='Zip-Code' />
          <input  className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] ' type="text" placeholder='Country'/>

        </div>
        <input  className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] ' type='text' placeholder='Phone'/>
      </div>
      <div className='w-full max-w-[40%] '> {/*place-order-right */}
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
              <p>${getTotalCartAmount()!==0?2:0}</p>
            </div>
            <hr className='my-[10px] mx-0' />
            <div className='flex justify-between text-[#555]'>
              <b>Total</b>
              <b>${getTotalCartAmount()!==0?getTotalCartAmount()+2:0}</b>
            </div>
          </div>
            <button className='border-none bg-[tomato] mt-[30px] text-white width-[15vw] py-[12px] px-[12px] rounded-[4px] cursor-pointer'>PROCEED TO PAYMENT</button>
        </div>
      </div>
      </form>
    </div>
  )
}

export default PlaceOrder