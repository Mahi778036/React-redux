/** @format */

import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import "./IncomeExpenses.css";

export const IncomeExpenses = () => {
  const { transctions } = useContext(GlobalContext);
  let amounts = transctions.map((transction) => transction.amount);
  let totalIncome = amounts
    .filter((income) => income > 0)
    .reduce(function (x, y) {
      return x + y;
    }, 0);
  let totalExpense = amounts
    .filter((expense) => expense < 0)
    .reduce(function (x, y) {
      return x + y;
    }, 0);

  return (
    <div className='income-expense-container'>
      <div className='income'>
        <h4>Income</h4>
        <p>+${totalIncome}</p>
      </div>
      <div className='expense'>
        <h4>Expense</h4>
        <p>-${totalExpense}</p>
      </div>
    </div>
  );
};
