import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import { useSelector } from "react-redux";

// LOGIN & REGISTER

import UserRoute from "./routes/User.route";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getHistory } from "./axios/user.axios";

// Pages
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login/Login";
import Library from "./pages/library/Library";
import Home from "./pages/Home/Home";
import Search from "./pages/search/Search";
import Favorites from "./pages/favorites/Favorites";
import Trending from "./pages/trending/Trending";


function App() {
  const { user } = useSelector((state) => ({ ...state }));
  const [cursong, setCursong] = useState("");
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);

  const fetchRecentlyPlayed = async () => {
    getHistory(user.user_id, user.token).then((res) => {
      setRecentlyPlayed(res.data);
    });
  };

  return (
    <>
      <Router>
        <ToastContainer />
        <div className="main-body">
          <Routes>
            {user ? (
              <>
                <Route path="/" element={<UserRoute cursong={cursong} />}>
                  <Route
                    path="/"
                    element={
                      <Home
                        setCursong={setCursong}
                        fetchRecentlyPlayed={fetchRecentlyPlayed}
                        recentlyPlayed={recentlyPlayed}
                      />
                    }
                  />
                </Route>
                <Route
                  path="/"
                  element={
                    <UserRoute
                      cursong={cursong}
                      recentlyPlayed={recentlyPlayed}
                    />
                  }
                >
                  <Route
                    path="/search"
                    element={
                      <Search
                        setCursong={setCursong}
                        setRecentlyPlayed={setRecentlyPlayed}
                      />
                    }
                  />
                </Route>
                <Route path="/" element={<UserRoute />}>
                  <Route path="/Trending" element={<Trending />} />
                </Route>
                <Route
                  path="/"
                  element={
                    <UserRoute
                      cursong={cursong}
                      recentlyPlayed={recentlyPlayed}
                    />
                  }
                >
                  <Route
                    path="/favorites"
                    element={
                      <Favorites
                        fetchRecentlyPlayed={fetchRecentlyPlayed}
                        setCursong={setCursong}
                        setRecentlyPlayed={setRecentlyPlayed}
                      />
                    }
                  />
                </Route>
                <Route path="/" element={<UserRoute />}>
                  <Route path="/library" element={<Library />} />
                </Route>
                
              </>
            ) : (
              <>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Login />} />
                <Route path="*" element={<div>404</div>} />
              </>
            )}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
