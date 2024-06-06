import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function ProtectedRoute() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);

  return <Outlet />;
}
