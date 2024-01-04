import axios from "axios"
import axiosInstance from "../utils/axiosInstance";

export const createAccount = async (data) => {
  const res = await axios.post(`/api/user/create`, data);

  return res.data;
}

export const sendEmail = async (email) => {
  await axios.post(`/api/mail/send`, {email});
}

export const mailCheck = async (data) => {
  const res = await axios.post(`/api/mail/mailcheck`, data);

  return res.data;
}

export const loginAccount = async (data) => {
  const res = await axios.post(`/api/auth/login`, data);
  return res.data;
}

export const logoutAccount = async () => {
  const res = axiosInstance(`/api/user`, {
    method: "DELETE",
  })

  return res;
}

export const myPageInfo = async () => {
  const res = axiosInstance(`/api/user/mypage`, {
    method: "GET",
  })

  return res;
}