import React, { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoIosHeart } from "react-icons/io";
import "./smallcard.css";

const Smallcard = ({ music, index }) => {
  console.log("🚀 ~ file: Smallcard.jsx:7 ~ Smallcard ~ music", music);
  const [isCardHovered, setIsCardHovered] = useState(false);
  // const {favorites,AddTOFavorites,RemoveFromFavorites}=useAppContext;
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
        <img src={music.thumbnail} alt="" />
      </div>
      <div className="content">
        <div className="innercontent">
          <p className={`title ${isCardHovered ? "hide" : null}`}>
            {music.title}
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
