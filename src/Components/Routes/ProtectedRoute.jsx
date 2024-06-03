import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getUserProfile } from "../../feature/auth/authSlice";

export default function ProtectedRoute() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (!isLoggedIn && user) {
      dispatch(getUserProfile());
      navigate("/login");
    }
  }, [isLoggedIn, navigate, user]);

  return isLoggedIn ? <Outlet /> : null;
}
