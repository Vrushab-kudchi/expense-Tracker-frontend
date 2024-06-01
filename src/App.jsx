import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import Dashboard from "./Components/Pages/Dashboard";
import DashboardLayout from "./Components/Layout/DashboardLayout";
import Expense from "./Components/Pages/ExpenseAndIncome";
import Transactions from "./Components/Pages/Transactions";
import MonthTransaction from "./Components/Pages/MonthTransaction";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/expense" element={<Expense type={"expense"} />} />
            <Route path="/income" element={<Expense type={"income"} />} />
            <Route path="/transaction" element={<Transactions />} />
            <Route path="/month-transaction" element={<MonthTransaction />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
