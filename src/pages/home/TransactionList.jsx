import classes from './Home.module.css';

function TransactionList({ transactions }) {
	return (
		<ul className={classes.transactions}>
			{transactions.map((transaction) => (
				<li key={transaction.id}>
					<p className={classes.name}>{transaction.name}</p>
					<p className={classes.amount}>{transaction.amount}</p>
				</li>
			))}
		</ul>
	);
}

export default TransactionList;
