import React ,{useEffect} from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { adduser, removeuser } from '../utils/userSlice';
import {  onAuthStateChanged } from "firebase/auth";
import {useDispatch} from 'react-redux'
import { LOGO } from '../utils/constant';
const Header = () => {
  const dispatch = useDispatch()
   const navigate  = useNavigate()
   const user = useSelector(store => store.user)
   console.log(user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
     navigate("/")
    }).catch((error) => {
       navigate("/error")
    });
  }

  useEffect(()=> {
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
      
        const {uid, displayName ,email, photoURL}= user;
           dispatch(adduser({ uid:uid , email:email , displayName:displayName ,photoURL : photoURL}))
           navigate("/browse")
      } else {
        dispatch(removeuser())
        navigate("/")
      }
    });

    return () => unsubscribe()
    
  },[])

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
  <img  className="w-44" src={LOGO} alt="logo"/>
    <div className='flex'>
      <img src={user?.photoURL} />
      {user && <button onClick={handleSignOut}>Sign Out {user?.displayName}</button>}
    </div>
  </div>
  )
}

export default Header