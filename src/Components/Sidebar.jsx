import { Link, useLocation } from "react-router-dom";
import { sidebarData } from "../../constants/sidebar";
import { useDispatch } from "react-redux";
import { logout } from "../feature/auth/authSlice";

export default function Sidebar() {
  const path = useLocation().pathname;
  const dispatch = useDispatch();

  return (
    <>
      <div className="h-full m-3">
        <div className="h-full bg-[var(--color-primary)] rounded-3xl px-5 py-5 ">
          <div>
            <h1 className="font-bold text-2xl text-center">Expense Tracker</h1>
          </div>
          <div>
            <ul className="mt-10">
              {sidebarData.map((item, index) => {
                if (item.name === "logout")
                  return (
                    <li
                      key={index}
                      onClick={() => {
                        localStorage.clear();
                        dispatch(logout());
                      }}
                      className={`py-5 my-2 hover:bg-slate-500 rounded-3xl px-3 ${
                        path === item.path ? "bg-slate-500" : ""
                      }`}
                    >
                      <div className="flex text-xl justify-start items-center gap-x-4">
                        <div>
                          <span>{item.icon}</span>
                        </div>
                        <div>{item.name}</div>
                      </div>
                    </li>
                  );
                return (
                  <Link to={item.path} key={index}>
                    <li
                      className={`py-5 my-2 hover:bg-slate-500 rounded-3xl px-3 ${
                        path === item.path ? "bg-slate-500" : ""
                      }`}
                    >
                      <div className="flex text-xl justify-start items-center gap-x-4">
                        <div>
                          <span>{item.icon}</span>
                        </div>
                        <div>{item.name}</div>
                      </div>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
