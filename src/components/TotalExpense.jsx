import styles from "./TotalExpense.module.css";

function TotalExpense() {
  return (
    <>
      <div className={styles.total_amount}>
        <p>2025 Total Spent</p>
        <h2>&#8377; 14,000</h2>
      </div>
    </>
  );
}

export default TotalExpense;
