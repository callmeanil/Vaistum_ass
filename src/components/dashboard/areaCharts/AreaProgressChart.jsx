import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import "./AreaProgress.scss";

const AreaProgressChart = () => {
  const chartRef = useRef(null);
  const data = [16]; // Sample data for the line chart

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Day 1'], // Labels for x-axis
          datasets: [{
            label: 'Number',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Fill color under the line
            borderColor: 'rgba(75, 192, 192, 1)', // Line color
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }, [data]);

  return (
    <div className="progress-bar">
      <div className="progress-bar-info">
        <h4 className="progress-bar-title">Talent Request</h4>
      </div>
      <div className="progress-bar-list">
        <canvas ref={chartRef} />
        <div className="abc">16</div>
        <div className="abc">6 Men</div>
        <div className="abc">6 Women</div>
      </div>
    </div>
  );
};

export default AreaProgressChart;
