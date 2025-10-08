import type { AxiosResponse } from "axios";
import baseService from "../base-service";

const signIn = async (body: any): Promise<AxiosResponse<any>> => {
  return await baseService.post<any>(`/signin`, body);
};

const signUp = async (body: any): Promise<AxiosResponse<any>> => {
  return await baseService.post<any>(`/signup`, body);
};

const refreshToken = async (): Promise<AxiosResponse<any>> => {
  return await baseService.post<any>(`/refresh-token`, null);
};

const signOut = async (): Promise<AxiosResponse<any>> => {
  return await baseService.delete<any>(`/signout`);
};

export default {
  signIn,
  signUp,
  refreshToken,
  signOut,
};
