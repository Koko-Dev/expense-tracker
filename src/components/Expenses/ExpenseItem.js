import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
	// useState is a REACT Hook
	// All REACT hooks start with "use"
	// All REACT hooks must be called within a REACT component function
	// With few exceptions, REACT hooks should not be called
	//      within nested functions

	// Note: useState() returns an Array where the first element
	//    is the variable itself and the second element is a function
	//    used to update that first variable.
	// var title = the initial value of props.title
	// var setTitle is the function when called can  update var title
	// note:  As a convention we use 'set' to name function element;
	//  in this case we are using useState to update
	//  props.title, so we will name it setTitle
	// Important: We use const for useState returned Array elements because each
	//  time ExpenseItem component is called it is only an instance.
	//  Every time it is called a new separate state is created,
	//  managed independently by REACT -- ON A PER COMPONENT INSTANCE BASIS
	//  even if we create a component more than once. If this were not the case,
	//  then all instances of props.title would change on setTitle update call.
	const [title, setTitle] = useState(props.title);
	// Note: This will be called whenever the ExpenseItem Component
	//  is being executed
	// note: Upon npm start, this console log will be called 4 times.
	//  This is the case because ExpenseItem is being used four times
	//  in Expenses.js.
	// note: When the button is clicked, it will be called only once
	//  because a new useState is being called for reevaluation
	console.log('ExpenseItem evaluated by React');

	// todo: Create a handler which updates title when button is clicked
	const clickHandler = () => {
		// Important: When setTitle() is called here to , the entire ExpenseItem component
		//  is executed again and will comprehensively update any changes
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