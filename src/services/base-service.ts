import { API_BASE_URL } from "@/settings";
import axios, { HttpStatusCode } from "axios";
import type { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import type { Location } from "react-router-dom";
import type { IApiErrorResponse } from "./api";
import { logoutThunk } from "@/store/thunks/authThunks";
import store from "@/store";
import authServices from "./auth/auth.services";

const api: AxiosInstance = axios.create({
  baseURL: `${API_BASE_URL}/api/v1`,
  withCredentials: true,
});

let _navigate: ((path: string, opts?: any) => void) | null = null;
let _dispatch: ((action: any) => void) | null = null;
let _location: Location<any> | null = null;
let _notify: ((params: { title: string; description: string }) => void) | null = null;

export function bindApiDeps(params: { navigate: (path: string, opts?: any) => void; dispatch: (action: any) => void; location: Location<any> }) {
  _navigate = params.navigate;
  _dispatch = params.dispatch;
  _location = params.location;
}

export function setApiNotifier(fn: (params: { title: string; description: string }) => void) {
  _notify = fn;
}

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError<IApiErrorResponse>) => {
    const originalRequest = error.config as
      | (InternalAxiosRequestConfig & {
          _retry?: boolean;
          _skipRefresh?: boolean;
        })
      | undefined;

    if (error.response) {
      const { status, data } = error.response;

      const requestUrl = (originalRequest?.url || "").toString();
      const isAuthEndpoint = /\/auth\/(login|logout|refresh-token)/.test(requestUrl);

      if (status === HttpStatusCode.Unauthorized && originalRequest && !originalRequest._retry && !isAuthEndpoint) {
        originalRequest._retry = true;

        const userState = store.getState().user;
        const shouldAttemptRefresh = userState?.rememberMe === true;

        if (shouldAttemptRefresh) {
          try {
            const response = await handleRefreshToken();
            if (response) {
              return api(originalRequest);
            }
          } catch (refreshErr) {
            console.warn("Refresh token failed:", refreshErr);
          }
        } else {
          console.warn("Remember me not enabled, skipping refresh token attempt");
        }
      }

      switch (status) {
        case HttpStatusCode.Unauthorized:
          console.error("Unauthorized: Please log in", data);
          // _notify?.({
          //   title: data?.error.title || "Token Expired",
          //   description: getErrorDescription(data?.error.description) || "Please log in again.",
          // });

          const currentPath = _location?.pathname || "/";
          const redirectState = { from: currentPath };

          if (_dispatch) {
            try {
              _dispatch(logoutThunk());
              localStorage.clear();
            } catch (err) {
              console.error("Error clearing user:", err);
            }
          }

          if (_navigate) {
            try {
              if (!isAuthEndpoint) {
                _navigate("/login", { state: redirectState, replace: true });
              }
            } catch (err) {
              console.error("Navigation error:", err);
              _navigate("/login", { state: redirectState, replace: true });
            }
          } else {
            window.location.href = "/login";
          }
          break;

        case HttpStatusCode.MethodNotAllowed:
          // _notify?.({
          //   title: data?.error.title || "Method Not Allowed",
          //   description:
          //     getErrorDescription(data?.error.description) ||
          //     "The requested method is not allowed for this resource. Please check the request method.",
          // });
          break;

        case HttpStatusCode.BadRequest:
          console.error("Bad Request:", data);
          break;

        case HttpStatusCode.Forbidden:
          console.error("Forbidden: You do not have permission to access this resource");
          break;
        case HttpStatusCode.BadRequest:
          console.error("Bad Request:");
          break;

        case HttpStatusCode.NotFound:
          console.error("Not Found:", data);
          break;

        case HttpStatusCode.InternalServerError:
          console.error("Server Error:", data);
          break;

        case HttpStatusCode.UnprocessableEntity:
          console.error("Unprocessable Entity:", data);
          break;

        default:
          console.error(`HTTP Error ${status}:`, data);
      }
    } else if (error.request) {
      console.error("No response received (possible CORS or network error):", error);
      _notify?.({
        title: error.message,
        description: "Request failed due to a network or CORS issue. Please check your connection and server CORS settings.",
      });
    } else {
      console.error("Request Error:", error.message);
    }

    return Promise.reject(error);
  }
);

let isRefreshing = false;
let refreshQueue: Array<{
  resolve: (v: AxiosResponse | null) => void;
  reject: (e: any) => void;
}> = [];

function enqueueRefresh(): Promise<AxiosResponse | null> {
  return new Promise((resolve, reject) => {
    refreshQueue.push({ resolve, reject });
  });
}

function resolveRefreshQueue(result: AxiosResponse | null) {
  refreshQueue.forEach((p) => p.resolve(result));
  refreshQueue = [];
}

function rejectRefreshQueue(err: any) {
  refreshQueue.forEach((p) => p.reject(err));
  refreshQueue = [];
}

async function handleRefreshToken(): Promise<AxiosResponse | null> {
  if (isRefreshing) {
    return enqueueRefresh();
  }

  isRefreshing = true;
  try {
    const resp = await authServices.refreshToken();
    resolveRefreshQueue(resp);
    return resp;
  } catch (err) {
    rejectRefreshQueue(err);
    return null;
  } finally {
    isRefreshing = false;
  }
}

export default api;
