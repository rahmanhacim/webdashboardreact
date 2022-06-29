import { createUrlParam } from "@core/fetcher/helper";

export default class Fetcher {
  #id: string;
  #url: string;
  #queryParam: any;
  #data: any;
  _fetcher: any;
  #successHandler: any;
  #errorHandler: any;

  constructor() {
    this.#url = "";
    this.#queryParam = {};
    this.#data = {};
    this._fetcher = null;
    this.#successHandler = (resp) => resp;
    this.#errorHandler = (err) => err
  }

  // Getter & Setter
  setFetcher(fetcher) {
    this._fetcher = fetcher;
    return this;
  }

  setId(id) {
    this.#id = id;
    return this;
  }

  setUrl(url) {
    this.#url = url;
    return this;
  }

  setQueryParam(queryParam) {
    this.#queryParam = queryParam;
    return this;
  }

  setData(data) {
    this.#data = data;
    return this;
  }

  setSuccessHandler(successHandler) {
    this.#successHandler = successHandler;
    return this;
  }

  setErrorHandler(errorHandler) {
    this.#errorHandler = errorHandler;
    return this;
  }

  // Main Function
  async post() {
    return this._fetcher
      .post(this.#url, this.#data)
      .then((response) => this.#successHandler(response))
      .catch((err) => this.#errorHandler(err));
  }
  
  async get() {
    return this._fetcher
      .get(createUrlParam(this.#url, this.#queryParam))
      .then((response) => this.#successHandler(response))
      .catch((err) => this.#errorHandler(err));
  }

  async getById() {
    const url = `${this.#url}/${this.#id}`;
    return this._fetcher
      .get(createUrlParam(url, this.#queryParam))
      .then((response) => this.#successHandler(response))
      .catch((err) => this.#errorHandler(err));
  }

  async putById() {
    const url = `${this.#url}/${this.#id}`;
    return this._fetcher
      .put(url, this.#data)
      .then((response) => this.#successHandler(response))
      .catch((err) => this.#errorHandler(err));
  }

  async patchById() {
    const url = `${this.#url}/${this.#id}`;
    return this._fetcher
      .patch(url, this.#data)
      .then((response) => this.#successHandler(response))
      .catch((err) => this.#errorHandler(err));
  }

  async deleteById() {
    const url = `${this.#url}/${this.#id}`;
    return this._fetcher
      .delete(createUrlParam(url))
      .then((response) => this.#successHandler(response))
      .catch((err) => this.#errorHandler(err));
  }
}
