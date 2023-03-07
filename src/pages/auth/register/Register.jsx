import React, { useState } from 'react';
import bg from '../../../assets/images/bglogin.jpg';
import { register } from '../../../axios/auth.axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './register.css';
import Button from '../../../components/common/Button/Button';
import { toast } from 'react-toastify';

const Register = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [mobileno, setMobileno] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		await register(username, email, password, mobileno).then((res) => {
			console.log(res);
			if (res.data && res.data.token) {
				setUsername('');
				setEmail('');
				setPassword('');
				setMobileno('');
				dispatch({
					type: 'CREATE_USER',
					payload: res.data
				});
				toast.success('Account Created Successfully');
				navigate('/');
			}
		});
	};
	return (
		<div className='bgcolor'>
			<div className='registersec'>
				<div className='left'>
					<div className='leftsec'>
						<h1>Sign Up</h1>
						<form
							id='form'
							className='formclass'
							onSubmit={(e) => handleSubmit(e)}
						>
							<div className='email'>
								<input
									type='text'
									name='username'
									id='username'
									placeholder='Username'
									onChange={(e) => {
										setUsername(e.target.value);
									}}
								/>
							</div>
							<div className='email'>
								<input
									type='email'
									name='email'
									id='email'
									placeholder='Email'
									onChange={(e) => {
										setEmail(e.target.value);
									}}
								/>
							</div>
							<div className='email'>
								<input
									type='password'
									name='password'
									id='password'
									placeholder='Password'
									onChange={(e) => {
										setPassword(e.target.value);
									}}
								/>
							</div>
							<div className='email'>
								<input
									type='text'
									name='mobileno'
									id='mobileno'
									placeholder='Mobile number'
									onChange={(e) => {
										setMobileno(e.target.value);
									}}
								/>
							</div>
							<p>
								Already have account? <a href='./login'>Signin</a>
							</p>
							<Button type='submit'>Submit</Button>
						</form>
					</div>
				</div>

				<img src={bg} alt='Login tuniza' />
			</div>
		</div>
	);
};

export default Register;
