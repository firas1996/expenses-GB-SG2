import ExpenseDetails from "./components/ExpenseDetails";
import ExpensesContainer from "./components/ExpensesContainer";

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
      date: new Date("2024-08-13"),
    },
    {
      id: 3,
      title: "Car",
      price: 200,
      date: new Date("2023-10-13"),
    },
    {
      id: 4,
      title: "Education",
      price: 800,
      date: new Date("2025-04-13"),
    },
    {
      id: 5,
      title: "Education",
      price: 800,
      date: new Date("2027-04-13"),
    },
  ];
  return (
    <div>
      <ExpensesContainer expensesData={expensesData} />
    </div>
  );
}

export default App;
