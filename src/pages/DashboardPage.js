// pages/Dashboard.js
import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import ExpenseSummary from '../components/ExpenseSummary';
import ExpenseFilter from '../components/ExpenseFilter';

const Dashboard = () => {
  return (
    <div>
      <ExpenseSummary />
      <ExpenseFilter />
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
};

export default Dashboard;
