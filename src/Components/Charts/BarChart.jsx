import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { monthsTransaction } from "../../feature/transactions/transactionSlice";

export default function MyBarChart() {
  const dispatch = useDispatch();
  const monthData = useSelector((state) => state.transaction.monthsTransaction);

  useEffect(() => {
    if (monthData === null) {
      dispatch(monthsTransaction());
    }
  }, [monthData, dispatch]);

  const monthTotals = {};
  if (monthData && monthData.data) {
    for (const month in monthData.data) {
      const income = monthData?.data[month]
        .filter((data) => data.category === "income")
        .reduce((cur, nex) => cur + nex.money, 0);
      const expense = monthData?.data[month]
        .filter((data) => data.category === "expense")
        .reduce((cur, nex) => cur + nex.money, 0);
      monthTotals[month] = { month, income, expense };
    }
  }

  // Convert monthTotals object to an array of objects
  const data = Object.values(monthTotals);

  return (
    <BarChart
      width={800}
      height={600}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="income" stackId="a" fill="#8884d8" />
      <Bar dataKey="expense" stackId="a" fill="#82ca9d" />
    </BarChart>
  );
}
