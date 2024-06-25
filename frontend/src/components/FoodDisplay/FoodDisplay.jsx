import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext';
import FoodItem from './FoodItem';

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className='mt-[30px] ' id='food-display'>
        <h2 className='text-4xl font-semibold'>Top Dishes near you</h2>
        <div className="grid grid-cols-4 mt-[30px] gap-[30px] g-y-[50px]">
            {
                food_list.map((item,index)=>{
                    if(category==="All" || category===item.category){
                        return <FoodItem key={index} item= {item} />
                    }
                })
            }
        </div>
    </div>
  )
}

export default FoodDisplay