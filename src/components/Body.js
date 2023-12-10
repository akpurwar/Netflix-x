import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import {useDispatch} from 'react-redux'
import { adduser, removeuser } from '../utils/userSlice';

const Body = () => {
  const dispatch = useDispatch()
   
   const appRouter = createBrowserRouter([
    {
     path : "/",
     element: <Login/>,
   },
   {
    path : "/browse",
    element : <Browse/>,
   }
  ])


  useEffect(()=> {
    onAuthStateChanged(auth, (user) => {
      if (user) {
      
        const {uid, displayName ,email, photoURL}= user;
           dispatch(adduser({ uid:uid , email:email , displayName:displayName ,photoURL : photoURL}))
      } else {
        dispatch(removeuser())
      }
    });
    
  })


  return (
    <div>
    <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body