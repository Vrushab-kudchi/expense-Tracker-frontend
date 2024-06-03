import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { transactionInfo } from "../../feature/transactions/transactionSlice";
import moment from "moment";
import { GiExpense } from "react-icons/gi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";
import { GrAdd } from "react-icons/gr";

const Dashboard = () => {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.transaction.info);
  useEffect(() => {
    if (info === null) {
      dispatch(transactionInfo());
    }
  });
  return (
    <>
      <h1 className="text-2xl py-5">Dashboard</h1>
      <div className="md:flex md:gap-x-4">
        <div className="flex m-5 justify-center items-center gap-x-4 bg-red-300 p-8 rounded-3xl text-black">
          <div>
            <FcMoneyTransfer className="bg-white text-6xl rounded-full p-4" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl">{info?.totalExpense}</h1>
            <h1 className="text-gray-700">Total Expense</h1>
          </div>
        </div>
        <div className="flex m-5 justify-center items-center gap-x-4 bg-green-300 p-8 rounded-3xl text-black">
          <div>
            <GrAdd className="bg-white text-6xl rounded-full p-4" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl">{info?.totalIncome}</h1>
            <h1 className="text-gray-700">Total Income</h1>
          </div>
        </div>

        <div className="flex m-5 justify-center items-center gap-x-4 bg-red-300 p-8 rounded-3xl text-black">
          <div>
            <GiExpense className="bg-white text-6xl rounded-full p-4" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl">{info?.maxExpense.money}</h1>
            <h1 className="text-gray-700">Maximum amount Spent</h1>
            <p className="text-lg">
              {moment(info?.maxExpense.createdAt).fromNow()}
            </p>
          </div>
        </div>
        <div className="flex m-5 justify-center items-center gap-x-4 bg-green-300 p-8 rounded-3xl text-black">
          <div>
            <MdOutlineAttachMoney className="bg-white text-6xl rounded-full p-4" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl">{info?.maxIncome.money}</h1>
            <h1 className="text-gray-700">Maximum amount Earned</h1>
            <p className="text-lg">
              {moment(info?.maxIncome.createdAt).fromNow()}
            </p>
          </div>
        </div>

        <div
          className={`flex m-5 justify-center items-center gap-x-4 ${
            info?.profit > 0 ? "bg-green-300" : "bg-red-300"
          }  p-8 rounded-3xl text-black`}
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
    </>
  );
};

export default Dashboard;
