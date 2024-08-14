// components/ExpenseFilter.js
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
    <div className="filter-container">
      <input
        type="text"
        name="category"
        value={filters.category}
        onChange={handleChange}
        placeholder="Filter by Category"
      />
      <input
        type="date"
        name="startDate"
        value={filters.startDate}
        onChange={handleChange}
      />
      <input
        type="date"
        name="endDate"
        value={filters.endDate}
        onChange={handleChange}
      />
      <input
        type="text"
        name="search"
        value={filters.search}
        onChange={handleChange}
        placeholder="Search by Description"
      />
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
};

export default ExpenseFilter;
