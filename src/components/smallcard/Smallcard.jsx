import React, { useState } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import { IoIosHeart } from 'react-icons/io';
import { IoMdHeartEmpty } from 'react-icons/io';
import { updateFavPost } from '../../axios/user.axios';
import { useDispatch } from 'react-redux';
import './smallcard.css';

const Smallcard = ({ music, user }) => {
	const dispatch = useDispatch();

	const [isCardHovered, setIsCardHovered] = useState(false);
	const addToFav = async (music_id) => {
		const favorites = JSON.parse(user.favorites)
			? [music_id, ...JSON.parse(user.favorites)]
			: [music_id];
		await updateFavPost(user.user_id, favorites, user.token).then((res) => {
			dispatch({
				type: 'CREATE_USER',
				payload: { ...user, favorites: JSON.stringify(favorites) }
			});
		});
	};
	const removeFav = async (music_id) => {
		const favorites = JSON.parse(user.favorites)
			? JSON.parse(user.favorites).filter((fav) => fav !== music_id)
			: [];
		await updateFavPost(user.user_id, favorites, user.token).then((res) => {
			dispatch({
				type: 'CREATE_USER',
				payload: { ...user, favorites: JSON.stringify(favorites) }
			});
		});
	};
	return (
		<section
			className='card'
			onMouseEnter={() => {
				setIsCardHovered(true);
			}}
			onMouseLeave={() => {
				setIsCardHovered(false);
			}}
		>
			<div className='cardsec'>
				<img src={music.thumbnail} alt='' />
			</div>
			<div className='content'>
				<div className='innercontent'>
					<p className={`title ${isCardHovered ? 'hide' : null}`}>
						{music.title}
					</p>

					<AiFillPlayCircle
						className={`playbutton ${!isCardHovered && 'hide'}`}
					/>
				</div>
			</div>
		</section>
	);
};
export default Smallcard;