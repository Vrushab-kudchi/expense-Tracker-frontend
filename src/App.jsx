import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster } from "sonner";
import ProtectedRoute from "./Components/Routes/ProtectedRoute";
import { useSelector } from "react-redux";
import Loading from "./Components/Loading";

// Lazy load components
const Login = lazy(() => import("./Components/Pages/Login"));
const Register = lazy(() => import("./Components/Pages/Register"));
const Dashboard = lazy(() => import("./Components/Pages/Dashboard"));
const DashboardLayout = lazy(() =>
  import("./Components/Layout/DashboardLayout")
);
const Expense = lazy(() => import("./Components/Pages/ExpenseAndIncome"));
const Transactions = lazy(() => import("./Components/Pages/Transactions"));
const MonthTransaction = lazy(() =>
  import("./Components/Pages/MonthTransaction")
);
const NotFoundPage = lazy(() => import("./Components/Pages/NotFoundPage"));

function App() {
  const token = localStorage.getItem("token");

  return (
    <>
      <Toaster position="top-right" />
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route element={<DashboardLayout />}>
                <Route path="/" element={token ? <Dashboard /> : <Login />} />
                <Route path="/expense" element={<Expense type={"expense"} />} />
                <Route path="/income" element={<Expense type={"income"} />} />
                <Route path="/transaction" element={<Transactions />} />
                <Route
                  path="/month-transaction"
                  element={<MonthTransaction />}
                />
              </Route>
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
