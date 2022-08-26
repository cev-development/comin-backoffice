import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

class HttpClient {
  api: AxiosInstance;
  constructor() {
    this.api = axios.create({
      baseURL: `https://comin-bff.herokuapp.com`,
      timeout: 30000,
      timeoutErrorMessage: "Tempo limite da requisição excedido.",
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.initInterceptors();
  }

  initInterceptors() {
    this.api.interceptors.request.use(async (config: AxiosRequestConfig) => {
      const client_id = localStorage.getItem("comin@client_id") || "";
      config.headers = { client_id };
      return config;
    });

    this.api.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError) => {
        if (error.response?.status === 412) {
          localStorage.clear();
          window.location.href = `${window.location.origin}`;
        }
        return {
          ...error,
          status: error.response?.status,
          data: error.response?.data,
        };
      }
    );
  }
}

export const { api } = new HttpClient();
