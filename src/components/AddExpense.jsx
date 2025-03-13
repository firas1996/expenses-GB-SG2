import { useState } from "react";
import "./AddExpense.css";

const AddExpense = () => {
  const thisYear = new Date().getFullYear();
  const minDate = `${thisYear - 2}-01-01`;
  const [data, setData] = useState({
    title: "",
    price: "",
    date: "",
  });
  const inputChangeHandler = ({ target }) => {
    const { name, value } = target;
    setData({ ...data, [name]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(data);
    setData({
      title: "",
      price: "",
      date: "",
    });
  };
  return (
    <div className="add-expense">
      <form onSubmit={submitHandler}>
        <div className="add-expense__controls">
          <div className="add-expense__control">
            <label>Title</label>
            <input
              required
              placeholder="Title"
              onChange={inputChangeHandler}
              value={data.title}
              name="title"
            />
          </div>
          <div className="add-expense__control">
            <label>Price</label>
            <input
              required
              placeholder="Price"
              type="number"
              min="0"
              step="0.01"
              onChange={inputChangeHandler}
              value={data.price}
              name="price"
            />
          </div>
          <div className="add-expense__control">
            <label>Date</label>
            <input
              required
              type="date"
              min={minDate}
              max={new Date().toISOString().split("T")[0]}
              onChange={inputChangeHandler}
              value={data.date}
              name="date"
            />
          </div>
        </div>
        <div className="add-expense__actions">
          <button>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddExpense;
