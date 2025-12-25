import { Outlet } from "react-router-dom";
import ExpenseCategory from "./ExpenseCategory";
import styles from "./Expenses.module.css";
import Sidebar from "./Sidebar";
import TotalExpense from "./TotalExpense";
import TransactionItem from "./TransactionItem";
import Transactions from "./Transactions";
import { useContext, useState } from "react";
import { ExpenseContext } from "../hooks/ExpenseContext";

function Expenses() {
  const { expenses } = useContext(ExpenseContext);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Filter LOCALLY for the view
  const monthlyExpenses = expenses.filter(
    (expense) =>
      new Date(expense.date).getMonth() === new Date(selectedDate).getMonth()
  );

  return (
    <section className={styles.monthlyExpense}>
      <Sidebar monthlyExpense={monthlyExpenses} />
      <Outlet context={{ monthlyExpenses: monthlyExpenses }} />
    </section>
  );
}

export default Expenses;
