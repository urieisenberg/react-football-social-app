import axios from "axios";

const API_URL = process.env.REACT_APP_FOOTBALL_API_URL;
const API_HOST = process.env.REACT_APP_FOOTBALL_API_HOST;
const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;

const axiosConfig = axios.create({
  method: "GET",
  baseURL: API_URL,
  headers: {
    "x-rapidapi-host": API_HOST,
    "x-rapidapi-key": API_KEY,
  },
  accessControlAllowOrigin: "*",
  accessControlAllowHeaders: "*",
});

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: API_URL }) =>
  async ({ url }) => {
    try {
      const response = await axiosConfig.request(url);
      return { data: response.data.response };
    } catch (error) {
      return {
        error: {
          data: error.response.data || error.message,
          status: error.response?.status,
        },
      };
    }
  };

export default axiosBaseQuery;
