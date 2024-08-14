import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilters } from '../store/expenseSlice';

const ExpenseFilter = () => {
  const [filters, setFilterState] = useState({
    category: '',
    startDate: '',
    endDate: '',
    search: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFilterState({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const applyFilters = () => {
    dispatch(setFilters(filters));
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Filter Expenses</h2>
      <div className="space-y-4">
        <input
          type="text"
          name="category"
          value={filters.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="date"
            name="startDate"
            value={filters.startDate}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
          />
          <input
            type="date"
            name="endDate"
            value={filters.endDate}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <input
          type="text"
          name="search"
          value={filters.search}
          onChange={handleChange}
          placeholder="Search by Description"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
      <button
        onClick={applyFilters}
        className="w-full py-3 mt-6 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300 ease-in-out"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default ExpenseFilter;
