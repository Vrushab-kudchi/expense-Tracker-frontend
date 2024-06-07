import moment from "moment";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTransaction,
  getAllTransaction,
  removeTransaction,
  transactionInfo,
} from "../../feature/transactions/transactionSlice";
import { useForm } from "react-hook-form";
import Loading from "../Loading";

export default function ExpenseAndIncome({ type }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transaction.transactions);
  const isLoading = useSelector((state) => state.transaction.isLoading);

  useEffect(() => {
    if (transactions === null) {
      dispatch(getAllTransaction());
    }
  }, [transactions]);

  const onSubmit = (data) => {
    const parseData = { ...data, money: parseInt(data.money, 10) };
    if (type === "expense") {
      dispatch(removeTransaction(parseData));
    } else {
      dispatch(addTransaction(parseData));
    }
    setTimeout(() => {
      dispatch(getAllTransaction());
      dispatch(transactionInfo());
    }, 1000);
    reset(); // Clear the form after submission
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className="md:grid grid-cols-2 md:gap-x-14">
        <div className="md:col-span-1">
          <h1 className="p-5 mb-5 text-4xl">Add your {type}</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-8 flex-grow"
          >
            <input
              type="text"
              placeholder="Name"
              className="input bg-[var(--color-primary)] py-3"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500 text-lg px-4 font-bold -mt-6">
                Name is required
              </span>
            )}
            <textarea
              type="text"
              placeholder="Description"
              className="text-area bg-[var(--color-primary)] overflow-y-auto"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className="text-red-500 text-lg px-4 font-bold -mt-6">
                Description is required
              </span>
            )}
            <input
              type="text"
              placeholder="Money"
              className="input bg-[var(--color-primary)] py-3"
              {...register("money", { required: true })}
            />
            {errors.money && (
              <span className="text-red-500 text-lg px-4 font-bold -mt-6">
                Money is required
              </span>
            )}
            <button type="submit" className="button w-[40%] mt-6">
              Add {type}
            </button>
          </form>
        </div>
        <div className="md:col-span-1">
          <h1 className="p-4 text-4xl">{type}</h1>
          <ul className="overflow-y-auto h-[77vh] ">
            {transactions?.data
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
                        {item.category === "expense" ? "-" : "+"}
                        {item.money}
                      </p>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
}

ExpenseAndIncome.propTypes = {
  type: PropTypes.string.isRequired,
};
