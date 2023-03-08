import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';
// import { toast } from "react-toastify";
import { useLocation, Outlet } from 'react-router-dom';

// import { validateUser } from "../axios/auth.axios";
import Sidebar from '../components/sidebar/Sidebar';
import Audioplayer from '../components/Audioplayer/Audioplayer';

const UserRoute = ({ cursong }) => {
	const { user } = useSelector((state) => ({ ...state }));
	const [isNavOpened, setIsNavOpened] = useState(false);

	// const dispatch = useDispatch();
	// const navigate = useNavigate();
	// const location = useLocation();

	return user && user.token && user.token.length ? (
		<>
			<div className='fstpage'>
				{window.innerWidth <= 640 && (
					<img
						src='https://img.icons8.com/ios-glyphs/30/ffffff/menu--v1.png'
						alt=''
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							marginLeft: 35,
							marginTop: 20,
							zIndex: 1000
						}}
						onClick={() => setIsNavOpened(!isNavOpened)}
					/>
				)}
				<Sidebar isNavOpened={isNavOpened} />
				<div
					className='outlet'
					style={{
						paddingLeft:
							window.innerWidth <= 640 ? (isNavOpened ? '100px' : '0') : '100px'
						// window.innerWidth <= 640 ? 0 : !isNavOpened ? '100px' : 0
					}}
				>
					<Outlet />
				</div>
				<Audioplayer
					className='audio-player'
					cursong={cursong}
					user={user}
					isNavOpened={isNavOpened}
				/>
			</div>
		</>
	) : (
		<Navigate to='/login' />
	);
};

export default UserRoute;
