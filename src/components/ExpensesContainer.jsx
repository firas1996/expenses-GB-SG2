import ExpenseDetails from "./ExpenseDetails";
import "./ExpensesContainer.css";
import ExpensesFilter from "./ExpensesFilter";

const ExpensesContainer = ({ expensesData }) => {
  return (
    <div className="expenses">
      <ExpensesFilter />
      {expensesData.map((expense) => {
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
