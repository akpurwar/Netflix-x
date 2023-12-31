import React from 'react'

const VideoTitle = ({title, overview}) => {
    console.log(title)
  return (
    <div className={'w-screen aspect-video pt-64 px-12 absolute text-white bg-gradient-to-r from-black' }>

        <h1 className={'text-6xl font-bold'}>{title}</h1>
        <p className={'py-6 text-lg w-1/4'}>{overview}</p>
        <button className={'bg-white text-black p-4 px-12 mx-2 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-90'}>▶️ Play</button>
        <button  className={'bg-gray-500 text-white p-4 px-12 mx-2 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-90'}>More Info</button>
    </div>
  )
}

export default VideoTitle