import type { AxiosResponse } from "axios";
import baseService from "../base-service";

const myDetails = async (): Promise<AxiosResponse<any>> => {
  return await baseService.get<any>(`/my-detail`);
};

export default {
  myDetails,
};
