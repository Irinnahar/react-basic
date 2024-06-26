import Expense from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpense/NewExpenses";
import { useState } from "react";
import Chart from "./components/Chart/Chart";
import "./App.css";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const onChangeExpenseHandler = (expense) => {
    return setExpenses((prevExpense) => [expense, ...prevExpense]);
  };

  return (
    <div className="App">
      <NewExpenses onAddExpense={onChangeExpenseHandler} />
      <Expense expenses={expenses} />
    </div>
  );
};

export default App;
