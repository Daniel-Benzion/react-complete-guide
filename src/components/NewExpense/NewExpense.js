import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [formIsActive, setFormIsActive] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setFormIsActive(false);
    };
    
    const activateForm = () => {
        setFormIsActive(true);
    }

    const deactivateForm = () => {
        setFormIsActive(false);
    }

    return (
        <div className="new-expense">
            <div>
                {formIsActive ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={deactivateForm} /> : <button onClick={activateForm} >Add New Expense</button> }
            </div>
        </div>
    );
}

export default NewExpense;