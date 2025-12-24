import styles from "./TotalExpense.module.css";

function TotalExpense() {
  return (
    <>
      <div className={styles.total_amount}>
        <h3>Total Spent</h3>
        <h2>&#8377;35,000</h2>
      </div>
    </>
  );
}

export default TotalExpense;
