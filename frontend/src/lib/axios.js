import axios from "axios";

const axiosInstance = axios.create({
	BASE_URL: import.meta.mode === "development" ? "http://localhost:5000/api" : "/api",
	// baseURL: "http://localhost:5000/api",
	baseURL: BASE_URL,
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;
