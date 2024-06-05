import { isMobile } from "react-device-detect";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { useEffect, useState } from "react";

export default function DashboardLayout() {
  const [sidebarToggle, setSidebarToggle] = useState(isMobile ? false : true);

  const location = useLocation();

  useEffect(() => {
    if (isMobile) {
      setSidebarToggle(false);
    }
  }, [location]);
  return (
    <div className="flex h-[97vh] ">
      <div
        className={`w-[80%] min-w-[80%] md:w-[18%] md:min-w-[18%]  ${
          sidebarToggle ? "block" : "hidden"
        }`}
      >
        <h1 className="text-purple-600">{isMobile}</h1>
        <Sidebar />
      </div>
      <div className="flex flex-col flex-grow">
        <Header
          setSidebarToggle={setSidebarToggle}
          sidebarToggle={sidebarToggle}
        />
        <div className="flex-grow p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
