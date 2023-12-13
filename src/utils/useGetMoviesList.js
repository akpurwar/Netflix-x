import { API_OPTIONS } from '../utils/constant'
import { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { addMoviesList } from './movieSlice'

 
 export const useGetMoviesList = ()=> { 

    const dispatch =useDispatch()
    
   const getMoviesList = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
    const json = await data.json();
    dispatch(addMoviesList(json.results))
   
  }


  useEffect(()=> {
     getMoviesList()
  },[])
 }