import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCards = ({posterpath}) => {
  return (
    <div className="w-48 pr-4">
        <img alt="card img" src={IMG_CDN_URL+posterpath}/>
    </div>
  )
}

export default MovieCards