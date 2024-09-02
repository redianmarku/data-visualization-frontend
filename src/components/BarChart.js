import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../styles/BarChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

/**
 * BarChart Component
 *
 * This component renders a bar chart using Chart.js with the provided labels and values.
 *
 * Props:
 * - labels: Array of strings representing the labels for the x-axis.
 * - values: Array of numbers representing the values for each label.
 */

const BarChart = ({ labels, values }) => {
  // Handle empty data case
  if (!labels.length || !values.length) return null;

  // This is the chart data structure
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Values",
        data: values, // Array of values for the dataset
        backgroundColor: "#007bff", // Here can be changed color of the bars
      },
    ],
  };

  return (
    <div className="barchart-container">
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;
