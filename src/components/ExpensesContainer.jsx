import ExpenseDetails from "./ExpenseDetails";
import "./ExpensesContainer.css";

const ExpensesContainer = ({ expensesData }) => {
  return (
    <div className="expenses">
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
