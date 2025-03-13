import { useState } from "react";
import AddExpense from "./components/AddExpense";
import ExpensesContainer from "./components/ExpensesContainer";
// import Button from "react-bootstrap/Button";

function App() {
  const expensesData = [
    {
      id: 1,
      title: "TV",
      price: 500,
      date: new Date("2025-02-13"),
    },
    {
      id: 2,
      title: "PC",
      price: 700,
      date: new Date("2024-08-30"),
    },
    {
      id: 3,
      title: "Car",
      price: 200,
      date: new Date("2023-10-20"),
    },
    {
      id: 4,
      title: "Education",
      price: 800,
      date: new Date("2025-04-07"),
    },
    {
      id: 5,
      title: "Voyage",
      price: 200,
      date: new Date("2024-02-03"),
    },
  ];
  const [newExpensesData, setNewExpensesData] = useState(expensesData);
  const getData = (data) => {
    setNewExpensesData([data, ...newExpensesData]);
    // localStorage.setItem("test", "ok");
    // console.log(localStorage.getItem("test"));
  };
  return (
    <div>
      {/* <Button variant="outline-primary">Primary</Button> */}
      <AddExpense getData={getData} />
      <ExpensesContainer expensesData={newExpensesData} />
    </div>
  );
}

export default App;
