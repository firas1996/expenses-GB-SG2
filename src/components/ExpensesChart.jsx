import ChartBar from "./ChartBar";
import "./ExpensesChart.css";

const ExpensesChart = () => {
  const chartData = [
    { month: "Jan", value: 0 },
    { month: "Feb", value: 0 },
    { month: "Mar", value: 0 },
    { month: "Apr", value: 0 },
    { month: "May", value: 0 },
    { month: "Jui", value: 0 },
    { month: "Jul", value: 0 },
    { month: "Aug", value: 0 },
    { month: "Sep", value: 0 },
    { month: "Oct", value: 0 },
    { month: "Nov", value: 0 },
    { month: "Dec", value: 0 },
  ];
  return (
    <div className="chart">
      {chartData.map((item) => {
        return (
          <ChartBar key={item.month} month={item.month} value={item.value} />
        );
      })}
    </div>
  );
};

export default ExpensesChart;
