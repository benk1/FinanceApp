import React, { useState } from 'react';
import classes from './Login.module.css';
import { useLogin } from '../../hooks/useLogin';

function Login(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { login, error, isPending } = useLogin();

	const handleSubmit = (e) => {
		e.preventDefault();
		login(email, password);
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

			{!isPending && <button className="btn">Login</button>}
			{isPending && <button className="btn">Loading...</button>}
			{error && <p>{error}</p>}
		</form>
	);
}

export default Login;
