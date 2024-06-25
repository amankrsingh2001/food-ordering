import React from 'react'
import { menu_list } from '../../assets/assets'
import ExploreMenuListItem from './ExploreMenuListItem'

const ExploreMenu = ({category,setCategory}) => {
  
  return (
    <div className='flex flex-col gap-[20px]' id='explore-menu'>
      <h1 className='text-[#262626] font-bold text-5xl'>Explore our menu</h1>
        <p className='max-w-[60%] text-[#808080]'>Choose from a diverse menu featuring a delectable array of dishes.Our mission is to satisfy your craving and elevate your dining ,One delicious meal at a time.</p>
        <div className='flex justify-between items-center gap-[30px] text-center mx-0 my-[20px] overflow-x-scroll '>
            {
                menu_list.map((item,index)=>{return  <ExploreMenuListItem key={index} item={item} category={category} setCategory={setCategory}/>})
            }
        </div>
        <hr className='my-[10px] mx-0 h-[2px] bg-[#e2e2e2] border-none'/>
    </div>
  )
}

export default ExploreMenu