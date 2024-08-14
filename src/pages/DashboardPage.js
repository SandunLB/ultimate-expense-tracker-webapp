import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import ExpenseSummary from '../components/ExpenseSummary';
import ExpenseFilter from '../components/ExpenseFilter';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Expense Tracker Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Summary Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <ExpenseSummary />
          </div>

          {/* Filter Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <ExpenseFilter />
          </div>

          {/* Form Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <ExpenseForm />
          </div>

          {/* Expense List Section */}
          <div className="col-span-1 lg:col-span-3 bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <ExpenseList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
