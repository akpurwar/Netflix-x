import React from 'react'
import {useSelector} from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {

    const movies = useSelector(store=> store.movie?.nowPlaying)
    if(!movies) return ; //early return
    const mainmovie = movies[0]
   
    const {original_title , overview ,id} = mainmovie

   
   
    

    


  return (
    <div className={''}>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer