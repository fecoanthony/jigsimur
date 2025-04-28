import axios from "axios";

const axiosInstance = axios.create({
	// baseURL: import.meta.mode === "development" ? "http://localhost:5000/api" : "/api",
	// baseURL: "http://localhost:5000/api",
	baseURL: "https://jigsimur1.onrender.com/api",
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;
