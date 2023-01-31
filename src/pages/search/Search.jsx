import React, { useState, useEffect } from "react";
import { Music } from "../../db/music";
import "./search.css";
import { IconContext } from "react-icons";
import { HiOutlineSearch } from "react-icons/hi";
import SearchContent from "./SearchContent";
import LangCardcompo from "../../components/langcard/Langcardcompo";


const Search = () => {
  const lang = ["Hindi","Tamil","English","Telugu","Kannada","Marathi"]
  const [query, setQuery] = useState("");
  const [savedata, setSavedata] = useState([]);
  const change = (e) => {
    const lowercase = e.target.value.toLowerCase();
    setQuery(lowercase);
  };
  useEffect(() => {
    const data = Music.filter((el) => {
      if (query === " ") {
        return el;
      } else {
        return el.name.toLowerCase().includes(query);
      }
    });
    setSavedata(data);
  }, [query]);
  
  return (
    <div className="search-class">
      <span className="forspan">
        <IconContext.Provider  value={{ size: "40px", className: "search-icon" ,color: "white"}}>
          <HiOutlineSearch />
        </IconContext.Provider>
        <input
          type="text"
          name="Search"
          placeholder="Search"
          onChange={change}
          value={query}
          autoComplete="off"
        />
      </span>
      {console.log(savedata)}
      <div className="lang">
        <h1 className="language-title">Choose Your Language</h1>
        <LangCardcompo lang={lang}/>
      </div>
      {/* <SearchContent searchtext={query}/> */}
    </div>
  );
};

export default Search;
