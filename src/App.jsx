import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import PageNav from "./components/PageNav";
import Homepage from "./pages/Homepage";
import Form from "./components/Form";
import Transactions from "./components/Transactions";
import { ExpenseProvider } from "./hooks/ExpenseContext";

function App() {
  return (
    <ExpenseProvider>
      <BrowserRouter>
        <PageNav />
        <main>
          <Routes>
            <Route element={<Homepage />}>
              <Route path="/" element={<Transactions />} />
              <Route path="/addexpense" element={<Form />} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </ExpenseProvider>
  );
}

export default App;
