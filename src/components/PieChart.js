import React, { useState, useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

function PieChart() {
  const [data, setData] = useState({
    labels: [
      "Public Sale",
      "Team & Advisors",
      "Platform Development & Marketing",
      "Ecosystem Development",
      "Partnerships",
    ],
    datasets: [
      {
        label: "Token Distribution",
        data: [500000000, 200000000, 150000000, 100000000, 50000000],
        backgroundColor: [
          "#003f5c",
          "#58508d",
          "#bc5090",
          "#ff6361",
          "#ffa600",
        ],
      },
    ],
  });

  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    let chartInstance = new Chart(ctx, {
      type: "pie",
      data: data,
      options: {},
    });
    return () => {
      chartInstance.destroy();
    };
  }, [data]);

  return (
    <div>
      <canvas id="token-distribution" ref={chartRef}></canvas>
    </div>
  );
}

export default PieChart;
