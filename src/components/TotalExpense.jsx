import styles from "./TotalExpense.module.css";

function TotalExpense({ totalAmount }) {
  return (
    <>
      <div className={styles.total_amount}>
        <h3>Total Spent</h3>
        <h2>&#8377;{totalAmount}</h2>
      </div>
    </>
  );
}

export default TotalExpense;
