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
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Expense List</h2>
      <ul className="space-y-4">
        {filteredExpenses.length > 0 ? (
          filteredExpenses.map((expense) => (
            <li key={expense.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-300">
              <span className="text-gray-700">
                {expense.amount} - {expense.category} - {expense.date}
              </span>
              <button
                onClick={() => handleDelete(expense.id)}
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300"
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <li className="text-gray-500">No expenses found</li>
        )}
      </ul>
    </div>
  );
};

export default ExpenseList;
