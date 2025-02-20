import { useState } from "react";
import "./ExpenseDetails.css";

const ExpenseDetails = ({ title, price, date }) => {
  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const [newTitle, setNewTitle] = useState(title);

  const changeTitle = () => {
    console.log(newTitle);
    setNewTitle("test !!!");
    console.log(newTitle);
  };
  return (
    <div className="expense-item">
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{newTitle}</h2>
        <button onClick={changeTitle}>Update Title !!!</button>
        <div className="expense-item__price">$ {price}</div>
      </div>
    </div>
  );
};

export default ExpenseDetails;
