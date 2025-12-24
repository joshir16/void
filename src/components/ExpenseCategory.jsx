import styles from "./ExpenseCategory.module.css";

function ExpenseCategory() {
  const amountSpent = 35000;

  return (
    <>
      <div className={styles.category}>
        <h3>Category Breakdown</h3>
        <ExpenseCategoryItem
          emoji={"🍔"}
          categoryName={"Food"}
          amountSpent={12000}
          percentage={(12000 / amountSpent) * 100}
        />
        <ExpenseCategoryItem
          emoji={"📜"}
          categoryName={"Bills"}
          amountSpent={17500}
          percentage={(17500 / amountSpent) * 100}
        />
        <ExpenseCategoryItem
          emoji={"💸"}
          categoryName={"Other"}
          amountSpent={5000}
          percentage={(5000 / amountSpent) * 100}
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
