import api from "./api";

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  const res = await api.post("/auth/register", data);
  return res.data;
};



export const loginUser = async (email: string, password: string) => {
  const res = await api.post("/auth/login", { email, password });
  return res.data;
};


