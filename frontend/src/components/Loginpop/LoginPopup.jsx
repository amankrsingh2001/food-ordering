import React, {  useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import  axios from 'axios';


const LoginPopup = ({setShowLogin}) => {
    const {url,setToken} = useContext(StoreContext)

    const [currentState,setCurrentState] = useState("Log In")
    
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""

    })

    const onChagneHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))

    }

    const onLogin = async(event)=>{
        event.preventDefault()
        let newUrl = url;
        if(currentState==="Log In"){
            newUrl += "/api/user/login"
        }else{
            newUrl += "/api/user/register"
        }
        const response = await axios.post(newUrl,data);
        if(response.data.success){
            setToken(response.data.token)
            localStorage.setItem("token",response.data.token)
            setShowLogin(false)
        }else{
            alert(response.data.message)
        }

    }
    

  return (
    <div className='fixed z-10 w-full h-full bg-[#00000090]  grid'>
        <form onSubmit={onLogin} className='place-self-center w-[330px] text-[#808080] bg-white flex flex-col gap-[25px] py-[30px] px-[25px] rounded-[8px] text-sm animate-fadeIn '> {/*login-popup-container */}
            <div className='flex justify-between items-center text-black'> {/*login-popup-title */}
                <h2>{currentState}</h2>
                <img className='w-4 cursor-pointer' src={assets.cross_icon} alt=''
                    onClick={()=>setShowLogin(false)}
                /> {/*login-popup-title img */}
            </div>
            <div className='flex flex-col gap-[20px]'> {/*login-pop-input */}
                {
                currentState==="Sign Up"? <input onChange={onChagneHandler} value={data.name} className='outline-none border-[1px] border-solid border-[#c9c9c9] p-2.5' type='text' placeholder='Your Name' name='name' required/>:<></>
                }
                <input onChange={onChagneHandler} value={data.email} name='email'  className='outline-none border-[1px] border-solid border-[#c9c9c9] p-2.5' type='email' placeholder='Your Email' required/>
                <input  onChange={onChagneHandler} value={data.password} name='password' className='outline-none border-[1px] border-solid border-[#c9c9c9] p-2.5' type='password' placeholder='Password' required/>
            </div>
            <button type='submit' className='border-none p-2.5 rounded-[4px] text-white bg-[tomato] text-[15px] cursor-pointer'>{currentState==="Sign Up"?"Create Account":"Login"}</button>
            <div className='flex items-start gap-[10px] mt-[-15px]'> {/*llogin-popup-cond */}
                <input className='mt-[5px]' type='checkbox' required/>
                <p>By continuing,I agree to the terms of use & privacy policy</p>
            </div>
            {
                currentState==="Log In"?<p>Create a new Account?<span className='text-[tomato] font-medium cursor-pointer' onClick={()=>setCurrentState("Sign Up")}>Click Here</span></p>: <p>Already have an account?<span className='text-[tomato] font-medium cursor-pointer' onClick={()=>setCurrentState("Log In")}>Login here</span></p>
            }
            
           
        </form>
    </div>
  )
}

export default LoginPopup