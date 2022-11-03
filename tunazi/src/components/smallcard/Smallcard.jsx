import React, { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import "./smallcard.css";

const Smallcard = ({ music }) => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  return (
    <section
      className="card"
      onMouseEnter={() => {
        setIsCardHovered(true);
      }}
      onMouseLeave={() => {
        setIsCardHovered(false);
      }}
    >
      <div className="cardsec">
        <img src={music.img} alt="" />
      </div>
      <div className="content">
        <div className="innercontent">
          <p className={`title ${isCardHovered ? "hide" : null}`}>
            {music.musicName}
          </p>
          <AiFillPlayCircle
            className={`playbutton ${!isCardHovered ? "hide" : null}`}
          />
        </div>
      </div>
    </section>
  );
};
export default Smallcard;
