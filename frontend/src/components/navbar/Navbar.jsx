import { useState } from 'react'
import {assets} from '../../assets/assets'

const Navbar = () => {
    const [menu,setMenu] = useState('home')

    const clickHandler = (e) =>{
        setMenu(e.target.textContent)
    }



  return (
    <div className='px-[20px] py-[20px] flex justify-between items-center'>
        <img src={assets.logo} alt='' className='w-[150px]'/>
        <ul className='flex list-none gap-[20px] text-[#49557e] text-[18px] '>
            <li onClick={clickHandler} className={`cursor-pointer ${menu==='home'?"active:pb-2px border-b-[2px] ":"" }`} >home</li>
            <li onClick={clickHandler} className={`cursor-pointer ${menu==='menu'?"active:pb-2px border-b-[2px] ":""}`}>menu</li>
            <li onClick={clickHandler} className={`cursor-pointer ${menu==='mobile-app'?"active:pb-2px border-b-[2px] ":""}`}>mobile-app</li>
            <li onClick={clickHandler} className={`cursor-pointer ${menu==='contact us'?"active:pb-2px border-b-[2px] ":""}`}>contact us</li>
        </ul>
        <div className='flex items-center gap-[40px]'>
            <img src={assets.search_icon} alt=''/>
            <div className='relative'>
                <img src={assets.basket_icon} alt=''/>
                <div className='absolute min-w-[10px] min-h-[10px] bg-[tomato] rounded-[5px] top-[-8px] right-[-8px]'>
            </div>
            </div>
                <button className='bg-transparent text-[16px] text-[#49557] border-[1px] border-solid border-[tomato] px-[30px] py-[10px] cursor-pointer rounded-[50px] hover:bg-[#fff4f2] transition duration-[0.3s]'>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar