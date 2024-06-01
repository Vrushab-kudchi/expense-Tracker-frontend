import { Outlet } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { useState } from "react";
import { isMobile } from "react-device-detect";

export default function DashboardLayout() {
  const [sidebarToggle, setSidebarToggle] = useState(isMobile ? false : true);
  return (
    <div className="flex h-[97vh] ">
      <div
        className={`w-[80%] min-w-[80%] md:w-[18%] md:min-w-[18%]  ${
          sidebarToggle ? "block" : "hidden"
        }`}
      >
        <Sidebar />
      </div>
      <div className="flex flex-col flex-grow">
        <Header
          setSidebarToggle={setSidebarToggle}
          sidebarToggle={sidebarToggle}
        />
        <div className="flex-grow p-6 px-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
