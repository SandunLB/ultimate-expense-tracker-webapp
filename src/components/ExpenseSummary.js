// components/ExpenseSummary.js
import React from 'react';
import { useSelector } from 'react-redux';

const ExpenseSummary = () => {
  const expenses = useSelector((state) => state.expenses.expenses);

  // Calculate the total expenses
  const totalAmount = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);

  return (
    <div className="summary-container">
      <h2>Total Expenses: ${totalAmount.toFixed(2)}</h2>
      {/* You can add more summary sections here, such as total by category */}
    </div>
  );
};

export default ExpenseSummary;
