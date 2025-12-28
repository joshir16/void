import { useState } from "react";
import styles from "./Form.module.css";
import { useContext } from "react";
import { ExpenseContext } from "../hooks/ExpenseContext";
import { useNavigate } from "react-router-dom";

const categories = [
  { id: "food", label: "Food", icon: "🍔" },
  { id: "transport", label: "Transport", icon: "🚕" },
  { id: "bills", label: "Bills", icon: "🧾" },
  { id: "shopping", label: "Shopping", icon: "🛍️" },
  { id: "other", label: "Other", icon: "💸" },
];

function Form() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const { addExpense } = useContext(ExpenseContext);

  const navigate = useNavigate();

  function handleSelectCategory(category) {
    // console.log(e.target.name);
    setSelectedCategory(category);
    console.log(category);
  }
  // crypto.randomUUID(),

  function handleFormSubmit(e) {
    e.preventDefault();

    const expense = {
      amount: Number(amount),
      id: crypto.randomUUID(),
      name: name,
      category: selectedCategory,
      date: date,
    };

    addExpense(expense);
    navigate(-1);
  }

  return (
    <div className={styles.formContainer}>
      <h2>Add New Expense</h2>
      <form onSubmit={(e) => handleFormSubmit(e)} className={styles.form}>
        <div className={styles.formAmount}>
          <label htmlFor="amount">Amount</label>
          <div className={styles.inputbox}>
            <span>&#8377;</span>
            <input
              id="amount"
              type="number"
              name="amount"
              placeholder="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.formExpense}>
          <label htmlFor="expense">Expense</label>
          <div className={styles.inputbox}>
            <input
              id="expense"
              type="text"
              name="expense"
              placeholder="e.g., Grociers"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.formCategories}>
          <label>Category</label>
          <div className={styles.categories}>
            {categories.map((cat) => (
              <button
                type="button"
                className={`${styles.categoryBtn} ${
                  selectedCategory === cat.label ? styles.activeCategory : ""
                }`}
                name={cat.label}
                key={cat.label}
                onClick={() => handleSelectCategory(cat.label)}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <div className={styles.inputbox}>
            <input
              type="date"
              // defaultValue={new Date().toISOString().split("T")[0]}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className={styles.saveExpense}>
          Save Expense
        </button>
      </form>
    </div>
  );
}

export default Form;
