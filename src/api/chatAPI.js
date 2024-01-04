import axios from "axios";

export const getNewMessage = async (id) => {
  const res = await axios.get(`api/chat/newMessageFind/${id}`);

  return res.data;
};

export const getMessage = async (id) => {
  const res = await axios.get(`api/chat/messageFindAll/${id}`);

  return res.data;
};

export const getRoomList = async () => {
  const res = await axios.get(`api/chat/roomFindAll`);

  return res.data;
};

export const postMessage = async (message) => {
  const res = await axios.post(`api/chat/send`, message);
  yy;
  return res.data;
};

export const postAddRoom = async (id) => {
  const res = await axios.post(`api/chat/create`, id);
};
