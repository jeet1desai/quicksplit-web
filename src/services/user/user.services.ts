import type { AxiosResponse } from "axios";
import baseService from "../base-service";

const myDetails = async (): Promise<AxiosResponse<any>> => {
  return await baseService.get<any>(`/my-detail`);
};

const getVerificationCode = async (): Promise<AxiosResponse<any>> => {
  return await baseService.get<any>(`/users/invite`);
};

const generateVerificationCode = async (): Promise<AxiosResponse<any>> => {
  return await baseService.post<any>(`/users/invite`, {});
};

export default {
  myDetails,
  getVerificationCode,
  generateVerificationCode,
};
