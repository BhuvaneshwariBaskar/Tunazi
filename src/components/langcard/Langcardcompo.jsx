import React from "react";
import LangCard from "./LangCard";
import './LangCardcompo.css'

const LangCardcompo = ({ lang }) => {
  console.log(lang,"hello");
  return (
    <>
          <div class="grid-items">
            {lang.map((mus, index) => {
              return <LangCard lan={mus} key={index} />;
            })}
          </div>
    </>
  );
};

export default LangCardcompo;
