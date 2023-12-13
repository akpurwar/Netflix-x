import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addTrailer } from "./movieSlice"
import { API_OPTIONS } from "./constant"

export const useTrailer = (movieId)=> {
    const dispatch = useDispatch()

const getMovieVideo = async() => {

    const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS)
    const json = await data.json() 
    const trailer = json.results[0]
    dispatch(addTrailer(trailer))
    
 
 }

 useEffect(()=> {
     getMovieVideo()
 },[])
}

