import styles from "./TransactionItem.module.css";

function TransactionItem({
  transactionEmoji,
  transactionName,
  transactionDate,
  transactionAmount,
}) {
  return (
    <>
      <div className={styles.transaction}>
        <span className={styles.transactionLogo}>{transactionEmoji}</span>
        <h4 className={styles.transactionName}>
          {transactionName}
          <span>{`${new Date().getDate()}, Dec`}</span>
        </h4>
        <p className={styles.transactionAmount}>-&#8377;{transactionAmount}</p>
      </div>
    </>
  );
}

export default TransactionItem;
