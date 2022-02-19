import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
	const [title, setTitle] = useState(props.title);

	// Note: This will be called whenever the ExpenseItem Component
	//  is being executed
	// note: Upon npm start, this console log will be called 4 times.
	//  This is the case becasue ExpenseItem is being used four times
	//  in Expenses.js.
	// note: When the button is clicked, it will be called only once
	//  because a new useState is being called for reevaluation
	console.log('ExpenseItem evaluated by React');

	const clickHandler = () => {
		setTitle('Updated');
		console.log(title);
	}
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date}/>
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">
					${props.amount}
				</div>
			</div>
			<button onClick={clickHandler}>Change Title</button>
		</Card>
	)
}

export default ExpenseItem;