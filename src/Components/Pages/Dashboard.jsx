import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { transactionInfo } from "../../feature/transactions/transactionSlice";
import moment from "moment";
import { GiExpense } from "react-icons/gi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";
import { GrAdd } from "react-icons/gr";
import { getUserProfile } from "../../feature/auth/authSlice";
import Loading from "../Loading";

const BarChart = lazy(() => import("../Charts/BarChart"));

const Dashboard = () => {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.transaction.info);
  const user = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.transaction.isLoading);
  useEffect(() => {
    if (info === null) {
      dispatch(transactionInfo());
    }
    if (user === null) {
      dispatch(getUserProfile());
    }
  }, [dispatch, info]);

  return (
    <>
      {isLoading && <Loading />}
      <div className="">
        <h1 className="p-5 mb-5 text-4xl">Dashboard</h1>
        <div className="md:flex md:gap-x-4 md:flex-wrap">
          <div className="flex m-5 justify-center items-center gap-x-4 bg-red-300 p-8 rounded-3xl text-black flex-1 min-w-[250px]">
            <div>
              <FcMoneyTransfer className="bg-white text-6xl rounded-full p-4" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl">{info?.totalExpense}</h1>
              <h1 className="text-gray-700">Total Expense</h1>
            </div>
          </div>
          <div className="flex m-5 justify-center items-center gap-x-4 bg-green-300 p-8 rounded-3xl text-black flex-1 min-w-[250px]">
            <div>
              <GrAdd className="bg-white text-6xl rounded-full p-4" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl">{info?.totalIncome}</h1>
              <h1 className="text-gray-700">Total Income</h1>
            </div>
          </div>

          <div className="flex m-5 justify-center items-center gap-x-4 bg-red-300 p-8 rounded-3xl text-black flex-1 min-w-[250px]">
            <div>
              <GiExpense className="bg-white text-6xl rounded-full p-4" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl">{info?.maxExpense?.money || 0}</h1>
              <h1 className="text-gray-700">Maximum amount Spent</h1>
              <p className="text-lg">
                {moment(info?.maxExpense?.createdAt).fromNow()}
              </p>
            </div>
          </div>
          <div className="flex m-5 justify-center items-center gap-x-4 bg-green-300 p-8 rounded-3xl text-black flex-1 min-w-[250px]">
            <div>
              <MdOutlineAttachMoney className="bg-white text-6xl rounded-full p-4" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl">{info?.maxIncome?.money || 0}</h1>
              <h1 className="text-gray-700">Maximum amount Earned</h1>
              <p className="text-lg">
                {moment(info?.maxIncome?.createdAt).fromNow()}
              </p>
            </div>
          </div>

          <div
            className={`flex m-5 justify-center items-center gap-x-4 ${
              info?.profit > 0 ? "bg-green-300" : "bg-red-300"
            }  p-8 rounded-3xl text-black flex-1 min-w-[250px]`}
          >
            <div>
              <FaMoneyBillAlt className="bg-white text-6xl rounded-full p-4" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl">{info?.profit}</h1>
              <h1 className="text-gray-700">Amount Remaining</h1>
            </div>
          </div>
        </div>
        <div className="md:hidden font-bold">
          <h1 className="text-lg text-red-400">
            Chart Cannot Load in Mobile. Please Login Through a Computer.
          </h1>
        </div>
        <div className="hidden md:flex justify-center">
          <Suspense fallback={<Loading />}>
            <BarChart />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
