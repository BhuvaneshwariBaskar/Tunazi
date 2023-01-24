import React, { useState, useEffect } from "react";
import LangCardcompo from "../../components/langcard/Langcardcompo";
// import { getSadSong, getTrendingSong } from "../../utils/data";
import "./library.css";

const Library = () => {
  const lang = ["Hindi","Tamil","English","Telugu","Kannada","Marathi"]
  return (
    <section className="lib">
      <div className="lang">
        <h1 className="language-title">Choose Your Language</h1>
        <LangCardcompo lang={lang}/>
      </div>
    </section>
  )
}

export default Library