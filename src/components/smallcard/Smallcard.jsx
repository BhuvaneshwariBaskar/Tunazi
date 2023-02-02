import React, { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { useAppContext } from "../../components/context/appContext";
import {IoIosHeart} from "react-icons/io"
import "./smallcard.css";

const Smallcard = ({ music }) => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const {favorites,AddTOFavorites,RemoveFromFavorites}=useAppContext;
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
          
          
          {/* <div className="heart">
          {
            favorites.includes(i)?(
              <IoIosHeart onClick/>
            )
          }
          </div> */}

          <AiFillPlayCircle
            className={`playbutton ${!isCardHovered ? "hide" : null}`}
          />
        </div>
      </div>
    </section>
  );
};
export default Smallcard;
