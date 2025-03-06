import ChartBar from "./ChartBar";
import "./ExpensesChart.css";

const ExpensesChart = ({ expensesData }) => {
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

  for (const expense of expensesData) {
    chartData[expense.date.getMonth()].value += expense.price;
  }
  //   let max = chartData[0].value;
  //   for (let i = 1; i < chartData.length; i++) {
  //     if (chartData[i].value > max) {
  //       max = chartData[i].value;
  //     }
  //   }
  const values = chartData.map((el) => el.value);
  const max = Math.max(...values);
  const total = values.reduce((sum, nbr) => sum + nbr);
  console.log(total);

  return (
    <div className="chart">
      {chartData.map((item) => {
        return (
          <ChartBar
            key={item.month}
            month={item.month}
            value={item.value}
            max={max}
            total={total}
          />
        );
      })}
    </div>
  );
};

export default ExpensesChart;
