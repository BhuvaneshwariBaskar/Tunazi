import React, { useState, useEffect } from "react";
import "./sidebar.css";
import SidebarButton from "./SidebarButton";
import { MdFavorite } from "react-icons/md";
// import { FaGripfire } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { useNavigate, Navigate } from "react-router-dom";
import {addProfile } from "../../axios/user.axios";
import { useSelector } from 'react-redux';

// import apiClient from "../../spotify";

export default function Sidebar() {
  const { user } = useSelector((state) => ({ ...state }));
  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
  );
  // const navigate = useNavigate();
  // const Logout = () => {
  //   localStorage.removeItem("token-info");
  //   navigate("/login");
  //   // setisloggedIn(false);
  // };
  const handleSubmit = (e) => {
		// e.preventDefault();

		const formData = new FormData();
		formData.append('image', e);
		formData.append('userId', user.user.user_id);

    
		addProfile(formData, user && user.token).then((res) => {
      console.log(res.data);
		});

	};
  return (
    <div className="sidebar-container">
      <label>
        <input type="file" onChange={(e) => handleSubmit(e.target.files[0])} hidden />
        <img src={image} className="profile-img" alt="profile" />
      </label>

      <div>
        <SidebarButton title="Home" to="/" icon={<AiFillHome />} />
        <SidebarButton title="Search" to="/Search" icon={<FiSearch />} />
        {/* <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} /> */}
        <SidebarButton
          title="Favorites"
          to="/favorites"
          icon={<MdFavorite />}
        />
        <SidebarButton title="Library" to="/library" icon={<IoLibrary />} />
      </div>
      <SidebarButton
        title="Sign Out"
        // onClick={(e) => Logout()}
        icon={<FaSignOutAlt />}
      />
    </div>
  );
}
