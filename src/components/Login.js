import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignIn ,setSignIn] = useState(true)

  const toggleSign = () => {
      setSignIn(!isSignIn)
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background logo"/>
      </div>
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        { !isSignIn && <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800'/>}
        <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800'/>
        <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-800'/>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' >{isSignIn ? "Sign In" : "Sign Up"}</button>
        <h1 className='py-4 cursor-pointer' onClick={toggleSign}>{isSignIn ? "New to Netflix ? Sign Up" : "Already a user ? Sign In"}</h1>
       </form>
    
    </div>
  )
}

export default Login