import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import axios from "axios"
import { useNavigate } from 'react-router-dom'



const PlaceOrder = () => {

  const {getTotalCartAmount,token ,food_list,cartItems,url} = useContext(StoreContext)
  const navigate = useNavigate();
  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }
 
  const placeOrder = async(event)=>{
      event.preventDefault();
      let orderItems = [];
      food_list.map((item)=>{
        if(cartItems[item._id]){
          let itemInfo = item;
            itemInfo['quantity'] = cartItems[item._id]
            orderItems.push(itemInfo)
        }
      })
      
      let orderData = {
        address:data,
        items:orderItems,
        amount:getTotalCartAmount()+2
      }
      let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
      console.log(url+"/api/order/place")
      if(response.data.success){
        const {session_url} = response.data;
        window.location.replace(session_url)
      }
      else {
        alert("Error")
      }
  }

  useEffect(()=>{
    if(!token){
      navigate('/cart')

    }else if(getTotalCartAmount()===0){
      navigate('/cart')
    }
  },[token])
 
 

  return (
    <div>
      <form onSubmit={placeOrder} className='flex items-start justify-between gap-[10px] mt-[100px]'> {/*place-order */}
      <div className='w-[full] max-w-[30%]'> {/**place-order-left */}
        <p className='text-[30px] font-medium mb-[50px]'>Delivery Information</p> {/*title */}
        <div className ='flex gap-[10px]'> {/**multi-fields */}
            <input required name='firstName' onChange={onChangeHandler} value={data.firstName} className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] ' type='text' placeholder='First Name'/>
            <input required name="lastName" onChange={onChangeHandler} value={data.lastName} className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] ' type='text'placeholder='Last Name'/>
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] ' type='email' placeholder='Email address'/>
        <input required name='street' onChange={onChangeHandler} value={data.street} className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] ' type='text' placeholder='Street'/>
        <div className ='flex gap-[10px]'>
          <input required name='city' onChange={onChangeHandler} value={data.city} className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] ' type="text" placeholder='City' />
          <input required name='state' onChange={onChangeHandler} value={data.state}  className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] ' type="text" placeholder='State'/>

        </div>
        <div className ='flex gap-[10px]'>
          <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] ' type="text" placeholder='Zip-Code' />
          <input required name='country' onChange={onChangeHandler} value={data.country} className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] ' type="text" placeholder='Country'/>

        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} className='mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-[tomato] ' type='text' placeholder='Phone'/>
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
            <button type='submit' className='border-none bg-[tomato] mt-[30px] text-white width-[15vw] py-[12px] px-[12px] rounded-[4px] cursor-pointer'>PROCEED TO PAYMENT</button>
        </div>
      </div>
      </form>
    </div>
  )
}

export default PlaceOrder