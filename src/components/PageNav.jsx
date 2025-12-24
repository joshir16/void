import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Expenses</NavLink>
        </li>
        <li>
          <NavLink to="/addexpense">Add Expense</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
