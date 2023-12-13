import React from 'react'
import MovieCards from './MovieCards'


const MovieList = ({title ,movies}) => {

 



  return (
    <div className='px-4'>
    <h1 className='text-xl text-white'>{title}</h1>
    <div className='flex  overflow-x-scroll'>
        <div className='flex'>
       {movies?.map((movie)=> (<MovieCards key={movie.id} posterpath={movie.poster_path}/>))}
       </div>
    </div>
    </div>
  )
}

export default MovieList