import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='mx-auto my-auto mt-[100px] text-xl text-center font-medium' id='app-download'>
        <p className='mb-5'>For Better Experince Download <br/> Tomato App</p>
        <div className='flex justify-center gap-[10px]'>
            <img className='w-[120px] cursor-pointer transition ease-in-out duration-500 hover:scale-110' src={assets.play_store}/>
            <img  className='w-[120px] cursor-pointer transition ease-in-out duration-500 hover:scale-110' src={assets.app_store}/>
        </div>
    </div>
  )
}

export default AppDownload