import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../Filter/ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  // const [filteredYear, setFilteredYear] = useState("");

  const [filteredYear, setfilteredYear] = useState({
    pickedYear: "",
  });

  const filterYearChangeHandler = (selectedYear) => {
    // console.log(selectedYear);
    // setFilteredYear(selectedYear);
    setfilteredYear({
      ...filteredYear,
      pickedYear: selectedYear,
    });
    console.log(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onFilterYearChange={filterYearChangeHandler} />
      <ExpenseItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      />
      <ExpenseItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      />
      <ExpenseItem
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      />
      <ExpenseItem
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}
      />
    </Card>
  );
};

export default Expenses;
