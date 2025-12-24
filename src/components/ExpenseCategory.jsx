import styles from "./ExpenseCategory.module.css";

function ExpenseCategory() {
  return (
    <>
      <div className={styles.category}>
        <h3>Category Breakdown</h3>
        <ExpenseCategoryItem />
      </div>
    </>
  );
}

export default ExpenseCategory;

function ExpenseCategoryItem() {
  return (
    <>
      <div className={styles.categoryItem}>
        <span className={styles.categoryIcon}>🍔</span>
        <h4 className={styles.categoryName}>
          <span>Food:</span>
          10,000
        </h4>
        <div className={styles.categoryProgressBar}>
          <div style={{ width: "75%" }}></div>
        </div>
      </div>
    </>
  );
}
