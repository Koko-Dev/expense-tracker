import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


// Goal: return a form for our inputs.
//  Form will be in ExpenseForm.js Component
const NewExpense = () => {
	return (
		// todo: Add capability to add user input.
		<div className="new-expense">
			<ExpenseForm />
		</div>
	)
}

export default NewExpense;