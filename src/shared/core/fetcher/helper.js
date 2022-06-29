import Axios from "@core/fetcher/lib/axios";
import Fetch from "@core/fetcher/lib/fetch";
import { errorHandler } from "@core/error";

export const createAxios = (baseURL, auth) => {
  const axios = new Axios();
  axios.setBaseURL(baseURL);
  axios.setHeaders({
    Authorization: auth,
  });
  axios.build();

  return axios;
};

export const createFetch = (baseURL, auth) => {
  const fetch = new Fetch();
  fetch.setBaseURL(baseURL);
  fetch.setHeaders({
    Authorization: auth,
  });

  return fetch;
};

export const clientSuccessHandler = (response) => {
  if (response instanceof Error || response.status !== "00") {
    errorHandler(response);
  }

  return response;
};

export const clientErrorHandler = (error) => {
  errorHandler({
    status: error.status,
    message: error.message || error.statusText,
  });
};

export const createUrlParam = (url = "", obj) => {
  if (obj) {
    const encode = (obj, nesting = "") => {
      const pairs = Object.entries(obj).map(([key, value]) => {
        if (typeof value === "object") {
          return encode(value, `${nesting}${encodeURIComponent(key)}=`);
        }
        return [
          nesting + encodeURIComponent(key),
          encodeURIComponent(value),
        ].join("=");
      });

      return pairs.join("&");
    };

    const query = encode(obj);
    return `${url}?${query}`;
  }

  return url;
};

export const errorTransformer = (error) => {
  const err = error.toJSON();
  if (err.message === "Request failed with status code 502") {
    return {
      status: "502",
      message: "bad gateway",
    };
  }

  return err;
};

export const successTransformer = (response) => {
  if (response.status === "200") {
    return {
      status: "502",
      message: "bad gateway",
    };
  }

  return response;
};
