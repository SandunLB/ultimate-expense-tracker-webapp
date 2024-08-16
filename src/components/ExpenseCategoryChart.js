import React, { useEffect, useRef } from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

const ExpenseCategoryChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Register the required components for the chart
    Chart.register(ArcElement, Tooltip, Legend);

    const ctx = chartRef.current.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'doughnut', // or 'pie'
      data: {
        labels: ['Food', 'Transport', 'Entertainment', 'Others'],
        datasets: [
          {
            label: 'Expense Categories',
            data: [300, 150, 100, 50],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            hoverOffset: 4,
          },
        ],
      },
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <canvas ref={chartRef} width="400" height="400"></canvas>
    </div>
  );
};

export default ExpenseCategoryChart;
