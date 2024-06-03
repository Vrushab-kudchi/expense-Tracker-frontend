import { axiosInstance } from "../../Config/AxiosConfig";

const getAllTransaction = async () => {
  const response = await axiosInstance.get("/api/transaction/get");
  return response;
};

const addTransaction = async (data) => {
  const response = await axiosInstance.post("api/transaction/add", data);
  return response;
};

const removeTransaction = async (data) => {
  const response = await axiosInstance.post("api/transaction/remove", data);
  return response;
};

const monthTransaction = async () => {
  const response = await axiosInstance.get("api/transaction/info-months");
  return response;
};

const transactionInfo = async () => {
  const response = await axiosInstance.get("/api/transaction/info");
  return response;
};

const transactionService = {
  getAllTransaction,
  addTransaction,
  removeTransaction,
  monthTransaction,
  transactionInfo,
};

export default transactionService;
