import axios from "axios";

export const postNewTeacher = async () => {
  const res = await axios.get(`/api/tutoring/create`, message);

  return res.data;
};

export const petchTeacher = async (id, contents) => {
  const res = await axios.petch(`/api/tutoring/${id}`, contents);

  return res.data;
}