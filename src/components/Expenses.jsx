import { Outlet } from "react-router-dom";
import ExpenseCategory from "./ExpenseCategory";
import styles from "./Expenses.module.css";
import Sidebar from "./Sidebar";
import TotalExpense from "./TotalExpense";
import TransactionItem from "./TransactionItem";
import Transactions from "./Transactions";

function Expenses() {
  return (
    <section className={styles.monthlyExpense}>
      <Sidebar />
      <Outlet />
    </section>
  );
}

export default Expenses;
