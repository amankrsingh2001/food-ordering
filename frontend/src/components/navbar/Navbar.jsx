import { useContext, useState } from 'react'
import {assets} from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState('home')

    const {getTotalCartAmount} = useContext(StoreContext)

    const clickHandler = (e) =>{
        setMenu(e.target.textContent)
    }

     
  return (
    <div className='px-[20px] py-[20px] flex justify-between items-center'>
      <Link to='/'>
        <img src={assets.logo} alt='' className='md:w-[150px] w-[140px]'/> {/*logo */}
      </Link>
        <ul className='flex list-none gap-[20px] text-[#49557e] text-[18px] sm:gap-[20px] sm:text-sm '> {/*menu */}
            <Link to='/' onClick={clickHandler} className={`cursor-pointer ${menu==='home'?"active:pb-2px border-b-[2px] ":"" }`} >home</Link>
            <a href='#explore-menu' onClick={clickHandler} className={`cursor-pointer ${menu==='menu'?"active:pb-2px border-b-[2px] ":""}`}>menu</a>
            <a href='#app-download' onClick={clickHandler} className={`cursor-pointer ${menu==='mobile-app'?"active:pb-2px border-b-[2px] ":""}`}>mobile-app</a>
            <a href='#footer' onClick={clickHandler} className={`cursor-pointer ${menu==='contact us'?"active:pb-2px border-b-[2px] ":""}`}>contact us</a>
        </ul>
        <div className='flex items-center gap-[40px] sm:gap-[30px]'> {/*navbar-right */}
            <img className='sm:w-[22px]' src={assets.search_icon} alt=''/>
            <div className='relative'>
              <Link to='/cart'>
              <img src={assets.basket_icon} alt=''/>
              </Link>
              {
                getTotalCartAmount()!==0 ? <div className='absolute min-w-[10px] min-h-[10px] bg-[tomato] rounded-[5px] top-[-8px] right-[-8px]'> </div>:<></>
              }
            
          {/*navbar-search-icon */}
           
            </div>
                <button onClick={()=>setShowLogin(true)} className='bg-transparent text-[16px] text-[#49557] border-[1px] border-solid border-[tomato] px-[30px] py-[10px] cursor-pointer rounded-[50px] hover:bg-[#fff4f2] transition duration-[0.3s] sm:px-[25px] sm:py-[8px]'>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar