import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.API_END_POINT,
});

export const fetchMovieList = async (query, page = 1) => {
  const response = await axiosInstance.get("/", {
    params: {
      apikey: process.env.API_KEY,
      s: query,
      page,
    },
  });
  if (response.status === 200) {
    return response.data;
  }
};

export const fetchMovieDetail = async (id) => {
  const response = await axiosInstance.get("/", {
    params: {
      apikey: process.env.API_KEY,
      i: id,
      plot: "full",
    },
  });
  if (response.status === 200) {
    return response.data;
  }
};
