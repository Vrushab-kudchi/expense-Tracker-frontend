import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import Dashboard from "./Components/Pages/Dashboard";
import DashboardLayout from "./Components/Layout/DashboardLayout";
import Expense from "./Components/Pages/ExpenseAndIncome";
import Transactions from "./Components/Pages/Transactions";
import MonthTransaction from "./Components/Pages/MonthTransaction";

import { Toaster } from "sonner";
import ProtectedRoute from "./Components/Routes/ProtectedRoute";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  return (
    <>
      <Toaster position="top-right" />
      <Router>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route element={<DashboardLayout />}>
              <Route
                path="/"
                element={isLoggedIn || user ? <Dashboard /> : <Login />}
              />
              <Route path="/expense" element={<Expense type={"expense"} />} />
              <Route path="/income" element={<Expense type={"income"} />} />
              <Route path="/transaction" element={<Transactions />} />
              <Route path="/month-transaction" element={<MonthTransaction />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
