import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
	// Note: Initialize each useState() with a string => useState('')
	//  on each listener event.target.value will always
	//  come back as a string, even if it is a number
	// Important: Store State => The second variable is a function which
	//  will store user entry in our state; this is done in event handler
	//  where the user input becomes the argument for setEntered___
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	// alternate 2 and 3
	/*const [userInput, setUserInput] = useState({
		enteredTitle: '',
		enteredAmount: '',
		enteredDate: ''
	})*/

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
		// alternate 2
		/*setUserInput({
			enteredTitle: event.target.value,
			enteredAmount: '',
			enteredDate: ''
		})*/
		// alternate 3 -- NOT RECOMMENDED
		/*setUserInput({
			...userInput,
			enteredTitle: event.target.value
		})*/
		// NOTE:  alternative to 3
		// alternate 4
		// Important:  Whenever you update state and you depend on the previous state,
		//  as in alternative 3 or when using a counter, you should use an alternative
		//  form like so. This will receive the previous snapshot in argument prevState
		// note: This is safer than alternative 3 because it doesn't rely on react's
		//  scheduled updates since REACT doesn't perform the updates instantly.
		//  Using alternative 3 it is possible to receive an old snapshot instead
		//  of a current one.
		// note: prevState:{enteredAmount:string, enteredDate:string, enteredTitle:string}
		/*setUserInput((prevState) => {
			return {...prevState, enteredTitle: event.target.value};
		})*/
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
		// alternate 2
		/*setUserInput({
			enteredAmount: event.target.value,
			enteredTitle: '',
			enteredDate: ''
		})*/
		// alternate 3 -- NOT RECOMMENDED
		/*setUserInput({
			...userInput,
			enteredAmount: event.target.value,
		})*/
	};

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
		// alternate 2
		/*setUserInput({
			enteredDate: event.target.value,
			enteredAmount: '',
			enteredTitle: ''
		})*/
		// alternate 3 -- NOT RECOMMENDED
		/*setUserInput({
			...userInput,
			enteredDate: event.target.value
		})*/
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate)
		}
		// todo: set back to empty string (i.e. Reset all inputs)
		// note: This overrides user input and clears the form
		// important: When Add Expense button is clicked, all inputs
		//  are then reset to empty string
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	}

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						value={enteredTitle}
						type='text'
						onChange={titleChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						value={enteredAmount}
						type='number'
						min='0.01'
						step='0.01'
					  onChange={amountChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						value={enteredDate}
						type='date'
						min='2020-01-01'
						max='2023-12-31'
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
