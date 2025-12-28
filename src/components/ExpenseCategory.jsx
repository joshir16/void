import styles from "./ExpenseCategory.module.css";
import { ExpenseContext } from "../hooks/ExpenseContext";

const categories = [
  { id: "food", label: "Food", icon: "🍔" },
  { id: "transport", label: "Transport", icon: "🚕" },
  { id: "bills", label: "Bills", icon: "🧾" },
  { id: "shopping", label: "Shopping", icon: "🛍️" },
  { id: "other", label: "Other", icon: "💸" },
];

function ExpenseCategory({ totalAmount, monthlyExpense }) {
  return (
    <>
      <div className={styles.category}>
        <h3>Category Breakdown</h3>

        {categories.map((cat) => (
          <ExpenseCategoryItem
            emoji={cat.icon}
            categoryName={cat.label}
            totalAmount={totalAmount}
            monthlyExpense={monthlyExpense}
            key={cat.id}
          />
        ))}
      </div>
    </>
  );
}

export default ExpenseCategory;

function ExpenseCategoryItem({
  emoji = "💸",
  categoryName = "other",
  totalAmount,
  monthlyExpense,
}) {
  const amountSpentonCategory = monthlyExpense.filter(
    (expense) => categoryName.toLowerCase() === expense.category.toLowerCase()
  );

  const amountSpent = amountSpentonCategory.reduce(
    (acc, cur) => acc + cur.amount,
    0
  );

  return (
    <>
      <div className={styles.categoryItem}>
        <span className={styles.categoryIcon}>{emoji}</span>
        <h4 className={styles.categoryName}>
          <span>{categoryName}:</span>
          &#8377;{amountSpent}
        </h4>

        <div className={styles.categoryProgressBar}>
          <div style={{ width: `${(amountSpent / totalAmount) * 100}%` }}></div>
        </div>
      </div>
    </>
  );
}
