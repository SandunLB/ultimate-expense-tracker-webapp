// store/expenseSlice.js
import { createSlice } from '@reduxjs/toolkit';

const expenseSlice = createSlice({
  name: 'expenses',
  initialState: {
    expenses: [],
    filters: {
      category: '',
      startDate: '',
      endDate: '',
      search: '',
    },
  },
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
    },
    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter((expense) => expense.id !== action.payload);
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const { addExpense, deleteExpense, setFilters } = expenseSlice.actions;
export default expenseSlice.reducer;
