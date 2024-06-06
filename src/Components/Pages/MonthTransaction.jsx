import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { monthsTransaction } from "../../feature/transactions/transactionSlice";
import MyBarChart from "../Charts/BarChart";
import Loading from "../Loading";

export default function MonthTransaction() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.transaction.isLoading);
  const monthTransaction = useSelector(
    (state) => state.transaction.monthsTransaction
  );

  useEffect(() => {
    if (monthTransaction === null) {
      dispatch(monthsTransaction());
    }
  }, [monthTransaction, dispatch]);

  return (
    <>
      {isLoading && <Loading />}
      <div className="overflow-y-auto h-[85vh]">
        <h1 className="p-5 mb-5 text-4xl">Monthly Transactions</h1>
        <div className="hidden md:flex justify-center">
          <MyBarChart />
        </div>
        <div className="md:hidden font-bold">
          <h1 className="text-lg text-red-400 my-2">
            Chart Cannot Load in Mobile. Please Login Through a Computer.
          </h1>
        </div>
        {monthTransaction?.data ? (
          Object.keys(monthTransaction.data)?.map((month, index) => (
            <div
              key={index}
              className="bg-[var(--color-primary)] y-5 px-2 py-4 rounded-3xl"
            >
              <h2 className="text-3xl px-7 underline">{month}</h2>
              <ul>
                {monthTransaction.data[month]?.map((transaction, idx) => {
                  const createdAt = moment(transaction.createdAt);
                  return (
                    <li
                      key={idx}
                      className="bg-black p-5 m-5 rounded-3xl flex justify-between items-center"
                    >
                      <div className="w-[80%]">
                        <p className="text-2xl py-2">{transaction.name}</p>
                        <p className="text-lg text-gray-400">
                          {transaction.description}
                        </p>
                        <p className="font-bold py-5">{createdAt.fromNow()}</p>
                      </div>
                      <div>
                        <p
                          className={`${
                            transaction.category === "income"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {transaction.money}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))
        ) : (
          <p>Loading transactions...</p>
        )}
      </div>
    </>
  );
}
