import classes from './Home.module.css';
import { useFirestore } from '../../hooks/useFirestore';
import deleteIcon from '../../img/deleteIcon.svg';

function TransactionList({ transactions }) {
	const { deleteDocument, response } = useFirestore('transactions');
	console.log(response);
	return (
		<ul className={classes.transactions}>
			{transactions.map((transaction) => (
				<li key={transaction.id}>
					<p className={classes.name}>{transaction.name}</p>
					<p className={classes.amount}>{transaction.amount}</p>
					<button onClick={() => deleteDocument(transaction.id)}>x</button>
				</li>
			))}
		</ul>
	);
}

export default TransactionList;
