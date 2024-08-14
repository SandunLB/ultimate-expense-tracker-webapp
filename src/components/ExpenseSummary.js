import React from 'react';
import { useSelector } from 'react-redux';

const ExpenseSummary = () => {
  const expenses = useSelector((state) => state.expenses.expenses);

  // Calculate the total expenses
  const totalAmount = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Total Expenses</h2>
      <p className="text-2xl font-semibold text-gray-600">
        ${totalAmount.toFixed(2)}
      </p>
    </div>
  );
};

export default ExpenseSummary;
