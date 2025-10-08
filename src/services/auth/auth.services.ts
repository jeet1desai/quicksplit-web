import type { AxiosResponse } from "axios";
import type { APIResponseModel } from "../api";
import baseService from "../base-service";

const login = async (body: any): Promise<AxiosResponse<APIResponseModel<any>>> => {
  return await baseService.post<APIResponseModel<any>>(`/login`, { data: body });
};

const refreshToken = async (): Promise<AxiosResponse<APIResponseModel<any>>> => {
  return await baseService.post<APIResponseModel<any>>(`/auth/refresh-token`, null);
};

export default {
  login,
  refreshToken,
};
