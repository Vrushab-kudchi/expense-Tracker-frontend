import moment from "moment";
import { transaction } from "../../../constants/demoData";

export default function Transactions() {
  return (
    <div className="overflow-y-auto">
      <ul className="overflow-y-auto h-[80vh] ">
        {transaction.data.reverse().map((item, index) => {
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
                  -{item.money}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
