import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import PageNav from "./components/PageNav";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <PageNav />
      <main>
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="/addexpense" element={<p>Add</p>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
