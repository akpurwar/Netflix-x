import React, { useEffect } from 'react'
import Header from './Header'
import { useGetMoviesList } from '../utils/useGetMoviesList'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'


const Browse = () => {

  useGetMoviesList()

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse