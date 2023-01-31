import React, { useState, useEffect } from "react";
import Lib from "../../components/lib/Lib"
import {Music} from "../../db/music"

// import { getSadSong, getTrendingSong } from "../../utils/data";
import "./library.css";

const Library = ( {Music} ) => {
  return (
    <section className="lib">
      
      <div>
        <Lib music={Music}/>
        
      </div>
    </section>
  )
}

export default Library