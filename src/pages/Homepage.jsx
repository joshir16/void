import { Outlet } from "react-router-dom";
import Expenses from "../components/Expenses";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <>
      <Expenses />
    </>
  );
}

export default Homepage;
