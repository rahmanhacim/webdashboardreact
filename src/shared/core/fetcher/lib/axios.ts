import axios from "axios";

export default class Axios {
  #baseURL: string;
  #headers: any;
  #timeout: number;
  instance: any;

  constructor() {
    this.#headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Accept: "application/json, text/plain, */*",
    };
    this.#timeout = 5000
  }

  // Getter & Setter
  setBaseURL(baseUrl) {
    this.#baseURL = baseUrl;
  }

  setTimeout(timeout) {
    this.#timeout = timeout;
  }

  setHeaders(headers) {
    this.#headers = { ...this.#headers, ...headers };
    this.build()
  }

  // Builder
  build() {
    this.instance = axios.create({
      baseURL: this.#baseURL,
      headers: this.#headers,
      timeout: this.#timeout,
    });

    this.instance.interceptors.response.use(function (response: any) {
      if (response.data !== undefined) {
        return response.data;  
      }
      return response;
    }, function (error) {
      return Promise.reject(error);
    });
  }

  // Request Processor
  // By default support post, get, put, delete & patch aliases to comply with class Fetcher
}