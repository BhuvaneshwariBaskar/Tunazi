import React from "react";
import Favcard from "./Favcard";
import "./Favcompo.css";

const Favcompo = ({ music, user, fetchRecentlyPlayed, setCursong }) => {
  return (
    <>
      <div class="fav-grid-item">
        {music.map((mus, index) => {
          return (
            <Favcard
              music={mus}
              key={index}
              user={user}
              fetchRecentlyPlayed={fetchRecentlyPlayed}
              setCursong={setCursong}
            />
          );
        })}
      </div>
    </>
  );
};

export default Favcompo;
