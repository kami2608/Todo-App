import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "",
  allowAbsoluteUrls: false,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    console.log("Error: ", error);
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("Error: ", error);
    return Promise.reject(error);
  },
);
