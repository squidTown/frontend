import axios from "axios"

export const getReviewList = async (id) => {
  const res = await axios.get(`/api/review/findall/${id}`);

  return res.data;
}

export const getReview = async (id) => {
  const res = await axios.get(`/api/review/${id}`);

  return res.data;
}