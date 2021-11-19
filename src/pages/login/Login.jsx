import React, { useState } from 'react';
import classes from './Login.module.css';

function Login(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email, password);
	};
	return (
		<form onSubmit={handleSubmit} className={classes['login-form']}>
			<h2>Login</h2>
			<label>
				<span>Email:</span>
				<input type="email" onChange={(e) => setEmail(e.target.value)} />
			</label>

			<label>
				<span>Password:</span>
				<input type="password" onChange={(e) => setPassword(e.target.value)} />
			</label>

			<button className="btn">Login</button>
		</form>
	);
}

export default Login;
