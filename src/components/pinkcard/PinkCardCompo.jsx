import React from "react";
import PinkCard from "./PinkCard";
import './PinkCardCompo.css'

const PinkCardCompo = ({ music }) => {
  console.log(music);
  return (
    <>
          <div class="grid-item2">
            {music.map((mus, index) => {
              return <PinkCard music={mus} key={index} />;
            })}
          </div>
    </>
  );
};

export default PinkCardCompo;
