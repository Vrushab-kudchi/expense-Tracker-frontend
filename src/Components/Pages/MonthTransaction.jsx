import moment from "moment";
import { monthData } from "../../../constants/demoData";

export default function MonthTransaction() {
  return (
    <div className="overflow-y-auto h-[85vh]">
      <h1>Monthly Transactions</h1>

      {Object.keys(monthData.data).map((month, index) => (
        <div
          key={index}
          className="bg-[var(--color-primary)] m-5 p-5 rounded-3xl"
        >
          <h2 className="text-5xl px-7 underline">{month}</h2>
          <ul>
            {monthData.data[month].map((transaction, idx) => {
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
      ))}
    </div>
  );
}
