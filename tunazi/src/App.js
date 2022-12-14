import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import { useSelector } from "react-redux";

// LOGIN & REGISTER
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login/Login";
import UserRoute from "./routes/User.route";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// Pages
import Library from "./pages/library/Library";
import Home from "./pages/Home/Home";
import Search from "./pages/search/search";
import Favorites from "./pages/favorites/Favorites";
import Trending from "./pages/trending/trending";


function App() {
  const { user } = useSelector((state) => ({ ...state }));
  console.log(user);
  return (
  //   <>
  //   <ToastContainer
  //   position="top-right"
  //   autoClose={3000}
  //   hideProgressBar
  //   newestOnTop
  //   closeOnClick
  //   rtl={false}
  //   pauseOnFocusLoss
  //   draggable
  //   pauseOnHover
  // />
  
    <Router>
      <div className="main-body">
        <Routes>
          {user ? (
            <>
              <Route path="/" element={<UserRoute />}>
                <Route path="/" element={<Home />} />
              </Route>
              <Route path="/" element={<UserRoute />}>
                <Route path="/search" element={<Search/>} />
              </Route>
              <Route path="/" element={<UserRoute />}>
                <Route path="/Trending" element={<Trending />} />
              </Route>
              <Route path="/" element={<UserRoute />}>
                <Route path="/favorites" element={<Favorites />} />
              </Route>
              <Route path="/" element={<UserRoute />}>
                <Route path="/library" element={<Library />} />
              </Route>
            </>
          ) : (
            <>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </>
          )}
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </div>
    </Router>
    // </>
  );
}

export default App;
