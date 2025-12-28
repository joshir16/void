import ExpenseCategory from "./ExpenseCategory";
import styles from "./Sidebar.module.css";
import TotalExpense from "./TotalExpense";

function Sidebar({ monthlyExpense }) {
  const totalAmount = monthlyExpense.reduce(
    (acc, exp) => acc + Number(exp.amount),
    0
  );

  return (
    <>
      <div className={styles.sidebar}>
        <h2 className={styles.month}>December 2025</h2>
        <TotalExpense totalAmount={totalAmount} />
        <ExpenseCategory
          totalAmount={totalAmount}
          monthlyExpense={monthlyExpense}
        />
      </div>
    </>
  );
}

export default Sidebar;
