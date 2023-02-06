import React from "react";
import Smallcard from "./Smallcard";
import './Smallcardcompo.css'

const Smallcardcompo = ({ music , setCursong }) => {
  // console.log(music);
  return (
    <>
    <h1 className="Recently-title">Recently Played</h1>
          <div class="grid-item">
            {music.map((mus, index) => {
              return <Smallcard music={mus} key={index} />;
            })}
          </div>
    </>
  );
};

export default Smallcardcompo;
