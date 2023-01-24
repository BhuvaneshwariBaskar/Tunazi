import React, { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import "./songCard.css";

const LangCard = () => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  return (
    <section
      className="songcard"
      onMouseEnter={() => {
        setIsCardHovered(true);
      }}
      onMouseLeave={() => {
        setIsCardHovered(false);
      }}
    >
      <div className="flex_give">
        <div className="bordersong">
          <div className="songimg">
            <img
              src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2019/03/bollywood-songs-1554034044.jpg"
              alt=""
            />
            <p className="songname">
              Latest <b>Tamil</b> <br />
              Songs
            </p>
            <AiFillPlayCircle
              className={`playbtnsong ${!isCardHovered ? "hide" : null}`}
            />
          </div>
        </div>
        <div className="songcontent">
          <div className="songinnercontent">
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LangCard;
