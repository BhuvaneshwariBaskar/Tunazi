import React from "react";
import PinkCardCompo from "../../components/pinkcard/PinkCardCompo";
import "./SearchContent.css";
const SearchContent = ({ savedata,fetchRecentlyPlayed, setCursong, user, setRecentlyPlayed ,query}) => {
  return (
    <div className="search-played">
      <h1 className="search-title">Search result for {query}</h1>
      <PinkCardCompo
        savedata={savedata}
        fetchRecentlyPlayed={fetchRecentlyPlayed}
        setRecentlyPlayed={setRecentlyPlayed}
        setCursong={setCursong}
        user={user}
      />
    </div>
  );
};

export default SearchContent;
