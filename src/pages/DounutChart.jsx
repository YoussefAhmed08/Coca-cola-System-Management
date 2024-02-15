import { Doughnut } from "react-chartjs-2";
import { ArcElement } from "chart.js";
import { Chart } from "chart.js";
import PropTypes from "prop-types";

function DoughnutChart(props) {
  Chart.register(ArcElement);
  const data = {
    datasets: [
      {
        label: "Dataset 1",
        data: [76, 24], // Values representing percentage fills
        backgroundColor: [props.color, "#8D9192"], // Colors for segments
      },
    ],
  };
  const options = {
    cutout: "75%", // Adjust the size of the hole in the middle (optional)
    spacing: 0,
  };

  return <Doughnut data={data} options={options} />;
}

DoughnutChart.propTypes = {
  color: PropTypes.string.isRequired,
};

export default DoughnutChart;
