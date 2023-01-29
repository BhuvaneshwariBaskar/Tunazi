import React from 'react'
import AudioPlayer from 'react-h5-audio-player'
import './audioplayer.css'

const Audioplayer = () => {
  return (
    <AudioPlayer
    
    src="https://res.cloudinary.com/deak6nhde/video/upload/v1667737729/Music/Test/01_Bad_Life_-_acoustic.m4a"
    onPlay={e => console.log("onPlay")}
    // other props here
  />
  )
}

export default Audioplayer