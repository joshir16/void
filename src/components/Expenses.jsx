import ExpenseCategory from "./ExpenseCategory";
import styles from "./Expenses.module.css";
import TotalExpense from "./TotalExpense";

function Expenses() {
  return (
    <>
      <div className={styles.monthly_expense}>
        <TotalExpense />
        <ExpenseCategory />
      </div>
    </>
  );
}

export default Expenses;
