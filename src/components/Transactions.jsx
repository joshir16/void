import { useOutletContext } from "react-router-dom";
import TransactionItem from "./TransactionItem";
import styles from "./Transactions.module.css";

function Transactions() {
  const { monthlyExpenses } = useOutletContext();
  return (
    <>
      <section className={styles.monthlyTransactions}>
        <h2>Recent Transaction History</h2>
        <div className={styles.transactions}>
          {monthlyExpenses.map((t) => (
            <TransactionItem
              key={t.id}
              transactionName={t.name}
              transactionDate={t.date}
              transactionAmount={t.amount}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Transactions;
