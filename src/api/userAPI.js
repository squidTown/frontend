import axios from "axios"

export const createAccount = async (data) => {
  const res = await axios.post(`/api/user/create`, data);

  return res.data;
}

export const sendEmail = async (email) => {
  const res = await axios.post(`/api/mail/send`, email);
  
  return res.data;
}

export const loginAccount = async (data) => {
  const res = await axios.post(`/api/auth/login`, data);

  return res.data;
}
