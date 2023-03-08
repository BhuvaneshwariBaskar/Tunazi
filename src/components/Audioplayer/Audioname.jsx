import React from 'react'
import './audioname.css'

const AudioName = ({cursong, user}) => {
  return (
    <div className='audioNamediv'>
        <div className="imgname">
        <div className="imgcon">
          <img
            src={cursong && cursong.thumnail}
            alt=""
            className="cursongimage"
          />
          <p>{cursong && cursong.title}</p>
        </div>
        
      </div>
    </div>
  )
}
export default AudioName