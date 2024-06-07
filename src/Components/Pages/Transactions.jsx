import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTransaction } from "../../feature/transactions/transactionSlice";
import Loading from "../Loading";

export default function Transactions() {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transaction.transactions);
  const isLoading = useSelector((state) => state.transaction.isLoading);
  useEffect(() => {
    if (transactions === null) {
      dispatch(getAllTransaction());
    }
  }, [transactions]);
  return (
    <>
      {isLoading && <Loading />}
      <h1 className="p-5 mb-5 text-4xl">Transactions</h1>
      <div className="overflow-y-auto">
        <ul className="overflow-y-auto h-[80vh] ">
          {transactions?.data
            ?.slice()
            .reverse()
            .map((item, index) => {
              const createdAt = moment(item.createdAt);
              return (
                <li
                  key={index}
                  className="p-5 rounded-2xl bg-[var(--color-primary)] m-5 flex justify-between items-center"
                >
                  <div className="w-[95%]">
                    <h1 className="text-lg md:text-2xl py-2">{item.name}</h1>
                    <p className="text-xs md:text-lg text-gray-500">
                      {item.description}
                    </p>
                    <p className="text-sm md:text-lg font-bold py-3">
                      {createdAt.fromNow()}
                    </p>
                  </div>
                  <div>
                    <p
                      className={
                        item.category === "expense"
                          ? "text-red-500 text-xl"
                          : "text-green-500 text-xl"
                      }
                    >
                      {" "}
                      {item.category === "expense" ? "-" : "+"}
                      {item.money}
                    </p>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}
