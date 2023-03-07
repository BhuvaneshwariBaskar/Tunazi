import React, { useState, useEffect } from "react";
import "./search.css";
import { IconContext } from "react-icons";
import { HiOutlineSearch } from "react-icons/hi";
import SearchContent from "./SearchContent";
import LangCardcompo from "../../components/langcard/Langcardcompo";
import { fetchMusic } from "../../axios/music.axios";
import { useSelector } from "react-redux";
import { getHistory } from "../../axios/user.axios";

const Search = ({ setCursong, setRecentlyPlayed }) => {
  const { user } = useSelector((state) => ({ ...state }));
  const lang = [
    {
      ln: "Happy",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo8Z-X9WgBTD3Z5X8wQbdqATo48wVCyfeysg&usqp=CAU",
    },
    {
      ln: "Love",
      img: "https://img.freepik.com/premium-vector/emoji-love-couple-character-vector-design-emojis-emoticon-love-facial-expression_572288-453.jpg?w=2000",
    },
    {
      ln: "Sad",
      img: "data:image/jpeg;base64,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",
    },
    {
      ln: "Folk",
      img: "https://i.pinimg.com/474x/c1/dc/42/c1dc42a15bb6611410acedc8a0716a1a--happy-smiley-face-smiley-faces.jpg",
    },
    {
      ln: "Motivation",
      img: "https://thumbs.dreamstime.com/b/funny-yellow-emoji-banner-enjoy-every-moment-quote-cry-laughing-yellow-emoticon-banner-illustration-positive-motivation-quote-159875119.jpg",
    },
  ];
  const [query, setQuery] = useState("");
  const [savedata, setSavedata] = useState([]);
  const change = (e) => {
    const lowercase = e.target.value.toLowerCase();
    setQuery(lowercase);
  };

  const fetchRecentlyPlayed = async () => {
    getHistory(user.user_id, user.token).then((res) => {
      setRecentlyPlayed(res.data);
    });
  };
  useEffect(() => {
    fetchRecentlyPlayed();
    fetchMusic(user.token).then((res) => {
      const searchdata = res.data.filter((event) => {
        if (query === " ") {
          return " ";
        } else {
          return event.title.toLowerCase().startsWith(query);
        }
      });
      setSavedata(searchdata);
    });
  }, [query]);

  return (
    <div className="search-class">
      <span className="forspan">
        <IconContext.Provider
          value={{ size: "40px", className: "search-icon", color: "white" }}
        >
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

      {query.length == 0 ? (
        <div className="lang">
          <h1 className="language-title">Hey! Search your Favorites Songs</h1>
          <LangCardcompo lang={lang} />
        </div>
      ) : (
        <SearchContent
          savedata={savedata}
          fetchRecentlyPlayed={fetchRecentlyPlayed}
          setRecentlyPlayed={setRecentlyPlayed}
          setCursong={setCursong}
          user={user}
          query={query}
        />
      )}
    </div>
  );
};

export default Search;
