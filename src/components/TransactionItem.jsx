import styles from "./TransactionItem.module.css";

const getFormattedDate = (dateString) => {
  if (!dateString) return "Select Date";
  const dateObj = new Date(dateString);
  return dateObj.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

function TransactionItem({
  transactionEmoji = "💸",
  transactionName = "",
  transactionDate = "",
  transactionAmount = "",
}) {
  const date = getFormattedDate(transactionDate);
  console.log(date);

  return (
    <>
      <div className={styles.transaction}>
        <span className={styles.transactionLogo}>{transactionEmoji}</span>
        <h4 className={styles.transactionName}>
          {transactionName}
          <span>{date}</span>
        </h4>
        <p className={styles.transactionAmount}>-&#8377;{transactionAmount}</p>
      </div>
    </>
  );
}

export default TransactionItem;
