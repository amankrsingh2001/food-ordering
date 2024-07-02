import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-[8px] px-[4%]'>
        <img className='max-w-[100px]' src={assets.logo} alt='' />
        <img className='w-[40px]' src={assets.profile_image} alt=''/>
    </div>
  )
}

export default Navbar