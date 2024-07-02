import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify';

const Add = ({url}) => {

  const [image,setImage] = useState(false)

  const [data,setData] = useState({
    name:'',
    description:'',
    price:'',
    category:"Salad"
  })

  const onChangeHandler = (event) =>{
      const name = event.target.name;
      const value = event.target.value; 
      setData(data =>({...data,[name]:value}))
  }

  const onSubmitHandler= async(event) =>{
    event.preventDefault();
    const formData = new FormData();  
    formData.append("name",data.name)
    formData.append("description",data.description)
    formData.append("price",Number(data.price))
    formData.append("category",data.category)
    formData.append('image',image)
    
    const response = await axios.post(`${url}/api/food/add`,formData);
    if(response.data.success){
      setData({
        name:'',
        description:'',
        price:'',
        category:"Salad"
      })
      setImage(false)
      toast.success(response.data.message)

    }else{
        toast.error(response.data.message)
    }
  }

  return (
    <div className='w-[70%] ml-[25px] mt-[50px] text-[#6d6d6d] text-l'>
      <form className='flex flex-col gap-[10px]' onSubmit={onSubmitHandler}>
          <div className="add-img-upload flex-xolumn flex flex-col gap-[10px]">
            <p>Upload Image</p>
            <label htmlFor='image'>
              <img className='w-[120px]' src={image?URL.createObjectURL(image):assets.upload_area} alt=''/>
            </label>
            <input  onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' hidden required/>
          </div>
          <div className='max-w-[280px] flex flex-col gap-[10px]'>
            <p>Product name</p>
            <input onChange={onChangeHandler} value={data.name} className='p-[10px]' type='text' name='name' placeholder='Type here'/>
          </div>
          <div className='max-w-[280px] flex flex-col gap-[10px]'> 
            <p>Product Description</p>
            <textarea onChange={onChangeHandler} value={data.description} className='p-[10px]' name='description' rows='6' placeholder='Write content here'></textarea>
          </div>
          <div className='flex gap-[30px]'>
            <div className='add-category flex flex-col gap-[10px]'>
              <p>Product Category</p>
              <select onChange={onChangeHandler} className='max-w-[120px] p-[10px]' name='category'>
                <option value='Salad'>Salad</option>
                <option value='Rolls'>Rolls</option>
                <option value='Deserts'>Deserts</option>
                <option value='Sandwhich'>Sandwhich</option>
                <option value='Cake'>Cake</option>
                <option value='Pure Veg'>Pure Veg</option>
                <option value='Pasta'>Pasta</option>
                <option value='Noodles'>Noodles</option>
              </select>
            </div>
            <div className='add-price flex flex-col gap-[10px]'>
              <p>Product Price</p>
              <input onChange={onChangeHandler} value={data.price} className='max-w-[120px] p-[10px]' type='Number' name='price' placeholder='$20'/>
            </div>
          </div>
          <button type='submit' className='max-w-[120px] border-none p-[10px] bg-black text-white cursor-pointer'>Add</button>
      </form>
    </div>
  )
}

export default Add