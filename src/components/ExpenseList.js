// components/ExpenseList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteExpense } from '../store/expenseSlice';

const ExpenseList = () => {
  const { expenses, filters } = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  const filteredExpenses = expenses.filter((expense) => {
    const matchesCategory = filters.category ? expense.category.includes(filters.category) : true;
    const matchesDate =
      filters.startDate && filters.endDate
        ? new Date(expense.date) >= new Date(filters.startDate) &&
          new Date(expense.date) <= new Date(filters.endDate)
        : true;
    const matchesSearch = filters.search ? expense.description.toLowerCase().includes(filters.search.toLowerCase()) : true;
    return matchesCategory && matchesDate && matchesSearch;
  });

  const handleDelete = (id) => {
    dispatch(deleteExpense(id));
  };

  return (
    <ul className="expense-list">
      {filteredExpenses.map((expense) => (
        <li key={expense.id}>
          <span>
            {expense.amount} - {expense.category} - {expense.date}
          </span>
          <button onClick={() => handleDelete(expense.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
