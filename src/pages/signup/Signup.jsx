import React, { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';
import classes from './Signup.module.css';

function Signup(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [displayName, setDisplayName] = useState('');
	const { signup, isPending, error } = useSignup();

	const handleSubmit = (e) => {
		e.preventDefault();
		signup(email, password, displayName);
	};
	return (
		<form onSubmit={handleSubmit} className={classes['signup-form']}>
			<h2>Sign Up</h2>
			<label>
				<span>Email:</span>
				<input
					type="email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
			</label>

			<label>
				<span>Password:</span>
				<input
					type="password"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
				/>
			</label>

			<label>
				<span>DisplayName:</span>
				<input
					type="text"
					onChange={(e) => setDisplayName(e.target.value)}
					value={displayName}
				/>
			</label>

			{!isPending && <button className="btn">Sign Up</button>}

			{isPending && (
				<button className="btn" disabled>
					Loading...
				</button>
			)}
			{error && <p>{error}</p>}
		</form>
	);
}
export default Signup;
