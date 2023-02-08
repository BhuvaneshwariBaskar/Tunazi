import React, { useState } from 'react';
import './sidebar.css';
import SidebarButton from './SidebarButton';
import { MdFavorite } from 'react-icons/md';
import { FaSignOutAlt } from 'react-icons/fa';
import { IoLibrary } from 'react-icons/io5';
import { AiFillHome } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { addProfile } from '../../axios/user.axios';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import apiClient from "../../spotify";

export default function Sidebar() {
	const { user } = useSelector((state) => ({ ...state }));
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const Logout = (e) => {
		e.preventDefault();
		dispatch({
			type: 'LOGOUT_USER'
		});
		navigate('/login');
	};
	const handleSubmit = (e) => {
		// e.preventDefault();

		const formData = new FormData();
		formData.append('userId', user.user_id);
		formData.append('image', e);

		addProfile(formData, user && user.token).then(({ data }) => {
			dispatch({
				type: 'CREATE_USER',
				payload: data
			});
		});
	};
	return (
		<div className='sidebar-container'>
			<label>
				<input
					type='file'
					onChange={(e) => handleSubmit(e.target.files[0])}
					accept='image/*'
					hidden
				/>
				<img src={user.profilepic} className='profile-img' alt='profile' />
			</label>

			<div>
				<SidebarButton title='Home' to='/' icon={<AiFillHome />} />
				<SidebarButton title='Search' to='/Search' icon={<FiSearch />} />
				{/* <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} /> */}
				<SidebarButton
					title='Favorites'
					to='/favorites'
					icon={<MdFavorite />}
				/>
				<SidebarButton title='Library' to='/library' icon={<IoLibrary />} />
			</div>
			<SidebarButton
				title='Sign Out'
				onClick={Logout}
				icon={<FaSignOutAlt />}
			/>
		</div>
	);
}
