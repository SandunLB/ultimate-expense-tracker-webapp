import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../store/expenseSlice';

const ExpenseForm = () => {
  const [formData, setFormData] = useState({
    amount: '',
    category: '',
    date: '',
    description: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Date.now(),
      ...formData,
    };
    dispatch(addExpense(newExpense));
    setFormData({ amount: '', category: '', date: '', description: '' });
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add Expense</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Amount"
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform duration-300 transform hover:scale-105"
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform duration-300 transform hover:scale-105"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform duration-300 transform hover:scale-105"
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform duration-300 transform hover:scale-105"
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
