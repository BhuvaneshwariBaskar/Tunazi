import React, { useState, useEffect } from "react";
import PinkCardCompo from "../../components/pinkcard/PinkCardCompo";
// import { getTrendingSong } from "../../utils/Data";
import './SearchContent.css';
const SearchContent = ({searchtext}) => {
  const [SearchPlayed, setSearchPlayed] = useState([]);
  // useEffect(() => {
  //   getTrendingSong().then((res) => {
  //     setSearchPlayed(res);
  //   });
  // }, []);
  return (
    <div className="search-played">
      <h1 className="search-title">Search result</h1>
      <PinkCardCompo music={SearchPlayed} />
    </div>
  );
};

export default SearchContent;
