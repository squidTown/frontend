import axios from "axios";
import axiosInstance from "../utils/axiosInstance";

export const getAcademyListAll = async () => {
  const res = await axios.get(`/api/academy/findall`);

  return res.data;
};

export const getAcademy = async (id) => {
  const res = await axios.get(`/api/academy/${id}`);

  return res.data;
};

export const postAcademyImg = async (param, data) => {
  const res = await axios.post(`/api/academy/uploads/${param}`, data);

  return res.data;
};

export const postAcademy = async (data) => {
  console.log(data)
  const res = await axiosInstance(`/api/academy/create`, {
    method: "POST",
    data: data,
  });

  return res.data;
};

export const modifyAcademy = async (param, data) => {
  const res = await axios.patch(`/api/academy/${param}`, data);

  return res.data;
};

export const deleteAcademy = async (id) => {
  const res = await axios.delete(`/api/academy/${id}`);

  return res.data;
};
