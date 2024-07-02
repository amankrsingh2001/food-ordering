import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";


const Navbar = ({setShowLogin}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menu,setMenu] = useState('home')

  const {getTotalCartAmount,token,setToken} = useContext(StoreContext)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  const clickHandler = (e) =>{
    setMenu(e.target.textContent)
}


const logout = () =>{
    localStorage.removeItem("token")
    setToken("")
    navigate('/')

}

  return (
    <div>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
     
      <Link to='/' className="text-3xl font-bold leading-none" href="#">
        <img src={assets.logo} alt='' className='md:w-[150px] w-[140px]'/> {/*logo */}
      </Link>
		
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-[tomato] p-3" onClick={toggleMenu}>
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-6">
        <Link to='/' onClick={clickHandler} className={`cursor-pointer ${menu==='home'?"active:pb-2px border-b-[2px] ":"" }`} >home</Link>
			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li>  <a href='#explore-menu' onClick={clickHandler} className={`cursor-pointer ${menu==='menu'?"active:pb-2px border-b-[2px] ":""}`}>menu</a></li>
			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><a href='#app-download' onClick={clickHandler} className={`cursor-pointer ${menu==='mobile-app'?"active:pb-2px border-b-[2px] ":""}`}>app</a></li>
			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li> <a href='#footer' onClick={clickHandler} className={`cursor-pointer ${menu==='contact us'?"active:pb-2px border-b-[2px] ":""}`}>contact us</a></li>
			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			
		</ul>

    
        <div className='items-center gap-[40px] sm:gap-[30px] hidden lg:flex'> {/*navbar-right */}
            <img className='sm:w-[22px]' src={assets.search_icon} alt=''/>
            <div className='relative'>
              <Link to='/cart'>
              <img src={assets.basket_icon} alt=''/>
              </Link>
              {
                getTotalCartAmount()!==0 ? <div className='absolute min-w-[10px] min-h-[10px] bg-[tomato] rounded-[5px] top-[-8px] right-[-8px]'> </div>:<></>
              }
               </div>
            
          {/*navbar-search-icon */}
          {
            !token ? <button onClick={()=>setShowLogin(true)} className='bg-transparent text-[16px] text-[#49557]  border-[1px] border-solid 
            border-[tomato] px-[30px] py-[10px] cursor-pointer rounded-[50px] hover:bg-[#fff4f2] transition
             duration-[0.3s] sm:px-[25px] sm:py-[8px]'>Sign In</button>:
             <div className='relative group'>
              <img className='cursor-pointer' src={assets.profile_icon} alt=''/>
              <ul className='absolute hidden group-hover:flex text-sm flex-col gap-[10px] bg-[#fff2ef] py-[12px] px-[30px] rounded-[4px] border-[1px] border-solid border-[tomato] outline-[2px] outline-solid outline-white z-[10] list-none'>
                <li onClick={()=>navigate('/myorders')} className='flex items-center gap-[6px] justify-center cursor-pointer'><img className='w-[20px]' src={assets.bag_icon} alt=''/><p className='hover:text-[tomato]' >Orders</p></li>
                <hr/>
                <li onClick={logout} className='flex items-center gap-[6px] justify-center cursor-pointer'><img className='w-[20px]' src={assets.logout_icon}/><p className='hover:text-[tomato]'>Logout</p></li>
              </ul>
             </div>
          }
        </div>


      </nav>
      {isMenuOpen && (
        <div className={`navbar-menu relative z-[2]`}>
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
           
              <button className="navbar-close" onClick={toggleMenu}>
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
				<ul>
					<li className="mb-1">
                    <Link to='/'>
                          <img src={assets.logo} alt='' className='md:w-[150px] w-[140px] mb-10'/> {/*logo */}
                     </Link>
					</li>
					<li className="mb-1">
                    <Link to='/' onClick={clickHandler} className={`cursor-pointer block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-[tomato] rounded ${menu==='home'?"active:pb-2px border-b-[2px] ":"" }`} >home</Link>
					</li>
					<li className="mb-1">
                    <a href='#explore-menu' onClick={clickHandler} className={`cursor-pointer block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-[tomato] rounded ${menu==='menu'?"active:pb-2px border-b-[2px] ":""}`}>menu</a>
					</li>
					<li className="mb-1">
                    <a href='#app-download' onClick={clickHandler} className={`cursor-pointer block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-[tomato] rounded ${menu==='mobile-app'?"active:pb-2px border-b-[2px] ":""}`}>mobile-app</a>
					</li>
					<li className="mb-1">
                    <a href='#footer' onClick={clickHandler} className={`cursor-pointer block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-[tomato] rounded ${menu==='contact us'?"active:pb-2px border-b-[2px] ":""}`}>contact us</a>
					</li>
				</ul>
			</div>
			<div className="mt-auto">
				<div className="pt-6">
                {
            !token ? <button onClick={()=>setShowLogin(true)} className='bg-transparent text-[16px] text-[#49557] border-[1px] border-solid 
            border-[tomato] px-[30px] py-[10px] cursor-pointer rounded-[50px] hover:bg-[#fff4f2] transition
             duration-[0.3s] sm:px-[25px] sm:py-[8px]'>Sign In</button>:
             <div className='relative group'>
              <img className='cursor-pointer' src={assets.profile_icon} alt=''/>
              <ul className='absolute hidden group-hover:flex text-sm flex-col gap-[10px] bg-[#fff2ef] py-[12px] px-[30px] rounded-[4px] border-[1px] border-solid border-[tomato] outline-[2px] outline-solid outline-white z-[10] list-none'>
                <li onClick={()=>navigate('/myorders')} className='flex items-center gap-[6px] justify-center cursor-pointer'><img className='w-[20px]' src={assets.bag_icon} alt=''/><p className='hover:text-[tomato]' >Orders</p></li>
                <hr/>
                <li onClick={logout} className='flex items-center gap-[6px] justify-center cursor-pointer'><img className='w-[20px]' src={assets.logout_icon}/><p className='hover:text-[tomato]'>Logout</p></li>
              </ul>
             </div>
          }
				</div>
				<p className="my-4 text-xs text-center text-gray-400">
					<span>Copyright © 2024</span>
				</p>
			</div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;