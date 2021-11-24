import React from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import classes from './Home.module.css';
import TransactionForm from './TransactionForm';
import { useCollection } from '../../hooks/useCollection';
import TransactionList from './TransactionList';

function Home(props) {
	const { user } = useAuthContext();
	const { documents, error } = useCollection(
		'transactions',
		['uid', '==', user.uid],
		['createdAt', 'desc']
	);
	return (
		<div className={classes.container}>
			<div className={classes.content}>
				{error && <p>{error}</p>}
				{documents && <TransactionList transactions={documents} />}
			</div>

			<div className={classes.sidebar}>
				<TransactionForm uid={user.uid} />
			</div>
		</div>
	);
}

export default Home;
