import type { AxiosResponse } from "axios";
import baseService from "../base-service";

const login = async (body: any): Promise<AxiosResponse<any>> => {
  return await baseService.post<any>(`/login`, { data: body });
};

const refreshToken = async (): Promise<AxiosResponse<any>> => {
  return await baseService.post<any>(`/auth/refresh-token`, null);
};

export default {
  login,
  refreshToken,
};
