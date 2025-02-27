import { useState } from "react";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpensesContainer.css";
import ExpensesFilter from "./ExpensesFilter";

const ExpensesContainer = ({ expensesData }) => {
  const years = [
    "All",
    ...new Set(expensesData.map((el) => el.date.getFullYear()).sort()),
  ];
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const filtredExpenses = expensesData.filter((expense) => {
    return selectedYear == "All"
      ? true
      : expense.date.getFullYear() == selectedYear;
  });
  console.log(filtredExpenses);
  return (
    <div className="expenses">
      <ExpensesFilter
        years={years}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
      {filtredExpenses.map((expense) => {
        return (
          <ExpenseDetails
            key={expense.id}
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        );
      })}
    </div>
  );
};

export default ExpensesContainer;
