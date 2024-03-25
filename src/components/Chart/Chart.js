import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  const maxChartValue = Math.max(...props.dataPoint.map((data) => data.value));

  return (
    <div className="chart">
      {props.dataPoint.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxChartValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
