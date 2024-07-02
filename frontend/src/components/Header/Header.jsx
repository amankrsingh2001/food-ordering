import React from 'react'


const Header = () => {

  return (
    <div className='h-auto lg:p-12 mx-auto my-[30px] bg-cover relative overflow-hidden lg:rounded-md' style={{backgroundImage:"url(header_img.png)"}}>
      <div className=' flex p-6 sm:w-full flex-col items-start gap-[1vw] lg:max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn'>
        <h2 className='font-semibold text-white text-[2.5rem] lg:text-[4.5vw]'>Order your favourite food</h2>
        <p className='text-white text-[1.5rem] lg:text-md'>Choose from a diverse menu featuring a delectable array of dishes crafted with
           the finest ingredients and culinary expertise.Our mission is to satisfy you cravings and elevate you dining experience, one delecious meal at a time.</p>
      <a href="#explore-menu">
      <button className='border-none text-[#747474] font-medium py-[1vw] px-[2.3vw] bg-white text-[vw] rounded-[50px]'>View Menu</button>
      </a>
   
      </div>
    </div>
  )
}

export default Header