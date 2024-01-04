import axios from "axios"
import axiosInstance from "../utils/axiosInstance";

export const getReviewList = async (id) => {
  const res = await axios.get(`/api/review/findall/${id}`);

  return res.data;
}

export const getReview = async (id) => {
  const res = await axios.get(`/api/review/${id}`);

  return res.data;
}

export const postReview = async (data) => {
  const res = axiosInstance(`/api/review/create`, {
    method: "POST",
    data: data,
  });

  return res.data;
}