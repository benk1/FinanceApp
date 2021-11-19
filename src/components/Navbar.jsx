import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

function Navbar(props) {
	return (
		<nav className={classes.navbar}>
			<ul>
				<li className={classes.title}>myFinances</li>
				<li>
					<Link to="/login">Login</Link>
				</li>

				<li>
					<Link to="/signup">Signup</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
