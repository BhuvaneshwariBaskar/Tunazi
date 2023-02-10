import React from "react";
import PinkCard from "./PinkCard";
import './PinkCardCompo.css'

const PinkCardCompo = ({ savedata }) => {
  return (
    <>
          <div class="grid-item2">
            {savedata.map((mus, index) => {
              return <PinkCard music={mus} key={index} />;
            })}
          </div>
    </>
  );
};

export default PinkCardCompo;
