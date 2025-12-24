import ExpenseCategory from "./ExpenseCategory";
import styles from "./Expenses.module.css";
import TotalExpense from "./TotalExpense";
import TransactionItem from "./TransactionItem";

function Expenses() {
  return (
    <>
      <section className={styles.monthlyExpense}>
        <div className={styles.sidebar}>
          <h2 className={styles.month}>December 2025</h2>
          <TotalExpense />
          <ExpenseCategory />
        </div>

        <section className={styles.monthlyTransactions}>
          <h2>Recent Transaction History</h2>
          <div className={styles.transactions}>
            <TransactionItem
              transactionEmoji={"💸"}
              transactionName={"Food"}
              transactionDate={""}
              transactionAmount={"534"}
            />
            <TransactionItem
              transactionEmoji={"💸"}
              transactionName={"Food"}
              transactionDate={""}
              transactionAmount={"534"}
            />
          </div>
        </section>
      </section>
    </>
  );
}

export default Expenses;
