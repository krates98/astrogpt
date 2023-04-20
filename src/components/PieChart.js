import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

function PieChart() {
  const chartRef = useRef();

  useEffect(() => {
    const data = {
      labels: [
        "Public Round",
        "DEX Liquidity",
        "Team",
        "Advisors",
        "Marketing",
        "Development/DAO",
        "Staking Rewards",
        "CEX Listing",
      ],
      datasets: [
        {
          label: "Token Distribution",
          data: [
            40000000, 24000000, 6000000, 3000000, 5000000, 6000000, 8000000,
            8000000,
          ],
          backgroundColor: [
            "#003f5c",
            "#58508d",
            "#bc5090",
            "#ff6361",
            "#ffa600",
            "#ff7c43",
            "#2fa300",
            "#dd5030",
          ],
        },
      ],
    };

    const ctx = chartRef.current.getContext("2d");
    let chartInstance = new Chart(ctx, {
      type: "pie",
      data: data,
      options: {},
    });

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return (
    <div>
      <canvas id="token-distribution" ref={chartRef}></canvas>
    </div>
  );
}

export default PieChart;
