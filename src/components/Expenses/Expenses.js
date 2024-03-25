import ExpenseChart from "./ExpenseChart";
import Card from "../UI/Card";
import ExpenseFilter from "../Expenses/ExpenseFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";

import "./Expenses.css";

const Expense = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseChart items={filteredExpenses} />
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expense;
