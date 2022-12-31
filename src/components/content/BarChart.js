import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData }) {
  return new Bar("ctx", {
    data: {
      chartData
    },
    options : {
      scales: {
          yAxes: [{
              ticks: {
                  fixedStepSize: 1
              }
          }],
      },
  }
});
}

export default BarChart;