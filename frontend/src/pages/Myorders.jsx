import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'
import { assets } from '../assets/assets'

const Myorders = () => {
    const {url,token} = useContext(StoreContext)
    const [data,setData] = useState([])

    const fetchOrders = async()=>{
        const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}})
        setData(response.data.data)
      
    }
    useEffect(()=>{
        if(token){
            fetchOrders();
        }
    },[token])
  return (
    <div className='my-[50px] mx-0'>
        <h2>My Orders</h2>
        <div className='flex flex-col mt-[30px] gap-[10px]'>
            {
                data.map((order,index)=>{
                    return (
                        <div key={index} className='grid grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] items-center gap-[30px] text-sm py-[10px] px-[20px] text-[#454545] border-[1px] border-solid border-[tomato]' >
                            <img className='w[50px]' src={assets.parcel_icon} alt=''/>
                            <p className=''>{order.items.map((item,index)=>{
                                if(index===order.items.length-1){
                                    return item.name + " X " + item.quantity
                                }
                                else{
                                    return item.name + " X " + item.quantity + ", "
                                }
                            })}</p>
                            <p>${order.amount}.00</p>
                            <p>Items:{order.items.length}</p>
                            <p><span className='text-[tomato]'>&#x25cf;</span><b className='font-medium'>{order.status}</b></p>
                            <button onClick={fetchOrders} className='border-none py-[12px] px-0 rounded-[4px] bg-[#ffe1e1] cursor-pointer text-[#454545]'>Track order</button>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Myorders