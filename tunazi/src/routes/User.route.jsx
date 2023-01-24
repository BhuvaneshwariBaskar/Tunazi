import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { useLocation, Outlet } from "react-router-dom";

import { validateUser } from "../axios/auth.axios";
import Sidebar from "../components/sidebar/Sidebar";

const UserRoute = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(user);
  useEffect(() => {
    if (user && user.token) {
      validateUser(user.token)
        .then((res) => {
          if (!res.data.isLoggedIn) {
            dispatch({ type: "SET_USER", payload: null });
            // toast.success("Please login to continue");
            navigate("/login");
          }
        })
        .catch((err) => {
          console.log(err);
          dispatch({ type: "SET_USER", payload: null });
          // toast.error("Please login to continue");
        });
    } else {
      if (location.pathname !== "/login") {
        navigate("/login");
      }
    }
  }, [dispatch, user, location.pathname, navigate]);

  return user && user.token.length ? (
    <>
      <div className="fstpage">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </>
  ) : (
    <Navigate to="login" />
  );
};

export default UserRoute;
