import "./Chartbar.css";

const ChartBar = (props) => {
  let barHeightPercentage = "0%";

  if (props.maxValue > 0) {
    barHeightPercentage =
      Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barHeightPercentage }}
        ></div>
      </div>
      <label className="chart-bar__label">{props.label}</label>
    </div>
  );
};

export default ChartBar;
