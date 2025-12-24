import ExpenseCategory from "./ExpenseCategory";
import styles from "./Sidebar.module.css";
import TotalExpense from "./TotalExpense";

function Sidebar() {
  return (
    <>
      <div className={styles.sidebar}>
        <h2 className={styles.month}>December 2025</h2>
        <TotalExpense />
        <ExpenseCategory />
      </div>
    </>
  );
}

export default Sidebar;
