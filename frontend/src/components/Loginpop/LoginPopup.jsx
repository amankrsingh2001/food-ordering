import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
    const [currentState,setCurrentState] = useState("Log In")
    

  return (
    <div className='fixed z-[1] w-full h-full bg-[#00000090] grid'>
        <form className='place-self-center w-[330px] text-[#808080] bg-white flex flex-col gap-[25px] py-[30px] px-[25px] rounded-[8px] text-sm animate-fadeIn '> {/*login-popup-container */}
            <div className='flex justify-between items-center text-black'> {/*login-popup-title */}
                <h2>{currentState}</h2>
                <img className='w-4 cursor-pointer' src={assets.cross_icon} alt=''
                    onClick={()=>setShowLogin(false)}
                /> {/*login-popup-title img */}
            </div>
            <div className='flex flex-col gap-[20px]'> {/*login-pop-input */}
                {
                currentState==="Sign Up"? <input className='outline-none border-[1px] border-solid border-[#c9c9c9] p-2.5' type='text' placeholder='Your Name' required/>:<></>
                }
                <input className='outline-none border-[1px] border-solid border-[#c9c9c9] p-2.5' type='email' placeholder='Your Email' required/>
                <input className='outline-none border-[1px] border-solid border-[#c9c9c9] p-2.5' type='password' placeholder='Password' required/>
            </div>
            <button className='border-none p-2.5 rounded-[4px] text-white bg-[tomato] text-[15px] cursor-pointer'>{currentState==="Sign Up"?"Create Account":"Login"}</button>
            <div className='flex items-start gap-[10px] mt-[-15px]'> {/*llogin-popup-cond */}
                <input className='mt-[5px]' type='checkbox' required/>
                <p>By continuing,i agree to the terms of use & privacy policy</p>
            </div>
            {
                currentState==="Log In"?<p>Create a new Account?<span className='text-[tomato] font-medium cursor-pointer' onClick={()=>setCurrentState("Sign Up")}>Click Here</span></p>: <p>Already have an account?<span className='text-[tomato] font-medium cursor-pointer' onClick={()=>setCurrentState("Log In")}>Login here</span></p>
            }
            
           
        </form>
    </div>
  )
}

export default LoginPopup