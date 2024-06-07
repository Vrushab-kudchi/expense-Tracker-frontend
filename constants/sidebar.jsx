import { RiDashboardHorizontalLine } from "react-icons/ri";
import { GiExpense } from "react-icons/gi";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import { CiLogout } from "react-icons/ci";
import { MdCalendarMonth } from "react-icons/md";

export const sidebarData = [
  {
    name: "Dashboard",
    path: "/",
    icon: <RiDashboardHorizontalLine />,
  },
  {
    name: "Expense",
    path: "/expense",
    icon: <GiExpense />,
  },
  {
    name: "Income",
    path: "/income",
    icon: <FaMoneyCheckDollar />,
  },
  {
    name: "Transactions",
    path: "/transaction",
    icon: <GrTransaction />,
  },
  {
    name: "Monthly Transactions",
    path: "/month-transaction",
    icon: <MdCalendarMonth />,
  },
  {
    name: "logout",
    icon: <CiLogout />,
  },
];
