import React from 'react'
import AudioPlayer from 'react-h5-audio-player'
import './audioplayer.css'

const Audioplayer = ({cursong}) => {
  return (
    <AudioPlayer
    src={cursong}
    onPlay={e => console.log("onPlay")}
    // other props here
  />
  )
}

export default Audioplayer