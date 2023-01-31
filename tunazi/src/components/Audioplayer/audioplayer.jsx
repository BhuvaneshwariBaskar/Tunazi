import React from 'react'
import AudioPlayer from 'react-h5-audio-player'
import './audioplayer.css'

const Audioplayer = () => {
  return (
    <AudioPlayer
    
    src="https://pwdown.info/14438/01 Chogada - Loveratri.mp3"
    onPlay={e => console.log("onPlay")}
    // other props here
  />
  )
}

export default Audioplayer