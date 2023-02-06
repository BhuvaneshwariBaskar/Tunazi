import React from "react";
import PinkCardCompo from "../../components/pinkcard/PinkCardCompo";
import './SearchContent.css';
const SearchContent = ({savedata,show}) => {
  return (
    <div className="search-played" hidden={show}>
      <h1 className="search-title">Search result</h1>
      <PinkCardCompo savedata={savedata} />
    </div>
  );
};

export default SearchContent;
