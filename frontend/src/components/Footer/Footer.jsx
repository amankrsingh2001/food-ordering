import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-[30px] py-5 px-[8vw] pt-20 mt-24 ' id='footer'>
        <div className='w-full grid md:grid-cols-[2fr_1fr_1fr] grid-cols-[1fr] md:grid-rows-[1fr] sm:grid-rows-[1fr_1fr_1fr] gap-[80px]'>
            <div className='flex flex-col items-start gap-[20px] '>
                <img src={assets.logo}/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa temporibus, voluptatum distinctio provident soluta repudiandae. At explicabo natus incidunt odit quibusdam esse quam accusamus reprehenderit. Tempore quasi commodi odit neque!</p>
                <div className='flex'>
                    <img className='w-10 mr-4' src={assets.facebook_icon}/>
                    <img className='w-10 mr-4' src={assets.twitter_icon}/>
                    <img className='w-10 mr-4' src={assets.linkedin_icon}/>
                </div>
            </div>
            <div className="flex flex-col items-start gap-[20px]">
                <h2 className='text-white'>Company</h2>
                <ul>
                    <li className='list-none mb-[10px] cursor-pointer'>Home</li>
                    <li className='list-none mb-[10px] cursor-pointer'>About us</li>
                    <li className='list-none mb-[10px] cursor-pointer'>Delivery</li>
                    <li className='list-none mb-[10px] cursor-pointer'>Privacy policy</li>
                </ul>
            </div>
            <div className='flex flex-col items-start gap-[20px]'>
                <h2 className='text-white'>Get in touch</h2>
                <ul>
                    <li className='list-none mb-[10px] cursor-pointer'>+1-212-456-7890</li>
                    <li className='list-none mb-[10px] cursor-pointer'> contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr className='w-full h-[2px] m-0 bg-[gray] border-none'/>
        <p className="footer-copyright">Copyright 2024 © Tomato.com-All Right Reserved.</p>
    </div>
  )
}

export default Footer