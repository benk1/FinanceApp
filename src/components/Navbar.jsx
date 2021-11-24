import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';
import classes from './Navbar.module.css';

function Navbar(props) {
	const { logout } = useLogout();
	const { user } = useAuthContext();
	return (
		<nav className={classes.navbar}>
			<ul>
				<li className={classes.title}>
					<Link to="/">myFinances</Link>
				</li>

				{!user && (
					<>
						<li>
							<Link to="/login">Login</Link>
						</li>

						<li>
							<Link to="/signup">Signup</Link>
						</li>
					</>
				)}

				{user && (
					<>
						<li>
							<h4>Welcome, {user.displayName}</h4>
						</li>
						<li>
							<button className="btn" onClick={logout}>
								Logout
							</button>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
}

export default Navbar;
