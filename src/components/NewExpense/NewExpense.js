import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


// Goal: return a form for our inputs.
//  Form will be in ExpenseForm.js Component
const NewExpense = () => {
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		};

		// output: {id: '0.07278843426987991'}
		console.log(expenseData);
	}

	return (
		// todo: Add capability to add user input.
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	)
}

export default NewExpense;