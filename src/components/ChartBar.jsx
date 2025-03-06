import "./ChartBar.css";

const ChartBar = ({ month, value, max, total }) => {
  const x = (value / max) * 100 + "%";
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: x }}></div>
      </div>
      <div className="chart-bar__label">{month}</div>
    </div>
  );
};

export default ChartBar;
