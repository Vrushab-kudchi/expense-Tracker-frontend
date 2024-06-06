import { BiMenuAltLeft } from "react-icons/bi";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserProfile } from "../feature/auth/authSlice";

export default function Header({ setSidebarToggle, sidebarToggle }) {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      dispatch(getUserProfile());
    }
  }, [dispatch, user]);
  return (
    <header className="w-[98%] my-4 mx-1 md:m-4  px-4 py-4 rounded-2xl bg-[var(--color-primary)] flex justify-between items-center">
      <BiMenuAltLeft
        className="text-3xl mx-3 hover:bg-slate-500 rounded-xl md:w-[5%]"
        onClick={() => setSidebarToggle(!sidebarToggle)}
      />
      <div className="flex gap-x-4 px-3">
        <img
          src="./avatar.jpg"
          alt="avatar"
          className="hidden md:block w-14 h-14 object-cover object-center rounded-full"
        />
        <div className="flex flex-col justify-start">
          <h1 className="text-lg md:text-xl">{user.name}</h1>
          <p className="">{user.email}</p>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  setSidebarToggle: PropTypes.func.isRequired,
  sidebarToggle: PropTypes.bool.isRequired,
};
