import React from 'react'

const Header = () => {
  return (
    <div className='h-[34vw] mx-auto my-[30px] bg-contain relative' style={{backgroundImage:"url(header_img.png)"}}>
      <div className='absolute flex flex-col items-start gap-[1vw] max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn'>
        <h2 className='font-semibold text-white text-[4.5vw]'>Order your favourite food</h2>
        <p className='text-white text-[vw]'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.Our mission is to satisfy you cravings and elevate you dining experience, one delecious meal at a time.</p>
        <button className='border-none text-[#747474] font-medium py-[1vw] px-[2.3vw] bg-white text-[vw] rounded-[50px]'>View Menu</button>
      </div>
    </div>
  )
}

export default Header