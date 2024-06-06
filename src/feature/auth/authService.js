import { axiosInstance } from "../../Config/AxiosConfig";

const userLogin = async (data) => {
  const response = await axiosInstance.post("/api/user/login", data);
  const token = {
    data: response.data.data,
    expiry: new Date().getTime() + 1 * 1000 * 60 * 60 * 6,
  };
  localStorage.setItem("token", JSON.stringify(token));
  return response;
};

const userRegistration = async (data) => {
  const response = await axiosInstance.post("/api/user/register", data);
  const token = {
    data: response.data.data,
    expiry: new Date().getTime() + 1 * 1000 * 60 * 60 * 6,
  };
  localStorage.setItem("token", JSON.stringify(token));
  return response;
};

const getUserProfile = async () => {
  const response = await axiosInstance.get("/api/user/get-user");
  return response;
};

const logout = async () => {
  const response = await axiosInstance.post("/api/user/logout");
  return response;
};

const authService = {
  userLogin,
  userRegistration,
  getUserProfile,
  logout,
};

export default authService;
