import React, { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import "./pinkCard.css";

const PinkCard = ({ music }) => {
  const [isCardHover, setIsCardHover] = useState(false);

  return (
    <section
      className="pinkcard"
      onMouseEnter={() => {
        setIsCardHover(true);
      }}
      onMouseLeave={() => {
        setIsCardHover(false);
      }}
    >
      <div className="pinkcardsec">
        <img src={music.thumbnail} alt="" />
      </div>
      <div className="pinkcontent">
        <div className="pinkinnercontent">
          <p className={`pinktitle ${isCardHover ? "hide" : null}`}>
            {music.title}
          </p>
          <AiFillPlayCircle
            className={`pinkplaybutton ${!isCardHover ? "hide" : null}`}
          />
        </div>
      </div>
    </section>
  );
};
export default PinkCard;
