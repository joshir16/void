import { createContext, useReducer } from "react";

const initialState = [
  {
    id: "uuid-1",
    name: "Starbucks Coffee",
    amount: 350,
    category: "Food", // This is your 'tag'
    date: "2025-12-24", // YYYY-MM-DD format is best for sorting
  },
  {
    id: "uuid-2",
    name: "Uber to work",
    amount: 250,
    category: "Transport",
    date: "2025-12-23",
  },
  {
    id: "uuid-3",
    name: "Rent",
    amount: 15000,
    category: "Bills",
    date: "2025-11-01", // Note: This is a different month
  },
];

const ExpenseContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.payload];

    case "DELETE_EXPENSE":
      return state.filer((t) => t.id !== action.payload.id);

    default:
      return state;
  }
}

function ExpenseProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addExpense(expense) {
    dispatch({ type: "ADD_EXPENSE", payload: expense });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE_EXPENSE", payload: id });
  }

  return (
    <ExpenseContext.Provider
      value={{ expenses: state, addExpense, deleteExpense }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

export { ExpenseProvider, ExpenseContext };
