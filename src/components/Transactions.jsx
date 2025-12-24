import TransactionItem from "./TransactionItem";
import styles from "./Transactions.module.css";

function Transactions() {
  return (
    <>
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
            transactionAmount={"350"}
          />
        </div>
      </section>
    </>
  );
}

export default Transactions;
