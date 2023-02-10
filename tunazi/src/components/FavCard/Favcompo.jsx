import React from "react";
import Favcard from "./Favcard";
import "./Favcompo.css";

const Favcompo = ({ music, user }) => {
  return (
    <>
      <div class="fav-grid-item">
        {music.map((mus, index) => {
          return <Favcard music={mus} key={index} user={user} />;
        })}
      </div>
    </>
  );
};

export default Favcompo;
