import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkvalidation } from '../utils/validate'
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { adduser } from '../utils/userSlice';


const Login = () => {
  const [isSignIn ,setSignIn] = useState(true) 
  const [errormessage ,seterrormessage] = useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const email = useRef(null)
  const password = useRef(null)
const name = useRef(null)

  const toggleSign = () => {
      setSignIn(!isSignIn)
  }

  const handleSumbit = () => {

   const message = checkvalidation(email.current.value , password.current.value)
   seterrormessage(message)
   if(message) return ;

   if(!isSignIn){
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)

  updateProfile(user, {
  displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
  const {uid, displayName ,email, photoURL}=  auth.currentUser;
   dispatch(adduser({ uid:uid , email:email , displayName:displayName ,photoURL : photoURL}))
}).catch((error) => {
   seterrormessage(error.message)
});
    navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode + "-" + errorMessage) 
    // ..
  });
   }else{
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   
    
    console.log(user)
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    seterrormessage(errorCode + "-" + errorMessage)
  });


   }



  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background logo"/>
      </div>
        <form  onSubmit={(e)=> {e.preventDefault()}}className='w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        { !isSignIn && <input ref={name}  type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800'/>}
        <input ref={email} type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800'/>
        <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-800'/>
        <h1 className='text-red-800 font-bold text-lg'>{errormessage}</h1>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleSumbit} >{isSignIn ? "Sign In" : "Sign Up"}</button>
        <h1 className='py-4 cursor-pointer' onClick={toggleSign}>{isSignIn ? "New to Netflix ? Sign Up" : "Already a user ? Sign In"}</h1>
       </form>
    
    </div>
  )
}

export default Login