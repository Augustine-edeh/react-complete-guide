// Just added this to indicate that: 'This is the Instuctor's solution to the Assignment'
import React from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import IdleNewExpense from "../NewExpense/IdleNewExpense";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  // const IdleDisplay = <button>Add Expense</button>;
  // const
  // if (display === true) {
  // }

  let idleDisplay = true;

  const change = () => {
    return "At NewExpense!...woooo!";
    // if (idleDisplay === true) {
    //   idleDisplay = false;
    // } else {
    //   idleDisplay = true;
    // }
  };

  if (idleDisplay === false) {
    return <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />;
  }

  return (
    <div className="new-expense">
      {/* <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> */}
      {/* {IdleDisplay } */}
      <IdleNewExpense onClick={change} />
      {/* return IdleNewExpense here! */}
    </div>
  );
};

export default NewExpense;
