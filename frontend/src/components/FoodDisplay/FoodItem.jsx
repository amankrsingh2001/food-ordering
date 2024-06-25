import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({item}) => {
   
    const {_id,name,price,description,image} = item
    const {cartItems,addtoCart,removeFromCart} =  useContext(StoreContext)

  return (
    <div className='w-full m-auto rounded-[15px] shadow-md animate-fadeIn '>
        <div className='relative'>
            <img className='w-full rounded-md ' src={image} alt=''/>
            {
                !cartItems[_id]?<img className='w-[35px] absolute cursor-pointer right-[15px] bottom-[15px] rounded-[50%]' onClick={()=>addtoCart(_id)} src={assets.add_icon_white} alt=''/>:
                <div className='absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-1.5 rounded-[50px] bg-white'>
                    <img className='w-[30px]' onClick={()=>removeFromCart(_id)} src={assets.remove_icon_red} alt=''/>
                    <p>{cartItems[_id]}</p>
                    <img className='w-[30px]' onClick={()=>addtoCart(_id)} src={assets.add_icon_green} alt=''/>
                </div>
            }
        </div>
        <div className="p-[20px]">
            <div className="flex justify-between items-center mb-2.5">
                <p className='text-xl font-medium'>{name}</p>
                <img src={assets.rating_starts} className='w-[70px]'/>
            </div>
            <p className="text-[#676767] text-xs">{description}</p>
            <p className='text-[tomato] font-medium my-2.5 mx-0' >${price}</p>
        </div>
    </div>
  )
}

export default FoodItem