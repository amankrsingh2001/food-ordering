import React, { useEffect } from 'react'

const ExploreMenuListItem = ({item,category,setCategory}) => {
  const categoryhandler = () =>{
      setCategory(prev=>prev===item.menu_name?'All':item.menu_name )
  
  }
  return (
    <div className='' onClick={categoryhandler}>
        <img className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] ransition duration-300 ease-in-out ${category===item.menu_name?"active: border-[tomato] border-[4px] border-solid p-[2px]":""}`} src={item.menu_image}/>
        <p className='mt-[10px] text-[#747474] text-sm cursor-pointer'>{item.menu_name}</p>
    </div>
  )
}

export default ExploreMenuListItem