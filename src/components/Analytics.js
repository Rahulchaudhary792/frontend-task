import React, { useRef, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import './Analytics.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend);

const Analytics = () => {
  const chartRef = useRef();

  useEffect(() => {
    return () => {
      // Destroy the chart instance on unmount to prevent issues with reusing the canvas
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [120, 150, 180, 220, 300, 350],
        fill: false,
        borderColor: '#3e95cd',
        tension: 0.1
      }
    ]
  };

  const barChartData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [
      {
        label: 'Quantity Sold',
        data: [50, 75, 100, 150],
        backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9']
      }
    ]
  };

  return (
    <div className="analytics-container">
      <h2 className="analytics-header">Analytics Overview</h2>
      <div className="analytics-grid">
        <div className="chart-wrapper">
          <Line ref={chartRef} data={lineChartData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
        <div className="chart-wrapper">
          <Bar ref={chartRef} data={barChartData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
