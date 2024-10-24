import { api } from "@/services";
import { authTypes } from "@/types";

export const login = async (
  payload: authTypes.LoginPayload
): Promise<authTypes.User> => {
  const { data } = await api.post("/auth/login", payload);
  return data;
};

export const logout = async (): Promise<void> => {
  await api.post("/auth/logout");
};
