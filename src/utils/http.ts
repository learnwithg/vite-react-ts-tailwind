import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export type HttpError = AxiosError;

const removedUndefinedProperty = <T extends object>(obj: T) => {
  for (const key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) {
      const IS_NOTHING =
        (obj && obj[key] === undefined) ||
        obj[key] === null ||
        String(obj[key])?.length === 0 ||
        String(obj[key]) === "Invalid Date";

      if (IS_NOTHING) {
        delete obj[key];
      }
    }
  }
};

interface AxiosReqConfig extends AxiosRequestConfig {
  token?: string;
}

export const makeRequest = async <T>(
  config: AxiosReqConfig
): Promise<AxiosResponse<T>> => {
  if (config?.token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${config.token}`;
  }

  const httpRequest = await axios.request({
    ...config,
  });

  return httpRequest;
};

axios.interceptors.request.use(
  (request) => {
    removedUndefinedProperty(request.params);

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    console.log(error);

    let message = error.message;

    if (Array.isArray(message)) {
      message = message[0];
    }

    if (!message) {
      message = "Internal Server Error";
    }

    return Promise.reject(message);
  }
);
