import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import { useEffect } from 'react'
import { assets } from '../assets/assets';

const Orders = ({url}) => {
  const [orders,setOrders] = useState([])

  const fetchAllOrders = async()=>{
    const response = await axios.get(url+'/api/order/list')
    if(response.data.success){
      setOrders(response.data.data)
      console.log(response.data.data)
    }else{
        toast.error('Error')
    }
  }

    const statusHandler = async(event,orderId) =>{
      const response = await axios.post(url+"/api/order/status",{
        orderId,
        status:event.target.value
      })
      if(response.data.success){
        await fetchAllOrders();
      }
    }

  useEffect(()=>{
    fetchAllOrders()
  },[])

  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className='order-list'>
        {
          orders.map((order,index)=>(
            <div key={index} className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr] items-start gap-[30px] p-[20px] my-[30px] mx-0 text-[14px] text-[#505050]'>
                <img src={assets.parcel_icon} alt=''/>
                <div>
                  <p className='font-semibold'>{order.items.map((item,index)=>{
                    if(index===order.items.length-1){
                      return item.name+" x "+item.quantity
                    }else{
                      return item.name+" X "+item.quantity + ", "
                    }
                  })}</p>
                  <p className='font-semibold mt-[30px] mb-[5px]'>{order.address.firstName+" "+ order.address.lastName}</p>
                  <div className='mb-[10px]'>
                     <p>{order.address.street+","}</p>
                  <p>{order.address.city+","+order.address.state+","+order.address.country+","+order.address.zipcode}</p>
                  </div>
                  <p className='order-item-phone'>{order.address.phone}</p>
                
                 
                </div>
                <p>Items:{order.items.length}</p>
                <p>${order.amount}</p>
                <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className='bg-[#ffe8e4] border-[1px] border-solid border-[tomato] w-[max(10vw,120px)] p-[10px] outline-none'>
                  <option value='Food Processing'>Food Processing</option>
                  <option value='Out for delivery'>Out for delivery</option>
                  <option value='Delivery'>Delivery</option>
                </select>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders