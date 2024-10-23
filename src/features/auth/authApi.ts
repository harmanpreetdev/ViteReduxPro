import api from "../../services/api";
import { LoginPayload, User } from "./authTypes";

export const login = async (payload: LoginPayload): Promise<User> => {
  const { data } = await api.post("/auth/login", payload);
  return data;
};

export const logout = async (): Promise<void> => {
  await api.post("/auth/logout");
};
