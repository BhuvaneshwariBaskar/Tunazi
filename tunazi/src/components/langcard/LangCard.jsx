import React, { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import "./langCard.css";

const LangCard = () => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  return (
    <section
      className="langcard"
      onMouseEnter={() => {
        setIsCardHovered(true);
      }}
      onMouseLeave={() => {
        setIsCardHovered(false);
      }}
    >
      <div className="borderlang">
        <div className="langimg">
          <img src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2019/03/bollywood-songs-1554034044.jpg" alt="" />
          <p className="Langname">Latest <b>Tamil </b><hr/> songs</p>
          <AiFillPlayCircle
            className={`playbtnlang ${!isCardHovered ? "hide" : null}`}
          />
        </div>
      </div>
      {/* <div className="langcontent">
        <div className="langinnercontent">
            <p></p>
        </div>
      </div> */}
    </section>
  );
};

export default LangCard;
