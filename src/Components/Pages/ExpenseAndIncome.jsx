import { transaction } from "../../../constants/demoData";
import moment from "moment";
import PropTypes from "prop-types";

export default function ExpenseAndIncome({ type }) {
  return (
    <div className="md:grid grid-cols-2 md:gap-x-14">
      <div className="md:col-span-1">
        <h1 className="p-5 mb-5 text-4xl">Add your {type}</h1>
        <form action="" className="flex flex-col gap-y-8 flex-grow">
          <input
            type="text"
            placeholder="Name"
            className="input bg-[var(--color-primary)] py-3"
          />
          <textarea
            type="text"
            placeholder="Description"
            className="text-area bg-[var(--color-primary)] overflow-y-auto"
          />
          <input
            type="text"
            placeholder="Money"
            className="input bg-[var(--color-primary)] py-3"
          />
          <button type="submit" className="button w-[40%] mt-6">
            Add {type}
          </button>
        </form>
      </div>
      <div className="md:col-span-1">
        <h1 className="p-4 text-4xl">{type}</h1>
        <ul className="overflow-y-auto h-[85vh] ">
          {transaction.data
            .filter((i) => i.category === type)
            .reverse()
            .map((item, index) => {
              const createdAt = moment(item.createdAt);
              return (
                <li
                  key={index}
                  className="p-5 rounded-2xl bg-[var(--color-primary)] m-5 flex justify-between items-center"
                >
                  <div className="w-[90%]">
                    <h1 className="text-xl py-2">{item.name}</h1>
                    <p className=" text-gray-500">{item.description}</p>
                    <p className="font-bold py-3">{createdAt.fromNow()}</p>
                  </div>
                  <div>
                    <p
                      className={
                        item.category === "expense"
                          ? "text-red-500"
                          : "text-green-500"
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
    </div>
  );
}

ExpenseAndIncome.propTypes = {
  type: PropTypes.string.isRequired,
};
