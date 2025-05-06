import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000", // Change this to your backend URL
});

export default axiosInstance;