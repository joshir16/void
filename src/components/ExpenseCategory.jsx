import styles from "./ExpenseCategory.module.css";

function ExpenseCategory({ totalAmount }) {
  return (
    <>
      <div className={styles.category}>
        <h3>Category Breakdown</h3>
        <ExpenseCategoryItem
          emoji={"🍔"}
          categoryName={"Food"}
          amountSpent={100}
          percentage={(100 / totalAmount) * 100}
        />
        <ExpenseCategoryItem
          emoji={"📜"}
          categoryName={"Bills"}
          amountSpent={120}
          percentage={(120 / totalAmount) * 100}
        />
        <ExpenseCategoryItem
          emoji={"💸"}
          categoryName={"Other"}
          amountSpent={50}
          percentage={(50 / totalAmount) * 100}
        />
      </div>
    </>
  );
}

export default ExpenseCategory;

function ExpenseCategoryItem({
  emoji = "💸",
  categoryName = "other",
  amountSpent,
  percentage,
}) {
  return (
    <>
      <div className={styles.categoryItem}>
        <span className={styles.categoryIcon}>{emoji}</span>
        <h4 className={styles.categoryName}>
          <span>{categoryName}:</span>
          &#8377;{amountSpent}
        </h4>
        <div className={styles.categoryProgressBar}>
          <div style={{ width: `${percentage}%` }}></div>
        </div>
      </div>
    </>
  );
}
