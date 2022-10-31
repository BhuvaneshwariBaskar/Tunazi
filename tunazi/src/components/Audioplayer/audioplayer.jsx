import React from "react";
import { IconContext } from "react-icons";
import { FaPause } from "react-icons/fa";
import { IoPlaySkipBack, IoPlaySkipForward, IoPlay } from "react-icons/io5";

const audioplayer = ({ isPlaying, setIsPlaying, handleNext, handlePrev }) => {
  return (
    <IconContext.Provider value={{ size: "35px", color: "#C4D0E3" }}>
      <div className="controls-wrapper flex">
        <div className="action-btn flex" onClick={handlePrev}>
          <IoPlaySkipBack />
        </div>
        <div
          className={
            isPlaying ? "play-pause-btn flex active" : "play-pause-btn flex"
          }
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <FaPause /> : <IoPlay />}
        </div>
        <div className="action-btn flex" onClick={handleNext}>
          <IoPlaySkipForward />
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default audioplayer;
