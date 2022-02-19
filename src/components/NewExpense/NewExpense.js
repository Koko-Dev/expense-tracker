import React from 'react';
import './NewExpense.css'
import ExpenseItem from "../Expenses/ExpenseItem";

// Goal: return a form for our inputs. Form will be in other component
const NewExpense = () => {
	return (
		// todo: Add capability to add user input.
		<div className="new-expense">
			<ExpenseForm />
		</div>
	)
}

export default NewExpense;