import React from "react";
import Smallcard from "./Smallcard";
import './Smallcardcompo.css'

const Smallcardcompo = ({ music }) => {
  console.log(music);
  return (
    <>
          <div class="grid-item">
            {music.map((mus, index) => {
              return <Smallcard music={mus} key={index} />;
            })}
          </div>
    </>
  );
};

export default Smallcardcompo;
