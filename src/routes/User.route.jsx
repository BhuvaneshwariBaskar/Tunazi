import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { useLocation, Outlet } from "react-router-dom";

// import { validateUser } from "../axios/auth.axios";
import Sidebar from "../components/sidebar/Sidebar";
import Audioplayer from "../components/Audioplayer/Audioplayer";

const UserRoute = ({ cursong }) => {
  const { user } = useSelector((state) => ({ ...state }));

  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const location = useLocation();

  return user && user.token && user.token.length ? (
    <>
      <div className="fstpage">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="outlet">
          <Outlet />
          <Audioplayer className="audio-player" cursong={cursong} user={user} />
        </div>
      </div>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default UserRoute;
