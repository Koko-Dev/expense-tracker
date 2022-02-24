import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
	// Important: Store State => The second variable is a function which
	//  will store user entry in our state; this is done in event handler
	//  where the user input becomes the argument for setEntered___
	/*const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');*/

	// alternate 2 and 3
	const [userInput, setUserInput] = useState({
		enteredTitle: '',
		enteredAmount: '',
		enteredDate: ''
	})

	const titleChangeHandler = (event) => {
		// setEnteredTitle(event.target.value);
		// alternate 2
		setUserInput({
			enteredTitle: event.target.value,
			enteredAmount: '',
			enteredDate: ''
		})

		// alternate 3
		/*setUserInput({
			...userInput,
			enteredTitle: event.target.value
		})*/
	};

	const amountChangeHandler = (event) => {
		// setEnteredAmount(event.target.value);

		// alternate 2
		setUserInput({
			enteredAmount: event.target.value,
			enteredTitle: '',
			enteredDate: ''
		})

		// alternate 3
		/*setUserInput({
			...userInput,
			enteredAmount: event.target.value,
		})*/
	};

	const dateChangeHandler = (event) => {
		// setEnteredDate(event.target.value);
		// alternate 2
		setUserInput({
			enteredDate: event.target.value,
			enteredAmount: '',
			enteredTitle: ''
		})

		// alternate 3
		/*setUserInput({
			...userInput,
			enteredDate: event.target.value
		})*/
	};

	return (
		<form>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						type='text'
						onChange={titleChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
					  onChange={amountChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
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
