import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {

  return (
    <div className='w-[34%] min-h-screen border-[1.5px] border-solid border-[#a9a9a9] border-t-0 text-[10px]'>
      <div className='pt-[50px] pl-[30%] flex flex-col gap-[20px]'>
        <NavLink to='/add'  className={({ isActive }) => 
            `flex items-center gap-[12px] py-[8px] px-[10px] rounded-sm cursor-pointer border-[1px] border-solid border-r-0 
            ${isActive ? 'bg-[#fff0ed] border-[tomato]' : 'border-[#a9a9a9]'}`
          }>
          <img src={assets.add_icon}/>
          <p className=''>Add Item</p> {/*todo */}
        </NavLink>
        <NavLink to='/list'  className={({ isActive }) => 
            `flex items-center gap-[12px] py-[8px] px-[10px] rounded-sm cursor-pointer border-[1px] border-solid border-r-0 
            ${isActive ? 'bg-[#fff0ed] border-[tomato]' : 'border-[#a9a9a9]'}`
          }>
          <img src={assets.order_icon}/>
          <p className=''>List Item</p>
        </NavLink>
        <NavLink to='/orders'  className={({isActive})=>`flex items-center gap-[12px] py-[8px] px-[10px] rounded-sm cursor-pointer border-[1px] border-solid border-r-0 ${isActive?'bg-[#fff0ed] border-[tomato]':'border-[#a9a9a9]'}`}
          >
          <img src={assets.order_icon}/>
          <p className=''>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar